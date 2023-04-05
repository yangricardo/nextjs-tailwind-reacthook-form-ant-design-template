import { PropsWithChildren } from 'react';

interface INavHeader {
  className?: string;
}

export const HeaderSection = ({ children, className }:PropsWithChildren<INavHeader>) => (
  <section className={`${className} w-full h-full flex flex-row space-x-2`}>
    {children}
  </section>
);
