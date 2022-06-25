import React, { Component, useState } from "react";
import Menu from "../Menu/MenuFrame";

const PortalSleeve = (props: any) => (Page: React.FC<any>) => {
  return React.memo(
    class Sleeve extends Component<any, any> {
      constructor(props: any) {
        super(props);
        this.state = {
          menuState: false,
        };
      }

      toggleMenu = () => {
        const newData = !this.state.menuState;
        this.setState(() => ({
          menuStatus: newData,
        }));
      };

      componentDidMount = () => {
        document.addEventListener("keydown", (e) => {
          if (e.code === "Space") {
            this.toggleMenu();
          }
        });
      };

      render() {
        return (
          <article className="portal-layout">
            <Page
              {...props}
              menuStatus={this.state.menuState}
              toggleMenu={this.toggleMenu}
            />
            {this.state.menuState ? <Menu /> : null}
          </article>
        );
      }
    }
  );
};

export { PortalSleeve };
