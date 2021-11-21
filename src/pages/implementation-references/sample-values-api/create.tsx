import { NextPage } from 'next';
import { ValueSampleApiForm } from '@/components/modules/values/ValueSampleApiForm';

const CreateSampleValuesApiPage: NextPage = () => {
  return <ValueSampleApiForm mode="create" />;
};

export default CreateSampleValuesApiPage;
