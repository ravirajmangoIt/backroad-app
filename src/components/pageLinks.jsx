import React from 'react'
import { pageLinks } from '../data'
const PageLinks = (props) => {
console.log(props.parentClass,'props.parentClass')
  return (
    <ul className={props.parentClass} id="nav-links">
    {pageLinks.map((link) => {
      return (
        <li key={link.id}>
          <a href={link.href} className={props.itemClass}>
            {link.text}
          </a>
        </li>
      );
    })}
  </ul>
  )
}

export default PageLinks