import FormItem from 'antd/lib/form/FormItem';
import { PropsWithChildren } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
interface ILabelProps<TFormValues extends FieldValues = any> {
  name: Path<TFormValues>;
  label: string;
  tooltip?: string;
}

type ILabel<TFormValues extends FieldValues = any> = PropsWithChildren<
  ILabelProps<TFormValues>
>;

export const Label = <TFieldValues extends FieldValues>({
  name,
  children,
  label,
  tooltip,
}: ILabel<TFieldValues>) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <FormItem label={`${label}`} tooltip={tooltip} className="w-full">
      {children}
      <ErrorMessage errors={errors} name={name} />
    </FormItem>
  );
};
