class KeyHandler {
  SPACE = "Space";
  ENTER = "Enter";
  UP = "ArrowUp" || "KeyW";
  DOWN = "ArrowDown" || "KeyS";
  LEFT = "ArrowLeft" || "KeyA";
  RIGHT = "ArrowRight" || "KeyD";

  typeInput(event: KeyboardEvent) {
    switch (event.code) {
      case this.ENTER:
        return "begin";
      case this.SPACE:
        return "pause";
      case this.DOWN:
        return "down";
      default:
        return undefined;
    }
  }
}

export default KeyHandler;
