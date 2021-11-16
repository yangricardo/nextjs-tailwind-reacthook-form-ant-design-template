import { FC } from 'react';
import { Footer } from './footer';
import { Header } from './header';
export const Layout: FC = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col space-y-4 bg-gray-50">
      <Header />
      <main className="w-full h-full max-w-7xl self-center">{children}</main>
      <Footer />
    </div>
  );
};
