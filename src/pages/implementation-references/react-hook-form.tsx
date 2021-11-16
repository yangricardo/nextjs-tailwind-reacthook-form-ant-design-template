import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { TextInput } from '@/components/forms/text-input';
interface ISampleForm {
  value: string;
}

const ReactHookFormPage: NextPage = () => {
  const RHForm = useForm();
  const onSubmit: SubmitHandler<ISampleForm> = data => console.log(data);
  const formChanges = RHForm.watch();
  useEffect(() => console.log(formChanges), [formChanges]);
  return (
    <FormProvider {...RHForm}>
      <form
        onSubmit={RHForm.handleSubmit(onSubmit)}
        className="w-full flex flex-col space-y-4 justify-center items-center"
      >
        <TextInput name="value" placeholder="" />
        <h1>{formChanges.value}</h1>
      </form>
      <div className="w-full flex flex-col space-y-4 justify-center items-center">
        <Link href="/">Home</Link>
      </div>
    </FormProvider>
  );
};

export default ReactHookFormPage;
