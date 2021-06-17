import React from 'react';

import socialLinksData from '../../constants/socialLinks'

import './social-icons-section.styles.scss'

const SocialIconsSection = ({ styleClass }) => {
  const links = socialLinksData.map(link => {
    return (
      <li key={link.id}>
        <a href={link.url} className="social-link">
          {link.icon}
        </a>
      </li>
    )
  })

  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}

export default SocialIconsSection;