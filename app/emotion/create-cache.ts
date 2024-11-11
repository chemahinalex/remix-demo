import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

//
//

export const createEmotionCache = (dir?: 'ltr' | 'rtl') => {
  const isRTL = dir === 'rtl';
  return createCache({
    // key: 'css' + isRTL && '-rtl',
    key: 'css',
    stylisPlugins: isRTL ? [prefixer, rtlPlugin] : [prefixer],
  });
};
