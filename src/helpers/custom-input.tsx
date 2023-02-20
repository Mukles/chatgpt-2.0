import { ErrorMessage, useField } from "formik";

const CustomInput = ({ ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <ErrorMessage name={props.name} component="div" />
    </>
  );
};

export default CustomInput;
