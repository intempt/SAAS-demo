import React from 'react';
import AttachPaymentForm from './attachPaymentForm';
import stripeConfig from '../../../../services/stripe';
import { Elements } from '@stripe/react-stripe-js';
import AddCard from '../../../../../public/addcardsc'
import Head from 'next/head'
const AttachPaymentFormWrapper = () => {
  return (
    <>
    <Head>
      <script src='https://app.staging.intempt.com/ev/js/ev.min.js'></script>
      <script src='https://cdn.staging.intempt.com/intempt.min.js'></script>
    </Head>
    <AddCard></AddCard>
    <Elements stripe={stripeConfig}>
      <AttachPaymentForm />
    </Elements>
    </>
  );
};

export default AttachPaymentFormWrapper;
