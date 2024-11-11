import {apiClient, handleApiError} from './client';
import {ApiResponse, ApiProduct, ApiOptions, ApiPayload} from './types';

//
//

export type ApiProductsListPayload = ApiOptions;
export type ApiProductsListResponse = ApiResponse<ApiProduct[]>;

export const apiProductsList = async ({options}: ApiProductsListPayload = {}) => {
  try {
    return await apiClient.get('v1/products/', options).json<ApiProductsListResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

//

export type ApiProductsGetPayload = {id: string} & ApiOptions;
export type ApiProductsGetResponse = ApiResponse<ApiProduct>;

export const apiProductsGet = async ({id, options}: ApiProductsGetPayload) => {
  try {
    return await apiClient.get('v1/products/' + id, options).json<ApiProductsGetResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

//

export type ApiProductsCreatePayload = ApiPayload<
  Omit<ApiProduct, 'productId' | 'userId' | 'createdAt' | 'updatedAt'>
>;
export type ApiProductsCreateResponse = ApiProductsGetResponse;

export const apiProductsCreate = async ({payload, options}: ApiProductsCreatePayload) => {
  try {
    return await apiClient
      .post<ApiProductsCreateResponse>('v1/products/', {json: payload, ...options})
      .json();
  } catch (err) {
    return handleApiError(err);
  }
};

//

export type ApiProductsUpdatePayload = {id: string} & ApiPayload<
  Partial<ApiProductsCreatePayload['payload']>
>;
export type ApiProductsUpdateResponse = ApiProductsGetResponse;

export const apiProductsUpdate = async ({id, payload, options}: ApiProductsUpdatePayload) => {
  try {
    return await apiClient
      .patch<ApiProductsUpdateResponse>('v1/products/' + id, {json: payload, ...options})
      .json();
  } catch (err) {
    return handleApiError(err);
  }
};

//

export type ApiProductsDeletePayload = ApiProductsGetPayload;
export type ApiProductsDeleteResponse = ApiProductsGetResponse;

export const apiProductsDelete = async ({id, options}: ApiProductsDeletePayload) => {
  try {
    return await apiClient.delete<ApiProductsDeleteResponse>('v1/products/' + id, options).json();
  } catch (err) {
    return handleApiError(err);
  }
};
