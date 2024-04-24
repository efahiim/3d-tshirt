import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import {
  Button,
  ColorPicker,
  FilePicker,
  Tab,
} from "@components/index";

import { fadeAnimation, slideAnimation } from "@configs/motion";
import { reader } from "@configs/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "@configs/constants";

import state from "@store/index";

interface FilterTab {
  logoTshirt: boolean;
  stylishTshirt: boolean;
}

const Customizer: React.FunctionComponent = (): React.JSX.Element => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState<string | Blob>("");
  const [activeEditorTab, setActiveEditorTab] = useState<string>("");
  const [activeFilterTab, setActiveFilterTab] = useState<FilterTab>({
    logoTshirt: true,
    stylishTshirt: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      default:
        return null;
    }
  };

  const handleDecals = (type: 'logo' | 'full', result: unknown) => {
    const decalType = DecalTypes[type];

    // @ts-expect-error: Unknown type
    state[decalType.stateProperty] = result;

    // @ts-expect-error: Unknown type
    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName: string) => {
    switch (tabName) {
      case "logoTshirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishTshirt":
          state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        // @ts-expect-error: Unknown type
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type: 'logo' | 'full'): void => {
    reader(file as Blob)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <Button
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            ></Button>
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                // @ts-expect-error: Unknown type
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
