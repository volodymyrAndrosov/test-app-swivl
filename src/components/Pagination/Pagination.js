import React from "react";
import Pagination from "rc-pagination";
import * as paginationKeys from "../../consts/paginationKeys";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageGap, fetchCurrentPage } from "../../state/actions/pages";
import { makeSelectPages } from "../../state/selectors/pages";

const PaginationItems = () => {
  const { currentPage } = useSelector(makeSelectPages());
  const dispatch = useDispatch();

  const onChange = page => {
    const currentPageGap = page * paginationKeys.DEFAULT_PAGE_SIZE;

    dispatch(fetchPageGap(currentPageGap));
    dispatch(fetchCurrentPage(page));
  };

  return (
    <Pagination
      onChange={onChange}
      current={currentPage}
      defaultPageSize={paginationKeys.DEFAULT_PAGE_SIZE}
      total={paginationKeys.MAX_PAGES}
    />
  );
};

export default PaginationItems;
