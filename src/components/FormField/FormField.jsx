import React from "react";
import { useField } from "formik";
import { TextField } from "@material-ui/core";

const FormField = (props) => {
  const { type, ...rest } = props;

  const [field, meta] = useField(props);

  return (
    <TextField
      type={type ? type : "text"}
      error={!!meta.error}
      helperText={!!meta.error ? meta.error : null}
      {...field}
      {...rest}
    />
  );
};

export default FormField;
