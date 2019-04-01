import React, { PropTypes, Component } from 'react'
import { Question } from '../components/question';
import { Fields } from '../components/fields';
import { Button } from '../components/button';
import { connect } from 'react-redux';

class QuestionsPanel extends Component {
  static propTypes = {}
  constructor(props){
  	super(props);
  	this.state = {
  		inputAnswer :""
  	}
  	this.getUserAnswer = this.getUserAnswer.bind(this);
  	this.saveUserAnswer = this.saveUserAnswer.bind(this);
  }

  getUserAnswer(ans){
  	return(
		this.setState({
			inputAnswer:ans
		})
	)
  } 

  saveUserAnswer = () =>{
  	this.props.saveAnswer()
  }

  render () {
  	let page = Number(this.props.match.params.pagenumber);
  	let index = page-1;
  	let nextpage = page+1;
  	let prevPage = page-1;
  	let qstn = this.props.questionsAnswer[index].question;
  	let ans = this.props.questionsAnswer[index].answer;
    return (
    	<div>
	      <Question qst = { qstn } />
	      <Fields ans = { this.state.inputAnswer || ans }  getUserAnswer = {this.getUserAnswer}/>
	      <Button index ={ nextpage } text="Next" saveAnswer={this.props.saveAnswer} ans ={ this.state.inputAnswer } indexOfData={index}/>
	      { this.props.currentpage !=1 && 
	      	<Button index ={ prevPage } text="Back" saveAnswer={this.saveUserAnswer} ans={ this.state.inputAnswer } indexOfData={index}/> 
	      }
      	</div>
    )
  }
}

const mapStateToProps = (state) => {
	return {questionsAnswer: state.questionsAnswer};
};

const mapDispatchToProps = (dispatch)=>({
	saveAnswer: (index,answer) => {dispatch({
		type:"setPageData",
		answer,
		index
	})},
});

export default connect(mapStateToProps,mapDispatchToProps)(QuestionsPanel);
