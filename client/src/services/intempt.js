import React from "react";

const recordEvent = (eventName, eventBody) => {
  window.intempt.record({
    eventTitle: eventName,
    ...eventBody
  })
}

export const intemptEventSignUp = (full_name, email) => {

  recordEvent('Sign Up', {
    userId: email,
    userAttributes: {
        full_name,
        email
    },
    data:{
      timestamp: new Date().getTime()
    }
  })
}

export const intemptEventLogin = (email) => {
  window.intempt.identify({userId: email});


  recordEvent('Login', {
    userId: email,
    userAttributes: {
      email
    },
    data:{
      timestamp: new Date().getTime()
    }
  })
}

export const intemptEventLogout = () => {
  recordEvent('logout', {
    data:{
      timestamp: new Date().getTime()
    }
  })
  window.intempt.logOut()
}

export const intemptEventCreateOrganization = (app_name) => {
  console.log(app_name);
  recordEvent('Create organization', {
    data:{
      app_name
    }
  })
}

export const intemptEventInviteTeamMembers = (team_member_invited, invite_email) => {
  recordEvent('Invite team members', {
    data:{
      team_member_invited,
      invite_email,
      timestamp: new Date().getTime()
    }
  })
}

export const intemptEventCompletedOnboarding = (button_name) => {
  recordEvent('Completed onboarding', {
    data:{
      button_name,
      timestamp: new Date().getTime()
    }
  })
}

export const intemptEventCreatedAnObject = (title, description) => {

  recordEvent('Created an object', {
    data:{
      title,
      description,
      timestamp: new Date().getTime()
    }
  })
}

export const intemptEventEditedAnObject = (title, description, author) => {
  recordEvent('Edited an object', {
    data:{
      title,
      description,
      author,
      timestamp: new Date().getTime()
    }
  })
}

export const intemptEventDeletedAnObject = (title, description, author) => {
  recordEvent('Deleted an object', {
    data:{
      title,
      description,
      author,
      timestamp: new Date().getTime()
    }
  })
}

export const intemptEventVisitedDashboard = (page_url) => {
  recordEvent('Visited dashboard', {
    data:{
      page_url,
    }
  })
}

export const intemptEventClickedDeleteOrganization = (app_name) => {
  recordEvent("Delete organization", {
    data:{
      app_name
    }
  })
}

export const intemptEventSubscription = (plan_name, subscription) => {
  recordEvent('subscriptions', {

    data:{
      plan_name,
      subscription,
      timestamp: new Date().getTime()
    }
  })
}

export const intemptEventCreatedMlTask = (page_url) => {
  recordEvent('Created ML task', {
    data:{
      page_url
    }
  })
}

export const intemptEventViewedPopup = (popupName) => {
  recordEvent('Popup views', {
    data:{
      popupName
    }
  })
}

export const IntemptScriptsLoader = () => {
  const organization = process.env.NEXT_PUBLIC_INTEMPT_ORG_NAME;
  const project = process.env.NEXT_PUBLIC_INTEMPT_PROJECT_NAME;
  const source = process.env.NEXT_PUBLIC_INTEMPT_SOURCE_ID;
  const apiKey = process.env.NEXT_PUBLIC_INTEMPT_API_KEY;

  const src = `https://cdn.intempt.com/v1/intempt.min.js?organization=${organization}&project=${project}&source=${source}&key=${apiKey}`;

  return (
      <script src={src}></script>
  );
}
