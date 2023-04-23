import React from "react";
import style from "./Empty.module.css";

class Empty extends React.Component {
  render() {
    return (
      <div className={style.empty}>
        <h2>Sorry, no recipes were found for the search performed</h2>
      </div>
    );
  }
}

export default Empty;
