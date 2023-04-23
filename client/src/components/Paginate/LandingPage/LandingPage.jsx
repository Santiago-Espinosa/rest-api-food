import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./LandingPage.module.css";
import Buttons from "./Buttons/Buttons.jsx";
import Cards from "./Cards/Cards.jsx";
import Empty from "./Empty/Empty.jsx";

class LandingPage extends Component {
  render() {
    return (
      <div className={style.mainx}>
        <Buttons />
        {!this.props.allRecipes.length ? <Empty /> : <Cards />}
        <Buttons />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ allRecipes: state.allRecipes });

export default connect(mapStateToProps)(LandingPage);
