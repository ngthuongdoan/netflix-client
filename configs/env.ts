export enum Environment {
  Local,
  Deploy,
}

export enum Staging {
  Dev,
  Stage,
  Prod,
}

type CurrentEnv = {
  env: Environment;
  staging: Staging;
};

export const CURRENT_ENV: CurrentEnv = {
  env: Environment.Deploy,
  staging: Staging.Dev,
};
