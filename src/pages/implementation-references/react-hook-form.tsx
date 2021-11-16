import { NextPage } from 'next';
import { useEffect } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { TextInput } from '@/components/forms/text-input';
import { Button } from 'antd';
interface ISampleForm {
  usuario: string;
  projeto: string;
}

const ReactHookFormPage: NextPage = () => {
  const RHForm = useForm();

  const onSubmit: SubmitHandler<ISampleForm> = data =>
    console.log('Submit', data);

  const formChanges = RHForm.watch();
  useEffect(() => console.log('formChanges', formChanges), [formChanges]);

  return (
    <FormProvider {...RHForm}>
      <form
        onSubmit={RHForm.handleSubmit(onSubmit)}
        className="w-full flex flex-col space-y-4 justify-center items-center"
      >
        <TextInput name="usuario" placeholder="usuario" />
        <TextInput name="projeto" placeholder="projeto" />
        <h1>{formChanges.value}</h1>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </form>
    </FormProvider>
  );
};

export default ReactHookFormPage;
