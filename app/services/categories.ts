import {createMutation, createQuery} from 'react-query-kit';

import {
  apiCategoriesCreate,
  ApiCategoriesCreatePayload,
  ApiCategoriesCreateResponse,
  apiCategoriesDelete,
  ApiCategoriesDeletePayload,
  ApiCategoriesDeleteResponse,
  apiCategoriesGet,
  ApiCategoriesGetPayload,
  ApiCategoriesGetResponse,
  apiCategoriesList,
  ApiCategoriesListPayload,
  ApiCategoriesListResponse,
  apiCategoriesUpdate,
  ApiCategoriesUpdatePayload,
  ApiCategoriesUpdateResponse,
} from '~/api-client/categories';

import {queryClient} from './client';

//
//

const key = 'categories';
const refetchListNoCache = async () =>
  queryClient.fetchQuery({
    ...useQueryCategoriesList.getFetchOptions({options: {cache: 'no-cache'}}),
    queryKey: [key],
  });

//

export const useQueryCategoriesList = createQuery<ApiCategoriesListResponse, ApiCategoriesListPayload | undefined>({
  queryKey: [key],
  fetcher: params => apiCategoriesList(params),
});

//

export const useQueryCategoriesGet = createQuery<ApiCategoriesGetResponse, ApiCategoriesGetPayload>({
  queryKey: [key],
  fetcher: params => apiCategoriesGet(params),
});

//

export const useMutationCategoriesCreate = createMutation<
  ApiCategoriesCreateResponse,
  ApiCategoriesCreatePayload
>({
  mutationKey: [key + 'Create'],
  mutationFn: params => apiCategoriesCreate(params),
  onSuccess: refetchListNoCache,
});

//

export const useMutationCategoriesUpdate = createMutation<
  ApiCategoriesUpdateResponse,
  ApiCategoriesUpdatePayload
>({
  mutationKey: [key + 'Update'],
  mutationFn: params => apiCategoriesUpdate(params),
  onSuccess: refetchListNoCache,
});

//

export const useMutationCategoriesDelete = createMutation<
  ApiCategoriesDeleteResponse,
  ApiCategoriesDeletePayload
>({
  mutationKey: [key + 'Delete'],
  mutationFn: params => apiCategoriesDelete(params),
  onSuccess: refetchListNoCache,
});
