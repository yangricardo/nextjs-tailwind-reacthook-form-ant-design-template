import Link from 'next/link';
import { ReactNode } from 'react';

export interface IHeaderLink {
  href: string;
  content: string | ReactNode;
}

export const HeaderLink = ({ href, content }: IHeaderLink) => (
  <Link href={href}>
    <span className="p-4 h-full hover:bg-gray-600 hover:text-white transition duration-200 cursor-pointer">
      {content}
    </span>
  </Link>
);
