import React, { PropTypes, Component } from 'react'
import { Button } from '../components/button';


export class Fields extends Component {
  static propTypes = {}

  onChange=(e)=>{
  	this.props.getUserAnswer(e.target.value)
  }

  render () {
    return (
    	<div>
    		<input type="text" value={this.props.ans} onChange={this.onChange}/>
    	</div>
    )
  }
}

