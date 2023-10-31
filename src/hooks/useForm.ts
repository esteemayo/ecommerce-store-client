import { ChangeEventHandler, useCallback, useState } from 'react';

export const useForm = (
  callback: any,
  initialState = {},
  validate: any,
  onClose?: any
) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialState);

  const handleClose = useCallback(() => {
    setFormData(initialState);
    onClose?.();
    errors && setErrors({});
  }, [errors, initialState, onClose]);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = useCallback(({ target: input }) => {
    const { name, value } = input;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

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
