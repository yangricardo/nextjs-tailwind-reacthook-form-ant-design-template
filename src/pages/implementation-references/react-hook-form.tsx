import { NextPage } from 'next';
import { useEffect } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { TextInput } from '@/components/forms/text-input';
import { Button } from 'antd';
import { FileDropzone } from '@/components/forms/file-dropzone';
import { FileWithPath } from 'file-selector';
interface ISampleForm {
  usuario: string;
  projeto: string;
  file: FileWithPath[];
}

const ReactHookFormPage: NextPage = () => {
  const RHForm = useForm<ISampleForm>();

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
        <TextInput<ISampleForm> name="usuario" placeholder="usuario" label="" />
        <TextInput<ISampleForm> name="projeto" placeholder="projeto" label="" />
        <FileDropzone name="file" />
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </form>
    </FormProvider>
  );
};

export default ReactHookFormPage;
