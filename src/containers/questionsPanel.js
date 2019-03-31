import React, { PropTypes, Component } from 'react'
import { Question } from '../components/question';
import { Fields } from '../components/fields';
import { Button } from '../components/button';
import { connect } from 'react-redux';

class QuestionsPanel extends Component {
  static propTypes = {}
  constructor(props){
  	super(props);
  }
  render () {
  	let page = Number(this.props.match.params.pagenumber);
  	let index = page-1;
  	let nextpage = page+1;
  	let prevPage = page-1;
    return (
    	<div>
	      <Question qst = { this.props.questionsAnswer[index].question } />
	      <Fields />
	      <Button index ={ nextpage } text="Next" />
	      { page !=1 && <Button index ={ prevPage } text="Back" /> }
      	</div>
    )
  }
}

const mapStateToProps = (state) => {
	return {questionsAnswer: state.questionsAnswer};
};

export default connect(mapStateToProps)(QuestionsPanel);
