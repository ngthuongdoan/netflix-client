// import { COGNITO_CONFIG } from "configs/cognito";
import { CURRENT_ENV, Environment, Staging } from 'configs/env';

export const REFRESH_URL = `https://cognito-idp.${''}.amazonaws.com/`;
let domain = 'localhost:3000';
let fullDomain = 'http://localhost:3000';
let landingDomain = '';
let baseURL = '';
let mediaUrl = '';

if (CURRENT_ENV.env === Environment.Deploy) {
  if (CURRENT_ENV.staging === Staging.Dev) {
    domain = 'netflix-eddie.netlify.app';
    fullDomain = 'https://netflix-eddie.netlify.app';
  } else if (CURRENT_ENV.staging === Staging.Stage) {
  } else if (CURRENT_ENV.staging === Staging.Prod) {
  }
}

if (CURRENT_ENV.staging === Staging.Stage) {
} else if (CURRENT_ENV.staging === Staging.Prod) {
}

export const AUTH_URL = baseURL + '/auth';
export const BASE_URL = baseURL;
export const DOMAIN = domain;
export const FULL_DOMAIN = fullDomain;
