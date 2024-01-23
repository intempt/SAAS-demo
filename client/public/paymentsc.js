import Head from 'next/head';
import Script from 'next/script';


function PaymentIntempt() {

 

  return (
    <>
    <Head>
      <script src='https://app.staging.intempt.com/ev/js/ev.min.js'></script>
      <script src='https://cdn.staging.intempt.com/intempt.min.js'></script>
      
    </Head>
  
    <Script
        dangerouslySetInnerHTML={{
          __html: `
            
            window.onload = function() {
            alert("script works");
            console.log("Hello");
            intempt.configure(
              "saas-demo",
              "saas-demo",
              "487687402531205120",
              "f99bdf665075473e885af36ce79805fc.a07d90a6673e4bc18298488d7a7c7a5c"
            );

           const paymentintempt = document.querySelector("div[class='checkoutForm__PaymentConfirm-sc-jgwy44-1 eJrHbO'] button[class='PrimaryButton-sc-60hihd-0 gViCWm']");
           paymentintempt.addEventListener("click", () => {
              let subscribe = document.querySelector("div[class='checkoutForm__PaymentConfirm-sc-jgwy44-1 eJrHbO'] button[class='PrimaryButton-sc-60hihd-0 gViCWm']").textContent.toString();
             

              intempt.recordEvent('subscription', {
                subscribed: subscribed,
              });

          
            }, false);}
          `
        }}
       />


</>
  )}
  

export default PaymentIntempt;


