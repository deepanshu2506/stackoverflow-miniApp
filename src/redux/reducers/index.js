import { combineReducers } from "redux";
import QuestionsReducer from "./questionsReducer";

const rootReducer = combineReducers({
  data: QuestionsReducer,
});
export default rootReducer;
