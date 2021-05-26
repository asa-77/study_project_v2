import React from "react";
import style from "./ProductCard.module.scss";

interface IProps {
  title: string;
  count: number;
}

class ProductCard extends React.PureComponent<IProps> {
  render() {
    const { title, count, children } = this.props;
    return (
      <>
        <div className={style.wrapper}>
          <h1>
            Выбранный товар {title} в количестве {count} шт
          </h1>
          <div className={style.card}>{children}</div>
        </div>
      </>
    );
  }
}

export default ProductCard;
