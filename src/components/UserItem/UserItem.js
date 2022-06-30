import React from "react";
import styles from "./UserItem.module.scss";
import { useNavigate } from "react-router-dom";
import * as routeNames from "../../consts/routeNames";

const UserItem = props => {
  const { login, html_url, avatar_url, id } = props.userData;
  const navigate = useNavigate();

  const onClick = id => {
    navigate(`${routeNames.TO_USER_PAGE_ROUTE_NAME}${id}`);
  };

  return (
    <div className={styles.UserItem} onClick={() => onClick(id)}>
      <img src={avatar_url} alt={login} className={styles.Img} />
      <div className={styles.Text}>{login}</div>
      <a className={styles.Link} href={html_url}>
        Link
      </a>
    </div>
  );
};

export default UserItem;
