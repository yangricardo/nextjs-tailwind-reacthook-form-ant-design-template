import { NextPage } from 'next';
import { useEffect } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { TextInput } from '@/components/forms/text-input';
import { Button, Form, Tooltip } from 'antd';
import { FileDropzone } from '@/components/forms/file-dropzone';
import { FileWithPath } from 'file-selector';
import { PasswordInput } from '@/components/forms/password-input';
import { SelectInput } from '@/components/forms/select-input';
interface ISampleForm {
  text: string;
  password: string;
  file: FileWithPath[];
  simpleSelect: string;
  multipleSelect: string[];
  tagsSelect: string[];
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
        <TextInput<ISampleForm>
          name="text"
          placeholder="Texto"
          label="Texto"
          suffix={<Tooltip title="Extra information">?</Tooltip>}
        />
        <PasswordInput<ISampleForm>
          name="password"
          placeholder="Senha"
          label="Senha"
        />
        <FileDropzone<ISampleForm> name="file" label="Arquivo" />
        <SelectInput<ISampleForm>
          name="simpleSelect"
          label="Seletor Simples"
          options={[
            {
              label: 'Option 1',
              value: 'option 1',
            },
            {
              label: 'Option 2',
              value: 'option 2',
            },
          ]}
        />
        <SelectInput<ISampleForm>
          name="simpleSelect"
          label="Disabled Select"
          disabled={true}
          options={[
            {
              label: 'Option 1',
              value: 'option 1',
            },
            {
              label: 'Option 2',
              value: 'option 2',
            },
          ]}
        />
        <SelectInput<ISampleForm>
          name="simpleSelect"
          label="Loading Select"
          loading={true}
          options={[
            {
              label: 'Option 1',
              value: 'option 1',
            },
            {
              label: 'Option 2',
              value: 'option 2',
            },
          ]}
        />
        <SelectInput<ISampleForm>
          name="multipleSelect"
          label="Multiple Select"
          allowClear
          mode="multiple"
          options={[
            {
              label: 'Option 1',
              value: 'option 1',
            },
            {
              label: 'Option 2',
              value: 'option 2',
            },
          ]}
        />
        <SelectInput<ISampleForm>
          name="tagsSelect"
          label="Tags Select"
          allowClear
          mode="tags"
          options={[
            {
              label: 'Option 1',
              value: 'option 1',
            },
            {
              label: 'Option 2',
              value: 'option 2',
            },
          ]}
        />
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form>
    </FormProvider>
  );
};

export default ReactHookFormPage;
