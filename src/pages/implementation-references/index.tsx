import { NextPage } from 'next';
import Link from 'next/link';

const ImplementationReferencesPage: NextPage = () => {
  return (
    <div className="w-full flex flex-col space-y-4 justify-center items-center">
      <Link href="/implementation-references/nextjs">NextJS</Link>
      <Link href="/implementation-references/ant-design">Ant Design</Link>
      <Link href="/implementation-references/react-hook-form">
        React Hook Form
      </Link>
      <Link href="/">Home</Link>
    </div>
  );
};

export default ImplementationReferencesPage;
