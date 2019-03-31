import { data } from '../data';

export const surveyQuestions = (state = data, action) => {
  switch (action.type) {
    case 'getPageData':
    return Object.assign({},state,{currentIndex:action.currentIndex , completed: action.completed});
    default:
      return state;
  }
};