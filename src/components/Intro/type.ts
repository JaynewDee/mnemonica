import { Dispatch, SetStateAction } from "react";

interface IntroProps {
  title: string;
  subtitle: string;
  start: Function;
}
interface TitleProps {
  title: string;
  subtitle: string;
}

export type { IntroProps, TitleProps };
