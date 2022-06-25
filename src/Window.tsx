import React, { Component, createRef } from "react";
import KeyHandler from "./utils/keyHandler";
import { WindowProps, WindowState } from "./type";
import { forgotten } from "./utils/forgetMemories";
import { displaySwitch } from "./Switch";

class Window extends React.PureComponent<WindowProps, WindowState> {
  state: WindowState = {
    windowSize: [900, 600],
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    intro: true,
    images: [],
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

  initializeFragments = () => {
    this.setState(() => ({
      images: forgotten,
    }));
  };

  begin = () => {
    this.setState(() => ({
      intro: false,
    }));
  };

  handleEvent = (e: any) => {
    const action = this.state.events.typeInput(e);
    switch (action) {
      case "begin":
        this.begin();
        break;
      case "play":
        break;
      case "pause":
        break;
      case "down":
        break;
      default:
        break;
    }
  };

  componentDidMount = () => {
    console.log(`Window component mounted`);
    document.addEventListener("keydown", (e) => {
      this.handleEvent(e);
    });
    this.initializeFragments();
  };

  render(): React.ReactNode {
    console.log(`Window component rendered`);
    return (
      <article
        style={{
          width: `${this.state.windowSize[0]}px`,
          height: `${this.state.windowSize[1]}px`,
        }}
        className="Window"
      >
        {displaySwitch(this.state)}
      </article>
    );
  }
}

export { Window };
