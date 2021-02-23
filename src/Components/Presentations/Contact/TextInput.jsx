import React from 'react'

import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  console.log(props)
  const { register, errors } = useForm()
  const handleChange = (errors) => console.log(errors)
  return (
    <TextField
      name={props.name}
      label={props.label}
      type={props.type}
      variant={props.variant}
      multiline={props.multiline}
      rows={props.rows}
      // fullWidth
      // onChange={() => handleChange(errors)}
      inputRef={props.register}
      error={Boolean(props.errors)}
      helperText={props.errors && "恐縮ですが必須項目です。"}
    />
  )
}

export default TextInput
