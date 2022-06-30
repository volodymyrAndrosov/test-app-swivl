const SET_PAGE_GAP = "SET_PAGE_GAP";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const defaultState = {
  pageGap: 1,
  currentPage: 1,
};

export const pagesReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PAGE_GAP: {
      return {
        ...state,
        pageGap: payload,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: payload,
      };
    }
    default:
      return state;
  }
};

export const setPageGap = data => {
  return {
    type: SET_PAGE_GAP,
    payload: data,
  };
};

export const setCurrentPage = data => {
  return {
    type: SET_CURRENT_PAGE,
    payload: data,
  };
};
