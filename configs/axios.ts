import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
// import CustomModal from "components/Modals/CustomModal/CustomModal";
import { REFRESH_URL } from 'constants/endpoints';
import Cookie from 'js-cookie';
import { refreshTokenAPI } from 'utils/auth.helper';
import { generateError } from 'utils/generateError';
import { COOKIE_CONFIG } from './cookie';

function isExcluded(list: Array<string>, url: string): boolean {
  let validate = true;

  list.forEach((item) => {
    if (item.indexOf(url) > -1) {
      validate = false;
      return;
    }
  });

  return validate;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Put here endpoints that we do not want to
    // add the token to request header
    // Only read cookie on client side, otherwise the social networks
    // will fail to fetch
    if (typeof window !== 'undefined') {
      // Check if the request URL is not in exclude list
      if (config.url) {
        const token = Cookie.get(COOKIE_CONFIG.accessKey);
        if (token && config.headers) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
    } else {
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // Edit response config
    return response;
  },
  async (error: AxiosError) => {
    const originalConfig = error.config;
    const customConfig: AxiosRequestConfig & { _retry?: boolean } = {
      ...originalConfig,
    };

    // Check if this is unauthorized error
    // then get new access token using refresh token
    if (
      error.response &&
      error.response.status === 401 &&
      !customConfig._retry && // To avoid infinite loop if wrong refresh token
      originalConfig.url !== REFRESH_URL // Do not refresh if the request is already refresh request
    ) {
      if (typeof window !== 'undefined') {
        customConfig._retry = true;
        const refreshToken = Cookie.get(COOKIE_CONFIG.refreshKey);
        if (refreshToken) {
          try {
            const refreshResponse = await refreshTokenAPI(refreshToken);
            const {
              AuthenticationResult: { IdToken, ExpiresIn },
            } = refreshResponse.data;

            Cookie.set(COOKIE_CONFIG.accessKey, IdToken, {
              expires: new Date(new Date().getTime() + ExpiresIn * 1000),
              domain: COOKIE_CONFIG.domain,
            });

            if (originalConfig.headers) {
              originalConfig.headers.Authorization = `Bearer ${IdToken}`;
            }

            return await new Promise((resolve, reject) => {
              axios
                .request(originalConfig)
                .then((res) => resolve(res))
                .catch((err: any) => reject(err));
            });
          } catch (e) {
            Cookie.remove(COOKIE_CONFIG.accessKey, {
              domain: COOKIE_CONFIG.domain,
            });
          }
        } else {
          Cookie.remove(COOKIE_CONFIG.accessKey, {
            domain: COOKIE_CONFIG.domain,
          });
          Cookie.remove(COOKIE_CONFIG.refreshKey, {
            domain: COOKIE_CONFIG.domain,
          });
        }
      }
    } else if (error.response && error.response.status === 403) {
    } else {
      const errorMessage = generateError(error);

      if (typeof window !== 'undefined') {
        // CustomModal.error({
        //   isOpen: true,
        //   title: "ERROR!",
        //   content: errorMessage.message,
        // });
      }
    }

    return Promise.reject(error);
  }
);
