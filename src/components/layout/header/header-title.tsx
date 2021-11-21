import { HomeIcon } from '@/components/icons/home';
import { ReactNode } from 'react';
import { HeaderSection } from './header-section';
import Link from 'next/link';
interface IHeaderTitle {
  className?: string;
  logo?: ReactNode;
  name?: string;
}

export const HeaderTitle = ({ className, logo, name }: IHeaderTitle) => (
  <HeaderSection className={className || 'items-start'}>
    <Link href="/" passHref>
      <span className="h-full flex flex-row justify-start items-center cursor-pointer text-blue-700 space-x-2">
        {logo || <HomeIcon className={'h-8 w-8'} />}
        <h1 className="mt-2 font-bold text-blue-700 hidden sm:block sm:text-lg no-underline">
          {name}
        </h1>
      </span>
    </Link>
  </HeaderSection>
);
