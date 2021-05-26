import React from "react";
import style from "./Logo.module.scss";
import logo from "./logo.svg";

class Logo extends React.PureComponent {
  render() {
    return (
      <>
        <div className={style.logo_wrapper}>
          <img src={logo} alt="logo" />
        </div>
      </>
    );
  }
}

export default Logo;
