import { NextPage } from 'next';
import { useEffect } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { TextInput } from '@/components/forms/text-input';
import { Button, Form } from 'antd';
import { FileDropzone } from '@/components/forms/file-dropzone';
import { FileWithPath } from 'file-selector';
import { PasswordInput } from '@/components/forms/password-input';
interface ISampleForm {
  text: string;
  password: string;
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
      <Form
        layout="vertical"
        onSubmitCapture={RHForm.handleSubmit(onSubmit)}
        className="w-full flex flex-col space-y-2 justify-center items-center"
      >
        <TextInput<ISampleForm> name="text" placeholder="Texto" label="Texto" />
        <PasswordInput<ISampleForm>
          name="password"
          placeholder="Senha"
          label="Senha"
        />
        <FileDropzone name="file" />
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form>
    </FormProvider>
  );
};

export default ReactHookFormPage;
