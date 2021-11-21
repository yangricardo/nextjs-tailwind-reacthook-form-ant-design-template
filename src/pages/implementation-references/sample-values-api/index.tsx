import { NextPage } from 'next';
import Link from 'next/link';
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
      Valores Encontrados
      <Link href="/implementation-references/sample-values-api/create">
        Create New Value
      </Link>
      <ValueCardList values={values} />
    </div>
  );
};

export default IndexSampleValuesApiPage;
