import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stats, Html, Text } from "@react-three/drei";
import LightHelp from "./LightHelp";
import RoomScene_Fixing2 from "./RoomScene_Fixing2";

import TWEEN from "@tweenjs/tween.js";

//Creating function for sommoth camera transition!

//array of objects of setting up camera
const marks = [
  {
    title: "Computer Screen",
    description: "Alcher-related display image!",
    camPos: {
      x: -2,
      y: 1.3,
      z: 0.5,
    },
    lookAt: {
      x: -1.8,
      y: 1.3,
      z: 1,
    },
  },
  {
    title: "QR",
    description: "QR code is here",
    camPos: {
      x: -3,
      y: 1.5,
      z: 0,
    },
    lookAt: {
      x: -3,
      y: 1,
      z: 1,
    },
  },
  {
    title: "Cupbord",
    description: "Alcher merch is here!",
    camPos: {
      x: 0.5,
      y: 1.5,
      z: -0.2,
    },
    lookAt: {
      x: 0,
      y: 1.5,
      z: 3,
    },
  },
  {
    title: "Calendar",
    description: "xyz days to go!",
    camPos: {
      x: -1.3,
      y: 2,
      z: 0.8,
    },
    lookAt: {
      x: -1.3,
      y: 1.5,
      z: 3,
    },
  },
  {
    title: "Trophy",
    description: "Have a look at Kartavya",
    camPos: {
      x: -2.7,
      y: 2.3,
      z: 1,
    },
    lookAt: {
      x: -2.7,
      y: 2.5,
      z: 3,
    },
  },
];

//a component creating a button as of now!
function Annotations({ controls }) {
  const { camera } = useThree();
  const [selected, setSelected] = useState(-1);
  const [backtrack, setBackTrack] = useState(false);

  return (
    <React.Fragment>
      {marks.map((a, i) => {
        return (
          <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
            <svg
              height="34"
              width="34"
              transform="translate(-16 -16)"
              style={{ cursor: "pointer" }}
            >
              <circle
                cx="17"
                cy="17"
                r="16"
                stroke="white"
                strokeWidth="2"
                fill="rgba(0,0,0,.66)"
                onPointerUp={() => {
                  setSelected(i);
                  const isSameAnnotation = i === selected;
                  setBackTrack(isSameAnnotation ? false : true);

                  const targetX = isSameAnnotation ? -2 : a.lookAt.x;
                  const targetY = isSameAnnotation ? 1 : a.lookAt.y;
                  const targetZ = isSameAnnotation ? 1 : a.lookAt.z;

                  const camPosX = isSameAnnotation ? -2 : a.camPos.x;
                  const camPosY = isSameAnnotation ? 1.5 : a.camPos.y;
                  const camPosZ = isSameAnnotation ? -1.5 : a.camPos.z;

                  // change target
                  new TWEEN.Tween(controls.current.target)
                    .to(
                      {
                        x: targetX,
                        y: targetY,
                        z: targetZ,
                      },
                      1500
                    )
                    .easing(TWEEN.Easing.Cubic.Out)
                    .start();

                  // change camera position
                  new TWEEN.Tween(camera.position)
                    .to(
                      {
                        x: camPosX,
                        y: camPosY,
                        z: camPosZ,
                      },
                      1500
                    )
                    .easing(TWEEN.Easing.Cubic.Out)
                    .start();
                  setSelected(backtrack ? -1 : i);
                }}
              />
              <text
                x="12"
                y="22"
                fill="white"
                fontSize={17}
                fontFamily="monospace"
                style={{ pointerEvents: "none" }}
              >
                {i + 1}
              </text>
            </svg>
            {a.description && i === selected && backtrack && (
              <div
                id={"desc_" + i}
                className="annotationDescription"
                dangerouslySetInnerHTML={{ __html: a.description }}
              />
            )}
          </Html>
        );
      })}
    </React.Fragment>
  );
}

//Tween component to update
function Tween() {
  useFrame(() => {
    TWEEN.update();
  });
}

export default function App() {
  const ref = useRef();

  return (
    <Canvas
      camera={{
        fov: 80,
        position: [-2, 1.5, -2],
      }}
      shadows
    >
      <OrbitControls
        ref={ref}
        target={[-2, 2, -1]}
        enableZoom={true}
        enableDamping={true}
      />
      <ambientLight intensity={0.3} castShadow />
      <LightHelp position={[0, 10, 0]} intensity={1} />
      <LightHelp position={[0, 2, -10]} intensity={0.5} />
      <LightHelp position={[15, 20, -5]} intensity={1} />
      {/* <Annotations controls={ref} /> */}
      <RoomScene_Fixing2 />
      <Tween />
      <Stats />
    </Canvas>
  );
}
