import { MenuIcon } from '@/components/icons/menu';
import { Dropdown } from 'antd';
import { HeaderDropdownMenu } from './header-dropdown-menu';

export const HeaderDropdown = () => (
  <Dropdown overlay={HeaderDropdownMenu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <MenuIcon className={'h-8 w-8'} />
    </a>
  </Dropdown>
);
