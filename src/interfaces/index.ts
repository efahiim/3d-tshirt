export interface Transition {
  type: string;
  duration: number;
  delay?: number;
  damping?: number;
  stiffness?: number;
  restDelta?: number;
  delayChildren?: number;
}

interface Motion {
  x?: number;
  y?: number;
  opacity?: number;
  transition?: Transition;
}

export interface MotionProperties {
  initial: Motion;
  animate: Motion;
  transition?: Transition;
  exit?: Motion;
}

export interface Tab {
  name: string;
  icon: string;
}
