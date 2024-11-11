import {Card, CardContent, Skeleton} from '@mui/material';

//
//

export const ProductsCardSkeleton = ({ count = 3 }: { count?: number }) => (
  <Card>
    <CardContent>
      <Skeleton height={24} width="80%" />
      <Skeleton height={20} width="40%" />
      <Skeleton height={20} width="60%" />
    </CardContent>
  </Card>
);
