import React, { Component } from "react";
import { WindowProps, WindowState } from "./type";
import { Intro } from "./components/Menu/Intro";
import { Instruction } from "./components/Instruction";
import GridFrame from "./components/Grid/GridFrame";
class Window extends Component<WindowProps, WindowState> {
  state: WindowState = {
    windowSize: [900, 600],
    title: `MNEMONICA`,
    subtitle: `mnemosyne's trial`,
    intro: true,
    menu: true,
  };

  begin = () => {
    this.setState(() => ({
      intro: false,
    }));
  };
  setSize = (size: [number, number]) => {
    this.setState(() => ({
      windowSize: size,
    }));
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
        {this.state.intro ? (
          <>
            <Intro title={this.state.title} subtitle={this.state.subtitle} />
            <Instruction begin={this.begin} />
          </>
        ) : (
          <GridFrame></GridFrame>
        )}
      </article>
    );
  }
}

export { Window };
