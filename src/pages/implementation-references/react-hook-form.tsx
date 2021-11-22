import { NextPage } from 'next';
import { useEffect } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { TextInput } from '@/components/forms/text-input';
import { Button, Divider, Form } from 'antd';
import { FileDropzone } from '@/components/forms/file-dropzone';
import { FileWithPath } from 'file-selector';
import { SelectInput } from '@/components/forms/select-input';
import { RadioInput } from '@/components/forms/radio-input';
import { CheckGroupInput } from '@/components/forms/check-group-input';
import { CheckInput } from '@/components/forms/checkbox-input';
import { SwitchInput } from '@/components/forms/switch-input';
import { NumberInput } from '@/components/forms/number-input';
interface ISampleForm {
  text: string;
  number: number;
  password: string;
  file: FileWithPath[];
  simpleSelect: string;
  multipleSelect: string[];
  tagsSelect: string[];
  radioInput: string;
  checkGroupInput: string[];
  checkInput: boolean;
  switchInput: boolean;
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
        layout={'vertical'}
        onSubmitCapture={RHForm.handleSubmit(onSubmit)}
        className="w-full flex flex-col space-y-2 justify-center items-center"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <TextInput name="simpleTextInput" label="Simple Text Input" />
          <TextInput
            name="disabledText"
            label="Disabled Text Input"
            disabled
            defaultValue={'Disabled text content'}
          />
          <TextInput name="password" label="Senha" type="password" />
          <TextInput
            name="celphone"
            label="Celular"
            type="mask"
            mask="+55 (11) 1111-11111"
            placeholder="+55 (11) 1111-11111"
          />
          <TextInput
            name="textArea"
            label="Text Area"
            type="text-area"
            rows={6}
            maxLength={1000}
          />
          <NumberInput<ISampleForm>
            name="number"
            placeholder="Numero"
            label="Numero"
          />
        </div>
        <FileDropzone<ISampleForm> name="file" label="Arquivo" />
        {RHForm.watch('file')?.map(file => file.name)}
        <Divider />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <RadioInput<ISampleForm>
            label="Radio Input"
            name="radioInput"
            buttonStyle="solid"
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
          <RadioInput<ISampleForm>
            label="Radio Input"
            name="radioInput"
            buttonStyle="outline"
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
          <CheckGroupInput<ISampleForm>
            name="checkGroupInput"
            label="Check Group Input"
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
          <CheckInput<ISampleForm> name="checkInput" label="Checkbox Input" />
          <SwitchInput<ISampleForm>
            name="switchInput"
            label="Switch Input"
            checkedChildren={'Activated'}
            unCheckedChildren={'Deactivated'}
          />
          <SwitchInput<ISampleForm>
            name="switchInput"
            label="Switch Input"
            checkedChildren={'Activated'}
            unCheckedChildren={'Deactivated'}
            loading
            // disabled
          />
        </div>

        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form>
    </FormProvider>
  );
};

export default ReactHookFormPage;
