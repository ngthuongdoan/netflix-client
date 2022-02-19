import axios from 'axios';
import { REFRESH_URL } from 'constants/endpoints';

export function refreshTokenAPI(refreshToken: string) {
  return axios.post(
    REFRESH_URL || '',
    {
      //   ClientId: COGNITO_CONFIG.APP_CLIENT_ID,
      AuthFlow: 'REFRESH_TOKEN_AUTH',
      AuthParameters: {
        REFRESH_TOKEN: refreshToken,
      },
    },
    {
      headers: {
        'X-Amz-Target': 'AWSCognitoIdentityProviderService.InitiateAuth',
        'Content-Type': 'application/x-amz-json-1.1',
      },
    }
  );
}
