import NextLink, { LinkProps } from 'next/link';
import { FC } from 'react';

export const Link: FC<LinkProps> = ({ children, ...linkProps }) => (
  <NextLink {...linkProps}>
    <a>{children}</a>
  </NextLink>
);
