import React from "react";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className={style.background}>
      <div className={style.card}>
        <div className={style.text}>
          <h1>
            <ul>
              <li>+ 100 Recipes</li>
              <li>11 Types of Diet</li>
            </ul>
          </h1>
        </div>
        <img
          src="https://i.postimg.cc/3N5t68fJ/Logo-Henry-Food.png"
          alt="logo"
        />
        {/* https://i.postimg.cc/nzGt0PT5/Henry-Food.png */}
        <NavLink to="/recipes">
          <button className={style.button}>Enter Here</button>
        </NavLink>
        <div className={style.socialDiv}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/santiagoespinosa-dev/"
            rel="noreferrer"
          >
            <img
              src="https://i.postimg.cc/D0MtyV26/Linkedin-Logo1.png"
              alt="github"
            />
            LINKEDIN
          </a>
          <a
            target="_blank"
            href="https://github.com/Santiago666espinosa"
            rel="noreferrer"
          >
            <img
              src="https://i.postimg.cc/qvPQBJ2g/Github-Logo1.png"
              alt="github"
            />
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}
