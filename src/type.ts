import React from "react";

interface WindowState {
  windowSize: [number, number];
  title: string;
  subtitle: string;
  intro: boolean;
  events: any;
}

interface WindowProps {}

export type { WindowProps, WindowState };
