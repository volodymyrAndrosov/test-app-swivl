import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { usersReducer } from "./usersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { pagesReducer } from "./pagesReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  pages: pagesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
