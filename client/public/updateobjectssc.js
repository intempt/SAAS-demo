import Head from 'next/head';
import Script from 'next/script';


function UpdateObjectIntempt() {

 

  return (
    <>
    <Head>
      <script src='https://app.staging.intempt.com/ev/js/ev.min.js'></script>
      <script src='https://cdn.staging.intempt.com/intempt.min.js'></script>
      
    </Head>
  
    <Script
        dangerouslySetInnerHTML={{
          __html: `

          document.addEventListener('DOMContentLoaded', function () {
            alert('script works');
            console.log('Hello');
           
          
            intempt.configure(
              'saas-demo',
              'saas-demo',
              '487687402531205120',
              'f99bdf665075473e885af36ce79805fc.a07d90a6673e4bc18298488d7a7c7a5c'
            );

            
       
              const intempttbtn = document.querySelector(
                '.SecondaryButton-sc-upx9un-0.ivtFPX'
              );
              intempttbtn.addEventListener(
                'click',
                () => {
                  let objupdate = document
                    .querySelector('.SecondaryButton-sc-upx9un-0.ivtFPX')
                    .getAttribute('class')
                    .toString();
          
                  intempt.recordEvent('updateobject', {
                    objupdate: objupdate,
                  });
                },
                false
              );
            });
          
          
        `
        }}
       />


</>
  )}
  

export default UpdateObjectIntempt;
