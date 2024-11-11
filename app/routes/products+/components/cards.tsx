import {useTranslation} from 'react-i18next';
import {Card, CardContent, Grid2, Stack, Typography} from '@mui/material';

import {ApiProduct} from '~/api-client/types';
import {AppButton} from '~/global/components/app-button';

import {ProductsCard} from './card';
import {ProductsCardSkeleton} from './card-skeleton';

//
//
type ProductsCardsProps = {data?: ApiProduct[]; isLoading: boolean};

export const ProductsCards = ({data, isLoading}: ProductsCardsProps) => {
  const {t} = useTranslation(['common']);

  return (
    <Grid2 container spacing={1}>
      {isLoading ? (
        [0, 1, 2].map((value) => (
          <Grid2 size={{ xs: 12 }} key={value}>
            <ProductsCardSkeleton />
          </Grid2>
        ))
      ) : !data?.length ? (
        <Grid2 size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <Typography variant="caption" fontSize="0.9rem">
                {t('common:noResults')}
              </Typography>
              <AppButton to={'/products/create'} variant="contained">
                {t('common:create')}
              </AppButton>
            </CardContent>
          </Card>
        </Grid2>
      ) : (
        data.map(data => (
          <Grid2 size={{ xs: 12 }} key={data.productId}>
            <ProductsCard data={data}/>
          </Grid2>
        ))
      )}
    </Grid2>
  );
};
