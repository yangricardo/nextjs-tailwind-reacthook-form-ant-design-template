import { UiDrawer } from '@/components/ui/ui-drawer';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="w-full flex flex-col space-y-4 justify-center items-center">
      <UiDrawer />
    </div>
  );
};

export default Home;
