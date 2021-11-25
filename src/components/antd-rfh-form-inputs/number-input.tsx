import { InputNumber } from 'antd';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps, RHFGenericValueType, ValueType } from '.';
import { Label } from './label';
export interface INumberInputProps<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  disabled?: boolean;
  min?: ValueType;
  max?: ValueType;
  defaultValue?: number;
  step?: ValueType;
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
        <Label name={name} label={label} tooltip={tooltip}>
          <InputNumber
            onChange={value => setValue(name, value as RHFGenericValueType)}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            min={min as RHFGenericValueType}
            max={max as RHFGenericValueType}
            defaultValue={defaultValue as RHFGenericValueType}
            step={step as RHFGenericValueType}
            style={{ width: '100%' }}
          />
        </Label>
      )}
    />
  );
};
