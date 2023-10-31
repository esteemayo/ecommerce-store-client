import { ChangeEventHandler, useCallback, useState } from 'react';

export const useForm = (
  callback: any,
  initialState = {},
  validate: any,
  onClose?: any
) => {
  const [errors, setErrors] = useState<any>({});
  const [formData, setFormData] = useState<any>(initialState);

  const handleClose = useCallback(() => {
    setFormData(initialState);
    onClose?.();
    errors && setErrors({});
  }, [errors, initialState, onClose]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: input }) => {
      const { name, value } = input;
      setFormData((prev: any) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (Object.keys(validate(formData)).length > 0) {
        setErrors(validate(formData));
        return;
      }
      setErrors({});

      callback();
      setFormData(initialState);
    },
    [callback, formData, initialState, validate]
  );

  return {
    errors,
    formData,
    setFormData,
    handleClose,
    handleChange,
    handleSubmit,
  };
};
