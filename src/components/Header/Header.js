import React from "react";
import styles from "./Header.module.scss";
import * as localizationKeys from "../../consts/localizationKeys";
import { useNavigate } from "react-router-dom";
import * as routeNames from "../../consts/routeNames";

const Header = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(routeNames.HOME_ROUTE_NAME);
  };

  return (
    <div onClick={onClick} className={styles.Header}>
      {localizationKeys.HEADER_TEXT}
    </div>
  );
};

export default Header;
