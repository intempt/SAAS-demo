import React from 'react';
import { SignUp } from '../../screens/Auth';
import Script from 'next/script';
import Head from 'next/head';
import Layout from '../../components/Auth/Layout';

const SignUpPage = () => {
  return (
    <>
    
    <SignUp />
    </>
  );
};



SignUpPage.Layout = Layout;

export default SignUpPage;
