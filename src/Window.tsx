import React, { Component, createRef } from "react";
import KeyHandler from "./utils/keyHandler";
import { WindowProps, WindowState } from "./type";
import { forgottenZeroZero, forgottenOneZero } from "./utils/forgetMemories";
import { displaySwitch } from "./Switch";
console.log(forgottenZeroZero, `\n\n`);
class Window extends React.Component<WindowProps, WindowState> {
  state: WindowState = {
    windowSize: [900, 600],
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    intro: true,
    images: [],
    events: new KeyHandler(),
    level: [0, 0],
    rehabilitation: false,
  };
  focusRef: any = createRef();

  setSize = (size: [number, number]) => {
    this.setState(() => ({
      windowSize: size,
    }));
  };

  initializeFragments = () => {};

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
      case "down":
        break;
      default:
        break;
    }
  };
  setLevel = () => {
    const newLevel = this.state.level[0] + 1;
    this.setState(() => ({
      level: [newLevel, 0],
    }));
  };
  nextRound = () => {
    if (this.state.level === [1, 0]) {
      this.setState(() => ({
        images: forgottenOneZero,
      }));
    } else {
      this.setState(() => ({
        images: forgottenZeroZero,
      }));
    }
  };
  componentDidMount = () => {
    console.log(`WINDOW MOUNTED`);
    document.addEventListener("keydown", (e) => {
      this.handleEvent(e);
    });
  };

  render(): React.ReactNode {
    console.log(`WINDOW RENDERED`);
    return (
      <article
        style={{
          width: `${this.state.windowSize[0]}px`,
          height: `${this.state.windowSize[1]}px`,
        }}
        className="Window"
      >
        {displaySwitch(this.state, this.setLevel)}
      </article>
    );
  }
}

export { Window };
