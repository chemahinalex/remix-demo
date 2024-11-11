import {apiClient, handleApiError} from './client';
import {ApiAuth, ApiOptions, ApiPayload, ApiResponse, ApiUser} from './types';


type ApiSignInObject = {
  email: string;
  password: string;
};

export type ApiSignInPayload = ApiPayload<ApiSignInObject>;
export type ApiSignInResponse = ApiResponse<ApiAuth>;

export const apiSignIn = async ({payload, options}: ApiSignInPayload) => {
  try {
    return await apiClient
      .post('auth/signin/', {json: payload, ...options})
      .json<ApiSignInResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

type ApiSignUpObject = {
  name: string;
  email: string;
  mobile: string;
  password: string;
  passwordConfirm: string;
};

export type ApiSignUpPayload = ApiPayload<ApiSignUpObject>;
export type ApiSignUpResponse = ApiResponse<ApiAuth>;

export const apiSignUp = async ({payload, options}: ApiSignUpPayload) => {
  try {
    return await apiClient
      .post('auth/signup/', {json: payload, ...options})
      .json<ApiSignUpResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};


export type ApiProfileGetPayload = ApiOptions;
export type ApiProfileGetResponse = ApiResponse<ApiUser>;

export const apiProfileGet = async ({options}: ApiProfileGetPayload = {}) => {
  try {
    return await apiClient
      .get('auth/profile/', {cache: 'default', ...options})
      .json<ApiProfileGetResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

export type ApiProfileUpdatePayload = ApiPayload<Partial<ApiSignUpObject>>;
export type ApiProfileUpdateResponse = ApiResponse<ApiUser>;

export const apiProfileUpdate = async ({payload, options}: ApiProfileUpdatePayload) => {
  try {
    return await apiClient
      .patch('auth/profile/', {
        json: {
          ...payload,
          password: payload.password || undefined,
          passwordConfirm: payload.passwordConfirm || undefined,
        },
        ...options,
      })
      .json<ApiProfileUpdateResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};
