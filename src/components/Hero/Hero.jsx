import React from "react";
import { Button } from "react-bootstrap";
import s from "../Hero/Hero.module.css";

export default function Hero() {
  return (
    <div>
      <p>Lorem ipsum set ammet test-test</p>
      <p>LET US HELP YOU GET IT ALL BACK!</p>
      <p>We currently take cases that are $10,000 US and up</p>
      <Button className={s.btn}>Get a free consultation</Button>
    </div>
  );
}
