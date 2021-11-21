import { useEffect } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { TextInput } from '@/components/forms/text-input';
import { Button, Form, message } from 'antd';
import { CreateValueDTO, ValueDTO } from '@/backend/modules/value/ValueDTO';
import { useValuesResourceSampleApiClient } from '@/hooks/sample-api/values-context.hook';
import { useRouter } from 'next/dist/client/router';

interface IValueSampleApiForm {
  mode: 'create' | 'edit';
  defaultValues?: ValueDTO;
}

export const ValueSampleApiForm = ({
  mode,
  defaultValues,
}: IValueSampleApiForm) => {
  const RHForm = useForm<ValueDTO>({
    defaultValues,
  });
  const { createValue, updateValue } = useValuesResourceSampleApiClient();
  const router = useRouter();

  const onSubmit: SubmitHandler<CreateValueDTO> = async data => {
    let response: ValueDTO;
    switch (mode) {
      case 'edit':
        response = await updateValue(1, data);
        message.success(`Value Id ${response.id} was updated`);
        break;
      case 'create':
        response = await createValue(data);
        message.success(`New value registered Id: ${response.id}`);
        break;
      default:
        break;
    }
    router.back();
  };

  const formChanges = RHForm.watch();
  useEffect(() => console.log('formChanges', formChanges), [formChanges]);

  return (
    <FormProvider {...RHForm}>
      <Form
        onSubmitCapture={RHForm.handleSubmit(onSubmit)}
        className="w-full flex flex-col space-y-4 justify-center items-center"
      >
        <TextInput<CreateValueDTO>
          name="value"
          placeholder="Valor"
          label="Valor"
        />
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form>
    </FormProvider>
  );
};
