import React, { Component, createRef } from "react";
import KeyHandler from "./utils/keyHandler";
import { WindowProps, WindowState } from "./type";

import { displaySwitch } from "./utils/render/switch";
class Window extends Component<WindowProps, WindowState> {
  state: WindowState = {
    windowSize: [900, 600],
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    intro: true,
    menu: true,
    events: new KeyHandler(),
    focusRef: createRef(),
    settings: {
      level: [0, 0],
      rehabilitation: false,
    },
  };

  focusWindow = () => {
    console.log(`focusWindow fired.`);
    this.state.focusRef.current.focus();
  };

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

  handleEvent = (e: any) => {
    const action = this.state.events.type(e);
    if (action === "begin") {
      this.begin();
    } else if (action === "play") {
      // this.play()
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", (e) => {
      this.handleEvent(e);
    });
  };

  display = displaySwitch;
  render(): React.ReactNode {
    return (
      <article
        onKeyDown={(e) => {
          this.state.events.type(e);
        }}
        style={{
          width: `${this.state.windowSize[0]}px`,
          height: `${this.state.windowSize[1]}px`,
        }}
        className="Window"
      >
        {this.display(this.state)}
      </article>
    );
  }
}

export { Window };
