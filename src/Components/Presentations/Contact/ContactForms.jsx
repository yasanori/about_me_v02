import React, { useState } from 'react';
import TextInput from './TextInput'

import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';


const ContactForms = () => {

  const { register, handleSubmit, errors } = useForm()


  const Properties = [
    {
      name: "name",
      label: "name",
      type: "text",
      variant: "standard",
      multiline: false,
      rows: 1,
      register: register({ required: true }),
      errors: errors.name
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      variant: "standard",
      multiline: false,
      rows: 1,
      register: register({ required: true }),
      errors: errors.email
    },
    {
      name: "text",
      label: "text",
      type: "text",
      variant: "outlined",
      multiline: true,
      rows: 5,
      register: register({ required: true }),
      errors: errors.text
    },
  ]


  const submitForm = (data) => {
    alert(JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {
        Properties.map((property, i) =>

          <TextInput
            key={i}
            name={property.name}
            label={property.label}
            type={property.type}
            variant={property.variant}
            multiline={property.multiline}
            rows={property.rows}
            // fullWidth
            register={property.register}
            errors={property.errors}
          />
        )}
      <Button type="submit">
        送信
      </Button>
    </form>
  )
}

export default ContactForms
