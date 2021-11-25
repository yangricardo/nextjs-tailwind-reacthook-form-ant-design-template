import { Select } from 'antd';
import { ReactNode } from 'react';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';
import { IGenericInputProps } from '.';
import { Label } from './label';

export interface ISelectOption {
  label: string;
  value: any;
  groupLabel?: string;
  detail?: { [key: string]: any };
}

export interface ISelectInputProps<TFieldValues extends FieldValues>
  extends IGenericInputProps<TFieldValues> {
  options: ISelectOption[];
  loading?: boolean;
  mode?: 'multiple' | 'tags';
  filterOption?: boolean;
  onSearch?: (value: string) => void;
  notFoundContent?: ReactNode;
  showSearch?: boolean | undefined;
}

export const SelectInput = <TFieldValues extends FieldValues>({
  tooltip,
  name,
  placeholder,
  label,
  options,
  disabled,
  loading,
  allowClear,
  mode,
  defaultValue,
  filterOption = true,
  onSearch,
  notFoundContent,
  showSearch,
}: ISelectInputProps<TFieldValues>) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <Label name={name} label={label} tooltip={tooltip}>
          <Select
            onChange={onChange}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            options={options}
            disabled={disabled}
            loading={loading}
            allowClear={allowClear}
            mode={mode}
            showSearch={showSearch}
            defaultValue={defaultValue}
            filterOption={filterOption}
            onSearch={onSearch}
            notFoundContent={notFoundContent}
          />
        </Label>
      )}
    />
  );
};
