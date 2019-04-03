import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <div className="button">
         <Link to ="/survey/1"> Start the survey </Link>
       </div>
        
    )
  }
}
