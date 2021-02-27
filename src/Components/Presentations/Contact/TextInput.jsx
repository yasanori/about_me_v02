import React from 'react'

import TextField from '@material-ui/core/TextField';

const TextInput = (props) => {
  const margin = {
    margin: 2 + "%"
  }
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
      helperText={props.errors && props.errorMessage}
      style={margin}
    />
  )
}

export default TextInput
