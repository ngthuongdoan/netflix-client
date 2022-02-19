export const ERROR_MESSAGES = {
  // Common cases
  PHONE_REQUIRED: "Phone number is required",
  PHONE_INVALID: "Invalid phone number",

  EMAIL_REQUIRED: "Email is required",
  EMAIL_INVALID: "Invalid email",

  // Sign up
  PASSWORD_REQUIRED: "Password is required",
  PASSWORD_INVALID: "Password must have at least 8 characters",
  CONFIRM_PASSWORD_REQUIRED: "Confirm password is required",
  CONFIRM_PASSWORD_UNMATCH: "Confirm password does not match",

  FIRST_NAME_REQUIRED: "First name is required",
  LAST_NAME_REQUIRED: "Last name is required",
  POSITION_REQUIRED: "Position is required",

  // Verify
  VERIRY_CODE_REQUIRED: "Verification code is required",
  VERIRY_CODE_INVALID: "Your verification code is invalid",

  // Add external link
  LINK_INVALID: "Link is invalid",
  LINK_REQUIRED: "Link cannot be blank",
  LINK_TITLE_REQUIRED: "Link title is required",

  // Payment form
  PAYMENT_CARD_HOLDER_REQUIRED: "Card holder name is required",
  PAYMENT_CARD_NUMBER_REQUIRED: "Card number is required",
  PAYMENT_EXPIRY_REQUIRED: "Card expiry is required",
  PAYMENT_CVC_REQUIRED: "Card CVC is required",
  PAYMENT_FIRST_NAME_REQUIRED: "First name is required",
  PAYMENT_LAST_NAME_REQUIRED: "Last name is required",
  PAYMENT_ADDRESS_REQUIRED: "Address is required",
  PAYMENT_STATE_RQUIRED: "State is required",

  // Feature
  FEATURE_LINK_REQUIRED: "Feature link cannot be blank",
  POST_ON_REQUIRED: "Post on date is required",

  // Change Password
  OLD_PASSWORD_REQUIRED: "Old password is required",
  NEW_PASSWORD_REQUIRED: "New password is required",

  // Mailchimp
  MAILCHIMP_CLIENT_ID_REQUIRED: "Client ID is required",
  MAILCHIMP_CLIENT_SECRET_REQUIRED: "Required",
  MAILCHIMP_SERVER_REQUIRED: "Server is required",

  // Hubspot
  HUBSPOT_CLIENT_ID_REQUIRED: "Client ID is required",
  HUBSPOT_CLIENT_SECRET_REQUIRED: "Required",
  HUBSPOT_SCOPES_REQUIRED: "Required",

  // Add company
  COMPANY_NAME_REQUIRED: "Company name is required",
  COMPANY_WEBSITE_REQUIRED: "Website is required",
  COMPANY_WEBSITE_INVALID: "Website is invalid",
  COMPANY_EMAIL_REQUIRED: "Email is required",
  COMPANY_EMAIL_INVALID: "Email is invalid",
  COMPANY_ADDRESS_REQUIRED: "Address is required",
  COMPANY_ADDRESS_AT_LEAST_ONE: "Must provide at least one address",
  POST_ON_DATE_REQUIRED: "Post on date is required",
  EXPIRE_ON_DATE_REQUIRED: "Expire on date is required",

  EMPLOYEE_AT_LEAST_ONE: "Must provide at least one employee",
  MISSING_POST_ON_DATE: "Missing post on date",
  POST_DATE_FUTURE: "Post date must be a future date",
  EXPIRE_DATE_FUTURE: "Expire date must be a future date",
  MUST_NOT_GREATER: "Post date must not be greater than expire date",
};

export const POPUP_CONTENT = {
  // Remove card
  REMOVE_CARD: {
    title: "Are you sure you want to remove this card?",
    content: "This action cannot be reversed",
  },

  REMOVE_CARD_COMPLETE: {
    title: "Card Removed",
    content: "You will no longer have access to the card.",
  },

  // Payment complete
  PAYMENT_COMPLETE: {
    title: "Payment Complete!",
    content:
      "You have upgraded to premium and now have full access to features.",
  },

  PREMIUM_FEATURE: {
    title: "Premium feature",
    content: "You have to upgrade your account to be able to use this feature",
  },

  // Remove external link
  REMOVE_EXTERNAL_LINK: {
    title: "Are you sure you want to remove this link?",
    content: "This action cannot be reversed",
  },

  //Social Link
  REMOVE_SOCIAL_MEDIA_LINK: {
    title: "Are you sure you want to remove this link?",
    content: "This action cannot be reversed",
  },
  // Edit payment complete
  EDIT_PAYMENT_COMPLETE: {
    title: "Updated successfully!",
    content: "Update payment method successfully",
  },

  // Cancel subscription
  CANCEL_SUBSCRIPTION: {
    title: "Are you sure you want to cancel your subscription?",
    content: "Your will no longer have access to Premium features",
  },

  CANCEL_SUBSCRIPTION_SUCCESS: {
    title: "Subscription Cancelled",
    content: "Your will no longer have access to Premium features",
  },

  COMPANY_REMOVE_ALL_EMPLOYEE: {
    title: "Are you sure you want to cancel your subscription?",
    content:
      "Your will no longer have access to Premium features and all employees will be removed",
  },

  COMPANY_REMOVE_ALL_EMPLOYEE_SUCCESS: {
    title: "Subscription Cancelled",
    content:
      "You just cancel your premium features. You will continue with the features until the end of this month.",
  },

  // Change password
  CHANGE_PASSWORD: {
    title: "Successfully",
    content:
      "Your password has been changed, please sign in with your new password",
  },

  UNSUPPORTED_FILE: {
    title: "Error",
    content: "Look like the selected file is not supported, please try again.",
  },

  // Subscribe
  SUBSCRIBE: {
    title: "Succesfully",
    content: "Thank you for subscribing!",
  },

  // Feature
  REMOVE_FEATURE: {
    title: "Are you sure you want to remove this feature?",
    content: "This action cannot be reversed",
  },

  SUSPEND: {
    title: "Your account has been suspended",
    content: "Your monthly payment has failed to process",
  },

  // Disconnect mailchimp
  DISCONNECT_MAILCHIMP: {
    title: "Disconnect",
    content: "Are you sure you want to disconnect Mailchimp?",
  },

  DISCONNECT_HUBSPOT: {
    title: "Disconnect",
    content: "Are you sure you want to disconnect Hubspot?",
  },

  BACK_TO_FREE_CONFIRM: {
    title: "Are you sure?",
    description: "Are you sure you want to return to free card?",
  },

  BACK_TO_FREE_SUCCESS: {
    title: "Successful",
    content: "You have returned to free card.",
  },

  BLOCKED_USER: {
    title: "Blocked!",
    content: "You account has been blocked by Karlet.",
  },

  DELETE_EMPLOYEE: {
    title: "Delete employee",
    content: "Are you sure you want to delete this employee?",
  },

  // Add employee complete
  ADD_EMPLOYEE_COMPLETE: {
    title: "Success!",
    content:
      "Your employees have been sent an invitation text to set up their digital profile.",
  },

  UPGRADE_PLAN: {
    title: "Completed!",
    content: "Your current license subscriptions changed successfully.",
  },

  DELETE_LICENSE: {
    title: "Are you sure you want to delete this licence?",
    content:
      "A licence is committed until the next due date. Note that you are able to assign this licence to another employee.",
  },
  DELETE_LICENSE_SUCCESS: {
    title: "Licence deleted",
    content:
      "You just deleted one licence. You can continue using the licence until the end of this committed period.",
  },
};

export const ERROR_CODES = {
  UserNotConfirmedException: "UserNotConfirmedException",
  CardSuspended: "PERMIS_1",
};
