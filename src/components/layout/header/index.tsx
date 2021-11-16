import { HomeIcon } from '@/components/icons/home';
import { MenuIcon } from '@/components/icons/menu';
import { HeaderLink } from './header-link';
export const Header = () => {
  return (
    <header
      className={
        'w-full flex flex-col flex-1 items-center justify-center content-center shadow-sm'
      }
    >
      <nav
        className={'w-full h-16   max-w-7xl flex content-center items-center'}
      >
        <nav className="w-full flex items-start">
          <HeaderLink href="/" content={<HomeIcon className={'h-8 w-8'} />} />
        </nav>
        <nav className="w-full flex justify-end space-x-2">
          <HeaderLink
            href="/implementation-references/nextjs"
            content={'NextJS'}
          />
          <HeaderLink
            href="/implementation-references/ant-design"
            content={'Ant Design'}
          />
          <HeaderLink
            href="/implementation-references/react-hook-form"
            content={'React Hook Form'}
          />
          <HeaderLink href="/" content={<MenuIcon className={'h-8 w-8'} />} />
        </nav>
      </nav>
    </header>
  );
};
