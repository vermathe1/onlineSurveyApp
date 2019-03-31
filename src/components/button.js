import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

Button.propTypes = {

}

export function Button (props) {
  return (
  	<Link to={`/survey/${props.index}`}>{props.text}</Link>
  )
}
