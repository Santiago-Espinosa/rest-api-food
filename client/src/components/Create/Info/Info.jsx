import React, { Component } from "react";
import style from "./Info.module.css";

class Info extends Component {
  render() {
    const { name, image, healthScore, summary, changeHandler } = this.props;

    const { nameValidation, healthScoreValidation, summaryValidation } = this.props.validation;

    return (
      <div className={style.Info}>
        <h3>Main Data</h3>

        <label>
          Name*
          <input
            className={style[`dato${!nameValidation ? `Error` : ""}`]}
            name={"name"}
            required
            value={name}
            onChange={changeHandler}
            type="text"
            autoComplete="off"
          />
          {!nameValidation ? (
            <span className={style.textError}>You must enter your name</span>
          ) : null}
        </label>

        <label>
          Picture - URL
          <input
            className={style.dato}
            name={"image"}
            value={image}
            onChange={changeHandler}
            type="text"
            autoComplete="off"
          />
        </label>

        <label>
          Health Score*
          <input
            className={style[`dato${!healthScoreValidation ? `Error` : ""}`]}
            name={"healthScore"}
            value={healthScore}
            onChange={changeHandler}
            type="number"
            autoComplete="off"
          />
          {!healthScoreValidation ? (
            <span className={style.textError}>Min: 0 - Max: 100</span>
          ) : null}
        </label>

        <label>
          Summary*
          <textarea
            className={style[`dato${!summaryValidation ? `Error` : ""}`]}
            name={"summary"}
            value={summary}
            onChange={changeHandler}
            type="text"
            autoComplete="off"
          />
          {!summaryValidation ? (
            <span className={style.textError}>
              You must enter a description
            </span>
          ) : null}
        </label>
      </div>
    );
  }
}

export default Info;
