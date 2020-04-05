import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  OutlinedInput,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const PasswordField = props => {
  const {
    name,
    label,
    variant,
    value,
    onChange,
    isEndAdornment,
    labelWidth,
    fullWidth,
    ...rest
  } = props;

  const [isViewPassword, setViewPassword] = useState(false);

  const handleClickShowPassword = () => {
    setViewPassword(!isViewPassword);
  };

  return (
    <FormControl variant={variant} fullWidth={fullWidth}>
      {label && <InputLabel>{label}</InputLabel>}

      {variant === "outlined" ? (
        <OutlinedInput
          name={name}
          type={isViewPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          endAdornment={
            isEndAdornment ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {isViewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ) : null
          }
          labelWidth={labelWidth}
          {...rest}
        />
      ) : (
        <Input
          name={name}
          type={isViewPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          endAdornment={
            isEndAdornment ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {isViewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ) : null
          }
          {...rest}
        />
      )}
    </FormControl>
  );
};

export default PasswordField;
