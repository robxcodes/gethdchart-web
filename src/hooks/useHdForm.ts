import { useMemo } from "react";
import { useForm } from "react-hook-form"

export interface HDFormType {
  design: Record<string, string>,
  personality: Record<string, string>,
}

export const useHdForm = () => {
  const {
    register,
    getValues,
    formState: { isValid },
  } = useForm<HDFormType>()

  const designValues = getValues('design');
  const personalityValues = getValues('personality');

  const result = useMemo(() => {
    if (!isValid) {
      return undefined;
    }

    return {
      design: Object.entries(designValues).reduce(
        (designMap, [key, val]) => ({
          ...designMap,
          [key]: val.split('.').map(Number)
        }),
        {}
      ),
      personality: Object.entries(personalityValues).reduce(
        (personalityMap, [key, val]) => ({
          ...personalityMap,
          [key]: val.split('.').map(Number)
        }),
        {}
      )
    }

  }, [isValid, designValues, personalityValues])

  return {
    register,
    result,
    isValid,
  }
}