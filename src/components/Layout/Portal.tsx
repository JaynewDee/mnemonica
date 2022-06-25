import React, { Component } from "react";

const PortalSleeve = (Page: React.FC) => {
  class Sleeve extends Component {
    componentDidMount = () => {
      document.addEventListener("keydown", (e) => {
        console.log(e);
      });
    };

    render() {
      return (
        <article className="portal-layout">
          <Page />
        </article>
      );
    }
  }
  return Sleeve;
};

export { PortalSleeve };
