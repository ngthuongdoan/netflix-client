import { CURRENT_ENV, Environment, Staging } from "./env";

type CookieConfig = {
  domain: string;
  accessKey: string;
  refreshKey: string;
};

let domain = "localhost";
let accessKey = "netflix-dev";

if (CURRENT_ENV.env === Environment.Deploy) {
  if (CURRENT_ENV.staging === Staging.Dev) {
    domain = "netflix.com.au";
  } else if (CURRENT_ENV.staging === Staging.Stage) {
    domain = "netflix.com.au";
    accessKey = "netflix-stage";
  } else {
    domain = "netflix.io";
    accessKey = "netflix-prod";
  }
}

export const COOKIE_CONFIG: CookieConfig = {
  domain,
  accessKey,
  refreshKey: accessKey + "-fr",
};
