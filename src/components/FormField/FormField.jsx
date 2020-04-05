import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  OutlinedInput
} from "@material-ui/core";

const FormField = props => {
  const {
    name,
    label,
    type,
    variant,
    value,
    onChange,
    endAdornment,
    labelWidth,
    fullWidth,
    ...rest
  } = props;

  return (
    <FormControl variant={variant} fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}

      {variant === "outlined" ? (
        <OutlinedInput
          name={name}
          type={type ? type : "text"}
          value={value}
          onChange={onChange}
          endAdornment={endAdornment}
          labelWidth={labelWidth}
          {...rest}
        />
      ) : (
        <Input
          name={name}
          type={type ? type : "text"}
          value={value}
          onChange={onChange}
          endAdornment={endAdornment}
          {...rest}
        />
      )}
    </FormControl>
  );
};

export default FormField;
