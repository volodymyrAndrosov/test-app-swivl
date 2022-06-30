import { setUsers, setIsFetching } from "../reducers/usersReducer";
import axios from "axios";

export const getUsers = props => {
  const { per_page = 100, since = 1 } = props || {};

  return async dispatch => {
    dispatch(setIsFetching(true));
    const response = await axios.get(`https://api.github.com/users?per_page=${per_page}&since=${since}`);
    dispatch(setUsers(response.data));
    dispatch(setIsFetching(false));
  };
};
