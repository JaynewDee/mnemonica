import React, { Component, createRef } from "react";
import KeyHandler from "./utils/keyHandler";
import { WindowProps, WindowState } from "./type";

import { displaySwitch } from "./Switch";
class Window extends Component<WindowProps, WindowState> {
  state: WindowState = {
    windowSize: [900, 600],
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    intro: true,
    menu: true,
    events: new KeyHandler(),
    settings: {
      level: [0, 0],
      rehabilitation: false,
    },
  };

  focusRef: any = createRef();

  setSize = (size: [number, number]) => {
    this.setState(() => ({
      windowSize: size,
    }));
  };

  begin = () => {
    this.setState(() => ({
      intro: false,
    }));
  };
  resume = () => {
    this.setState(() => ({
      menu: !this.state.menu,
    }));
  };
  handleEvent = (e: any) => {
    const action = this.state.events.type(e);
    switch (action) {
      case "begin":
        this.begin();
        break;
      case "play":
        break;
      case "pause":
        this.resume();
        break;
      case "down":
        break;
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", (e) => {
      console.log(e);
      this.handleEvent(e);
    });
  };

  render(): React.ReactNode {
    return (
      <article
        style={{
          width: `${this.state.windowSize[0]}px`,
          height: `${this.state.windowSize[1]}px`,
        }}
        className="Window"
      >
        {displaySwitch(this.state, this.resume)}
      </article>
    );
  }
}

export { Window };
