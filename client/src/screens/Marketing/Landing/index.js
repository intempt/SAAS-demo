import React, {useContext, useEffect} from 'react';
import LandingFeature from './landingFeatures';
import HeroSection from './heroSection';
import CTASection from './ctaSection';
import TripleColFeatures from './tripleColFeatures';
import Testimonial from './testimonial';
import ModalContext from "../../../utils/modalContext";

export default function Index() {

  // TODO: Example of usage - remove this
  const {SetModal, RemoveModal} = useContext(ModalContext);

  const modalConfig = {
    modal_1: {
      title: 'Seems Otto’s Free plan is getting tight for you',
      body: [
        {type: 'svg', width: 160, height: 160, html: `<svg focusable="false" aria-hidden="true" fill="green" viewBox="0 0 24 24"><path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path></svg>`},
        {type: 'text', variant: 'big', text: 'Well done - your project is fully configured! \n' +
            'Do you know what value you’d get \n' +
            'from our Basic plan?'},

        {type: 'text', variant: 'small', text: 'Get more from OTTO using our PRO features.'}
      ],
      footer: [
        {
          type: 'buttons', buttons: [
            {type: 'button', variant: 'primary', url: '#', text: 'Upgrade to basic'},
            {type: 'button', variant: 'outlined', action: () => {RemoveModal()}, text: 'No, thanks'},
          ]
        }
      ]
    },
    modal_2: {
      title: 'Ready for Premium?',
      body: [
        {type: 'text', variant: 'big', text: 'Wow! You’re Growth Pro now!'},
        {type: 'text', variant: 'small', text: 'You have become a PRO user - ready to\n explore possibilities of getting more of\n OTTO?'}
      ],
      footer: [
        {
          type: 'buttons', buttons: [
            {type: 'button', variant: 'primary', url: '#', text: 'Upgrade to basic'},
            {type: 'button', variant: 'outlined', action: () => {RemoveModal()}, text: 'No, thanks'},
          ]
        }
      ]
    },
    modal_3: {
      title: 'Need help?',
      body: [
        {type: 'text', variant: 'big', text: 'Our support team is here to help you with your use cases'},
        {type: 'text', variant: 'small', text: 'No sales talk, just support - we promise.'}
      ],
      footer: [
        {
          type: 'buttons', buttons: [
            {type: 'button', variant: 'primary', url: '#', text: 'Book a meeting'},
          ]
        }
      ]
    },
     modal_4: {
      title: 'Need help?',
      body: [
        {type: 'text', variant: 'big', text: 'Success!\nYou booked a meeting with us.'},
        {type: 'text', variant: 'small', text: 'We’ll see you soon - invitation is sent to your \nemail address.'}
      ],
      footer: [
        {
          type: 'buttons', buttons: [
            {type: 'button', variant: 'primary', url: '#', text: 'Continue'},
          ]
        }
      ]
    },
    modal_5: {
      title: '🌟 Welcome Back Special! 🌟',
      body: [
        {type: 'text', variant: 'big', text: 'Hey {first_name_}! We\'ve missed you at Otto! \n' +
            'To welcome you back, we\'re offering an exclusive 30% discount on your monthly subscription.'},
        {type: 'text', variant: 'small', text: 'Reignite your journey with us and make the \nmost of this limited-time offer.'}
      ],
      footer: [
        {
          type: 'buttons', buttons: [
            {type: 'button', variant: 'primary', url: '#', text: 'Claim the offer'},
          ]
        }
      ]
    },
    modal_6: {
      title: '🌟 Welcome Back Special! 🌟',
      body: [
        {type: 'text', variant: 'big', text: 'Success!\nThe discount is applied to your subscription'},
        {type: 'text', variant: 'small', text: 'Your next month subscription will have a 30% \ndiscount applied'}
      ],
      footer: [
        {
          type: 'buttons', buttons: [
            {type: 'button', variant: 'primary', url: '#', text: 'Continue'},
          ]
        }
      ]
    },
    modal_7: {
      title: '🌟 Get Back on Track! 🌟',
      body: [
        {type: 'text', variant: 'big', text: 'Hello {first_name_}! Jump back into Otto and streamline your project management today!'},
      ],
      footer: [
        {
          type: 'text', variant: 'small', text: '🔹 Quick Task Creation - Organize your work effortlessly.\n' +
            '🔹 Stay on Top of Projects - Manage deadlines and priorities.'
        },
        {
          type: 'buttons', buttons: [
            {type: 'button', variant: 'primary', url: '#', text: 'Create task'},
          ]
        }
      ]
    },
  }

  useEffect(() => {
    setTimeout(() => {
      SetModal({
        open: true,
        closeOnBackdrop: false,
        ...modalConfig.modal_1
      })
    }, 1000)
  }, [])
  // TODO: end

  return (
    <React.Fragment>
      <HeroSection />
      <TripleColFeatures />
      <Testimonial />
      <LandingFeature />
      <CTASection />
    </React.Fragment>
  );
}
