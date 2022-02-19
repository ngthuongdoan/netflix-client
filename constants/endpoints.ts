// import { COGNITO_CONFIG } from "configs/cognito";
import { CURRENT_ENV, Environment, Staging } from "configs/env";

export const REFRESH_URL = `https://cognito-idp.${""}.amazonaws.com/`;
let domain = "localhost:3000";
let fullDomain = "http://localhost:3000";
let landingDomain = "https://dev.karlet.com.au";
let baseURL = "https://dev-api.karlet.com.au/api";
let mediaUrl = "https://karlet-dev-media.s3.amazonaws.com/";

if (CURRENT_ENV.env === Environment.Deploy) {
  if (CURRENT_ENV.staging === Staging.Dev) {
    domain = "dev-user.karlet.com.au";
    fullDomain = "https://dev-user.karlet.com.au";
    landingDomain = "https://dev.karlet.com.au";
  } else if (CURRENT_ENV.staging === Staging.Stage) {
    domain = "stage-user.karlet.com.au";
    fullDomain = "https://stage-user.karlet.com.au";
    landingDomain = "https://stage.karlet.com.au";
  } else if (CURRENT_ENV.staging === Staging.Prod) {
    domain = "app.karlet.io";
    fullDomain = "https://app.karlet.io";
    landingDomain = "https://karlet.io";
  }
}

if (CURRENT_ENV.staging === Staging.Stage) {
  mediaUrl = "https://karlet-stage-media.s3.amazonaws.com/";
  baseURL = "https://stage-api.karlet.com.au/api";
} else if (CURRENT_ENV.staging === Staging.Prod) {
  mediaUrl = "https://karlet-prod-media.s3.amazonaws.com/";
  baseURL = "https://api.karlet.io/api";
}

export const AUTH_URL = baseURL + "/auth";
export const BASE_URL = baseURL;
export const CARD_URL = baseURL + "/card";
export const DOMAIN = domain;
export const FULL_DOMAIN = fullDomain;
export const LANDING_DOMAIN = landingDomain;
export const MEDIA_URL = mediaUrl;
export const SUBSCRIPTION_PLAN_URL = baseURL + "/subscription-plan";
export const SUBSCRIPTION_URL = baseURL + "/subscription";
export const TRANSACTION_URL = baseURL + "/transaction";
export const UPLOAD_URL = baseURL + "/media";
export const EMPLOYEE_URL = baseURL + "/employee";
