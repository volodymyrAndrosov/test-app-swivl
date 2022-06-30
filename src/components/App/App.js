import styles from "./App.module.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import UserPage from "../UserPage/UserPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import * as routeNames from "../../consts/routeNames";

const App = () => {
  return (
    <div className={styles.AppWrapper}>
      <Header />
      <Routes>
        <Route exact path={routeNames.HOME_ROUTE_NAME} element={<Main />} />
        <Route path={routeNames.USER_PAGE_ROUTE_NAME} element={<UserPage />} />
        <Route path={routeNames.NOT_FOUND_PAGE_ROUTE_NAME} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
