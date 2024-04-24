import React from "react";

import Model from "@model/index";
import { Home, Customizer } from "@pages/index";

const App: React.FunctionComponent = (): React.JSX.Element => (
  <main className="app transition-all ease-in">
    <Home />
    <Model />
    <Customizer />
  </main>
);

export default App;
