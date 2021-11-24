import { FieldValues, Path } from 'react-hook-form';
import { CheckGroupInput } from '../check-group-input';
import { CheckInput } from '../checkbox-input';
import { FileDropzone } from '../file-dropzone';
import { NumberInput } from '../number-input';
import { RadioInput } from '../radio-input';
import { SelectInput } from '../select-input';
import { SwitchInput } from '../switch-input';
import { TextInput } from '../text-input';

type ComponentType =
  | 'text'
  | 'switch'
  | 'check-group'
  | 'checkbox'
  | 'file-dropzone'
  | 'number'
  | 'radio'
  | 'select';

export interface IFieldArrayInputRender<
  TFieldArrayValues extends FieldValues = any,
> {
  name: Path<TFieldArrayValues>;
  component: ComponentType;
  componentProps: any;
}

export const FieldArrayInputRender = <
  TFieldArrayValues extends FieldValues = any,
>({
  name,
  component,
  componentProps,
}: IFieldArrayInputRender<TFieldArrayValues>) => {
  const fullProps = {
    name,
    ...componentProps,
  };
  switch (component) {
    case 'file-dropzone':
      return <FileDropzone {...fullProps} />;
    case 'select':
      return <SelectInput {...fullProps} />;
    case 'radio':
      return <RadioInput {...fullProps} />;
    case 'radio':
      return <RadioInput {...fullProps} />;
    case 'check-group':
      return <CheckGroupInput {...fullProps} />;
    case 'checkbox':
      return <CheckInput {...fullProps} />;
    case 'number':
      return <NumberInput {...fullProps} />;
    case 'switch':
      return <SwitchInput {...fullProps} />;
    case 'text':
    default:
      return <TextInput {...fullProps} />;
  }
};
