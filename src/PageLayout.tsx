import React, { Component } from "react";

const PageLayout: any = (Page: any) => {
  class Main extends Component {
    // state = {
    //   data: data,
    // };

    render() {
      return <Page {...this.state}>{this.props}</Page>;
    }
  }
  return Main;
};

export { PageLayout };
