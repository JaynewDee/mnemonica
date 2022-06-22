interface WindowState {
  windowSize: [number, number];
  title: string;
  subtitle: string;
  menu: boolean;
  intro: boolean;
}

interface WindowProps {}

export type { WindowProps, WindowState };
