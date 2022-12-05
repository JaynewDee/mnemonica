import React from "react";

interface WindowState {
  title: string;
  subtitle: string;
  windowSize: [number, number];
  currentDisplay: any;
  settings: {
    level: [number, number];
    rehabilitation: boolean;
  };
}

interface WindowProps {}

export type { WindowProps, WindowState };
