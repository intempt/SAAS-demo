import React, { useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import 'antd/dist/antd.css';

import AuthContext from '../utils/authContext';
import { authReducer, initialStateAuth } from '../store/reducers/authReducer';
import { Login, Logout } from '../store/actions/actions';

import OrgContext from '../utils/orgContext';
import { orgReducer, initialStateOrg } from '../store/reducers/orgReducer';
import { Remove_Org, Set_Org } from '../store/actions/actions';

import ModalContext from '../utils/modalContext';
import { modalReducer, initialStateModal } from '../store/reducers/modalReducer';
import { Set_Modal, Remove_Modal } from '../store/actions/actions';

import ApiContext from '../utils/apiContext';
import { apiReducer, initialStateApi } from '../store/reducers/apiReducer';
import { Fetch_failure, Fetch_init, Fetch_success } from '../store/actions/actions';

import CaslContext from '../utils/caslContext';
import { ability } from '../utils/caslAbility';

import { firebaseApp as firebase } from '../services/firebase';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { pageView } from '../services/analytics';

import { silentAuth } from '../utils/helpers';
import ModalComponent from "@components/Modal/ModalComponent";
import Head from "next/head";
import {IntemptScriptsLoader} from "../services/intempt";

const NoLayout = ({ children }) => children;

function MyApp(props) {
  const [authState, dispatchAuth] = useReducer(authReducer, initialStateAuth);
  const [apiState, dispatchApi] = useReducer(apiReducer, initialStateApi);
  const [orgState, dispatchOrg] = useReducer(orgReducer, initialStateOrg);
  const [modalState, dispatchModal] = useReducer(modalReducer, initialStateModal);

  const router = useRouter();

  /* eslint-disable */
  useEffect(() => {
    silentAuth(LogIn, LogOut);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      const popStateEvent = new PopStateEvent('popstate', { state: url });
      window.dispatchEvent(popStateEvent);
      pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  /* eslint-enable */

  const { Component, pageProps } = props;

  const Layout = Component.Layout || NoLayout;

  const LogIn = (user) => {
    dispatchAuth(Login(user));
  };

  const LogOut = () => {
    dispatchAuth(Logout);
    dispatchOrg(Remove_Org);
    firebase.auth().signOut();
  };

  const fetchFailure = (error) => {
    dispatchApi(Fetch_failure(error));
    throw new Error('Error Detected, code execution stopped');
  };

  const fetchInit = () => {
    dispatchApi(Fetch_init);
  };

  const fetchSuccess = () => {
    dispatchApi(Fetch_success);
  };

  const SetOrg = (payload) => {
    dispatchOrg(Set_Org(payload));
  };

  const SetModal = (payload) => {
    dispatchModal(Set_Modal(payload));
  };

  const RemoveModal = () => {
    dispatchModal(Remove_Modal);
  };

  return (
      <>
        <Head>
            <IntemptScriptsLoader />
        </Head>

        <AuthContext.Provider value={{ authState, LogIn, LogOut, firebase }}>
          <ApiContext.Provider value={{ apiState, fetchFailure, fetchInit, fetchSuccess }}>
            <OrgContext.Provider value={{SetOrg, orgState}}>
              <ModalContext.Provider value={{SetModal, modalState, RemoveModal}}>
                <CaslContext.Provider value={ability}>
                  <ModalComponent />
                  <ThemeProvider theme={theme}>
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  </ThemeProvider>
                </CaslContext.Provider>
              </ModalContext.Provider>
            </OrgContext.Provider>
          </ApiContext.Provider>
        </AuthContext.Provider>
      </>
  );
}

export default MyApp;
