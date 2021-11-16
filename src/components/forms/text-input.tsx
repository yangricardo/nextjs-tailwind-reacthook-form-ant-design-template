import { Input } from 'antd';
import { Controller, useFormContext } from 'react-hook-form';

export interface ITextInput {
  name: string;
  placeholder: string;
}

export const TextInput = ({ name, placeholder }: ITextInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Input
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}
    />
  );
};
