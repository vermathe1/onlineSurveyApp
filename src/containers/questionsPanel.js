import React, { Component } from 'react'
import { Question } from '../components/question';
import { Fields } from '../components/fields';
import { Button } from '../components/button';
import { Progressbar } from '../components/progressbar';
import { Summarypage } from './summary';
import { connect } from 'react-redux';

class QuestionsPanel extends Component {
  render () {
    if(this.props.match.params.pagenumber >10){
      return(
        <div className="summary-page">
          <Progressbar progress={1}/>
          <Summarypage summary={this.props.questionsAnswer}/>
        </div>
        )
    }
    let page = Number(this.props.match.params.pagenumber);
    let index = page-1;
    let nextpage = page+1;
    let prevPage = page-1;
    let progress = (index/this.props.questionsAnswer.length);
    let qstn = this.props.questionsAnswer[index].question;
    let ans = this.props.questionsAnswer[index].answer;
    return (
    	<div className="mainContainer">
        <Progressbar progress={progress}/>
	      <Question qst = { qstn } />
	      <Fields setUserAnswer = { this.props.saveAnswer } index = { page } ans = {ans} />
        <div className="buttonSection">
          <Button index = { nextpage } text="Next"  disable = {!ans}/>
          { page!==1 && <Button index = { prevPage } text="Back" /> }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
    questionsAnswer: state.questionsAnswer,
    progress:state.progress,
  };
};

const mapDispatchToProps = (dispatch)=>({
	saveAnswer: (index,answer) => {dispatch({
		type:"setPageData",
		answer,
		index
	})}
});

export default connect(mapStateToProps,mapDispatchToProps)(QuestionsPanel);
