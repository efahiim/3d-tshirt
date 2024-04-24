import React from "react";
// @ts-expect-error: Module not found
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "@store/index";

const ColorPicker: React.FunctionComponent = (): React.JSX.Element => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        // @ts-expect-error: Unknown type
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
