import Head from 'next/head';
import Script from 'next/script';


function LoginIntempt() {

 

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

           const intempttbtn = document.querySelector("[type='submit']");
            intempttbtn.addEventListener("click", () => {
              let email = document.querySelector("input[name='email']").value.toString();
             

              intempt.recordEvent('login', {
                email: email,
              });

          
            }, false);}
          `
        }}
       />


</>
  )}
  

export default LoginIntempt;


