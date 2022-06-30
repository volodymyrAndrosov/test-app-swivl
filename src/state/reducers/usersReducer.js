const SET_USERS = "SET_USERS";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const defaultState = {
  users: [],
  isFetching: false,
};

export const usersReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USERS: {
      return {
        ...state,
        users: payload,
      };
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: payload,
      };
    }
    default:
      return state;
  }
};

export const setIsFetching = isFetching => {
  return {
    type: SET_IS_FETCHING,
    payload: isFetching,
  };
};

export const setUsers = data => {
  return {
    type: SET_USERS,
    payload: data,
  };
};
