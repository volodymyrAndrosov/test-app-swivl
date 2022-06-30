import React from "react";
import { useParams } from "react-router-dom";
import { makeSelectUsers } from "../../state/selectors/users";
import { useSelector } from "react-redux";
import styles from "./UserPage.module.scss";

const UserPage = () => {
  const { id } = useParams();
  const { users } = useSelector(makeSelectUsers());
  const currentUser = users.find(user => user.id === Number(id));

  if (currentUser) {
    const { login, avatar_url, html_url } = currentUser;

    return (
      <div className={styles.Container}>
        <h1>{login}</h1>
        <img src={avatar_url} alt='' className={styles.Image} />
        <a href={html_url}>Link to profile</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsa aspernatur non fugit sit perferendis a
          enim doloremque dolor temporibus molestiae adipisci nisi hic odio, dignissimos in veritatis ad quae atque.
          Eligendi neque fugit pariatur velit, consequuntur quisquam sequi aperiam cupiditate sint! Ipsum ratione quas
          amet nam ea corporis accusantium voluptates praesentium. Doloribus odit aspernatur, vitae natus ratione
          accusantium labore optio sapiente cumque reprehenderit, explicabo suscipit iure! Corrupti, sapiente minima quo
          laudantium repudiandae porro voluptas excepturi veniam. Libero fuga excepturi aspernatur ducimus accusamus,
          tempore rem aut rerum delectus quis doloribus deleniti vitae autem consequatur eligendi amet molestias
          laboriosam non id.
        </p>
      </div>
    );
  }

  return <div className={styles.NoUser}>user does not exists</div>;
};

export default UserPage;
