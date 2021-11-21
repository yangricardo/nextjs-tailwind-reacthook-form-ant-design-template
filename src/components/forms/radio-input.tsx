import { Radio } from 'antd';
import { RadioGroupButtonStyle } from 'antd/lib/radio';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';

export interface IRadioOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface IRadioInputProps<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  options: IRadioOption[];
  disabled?: boolean;
  buttonStyle?: RadioGroupButtonStyle;
  direction?: 'horizontal' | 'vertical';
}

export const RadioInput = <TFieldValues extends FieldValues>({
  tooltip,
  name,
  label,
  options,
  disabled,
  buttonStyle,
}: IRadioInputProps<TFieldValues>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Label label={label} tooltip={tooltip}>
          <Radio.Group
            onChange={onChange}
            value={value}
            disabled={disabled}
            buttonStyle={buttonStyle}
          >
            {options.map(option => (
              <Radio.Button value={option.value} disabled={disabled}>
                {option.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Label>
      )}
    />
  );
};
