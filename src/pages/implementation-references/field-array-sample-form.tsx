import { NextPage } from 'next';
import { SubmitHandler } from 'react-hook-form';
import { Button } from 'antd';
import { FieldArrayInput } from '@/components/antd-rfh-form-inputs/field-array-input';
import { FileWithPath } from 'file-selector';
import { AntdRhFormProvider } from '@/components/antd-rfh-form-inputs/antd-rfh-form-provider';

interface IFieldArraySubForm {
  text: string;
  textArea: string;
  maskedText: string;
  switch: boolean;
  checkbox: boolean;
  checkgroup: string[];
  radio: string;
  singleSelect: string;
  multipleSelect: string[];
  tagsSelect: string[];
  file: FileWithPath[];
}

interface IFieldArrayForm {
  arrayInput: IFieldArraySubForm[];
}

const ReactHookFormPage: NextPage = () => {
  const onSubmit: SubmitHandler<IFieldArrayForm> = data =>
    console.log('Submit', data);
  return (
    <AntdRhFormProvider<IFieldArrayForm>
      formName={'sample-ant-rhf-field-array-form'}
      onSubmit={onSubmit}
      hookFormProps={{
        defaultValues: {
          arrayInput: [
            {
              text: '',
              textArea: '',
              maskedText: '',
              switch: false,
              checkbox: false,
              checkgroup: [],
              radio: '',
              singleSelect: '',
              multipleSelect: [],
              tagsSelect: [],
              file: [],
            },
          ],
        },
      }}
    >
      <FieldArrayInput<IFieldArrayForm, IFieldArraySubForm>
        prefixName="arrayInput"
        maxItems={3}
        inputs={[
          {
            name: 'text',
            component: 'text',
            componentProps: {
              label: 'Texto 1',
            },
          },
          {
            name: 'textArea',
            component: 'text',
            componentProps: {
              label: 'Texto Area',
              type: 'text-area',
            },
          },
          {
            name: 'maskedText',
            component: 'text',
            componentProps: {
              label: 'Mascara de Texto',
              type: 'mask',
              mask: '111.111.111-11',
            },
          },
          {
            name: 'switch',
            component: 'switch',
            componentProps: {
              label: 'Switch',
            },
          },
          {
            name: 'checkbox',
            component: 'checkbox',
            componentProps: {
              label: 'Checkbox',
            },
          },
          {
            name: 'checkgroup',
            component: 'check-group',
            componentProps: {
              label: 'Checkbox',
              options: [
                {
                  label: 'Option 1',
                  value: 'option 1',
                },
                {
                  label: 'Option 2',
                  value: 'option 2',
                },
              ],
            },
          },
          {
            name: 'radio',
            component: 'radio',
            componentProps: {
              label: 'Radio',
              options: [
                {
                  label: 'Option 1',
                  value: 'option 1',
                },
                {
                  label: 'Option 2',
                  value: 'option 2',
                },
              ],
            },
          },
          {
            name: 'singleSelect',
            component: 'select',
            componentProps: {
              label: 'Select',
              options: [
                {
                  label: 'Option 1',
                  value: 'option 1',
                },
                {
                  label: 'Option 2',
                  value: 'option 2',
                },
              ],
            },
          },
          {
            name: 'multipleSelect',
            component: 'select',
            componentProps: {
              label: 'Select',
              mode: 'multiple',
              options: [
                {
                  label: 'Option 1',
                  value: 'option 1',
                },
                {
                  label: 'Option 2',
                  value: 'option 2',
                },
              ],
            },
          },
          {
            name: 'tagsSelect',
            component: 'select',
            componentProps: {
              label: 'Creatable Multiple Select',
              mode: 'tags',
              options: [
                {
                  label: 'Option 1',
                  value: 'option 1',
                },
                {
                  label: 'Option 2',
                  value: 'option 2',
                },
              ],
            },
          },
          {
            name: 'file',
            component: 'file-dropzone',
            componentProps: {
              label: 'Arquivo',
            },
          },
        ]}
      />

      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </AntdRhFormProvider>
  );
};

export default ReactHookFormPage;
