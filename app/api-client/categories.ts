import {apiClient, handleApiError} from './client';
import {ApiResponse, ApiCategory, ApiOptions, ApiPayload} from './types';

//
//

export type ApiCategoriesListPayload = ApiOptions;
export type ApiCategoriesListResponse = ApiResponse<ApiCategory[]>;

export const apiCategoriesList = async ({options}: ApiCategoriesListPayload = {}) => {
  try {
    return await apiClient.get('v1/categories/', options).json<ApiCategoriesListResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

//

export type ApiCategoriesGetPayload = {id: string} & ApiOptions;
export type ApiCategoriesGetResponse = ApiResponse<ApiCategory>;

export const apiCategoriesGet = async ({id, options}: ApiCategoriesGetPayload) => {
  try {
    return await apiClient.get('v1/categories/' + id, options).json<ApiCategoriesGetResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

//

export type ApiCategoriesCreatePayload = ApiPayload<
  Omit<ApiCategory, 'categoryId' | 'userId' | 'createdAt' | 'updatedAt'>
>;
export type ApiCategoriesCreateResponse = ApiCategoriesGetResponse;

export const apiCategoriesCreate = async ({payload, options}: ApiCategoriesCreatePayload) => {
  try {
    return await apiClient
      .post('v1/categories/', {json: payload, ...options})
      .json<ApiCategoriesCreateResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

//

export type ApiCategoriesUpdatePayload = {id: string} & ApiPayload<
  Partial<ApiCategoriesCreatePayload['payload']>
>;
export type ApiCategoriesUpdateResponse = ApiCategoriesGetResponse;

export const apiCategoriesUpdate = async ({id, payload, options}: ApiCategoriesUpdatePayload) => {
  try {
    return await apiClient
      .patch('v1/categories/' + id, {json: payload, ...options})
      .json<ApiCategoriesUpdateResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};

//

export type ApiCategoriesDeletePayload = ApiCategoriesGetPayload;
export type ApiCategoriesDeleteResponse = ApiCategoriesGetResponse;

export const apiCategoriesDelete = async ({id, options}: ApiCategoriesDeletePayload) => {
  try {
    return await apiClient
      .delete('v1/categories/' + id, options)
      .json<ApiCategoriesDeleteResponse>();
  } catch (err) {
    return handleApiError(err);
  }
};
