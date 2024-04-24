import React, { CSSProperties } from "react";
import { useSnapshot } from "valtio";

import state from "@store/index";

interface Props {
  type: string;
  title: string;
  handleClick?: () => void;
  customStyles: string;
}

const Button: React.FunctionComponent<Props> = ({
  ...props
}: Props): React.JSX.Element => {
  const snap = useSnapshot(state);

  const generateStyle = (type: string): CSSProperties => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#ffffff",
      };
    }

    return {};
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyles}`}
      style={generateStyle(props.type)}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
