import React from "react";
import style from "./Button.module.scss";

interface IProps {
  title: string;
  count: number;
  handler(): void;
  type: string;
  limit: number;
}

class Button extends React.PureComponent<IProps> {
  render() {
    const { title, count, handler, type, limit } = this.props;

    return (
      <>
        <button
          className={`${style.button} ${
            type === "decrement"
              ? style.button_decrement
              : style.button_increment
          }`}
          type="button"
          onClick={handler}
          disabled={
            (type === "decrement" && count === 0) ||
            (type === "increment" && count === limit)
          }>
          {(type === "increment" && count === limit && "Max value") ||
            (type === "decrement" && count === 0 && "Min value") ||
            title}
        </button>
      </>
    );
  }
}

export default Button;
