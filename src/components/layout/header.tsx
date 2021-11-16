import Link from 'next/link';
export const Header = () => {
  return (
    <header
      className={
        'w-full p-4 flex flex-col flex-1 items-center content-center shadow-sm'
      }
    >
      <nav className={'w-full max-w-7xl'}>
        <Link href="/">
          <span className="p-4 h-full hover:bg-gray-600 hover:text-white transition duration-200 cursor-pointer">
            Home
          </span>
        </Link>
      </nav>
    </header>
  );
};
