import React from "react";
import PaginationItems from "../Pagination/Pagination";
import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.scss";

const UserList = ({ userList }) => {
  if (!userList?.length) return null;

  return (
    <div>
      <div className={styles.UserListWrapper}>
        {userList.map(userData => {
          const { id } = userData;

          return <UserItem userData={userData} key={id} />;
        })}
      </div>
      <PaginationItems />
    </div>
  );
};

export default UserList;
