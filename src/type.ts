import React from "react";

interface WindowState {
  windowSize: [number, number];
  title: string;
  subtitle: string;
  intro: boolean;
  images: [];
  events: any;
  settings: {
    level: [number, number];
    rehabilitation: boolean;
  };
}

interface WindowProps {}

export type { WindowProps, WindowState };
