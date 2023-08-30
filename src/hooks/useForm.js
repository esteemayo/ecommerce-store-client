import { useCallback, useState } from 'react';

const useForm = (callback, initialState = {}, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(({ target: input }) => {
    const { name, value } = input;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  return {
    // 
  };
};

export default useForm;
