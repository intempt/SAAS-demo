import Head from 'next/head';
import Script from 'next/script';


function CreateObjectIntempt() {

 

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

           const createintempt = document.querySelector("div.AppLayout__Wrapper-sc-spxgum-0.eNyDzs div.AppLayout__Content-sc-spxgum-1.jkHLmp main.AppLayout__Main-sc-spxgum-2.kdkYHL:nth-child(2) div.AppLayout__ContentWrapper-sc-spxgum-3.dtpFfc div.Card__StyledCard-sc-1q3fkcq-0.gwvywY div.ant-spin-nested-loading div.ant-spin-container div.Create__ButtonWrapper-sc-o9h5dr-3.fcJACi > button.SecondaryButton-sc-upx9un-0.ivtFPX");
           createintempt.addEventListener("click", () => {
              let title = document.querySelector("input[name='title']").value.toString();
              let description = document.querySelector("textarea[name='description']").value.toString();
             

              intempt.recordEvent('createobject', {
  
                description:description
              });

          
            }, false);}
          `
        }}
       />


</>
  )}
  

export default CreateObjectIntempt;
