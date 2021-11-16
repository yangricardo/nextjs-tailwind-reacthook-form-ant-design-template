import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="w-full flex flex-col space-y-4 justify-center items-center">
      <Link href="/implementation-references">Implementation References</Link>
    </div>
  );
};

export default Home;
