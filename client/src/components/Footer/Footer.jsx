import React, { Component } from "react";
import style from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.infoLeft}>
          <h5>Information</h5>
          <span>
            SoyHenry - Individual Project <br />
            Santiago Espinosa Bordón
            <br />
            santiago.espinosa.dev@gmail.com
            <br />
            Colombia, Risaralda, Pereira
          </span>
        </div>
        <div className={style.infoRight}>
          <a href="https://www.linkedin.com/in/santiagoespinosa-dev/">
            LINKEDIN
            <img
              src="https://i.postimg.cc/xThMr2PB/logo-Linkedin.png"
              alt="github"
            />
          </a>
          <a href="https://github.com/Santiago-Espinosa">
            GITHUB
            <img
              src="https://i.postimg.cc/Vs9NRcSz/logo-Git-Hub.png"
              alt="github"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
