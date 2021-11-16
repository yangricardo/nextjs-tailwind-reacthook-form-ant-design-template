import { NextPage } from 'next';

const Home: NextPage = () => {
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const privateKey = process.env.PRIVATE_KEY;
  return (
    <div className="w-full flex flex-col space-y-4 justify-center items-center">
      <h1>Navegue pelas páginas através do cabeçalho</h1>
      {publicKey}
      {privateKey}
    </div>
  );
};

export default Home;
