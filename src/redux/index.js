import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import Thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(Thunk))
);
