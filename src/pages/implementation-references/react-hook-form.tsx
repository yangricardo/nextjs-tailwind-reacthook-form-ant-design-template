import { NextPage } from 'next';
import { SubmitHandler } from 'react-hook-form';
import { TextInput } from '@/components/antd-rfh-form-inputs/text-input';
import { Button, Divider } from 'antd';
import { FileDropzone } from '@/components/antd-rfh-form-inputs/file-dropzone';
import { FileWithPath } from 'file-selector';
import { SelectInput } from '@/components/antd-rfh-form-inputs/select-input';
import { RadioInput } from '@/components/antd-rfh-form-inputs/radio-input';
import { CheckGroupInput } from '@/components/antd-rfh-form-inputs/check-group-input';
import { CheckInput } from '@/components/antd-rfh-form-inputs/checkbox-input';
import { SwitchInput } from '@/components/antd-rfh-form-inputs/switch-input';
import { NumberInput } from '@/components/antd-rfh-form-inputs/number-input';
import { AntdRhFormProvider } from '@/components/antd-rfh-form-inputs/antd-rfh-form-provider';
import Joi from 'joi';

interface ISampleForm {
  text: string;
  number: number;
  maskedInput: string;
  textArea: string;
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
  const onSubmit: SubmitHandler<ISampleForm> = data =>
    console.log('Submit', data);

  const validationSchema = Joi.object<ISampleForm>({
    text: Joi.string().required(),
    checkInput: Joi.boolean().default(false),
    switchInput: Joi.boolean().default(false),
    simpleSelect: Joi.string().required(),
    multipleSelect: Joi.array().items(Joi.string()).min(1),
    tagsSelect: Joi.array().items(Joi.string()).min(1),
    checkGroupInput: Joi.array().min(1),
    file: Joi.array().min(1),
    number: Joi.number().integer().required(),
    password: Joi.string().required(),
    radioInput: Joi.string().required(),
  });

  return (
    <AntdRhFormProvider<ISampleForm>
      formName={'sample-react-hook-form'}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <TextInput<ISampleForm> name="text" label="Simple Text Input" />
        <TextInput<ISampleForm>
          name="text"
          label="Disabled Text Input"
          disabled
          defaultValue={'Disabled text content'}
        />
        <TextInput<ISampleForm> name="password" label="Senha" type="password" />
        <TextInput<ISampleForm>
          name="maskedInput"
          label="Celular"
          type="mask"
          mask="+55 (11) 1111-11111"
          placeholder="+55 (11) 1111-11111"
        />
        <TextInput<ISampleForm>
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
    </AntdRhFormProvider>
  );
};

export default ReactHookFormPage;
