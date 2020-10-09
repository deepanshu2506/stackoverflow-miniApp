import { StackOverFlowGet } from "../../utils/Requests";
import { data } from "../../dummy";

export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const LOADING_STATE = "LOADING_STATE";

const setQuestions = (questions, hasMore) => ({
  type: FETCH_QUESTIONS,
  payload: { questions, hasMore },
});

const setLoading = (loadState) => ({ type: LOADING_STATE, payload: loadState });

const FetchQuestions = () => async (dispatch, getState) => {
  try {
    setLoading(true);
    const { items, has_more } = await StackOverFlowGet({
      page: getState().data.nextPage,
    });
    return dispatch(setQuestions(items, has_more));
  } catch (err) {}
};
export const getQuestions = () => async (dispatch) => {
  await Promise.all([dispatch(FetchQuestions())]);
  return dispatch(setLoading(false));
};
