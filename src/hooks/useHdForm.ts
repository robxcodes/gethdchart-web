import { useMemo } from "react";
import { useForm } from "react-hook-form"

export interface HDFormType {
  design: Record<string, string>,
  personality: Record<string, string>,
}

export const useHdForm = () => {
  const {
    register,
    watch,
    formState: { isValid },
  } = useForm<HDFormType>()

  const designValues = watch('design');
  const personalityValues = watch('personality');

  const result = (!isValid) ? undefined : {
    design: designValues,
    personality: personalityValues,
  };

  console.log('FORM', result)

  return {
    register,
    result,
    isValid,
  }
}