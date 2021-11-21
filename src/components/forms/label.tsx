import FormItem from 'antd/lib/form/FormItem';
import { FC } from 'react';

interface ILabel {
  label: string;
}

export const Label: FC<ILabel> = ({ children, label }) => (
  <FormItem label={`${label}`} className="w-full">
    {children}
  </FormItem>
);
