import Grid from "./components/Grid/Grid";
import { Instruction } from "./components/Menu/Instruction";
import { Intro } from "./components/Menu/Intro";
import Menu from "./components/Menu/MenuFrame";

function displaySwitch(state: any, resumeFn: any) {
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
        <Grid menu={state.menu} images={state.images} />
        {menuSwitch(state.menu, resumeFn)}
      </>
    );
  }
}

function menuSwitch(menuState: any, resumeFn: any) {
  if (menuState) {
    return <Menu resume={resumeFn} />;
  }
}

export { displaySwitch };
