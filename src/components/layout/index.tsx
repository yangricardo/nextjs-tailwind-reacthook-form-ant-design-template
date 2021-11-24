import { FC } from 'react';
import { Footer } from './footer';
import { Header } from './header';
export const Layout: FC = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-auto flex-col bg-gray-50">
      <Header />
      <main className="w-full relative z-40 flex flex-auto items-start max-w-7xl self-center p-2 py-4 bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};
