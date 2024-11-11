import {useQueryProfile} from '~/services/auth';
import {getAccessToken} from '~/api-client/utils/tokens';

import {HeaderNavbarUnauthenticated} from './unauthenticated';
import {HeaderNavbarSkeleton} from './skeleton';
import {HeaderNavbarAuthenticated} from './authenticated';

//
//

export const HeaderNavbarLinks = () => {
  const isAuthenticated = !!getAccessToken();
  const {data, isLoading} = useQueryProfile({enabled: isAuthenticated});

  if (isLoading) return <HeaderNavbarSkeleton />;

  const profile = data?.result;

  if (profile?.userId) return <HeaderNavbarAuthenticated profile={profile} />;

  return <HeaderNavbarUnauthenticated />;
};
