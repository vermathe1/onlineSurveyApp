import React from 'react'
import { Link } from 'react-router-dom';

export function Button (props) {
	if(props.disable){
		return <span className="button">{props.text}</span>
	}
  return (
  	<button className="button">
  		<Link to={`/survey/${props.index}`} disabled={props.disable}> {props.text} </Link>
  	</button>
  )
}