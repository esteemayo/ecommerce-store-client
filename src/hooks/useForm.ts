import { useCallback, useState } from 'react';

export const useForm = <T extends object, U extends object>(
  callback: () => void,
  initialState: T,
  initialError: U,
  validate: (data: T) => U,
  onClose?: () => void
) => {
  const [errors, setErrors] = useState<U>(initialError);
  const [formData, setFormData] = useState<T>(initialState);

  const handleClose = useCallback(() => {
    setFormData(initialState);
    onClose?.();
    errors && setErrors(initialError);
  }, [errors, initialError, initialState, onClose]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: input }) => {
      const { name, value } = input;
      setFormData((prev) => ({ ...prev, [name]: value }));
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
      setErrors(initialError);

      callback();
      setFormData(initialState);
    },
    [callback, formData, initialError, initialState, validate]
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
