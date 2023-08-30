import { useCallback, useState } from 'react';

const useForm = (callback, initialState = {}, validate) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  return {
    // 
  };
};

export default useForm;
