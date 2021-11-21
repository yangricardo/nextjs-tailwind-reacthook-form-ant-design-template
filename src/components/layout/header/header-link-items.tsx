import { MenuIcon } from '@/components/icons/menu';
import { IHeaderLink } from './header-link';

export const headerLinkItems: IHeaderLink[] = [
  {
    href: '/implementation-references/nextjs',
    content: 'NextJS',
  },
  {
    href: '/implementation-references/ant-design',
    content: 'Ant Design',
  },
  {
    href: '/implementation-references/ant-design',
    content: 'Ant Design',
  },
  {
    href: '/implementation-references/react-hook-form',
    content: 'React Hook Form',
  },
  {
    href: '/implementation-references/sample-values-api',
    content: 'Sample Values CRUD',
  },
  {
    href: '/',
    content: <MenuIcon className={'h-8 w-8'} />,
  },
];
