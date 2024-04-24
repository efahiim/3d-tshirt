import React, { CSSProperties } from "react";
import { useSnapshot } from "valtio";

import state from "@store/index";
import { Tab } from "@interfaces/index";

interface Props {
  tab: Tab;
  isFilterTab?: boolean;
  isActiveTab?: boolean;
  handleClick: () => void;
}

const Tab: React.FunctionComponent<Props> = ({
  ...props
}: Props): React.JSX.Element => {
  const snap = useSnapshot(state);

  const activeStyles: CSSProperties =
    props.isFilterTab && props.isActiveTab
      ? {
          backgroundColor: snap.color,
          opacity: 0.5,
        }
      : {
          backgroundColor: "transparent",
          opacity: 1,
        };
  return (
    <div
      key={props.tab.name}
      className={`tab-btn ${
        props.isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      onClick={props.handleClick}
      style={activeStyles}
    >
      <img
        src={props.tab.icon}
        alt={props.tab.name}
        className={`${
          props.isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12"
        } object-contain`}
      />
    </div>
  );
};

export default Tab;
