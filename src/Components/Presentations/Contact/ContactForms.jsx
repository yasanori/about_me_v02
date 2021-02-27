import React from 'react';
import axios from 'axios';

import TextInput from './TextInput'

import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { FormWrapper } from '../../../Styles/Form';
import { SLACK_WEBHOOK_URL } from '../../../.slack_config';


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
      errors: errors.name,
      errorMessage: "必須項目です。"
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      variant: "standard",
      multiline: false,
      rows: 1,
      register: register({ required: true }),
      errors: errors.email,
      errorMessage: "必須項目です。"
    },
    {
      name: "text",
      label: "text",
      type: "text",
      variant: "outlined",
      multiline: true,
      rows: 5,
      register: register({ required: true }),
      errors: errors.text,
      errorMessage: "必須項目です。"
    },
  ]

  const submitForm = data => {
    const payload = {
      text: "お問い合わせがありました\n" +
        "お名前:" + data.name + "\n" +
        "Email:" + data.email + "\n" +
        "お問い合わせ内容:\n" + data.text
    }

    const jsonPayload = JSON.stringify(payload);

    fetch(SLACK_WEBHOOK_URL, {
      method: 'post',
      body: jsonPayload
    })
      // return axios.post(SLACK_WEBHOOK_URL, { jsonPayload })
      .then(() => {
        alert("お問い合わせ頂きありがとうございます。以下の内容にて受け付けました。\n")
      })
      .catch(() => {
        alert("大変申し訳ございません。\n現在こちらのフォームからお問い合わせが出来かなます。\nお手数ですがメールにてお問い合わせいただきますようお願いいたします。")

      })
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FormWrapper >
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
              errorMessage={property.errorMessage}
            />
          )}
        <Button type="submit">
          送信
      </Button>
      </FormWrapper>
    </form>
  )
}

export default ContactForms
