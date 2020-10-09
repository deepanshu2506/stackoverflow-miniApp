import { FETCH_QUESTIONS, LOADING_STATE } from "../actions/questionsActions";

const initialState = {
  questions: [],
  hasMore: true,
  isLoading: false,
  nextPage: 1,
};
const QuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        questions: [...state.questions, ...action.payload.questions],
        hasMore: action.payload.hasMore,
        nextPage: state.nextPage + 1,
      };
    case LOADING_STATE:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default QuestionsReducer;
