import { useCallback, useState } from "react";

/**
 * Minimal form state manager.
 *  - values / errors / touched / status
 *  - validate(values) → { field: message }
 *  - onSubmit(values) → Promise
 */
export default function useForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [result, setResult] = useState(null);

  const handleChange = useCallback(
    (e) => {
      const { name, type, value, checked } = e.target;
      const next = type === "checkbox" ? checked : value;
      setValues((v) => {
        const updated = { ...v, [name]: next };
        // re-validate a field live once the user has interacted with it
        if (touched[name]) setErrors((err) => ({ ...err, [name]: validate(updated)[name] }));
        return updated;
      });
    },
    [touched, validate]
  );

  const handleBlur = useCallback(
    (e) => {
      const { name } = e.target;
      setTouched((t) => ({ ...t, [name]: true }));
      setErrors((err) => ({ ...err, [name]: validate(values)[name] }));
    },
    [validate, values]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])));
    if (Object.keys(found).length) {
      document.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    setStatus("submitting");
    try {
      setResult(await onSubmit(values));
      setStatus("success");
    } catch (err) {
      setResult(err);
      setStatus("error");
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus("idle");
    setResult(null);
  };

  /** Spread onto an input: <input {...register("email")} /> */
  const register = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  return { values, errors, status, result, register, handleChange, handleSubmit, reset };
}
