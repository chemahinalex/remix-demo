import {createMutation, createQuery} from 'react-query-kit';

import {
  apiProductsCreate,
  ApiProductsCreatePayload,
  ApiProductsCreateResponse,
  apiProductsDelete,
  ApiProductsDeletePayload,
  ApiProductsDeleteResponse,
  apiProductsGet,
  ApiProductsGetPayload,
  ApiProductsGetResponse,
  apiProductsList,
  ApiProductsListPayload,
  ApiProductsListResponse,
  apiProductsUpdate,
  ApiProductsUpdatePayload,
  ApiProductsUpdateResponse,
} from '~/api-client/products';

import {queryClient} from './client';

//
//

const key = 'products';
const refetchListNoCache = async () =>
  queryClient.fetchQuery({
    ...useQueryProductsList.getFetchOptions({options: {cache: 'no-cache'}}),
    queryKey: [key],
  });

//

export const useQueryProductsList = createQuery<
  ApiProductsListResponse,
  ApiProductsListPayload | undefined
>({
  queryKey: [key],
  fetcher: params => apiProductsList(params),
});

//

export const useQueryProductsGet = createQuery<ApiProductsGetResponse, ApiProductsGetPayload>({
  queryKey: [key],
  fetcher: params => apiProductsGet(params),
});

//

export const useMutationProductsCreate = createMutation<
  ApiProductsCreateResponse,
  ApiProductsCreatePayload
>({
  mutationKey: [key + 'Create'],
  mutationFn: params => apiProductsCreate(params),
  onSuccess: refetchListNoCache,
});

//

export const useMutationProductsUpdate = createMutation<
  ApiProductsUpdateResponse,
  ApiProductsUpdatePayload
>({
  mutationKey: [key + 'Update'],
  mutationFn: params => apiProductsUpdate(params),
  onSuccess: refetchListNoCache,
});

//

export const useMutationProductsDelete = createMutation<
  ApiProductsDeleteResponse,
  ApiProductsDeletePayload
>({
  mutationKey: [key + 'Delete'],
  mutationFn: params => apiProductsDelete(params),
  onSuccess: refetchListNoCache,
});
