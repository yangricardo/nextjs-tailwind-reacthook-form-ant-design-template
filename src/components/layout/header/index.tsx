import { HeaderDropdown } from './header-dropdown';
import { headerLinkItems } from './header-link-items';
import { HeaderLinkList } from './header-link-list';
import { HeaderTitle } from './header-title';
export const Header = () => {
  return (
    <header
      className={
        'w-full h-16 z-50 sticky flex flex-col items-center justify-center content-center bg-gray-100 shadow-md'
      }
    >
      <nav
        className={
          'w-full px-2 h-full max-w-7xl flex space-x-4 content-center items-center'
        }
      >
        <HeaderTitle name="Sample Frontend Title" />
        <HeaderLinkList linkItems={headerLinkItems} />
        <HeaderDropdown />
      </nav>
    </header>
  );
};
