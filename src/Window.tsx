import React, { createRef } from "react";
import KeyHandler from "./utils/keyHandler";
import { WindowProps, WindowState } from "./type";
import { Intro } from "./components/Menu/Intro";
import { Instruction } from "./components/Menu/Instruction";
import Game from "./Game";

class Window extends React.Component<WindowProps, WindowState> {
  state: WindowState = {
    windowSize: [900, 600],
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    intro: true,
    events: new KeyHandler(),
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

  handleEvent = (e: any) => {
    const action = this.state.events.typeInput(e);
    switch (action) {
      case "begin":
        this.begin();
        document.removeEventListener("keydown", (e) => {
          this.handleEvent(e);
        });
        break;
      case "play":
        break;
      case "down":
        break;
      default:
        break;
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
        {this.state.intro ? (
          <>
            <Intro title={this.state.title} subtitle={this.state.subtitle} />
            <Instruction />
          </>
        ) : (
          <Game />
        )}
      </article>
    );
  }
}

export { Window };
