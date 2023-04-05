import NextLink, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

export const Link = ({ children, ...linkProps }: PropsWithChildren<LinkProps>) => (
  <NextLink {...linkProps}>
    {children}
  </NextLink>
);
