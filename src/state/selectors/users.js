import { createSelector } from "reselect";

const selectGlobal = state => state;

const makeSelectUsers = () => createSelector(selectGlobal, state => state.users);

export { makeSelectUsers };
