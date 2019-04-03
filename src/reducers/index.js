import { data } from '../data';

export const surveyQuestions = (state = data, action) => {

  switch (action.type) { 
    case "setPageData" :{
     return Object.assign({},state,{
        questionsAnswer: state.questionsAnswer.map(obj=>{
        if(obj.id === action.index){
          obj.answer = action.answer
          return obj;
        }else{
          return obj;
        }
      })
     });
    }
     default:
      return state;
  }
};