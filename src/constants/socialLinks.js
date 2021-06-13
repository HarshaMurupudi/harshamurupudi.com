import React from "react"

import twitterIcon from '../assets/social-media-icons/twitter.svg'
import pinterestIcon from '../assets/social-media-icons/pinterest.svg'
import instagramIcon from '../assets/social-media-icons/instagram.svg'
import githubIcon from '../assets/social-media-icons/github.svg'
import dribbleIcon from '../assets/social-media-icons/dribble.svg'



const socailLink = [
  {
    id: 1,
    icon: <img src={twitterIcon} />,
    url: "https://www.twitter.com",
  },
  {
    id: 2,
    icon: <img src={pinterestIcon} />,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <img src={instagramIcon} />,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <img src={githubIcon} />,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <img src={dribbleIcon} />,
    url: "https://www.twitter.com",
  },
]
export default socailLink
// const links = data.map(link => {
//   return (
//     // <li key={link.id}>
//       <a href={link.url} className="social-link">
//         {link.icon}
//       </a>
//     // </li>
//   )
// })

// export default ({ styleClass }) => {
//   return (
//     <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
//   )
// }
