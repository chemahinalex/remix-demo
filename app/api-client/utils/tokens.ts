import {ApiAuth, ApiResponse} from '../types';


const TOKEN_KEYS = {
  ACCESS_TOKEN: '_at',
  ACCESS_TOKEN_EXPIRY: '_ate',
  REFRESH_TOKEN: '_rt',
  REFRESH_TOKEN_EXPIRY: '_rte'
} as const;

export const apiSaveTokens = async (result: ApiResponse<ApiAuth>): Promise<boolean> => {
  try {
    if (!result.result?.accessToken?.token) throw new Error('token is not available');

    window.localStorage.setItem(TOKEN_KEYS.ACCESS_TOKEN, result.result.accessToken.token);
    window.localStorage.setItem(TOKEN_KEYS.ACCESS_TOKEN_EXPIRY, result.result.accessToken.expiresAt);
    window.localStorage.setItem(TOKEN_KEYS.REFRESH_TOKEN, result.result!.refreshToken!.token);
    window.localStorage.setItem(TOKEN_KEYS.REFRESH_TOKEN_EXPIRY, result.result!.refreshToken!.expiresAt);

    return true;
  } catch (err: unknown) {
    console.warn('Api save tokens failed', err instanceof Error ? err.message : String(err));

    return false;
  }
};

export const apiClearTokens = (): void => {
  window?.localStorage?.removeItem(TOKEN_KEYS.ACCESS_TOKEN);
  window?.localStorage?.removeItem(TOKEN_KEYS.ACCESS_TOKEN_EXPIRY);
  window?.localStorage?.removeItem(TOKEN_KEYS.REFRESH_TOKEN);
  window?.localStorage?.removeItem(TOKEN_KEYS.REFRESH_TOKEN_EXPIRY);
};

export const getAccessToken = (): string | null => window.localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN);

export const isAccessTokenExpired = (): boolean => {
  const token = window.localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN);
  const tokenExpires = window.localStorage.getItem(TOKEN_KEYS.ACCESS_TOKEN_EXPIRY);

  return !!token && !!tokenExpires && new Date(tokenExpires) < new Date();
};

export const getRefreshToken = (): string | null => window.localStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN);

export const isRefreshTokenExpired = () => {
  const refresh = window.localStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN_EXPIRY);
  const refreshExpires = window.localStorage.getItem(TOKEN_KEYS.REFRESH_TOKEN_EXPIRY);

  return !!refresh && !!refreshExpires && new Date(refreshExpires) < new Date();
};
