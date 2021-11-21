import { NextPage } from 'next';
import { useValuesResourceSampleApiClient } from '@/hooks/sample-api/values-context.hook';
import { useEffect, useState } from 'react';
import { ValueCard } from '@/components/modules/values/ValueCard';
import { useRouter } from 'next/dist/client/router';
import { ValueDTO } from '@/backend/modules/value/ValueDTO';
import { Button, message } from 'antd';

const DetailSampleValuesApiPage: NextPage = () => {
  const { getValueById, deleteValue } = useValuesResourceSampleApiClient();
  const [value, setValue] = useState<ValueDTO>();
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id as string;
    if (id) {
      try {
        getValueById(parseInt(id)).then(data => setValue(data));
      } catch (error) {
        message.error('Value not found');
        router.back();
      }
    }
  }, [router.query.id]);

  return (
    <div className="w-full flex flex-col space-y-4 content-center justify-center items-center">
      Detalhe do Valor
      {value && (
        <>
          <ValueCard {...value} />
          <div className="flex space-x-2">
            <Button
              onClick={() => {
                deleteValue(value?.id);
                router.back();
              }}
              type="ghost"
              danger
            >
              Delete
            </Button>
            <Button
              onClick={() => {
                router.push(
                  `/implementation-references/sample-values-api/${value.id}/edit`,
                );
              }}
              type="primary"
            >
              Edit
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailSampleValuesApiPage;
