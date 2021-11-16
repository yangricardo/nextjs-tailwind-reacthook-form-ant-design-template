import { HeaderLink } from './header-link';

export const Header = () => {
  return (
    <header
      className={
        'w-full p-4 flex flex-col flex-1 items-center content-center shadow-sm'
      }
    >
      <nav className={'w-full max-w-7xl'}>
        <HeaderLink href="/" content={'Home'} />
      </nav>
    </header>
  );
};
