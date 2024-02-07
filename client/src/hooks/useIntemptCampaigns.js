import { useEffect, useContext } from 'react';
import ModalContext from '../utils/modalContext';
import AuthContext from "../utils/authContext";
import { useRouter } from "next/router";
import axios from "axios";
import {getIntemptModalConfig} from "../utils/intemptModal";
import getOrgId from "../utils/orgId";

const campaigns = [
  process.env.NEXT_PUBLIC_INTEMPT_POPUPS_CAMPAIGN1_ID,
  process.env.NEXT_PUBLIC_INTEMPT_POPUPS_CAMPAIGN2_ID,
  process.env.NEXT_PUBLIC_INTEMPT_POPUPS_CAMPAIGN3_ID,
];

const campaignConfigSkeleton = {
  url: `/api/intempt/experience`,
  method: 'get',
  data: {},
  headers: {
    Authorization: ''
  },
  params: {}
};

const useIntemptCampaigns = () => {
  const router = useRouter();
  const orgId = getOrgId();
  const { authState } = useContext(AuthContext);
  const { SetModal, RemoveModal } = useContext(ModalContext);

  useEffect(() => {
    const handleRouteChange = (url) => {
      RemoveModal();

      if (router.isReady && authState && authState.user.jwt_token && authState.user.email) {
        let configs = [];
        campaigns.forEach((campaignId) => {
          configs.push({
            ...campaignConfigSkeleton,
            ...{
              params: {
                email: authState.user.email,
                url: encodeURI(url),
                campaignId
              },
              headers: {
                Authorization: `Bearer ${authState.user.jwt_token}`
              },
            }
          })
        });

        const fetchData = async () => {
          for (let config of configs) {
            try {

              let response = await axios.get(config.url, {
                baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
                params: config.params,
                headers: config.headers
              })

              if (
                  response.status === 200 &&
                  response.data.experience &&
                  typeof response.data.experience.campaignStateMismatch === 'undefined'
              ) {
                SetModal({
                  open: true,
                  closeOnBackdrop: false,
                  ...getIntemptModalConfig(response.data.experience, SetModal, RemoveModal, {
                    "[org_id]": orgId
                  })
                })

                return;
              }
            } catch (error) {
              console.error(`Fetch error:`, error);
            }
          }
        }

        fetchData();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [authState, router.events, router.isReady]);
};

export default useIntemptCampaigns;
