import { InputNumber } from 'antd';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps, RHFGenericValueType } from '.';
import { Label } from './label';
export interface INumberInputProps<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  disabled?: boolean;
  min?: number;
  max?: number;
  defaultValue?: number;
  step?: string | number;
}

export const NumberInput = <TFieldValues extends FieldValues>({
  tooltip,
  name,
  placeholder,
  label,
  min,
  max,
  defaultValue,
  step,
}: INumberInputProps<TFieldValues>) => {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onBlur } }) => (
        <Label label={label} tooltip={tooltip}>
          <InputNumber
            onChange={value => setValue(name, value as RHFGenericValueType)}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            min={min}
            max={max}
            defaultValue={defaultValue}
            step={step}
            style={{ width: '100%' }}
          />
        </Label>
      )}
    />
  );
};
