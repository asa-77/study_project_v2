import React from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import CustomCounter from "../Counter";
import style from "./MainPage.module.scss";

class MainPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { isActiveSecondCard: false };
  }

  handler = () => {
    const { isActiveSecondCard } = this.state;
    this.setState({ isActiveSecondCard: !isActiveSecondCard });
  };

  render() {
    const { isActiveSecondCard } = this.state;

    return (
      <>
        <div className={style.main_page_wrapper}>
          <Header />

          {isActiveSecondCard && (
            <>
              <CustomCounter title="Apple" limit={9} />
              <CustomCounter title="Orange" limit={5} />
            </>
          )}
          <button type="button" onClick={this.handler}>
            CLICK
          </button>
          <Footer />
        </div>
      </>
    );
  }
}

export default MainPage;
