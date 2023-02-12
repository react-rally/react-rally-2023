import React from 'react'

export default (props) => {
  return (
    <a href={props.href} aria-label={props.type} target="_blank" className={`Icon Icon--${props.type}`}>
      <i className={`fa fa-${props.type}`}/>
    </a>
  )
}
