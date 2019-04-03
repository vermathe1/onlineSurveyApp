import React, { Component } from 'react'

export class Fields extends Component {
  static propTypes = {}

  constructor(props){
    super(props);
    this.state = {
      ans : this.props.ans
    }
  }

componentWillReceiveProps(nextprops){
  if(nextprops.index !== this.props.index){
    this.setState({
      ans:nextprops.ans
    })
  }
}

  onChange=(e)=>{
    this.props.setUserAnswer(this.props.index,e.target.value);
    this.setState({ans:e.target.value});
  }

  render () {
    return (
      <div className="answer">
        <input type="text" value={this.state.ans} onChange={this.onChange}/>
      </div>
    )
  }
}

