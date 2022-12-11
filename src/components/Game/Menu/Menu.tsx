import { Dispatch, SetStateAction, useEffect } from "react";
import { createPortal } from "react-dom";

const menuRoot = document.getElementById("menu-root");
const SIZES = {
  small: [900, 600],
  medium: [1280, 720],
  large: [1920, 1080]
};

interface MenuProps {
  setWindowSize: Dispatch<SetStateAction<any>>;
}

const Menu: React.FC<MenuProps> = ({ setWindowSize }) => {
  useEffect(() => {
    const onKeyDown = (e: any) =>
      e.key === "Escape" ? window.location.reload() : false;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const MenuElement = () => (
    <div className="menu">
      <h2 className="paused">Paused</h2>
      <h4>Press SPACEBAR to resume</h4>
      <h5>Press ESCAPE to quit</h5>
      <h5>Window Size:</h5>
      <button onClick={() => setWindowSize(SIZES.small)}>SMALL</button>
      <button onClick={() => setWindowSize(SIZES.medium)}>MEDIUM</button>
      <button onClick={() => setWindowSize(SIZES.large)}>LARGE</button>
    </div>
  );

  return <>{createPortal(MenuElement(), menuRoot as HTMLElement)}</>;
};

export default Menu;
