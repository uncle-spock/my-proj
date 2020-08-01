import React, { useState } from "react";
import { InputAdornment, IconButton, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useField } from "formik";

const PasswordField = props => {
  const { name, label, variant, isEndAdornment, fullWidth, ...rest } = props;

  const [field, meta] = useField(props);
  const [isViewPassword, setViewPassword] = useState(false);

  const handleClickShowPassword = () => {
    setViewPassword(!isViewPassword);
  };

  return (
    <TextField
      name={name}
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      type={isViewPassword ? "text" : "password"}
      error={!!meta.error}
      helperText={!!meta.error ? meta.error : null}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {isViewPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...field}
      {...rest}
    />
  );
};

export default PasswordField;
