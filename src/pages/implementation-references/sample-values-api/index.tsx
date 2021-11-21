import { NextPage } from 'next';
import { useValuesResourceSampleApiClient } from '@/hooks/sample-api/values-context.hook';
import { useEffect } from 'react';
import { ValueCardList } from '@/components/modules/values/ValueCard';

const IndexSampleValuesApiPage: NextPage = () => {
  const { values, getValues } = useValuesResourceSampleApiClient();

  useEffect(() => {
    getValues();
  }, []);

  useEffect(() => {
    console.log('IndexSampleValuesApiPage', values);
  }, [values]);

  return (
    <div className="w-full flex flex-col content-center justify-center items-center">
      <ValueCardList values={values} />
    </div>
  );
};

export default IndexSampleValuesApiPage;
