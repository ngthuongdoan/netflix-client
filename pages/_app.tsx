import 'styles/index.scss';
import 'configs/axios';
import Cookie from 'js-cookie';
import store from 'store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { COOKIE_CONFIG } from 'configs/cookie';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const token = Cookie.get(COOKIE_CONFIG.accessKey);
    const refreshToken = Cookie.get(COOKIE_CONFIG.refreshKey);
    if (token || refreshToken) {
      //   store.dispatch(getUserProfileAction());
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
