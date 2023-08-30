import { useCallback, useState } from 'react';

const useForm = (callback, initialState = {}, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length > 0) return setErrors(errors);
    setErrors({});

    callback();
    setFormData(initialState);
  }, [callback, initialState, validate]);

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
