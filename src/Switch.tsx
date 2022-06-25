import Grid from "./components/Grid/Grid";
import { Instruction } from "./components/Menu/Instruction";
import { Intro } from "./components/Menu/Intro";
import { PortalSleeve } from "./components/Layout/Portal";
function displaySwitch(
  { title, subtitle, intro, menu, images }: any,
  setLevel: any
) {
  const Clothing = PortalSleeve({ menu, images, setLevel })(Grid);
  if (intro) {
    return (
      <>
        <Intro title={title} subtitle={subtitle} />
        <Instruction />
      </>
    );
  } else {
    return <>{<Clothing />}</>;
  }
}

export { displaySwitch };
