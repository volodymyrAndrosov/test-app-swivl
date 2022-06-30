import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../state/actions/users";
import { makeSelectUsers } from "../../state/selectors/users";
import { makeSelectPages } from "../../state/selectors/pages";

import Loader from "../Loader/Loader";
import UserList from "../UserList/UserList";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import * as localizationKeys from "../../consts/localizationKeys";
import * as paginationKeys from "../../consts/paginationKeys";

const Main = () => {
  const dispatch = useDispatch();
  const { users, isFetching } = useSelector(makeSelectUsers());
  const { pageGap } = useSelector(makeSelectPages());

  useDocumentTitle(localizationKeys.MAIN_PAGE_TITLE_TEXT);

  useEffect(() => {
    dispatch(
      getUsers({
        per_page: paginationKeys.DEFAULT_PAGE_SIZE,
        since: pageGap,
      })
    );
  }, [pageGap]);

  return <div>{isFetching ? <Loader /> : <UserList userList={users} />}</div>;
};

export default Main;
