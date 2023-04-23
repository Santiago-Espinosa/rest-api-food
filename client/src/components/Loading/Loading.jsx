import React from "react";
import image from "../../images/asd123.gif";
import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={style.loading}>
      <img src={image} alt="" />
    </div>
  );
}
