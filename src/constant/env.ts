export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = !isProd;

export const showLogger = isLocal
  ? true
  : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;


interface ENVIRONMENT {
  API_URL: string;
}

enum APP_ENVIRONMENT {
  LOCAL = "LOCAL",
  STAGING = "STAGING",
  PRODUCTION = "PRODUCTION"
}

interface AppConfig {
  LIMIT: number;
  PERSIST_SECRET_KEY: string;
  ENVIRONMENT: APP_ENVIRONMENT;
  ENVIRONMENTS: {
    [key in APP_ENVIRONMENT]: ENVIRONMENT;
  };
  env: () => ENVIRONMENT;
}

export const AppConfig: AppConfig = {
  LIMIT: 10,
  PERSIST_SECRET_KEY: "funkyfood-admin-secret-key",
  ENVIRONMENT: APP_ENVIRONMENT.STAGING,
  ENVIRONMENTS: {
    [APP_ENVIRONMENT.LOCAL]: {
      API_URL: "http://localhost:3010",
    },
    [APP_ENVIRONMENT.STAGING]: {
      API_URL: "https://us-central1-funkyfoodaaqib.cloudfunctions.net",
    },
    [APP_ENVIRONMENT.PRODUCTION]: {
      API_URL: "https://us-central1-funkyfoodaaqib.cloudfunctions.net",
    }
  },
  env: () => {
    return AppConfig.ENVIRONMENTS[AppConfig.ENVIRONMENT];
  }

};


