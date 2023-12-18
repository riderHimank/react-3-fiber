import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stats, Html, Text } from "@react-three/drei";
import Room from "./Room";

import LightHelp from "./LightHelp";

import TWEEN from "@tweenjs/tween.js";

//Creating function for sommoth camera transition!

//array of objects of setting up camera
const marks = [
  {
    title: "Computer Screen",
    description: "Alcher-related display image!",
    camPos: {
      x: 0.8,
      y: 2.3,
      z: -2,
    },
    lookAt: {
      x: 1.18,
      y: 1.85,
      z: 0,
    },
  },
  {
    title: "Cupbord",
    description: "Alcher merch is here!",
    camPos: {
      x: 5,
      y: 4,
      z: -2,
    },
    lookAt: {
      x: 5,
      y: 3,
      z: 0,
    },
  },
  {
    title: "Clock",
    description: "xyz days to go for Alcheringa:)",
    camPos: {
      x: -1,
      y: 2,
      z: -2,
    },
    lookAt: {
      x: -1,
      y: 1.5,
      z: 0,
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

                  const targetX = isSameAnnotation ? 0 : a.lookAt.x;
                  const targetY = isSameAnnotation ? 1 : a.lookAt.y;
                  const targetZ = isSameAnnotation ? 0 : a.lookAt.z;

                  const camPosX = isSameAnnotation ? 0 : a.camPos.x;
                  const camPosY = isSameAnnotation ? 3 : a.camPos.y;
                  const camPosZ = isSameAnnotation ? -6 : a.camPos.z;

                  // change target
                  {
                  }
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
                    setSelected(backtrack?-1:i)
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
        fov: 70,
        position: [1.5, 2, -6],
      }}
      shadows
    >
      <OrbitControls
        ref={ref}
        target={[1.5, -1, 5]}
        maxPolarAngle={Math.PI / 2 - Math.PI / 12}
        minPolarAngle={Math.PI/2 - Math.PI/4}
        minAzimuthAngle={Math.PI - Math.PI / 18}
        maxAzimuthAngle={Math.PI + Math.PI / 18}
        enableZoom={false}
      />
      <ambientLight intensity={0.3} castShadow />
      <LightHelp position={[0, 10, 0]} intensity={1} />
      <LightHelp position={[0, 2, -10]} intensity={0.5} />
      <LightHelp position={[15, 20, -5]} intensity={1} />
      <Room />
      <Annotations controls={ref} />
      <Tween />
      <Stats />
    </Canvas>
  );
}
