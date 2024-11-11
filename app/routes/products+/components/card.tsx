import {useTranslation} from 'react-i18next';
import {format} from 'date-fns';
import {Card, CardContent, Typography, Stack, CardMedia, CardHeader} from '@mui/material';

import {ApiProduct} from '~/api-client/types';

//
//

type ProductsCardProps = {data: ApiProduct; };


export const ProductsCard = ({data}: ProductsCardProps) => {
  const {t} = useTranslation(['products', 'common'] as const);

  return (
    <Card>
      <CardHeader
        title={data.title.en || data.title.ar}
        titleTypographyProps={{level: 'titleeMd', align: 'center'}}
        subheader={data.isActive && t('common:active')}
        subheaderTypographyProps={{variant: 'body2', color: 'success', align: 'center'}}
      />
      <CardMedia
        sx={{height: 200}}
        image={data.image || '/products/default.jpg'}
        component="img"
        loading="lazy"
        alt={data.title.en || data.title.ar}
      />
      <CardContent>
        <Stack direction="row" mb={2}>
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="textDisabled" align="center">
              {t('products:sku')}
            </Typography>
            <Typography align="center">{data.sku || '---'}</Typography>
          </Stack>
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="textDisabled" align="center">
              {t('products:quantity')}
            </Typography>
            <Typography align="center">{data.quantity || '---'}</Typography>
          </Stack>
        </Stack>

        <Stack direction="row" mb={2}>
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="textDisabled" align="center">
              {t('products:price')}
            </Typography>
            <Typography align="center">{'$' + Number(data.price).toLocaleString() || '---'}</Typography>
          </Stack>
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="textDisabled" align="center">
              {t('products:priceSale')}
            </Typography>
            <Typography align="center">{data.priceSale ? '$' + Number(data.priceSale).toLocaleString() : '---'}</Typography>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="textDisabled" align="center">
              {t('common:createdAt')}
            </Typography>
            <Typography variant="body1" align="center">{format(new Date(data.createdAt), 'Pp')}</Typography>
          </Stack>
          <Stack sx={{ flexGrow: 1 }}>
            <Typography variant="body2" color="textDisabled" align="center">
              {t('common:updatedAt')}
            </Typography>
            <Typography align="center">{data.updatedAt && data.updatedAt !== data.createdAt ? format(new Date(data.updatedAt), 'Pp') : '---'}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

