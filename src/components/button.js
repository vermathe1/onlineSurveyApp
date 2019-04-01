import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'

Button.propTypes = {

}

export function Button (props) {
  return (
  	<Link to={`/survey/${props.index}`} onClick={e=>saveAnswer(e,props.saveAnswer,props.ans,props.indexOfData)}>{props.text}</Link>
  )
}

const saveAnswer = (e,fn,ans,ind) => {
	e.preventDefault();
	fn(ind,ans);
}


