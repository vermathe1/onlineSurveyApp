import React, { PropTypes } from 'react'

export function Progressbar (props) {
  return (
  	<div className="progressbar">
  		<div className="progress" style={{flex:props.progress}}></div>
  		<div className="leftpart" style={{flex:1-props.progress}}></div>
  	</div>
  )
}

Progressbar.defaultProps = {
  style: {},
  incompleteBackgroundColor: '#fff'
}
