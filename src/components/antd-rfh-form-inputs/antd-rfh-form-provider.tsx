import { createContext, PropsWithChildren, useEffect } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { Form } from 'antd';
import { FormLayout } from 'antd/lib/form/Form';

interface AntdRhFormContextDTO<TFormValues extends FieldValues = any> {
  RHForm: UseFormReturn<TFormValues, object>;
}

const AntdRhFormContext = createContext<AntdRhFormContextDTO>(
  {} as AntdRhFormContextDTO,
);

type IAntdRhFormProviderProps<TFormValues extends FieldValues = any> = {
  formName: string;
  onSubmit: SubmitHandler<TFormValues>;
  layout?: FormLayout;
  className?: string;
  hookFormProps?: UseFormProps<TFormValues>;
};

type IAntdRhFormProvider<TFormValues extends FieldValues = any> =
  PropsWithChildren<IAntdRhFormProviderProps<TFormValues>>;

export const AntdRhFormProvider = <TFormValues extends FieldValues = any>({
  children,
  onSubmit,
  formName,
  layout,
  className,
  hookFormProps,
}: IAntdRhFormProvider) => {
  const RHForm = useForm<TFormValues>(hookFormProps);

  const formChanges = RHForm.watch();
  useEffect(
    () => console.log(`${formName}::formChanges`, formChanges),
    [formChanges],
  );

  return (
    <AntdRhFormContext.Provider
      value={{
        RHForm,
      }}
    >
      <FormProvider {...RHForm}>
        <Form
          layout={layout || 'vertical'}
          onSubmitCapture={RHForm.handleSubmit(onSubmit)}
          className={
            className ||
            'w-full flex flex-col space-y-2 justify-center items-center'
          }
        >
          {children}
        </Form>
      </FormProvider>
    </AntdRhFormContext.Provider>
  );
};
