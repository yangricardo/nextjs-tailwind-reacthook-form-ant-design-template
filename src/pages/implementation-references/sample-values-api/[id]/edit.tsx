import { NextPage } from 'next';
import { ValueSampleApiForm } from '@/components/modules/values/ValueSampleApiForm';
import { useValuesResourceSampleApiClient } from '@/hooks/sample-api/values-context.hook';
import { useEffect, useState } from 'react';
import { ValueDTO } from '@/backend/modules/value/ValueDTO';
import { useRouter } from 'next/dist/client/router';
import { message } from 'antd';

const EditSampleValuesApiPage: NextPage = () => {
  const { getValueById } = useValuesResourceSampleApiClient();
  const [defaultValue, setDefaultValue] = useState<ValueDTO>();
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id as string;
    if (id) {
      try {
        getValueById(parseInt(id)).then(data => setDefaultValue(data));
      } catch (error) {
        message.error('Value not found');
        router.back();
      }
    }
  }, [router.query.id]);
  return (
    <>
      {defaultValue && (
        <ValueSampleApiForm mode="edit" defaultValues={defaultValue} />
      )}
    </>
  );
};

export default EditSampleValuesApiPage;
