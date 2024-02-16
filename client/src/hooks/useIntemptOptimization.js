import { useEffect, useContext } from 'react';
import ModalContext from '../utils/modalContext';
import AuthContext from "../utils/authContext";
import { useRouter } from "next/router";
import axios from "axios";
import {getIntemptModalConfig} from "../utils/intemptModal";
import getOrgId from "../utils/orgId";
import {intemptEventViewedPopup} from "../services/intempt";

const configSkeleton = {
  url: `/api/intempt/optimization`,
  method: 'get',
  data: {},
  headers: {
    Authorization: ''
  },
  params: {}
};

const useIntemptOptimization = () => {
  const router = useRouter();
  const orgId = getOrgId();
  const { authState } = useContext(AuthContext);
  const { SetModal, RemoveModal } = useContext(ModalContext);

  useEffect(() => {
    const handleRouteChange = (url) => {
      RemoveModal();

      if (router.isReady && authState && authState.user.jwt_token && authState.user.email) {
        let config = {
          ...configSkeleton,
          ...{
            params: {
              url: encodeURI(url),
              email: authState.user.email
            },
            headers: {
              Authorization: `Bearer ${authState.user.jwt_token}`
            },
          }
        }

        const fetchData = async () => {
          try {
            let response = await axios.get(config.url, {
              baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
              params: config.params,
              headers: config.headers
            })

            if (response.status === 200 && response.data.rows) {
              for (let row in response.data.rows) {

                if (response.data.rows[row].group === 'pop-up') {
                  const body = response.data.rows[row].body;

                  if (body.eventTitle !== 'undefined') {
                    intemptEventViewedPopup(body.eventTitle);
                  }

                  SetModal({
                    open: true,
                    closeOnBackdrop: false,
                    ...getIntemptModalConfig(body, SetModal, RemoveModal, {
                      "[org_id]": orgId
                    })
                  })
                }
              }
            }
          } catch (error) {
            console.error(`Fetch error:`, error);
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

export default useIntemptOptimization;
