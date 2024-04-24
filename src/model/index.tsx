import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import CameraRig from "@model/camera-rig";
import Backdrop from "@model/backdrop";
import Tshirt from "@model/tshirt";

const Model: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center>
          <Tshirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default Model;
