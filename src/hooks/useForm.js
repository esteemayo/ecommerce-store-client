import { useCallback, useState } from 'react';

export const useForm = (callback, initialState = {}, validate) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    handleChange,
    handleSubmit,
  };
};
