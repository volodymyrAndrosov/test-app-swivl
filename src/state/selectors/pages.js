import { createSelector } from "reselect";

const selectGlobal = state => state;

const makeSelectPages = () => createSelector(selectGlobal, state => state.pages);

export { makeSelectPages };
