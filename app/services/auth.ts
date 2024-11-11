import {createMutation, createQuery} from 'react-query-kit';

import {
  apiProfileGet,
  ApiProfileGetPayload,
  ApiProfileGetResponse,
  apiProfileUpdate,
  ApiProfileUpdatePayload,
  ApiProfileUpdateResponse,
  apiSignIn,
  ApiSignInPayload,
  ApiSignInResponse,
  apiSignUp,
  ApiSignUpPayload,
  ApiSignUpResponse,
} from '~/api-client';

import {queryClient} from './client';

//
//

export const useQueryProfile = createQuery<ApiProfileGetResponse, ApiProfileGetPayload>({
  queryKey: ['profile'],
  fetcher: params => apiProfileGet(params),
});

//

export const useMutationProfileUpdate = createMutation<ApiProfileUpdateResponse, ApiProfileUpdatePayload>({
  mutationKey: ['profile'],
  mutationFn: params => apiProfileUpdate(params),
  onSuccess: async data => await queryClient.setQueryData(['profile'], data),
});

//

export const useMutationSignIn = createMutation<ApiSignInResponse, ApiSignInPayload>({
  mutationKey: ['signIn'],
  mutationFn: params => apiSignIn(params),
  onSuccess: async data => await queryClient.setQueryData(['profile'], data),
});

//

export const useMutationSignUp = createMutation<ApiSignUpResponse, ApiSignUpPayload>({
  mutationKey: ['signUp'],
  mutationFn: params => apiSignUp(params),
});
