import Link from 'next/link';
import { ReactNode } from 'react';

export interface IHeaderLink {
  href?: string;
  content?: string | ReactNode;
}

export const HeaderLink = ({ href, content }: IHeaderLink) => (
  <Link href={href || '/'}>
    <span
      className="h-full flex flex-row justify-center items-center p-2 cursor-pointer
        text-gray-600 font-semibold hover:bg-blue-100 hover:shadow-inner
        "
    >
      {content}
    </span>
  </Link>
);
