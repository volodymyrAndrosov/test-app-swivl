import { setPageGap, setCurrentPage } from "../reducers/pagesReducer";

export const fetchPageGap = data => {
  return async dispatch => {
    dispatch(setPageGap(data));
  };
};

export const fetchCurrentPage = data => {
  return async dispatch => {
    dispatch(setCurrentPage(data));
  };
};
