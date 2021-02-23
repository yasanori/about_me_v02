import React from 'react'

import { SnsIconListsStyle, SnsIconList, SnsIconImage, SnsIconLink } from '../../../Styles/Pages/AboutMe'

const SnsIconLists = ({ SnsDetas }) => {
  return (
    <SnsIconListsStyle>
      {
        SnsDetas && SnsDetas.map((SnsDeta, i) =>
          <SnsIconList key={i}>
            <SnsIconLink href={SnsDeta.url} target="_blank">
              <SnsIconImage src={SnsDeta.icon} />
            </SnsIconLink>
          </SnsIconList>
        )
      }
    </SnsIconListsStyle>
  )
}

export default SnsIconLists
