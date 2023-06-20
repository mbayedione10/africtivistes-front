import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FormattedMessage, injectIntl } from "gatsby-plugin-react-intl";

const TagsMt = ({ tague }) => {
  if (!tague || !tague.node) {
    return null;
  }

  const { name } = tague.node;

  return (
    <ul>
      <li><a href="#" style={{ fontSize: '12px' }}>{name}</a></li>
    </ul>
  );
};

export default injectIntl(TagsMt);
