import React from 'react'

import { ContactPageWrapper } from '../Styles/Pages/Contact';
import ContactForms from '../Components/Presentations/Contact/ContactForms'
import { SubTitle } from '../Styles/Text';

const Contact = () => {

  return (
    <ContactPageWrapper>
      <SubTitle>
        contact
    </SubTitle>
      <ContactForms />
    </ContactPageWrapper>
  )
}

export default Contact
