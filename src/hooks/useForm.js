import { useCallback, useState } from 'react';

export const useForm = (
  callback,
  initialState = {},
  validate,
  onClose,
) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialState);

  const handleClose = useCallback(() => {
    setFormData(initialState);
    onClose?.();
    errors && setErrors({});
  }, [errors, initialState, onClose]);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleFile = useCallback((value) => {
    setFormData((prev) => ({ ...prev, image: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (Object.keys(validate(formData)).length > 0) {
      setErrors(validate(formData));
      return;
    }
    setErrors({});

    callback();
    setFormData(initialState);
  }, [callback, formData, initialState, validate]);

  return {
    formData,
    errors,
    handleClose,
    handleChange,
    handleSubmit,
    setFormData,
  };
};
