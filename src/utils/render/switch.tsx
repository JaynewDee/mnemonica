import GridFrame from "../../components/Grid/GridFrame";
import { Instruction } from "../../components/Menu/Instruction";
import { Intro } from "../../components/Menu/Intro";
import Menu from "../../components/Menu/MenuFrame";

function displaySwitch(state: any) {
  let intro = state.intro;
  if (intro) {
    return (
      <>
        <Intro title={state.title} subtitle={state.subtitle} />
        <Instruction />
      </>
    );
  } else {
    return (
      <>
        <GridFrame />
        {menuSwitch(state.menuState)}
      </>
    );
  }
}

function menuSwitch(menuState: any) {
  if (menuState) {
    return <Menu />;
  }
}
export { displaySwitch };
