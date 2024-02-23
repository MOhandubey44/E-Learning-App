import React from "react";
import style from "./Hero.module.css";
import ReactGA from "react-ga4";
import { useEffect } from "react";
function Hero() {
  // useEffect(() => {
  //   // Track page view for this component
  //   ReactGA.send({
  //     hitType: "pageview",
  //     page: window.location.pathname + window.location.search,
  //     title: "Home Page",
  //   });
  // }, []);
  return (
    <header>
      <section className={style.logo_wrapper}>
        <img
          className={style.logo}
          src="https://files.codingninjas.in/pl-ninja-16706.svg"
          alt="logo"
        />
      </section>
      <section className={style.content}>
        <h4>Are you ready to ?</h4>
        <h1>Be a Coding Ninjas</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
    </header>
  );
}

export default Hero;
