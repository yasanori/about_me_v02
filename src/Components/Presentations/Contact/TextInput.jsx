import React from 'react'

import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  const { register, errors } = useForm()
  return (
    <TextField
      name={props.name}
      label={props.label}
      type={props.type}
      variant={props.variant}
      multiline={props.multiline}
      rows={props.rows}
      // fullWidth
      inputRef={props.register}
      error={Boolean(props.errors)}
      helperText={props.errors && "必須項目です"}
    />
  )
}

export default TextInput
