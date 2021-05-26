import React from "react";
import ProductCard from "../Card";
import Button from "../Common/Button";

interface IProps {
  title: string;
  limit: number;
}
interface IState {
  count: number;
  increment: number;
  decrement: number;
}

class CustomCounter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { count: 0, increment: 1, decrement: 1 };
  }

  componentDidMount() {
    document.addEventListener("click", this.popUp);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.popUp);
  }

  popUp = () => {
    alert("Hello");
  };

  incrementHandle = (increment: number) => () => {
    const { count } = this.state;
    this.setState({ count: count + increment });
  };

  decrementHandle = (decrement: number) => () => {
    const { count } = this.state;
    this.setState({ count: count - decrement });
  };

  render() {
    const { title, limit } = this.props;
    const { count, increment, decrement } = this.state;

    return (
      <>
        <ProductCard title={title} count={count}>
          <Button
            title={`Убрать ${decrement} ${title}`}
            count={count}
            handler={this.decrementHandle(decrement)}
            type="decrement"
            limit={limit}
          />
          <Button
            title={`Добавить ${increment} ${title}`}
            count={count}
            handler={this.incrementHandle(increment)}
            type="increment"
            limit={limit}
          />
        </ProductCard>
      </>
    );
  }
}

export default CustomCounter;
