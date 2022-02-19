import { CURRENT_ENV, Environment, Staging } from './env';

type CookieConfig = {
  domain: string;
  accessKey: string;
  refreshKey: string;
};

let domain = 'localhost';
let accessKey = 'netflix-dev';

if (CURRENT_ENV.env === Environment.Deploy) {
  if (CURRENT_ENV.staging === Staging.Dev) {
    domain = 'netflix-eddie.netlify.app';
  } else if (CURRENT_ENV.staging === Staging.Stage) {
    domain = 'netflix-eddie.netlify.app';
    accessKey = 'netflix-stage';
  } else {
    domain = 'netflix-eddie.netlify.app';
    accessKey = 'netflix-prod';
  }
}

export const COOKIE_CONFIG: CookieConfig = {
  domain,
  accessKey,
  refreshKey: accessKey + '-fr',
};
