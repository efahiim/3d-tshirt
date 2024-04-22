import React from "react";
import Canvas from "@canvas/index";
import { Home, Customizer } from "@pages/index";

const App: React.FunctionComponent = (): JSX.Element => {
  // const test = 1;

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
};

export default App;
