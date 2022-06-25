import Grid from "./components/Grid/Grid";
import { Instruction } from "./components/Menu/Instruction";
import { Intro } from "./components/Menu/Intro";
import Menu from "./components/Menu/MenuFrame";

function displaySwitch({ title, subtitle, intro, menu, images }: any) {
  if (intro) {
    return (
      <>
        <Intro title={title} subtitle={subtitle} />
        <Instruction />
      </>
    );
  } else {
    return (
      <>
        <Grid menu={menu} images={images} />
        {menuSwitch(menu)}
      </>
    );
  }
}

function menuSwitch(menu: any) {
  console.log(menu);
  if (menu) {
    return <Menu />;
  }
}

export { displaySwitch };
