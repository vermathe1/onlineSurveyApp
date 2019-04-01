import { data } from '../data';

export const surveyQuestions = (state = data, action) => {
  var i=0;
  switch (action.type) {
    case 'setPageData':
      return state.questionsAnswer.map(data=>{
        if(action.index-1 ===i){
          i++;
          return {...data,answer:action.answer }
        }else{
          i++;
          return data;
        }
        
      })

    //return Object.assign({},state,{currentIndex:action.currentIndex , completed: action.completed});
    default:
      return state;
  }
};