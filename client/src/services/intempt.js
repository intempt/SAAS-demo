import React from "react";

export const recordEvent = (eventName, eventBody) => {
  window.intempt.recordEvent(eventName, eventBody)
}

export const intemptEventSignUp = (full_name, email) => {
  recordEvent('sign_up', {full_name, email})
}

export const intemptEventLogin = (email) => {
  // Identifying user
  window.intempt.identifyUser(email)
  recordEvent('login', {email})
}

export const intemptEventLogout = () => {
  recordEvent('logout', {})
  window.intempt.endSession()
}

export const intemptEventCreateOrganization = (app_name) => {
  recordEvent('create_organization', {app_name})
}

export const intemptEventClickedDeleteOrganization = (app_name) => {
  recordEvent('clicked_delete_organization', {app_name})
}

const isFirstActionPerSession = (actionName) => {
  const savedAction = sessionStorage.getItem(actionName)
  const currentDate = new Date().getTime()

  if (!savedAction) {
    sessionStorage.setItem(actionName, currentDate);
    return true;
  }

  const savedActionDate = new Date(parseInt(savedAction)).getTime()
  const timeDelta = 1000 * 60 * 60 * 12 // 12h
  if (savedActionDate + timeDelta < currentDate) {
    sessionStorage.setItem(actionName, currentDate);
    return true;
  }

  return false;
}

export const intemptEventVisitedDashboard = (page_url) => {
  // Will send event once for every org.
  if (isFirstActionPerSession(`visited_dashboard_${page_url}`)) {
    recordEvent('visited_dashboard', {page_url})
  }
}

export const intemptEventCompletedOnboarding = (button_name) => {
  recordEvent('completed_onboarding', {button_name})
}

export const intemptEventCreatedAnObject = (title, description) => {
  recordEvent('created_an_object', {title, description})
}

export const intemptEventEditedAnObject = (title, description, author) => {
  recordEvent('edited_an_object', {title, description, author})
}

export const intemptEventDeletedAnObject = (title, description, author) => {
  recordEvent('deleted_an_object', {title, description, author})
}

export const intemptEventInviteTeamMembers = (team_member_invited, invite_email) => {
  recordEvent('invite_team_members', {team_member_invited, invite_email})
}

export const intemptEventSubscription = (plan_name, subscription) => {
  recordEvent('subscriptions', {plan_name, subscription})
}

export const intemptEventCreatedMlTask = (page_url) => {
  recordEvent('created_ml_task', {page_url})
}

export const intemptEventViewedPopup = (popupName) => {
  recordEvent('popup_views', { popupName })
}

export const IntemptScriptsLoader = () => (
    <script
        src="https://cdn.intempt.com/intempt.min.js"
        data-organization={process.env.NEXT_PUBLIC_INTEMPT_ORG_NAME}
        data-project={process.env.NEXT_PUBLIC_INTEMPT_PROJECT_NAME}
        data-source={process.env.NEXT_PUBLIC_INTEMPT_SOURCE_ID}
        data-key={process.env.NEXT_PUBLIC_INTEMPT_API_KEY}
    ></script>
);