class KeyHandler {
  SPACE = "Space";
  ENTER = "Enter";
  UP = "ArrowUp" || "KeyW";
  DOWN = "ArrowDown" || "KeyS";
  LEFT = "ArrowLeft" || "KeyA";
  RIGHT = "ArrowRight" || "KeyD";

  type(event: KeyboardEvent) {
    switch (event.code) {
      case this.SPACE:
        return "begin";
    }
  }
}

export default KeyHandler;
