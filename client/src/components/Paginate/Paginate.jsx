import React, { Component } from "react";
import Filters from "./Filters/Filters.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import style from "./Paginate.module.css";

class Paginate extends Component {
  render() {
    return (
      <div className={style.paginate}>
        <Filters />
        <LandingPage />
      </div>
    );
  }
}

export default Paginate;
