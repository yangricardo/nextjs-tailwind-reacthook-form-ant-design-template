import Link from 'next/link';
import { ReactNode } from 'react';

export interface IHeaderLink {
  href?: string;
  content?: string | ReactNode;
}

export const HeaderLink = ({ href, content }: IHeaderLink) => (
  <Link href={href || '/'}>
    <span className="hover:text-gray-500 hover:underline text-gray-600 flex flex-row justify-center items-center p-1 cursor-pointer font-mono">
      {content}
    </span>
  </Link>
);
