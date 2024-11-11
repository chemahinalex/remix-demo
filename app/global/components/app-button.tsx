import {forwardRef} from 'react';
import {LinkProps} from '@remix-run/react';

import {Button, ButtonProps} from '@mui/material';

import {I18nLink} from './i18n-link';

//
//

export type AppButtonProps = LinkProps & ButtonProps;

export const AppButton = forwardRef<HTMLAnchorElement, AppButtonProps>(({
  viewTransition = true,
  children,
  ...props
}, ref) => {
  return (
    <Button ref={ref} component={I18nLink} {...props}>
      {children}
    </Button>
  );
});
