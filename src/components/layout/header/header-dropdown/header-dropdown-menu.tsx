import { Link } from '@/components/ui/link';
import { Menu } from 'antd';
import React from 'react';
import { headerLinkItems } from '../header-link-items';

export const HeaderDropdownMenu = (
  <Menu>
    {headerLinkItems
      .filter(({ isDropdown }) => isDropdown)
      .map(({ content, href, divider }, index) => (
        <React.Fragment key={`header-dropdown-menu-item-${index}`}>
          <Menu.Item
            key={`header-dropdown-menu-item-${index}`}
            className="hover:bg-blue-300"
          >
            <Link href={href!}>{content}</Link>
          </Menu.Item>
          {divider && <Menu.Divider />}
        </React.Fragment>
      ))}
  </Menu>
);
