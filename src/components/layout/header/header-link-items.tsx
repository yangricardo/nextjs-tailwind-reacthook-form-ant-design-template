import { IHeaderLink } from './header-link';

export const headerLinkItems: IHeaderLink[] = [
  {
    href: '/implementation-references/sample-values-api',
    content: 'Sample Values CRUD',
    isDropdown: true,
    isHeaderLink: false,
    divider: true,
  },
  {
    href: '/implementation-references/react-hook-form',
    content: 'React Hook Form',
    isDropdown: true,
    isHeaderLink: true,
  },
  {
    href: '/implementation-references/field-array-sample-form',
    content: 'Field Array Form',
    isDropdown: true,
    isHeaderLink: true,
    divider: true,
  },
  {
    href: '/implementation-references/nextjs',
    content: 'NextJS',
    isDropdown: true,
  },
  {
    href: '/implementation-references/ant-design',
    content: 'Ant Design',
    isDropdown: true,
  },
];
