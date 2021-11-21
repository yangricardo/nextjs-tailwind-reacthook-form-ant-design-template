import { FC } from 'react';

interface INavHeader {
  className?: string;
}

export const HeaderSection: FC<INavHeader> = ({ children, className }) => (
  <section className={`${className} w-full h-full flex flex-row space-x-2`}>
    {children}
  </section>
);
