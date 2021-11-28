import React from "react";

import s from "../Footer/Footer.module.css";

import logo from "../../images/Express.png";
import dmca from "../../images/DMCA.png";

function Footer() {
  return (
    <>
      <h1 className={s.footer}>Footer</h1>
      <img src={dmca} alt="Logo" className={s.dmca} />

      <img src={logo} alt="Logo" className={s.logo} />
    </>
  );
}

export default Footer;
