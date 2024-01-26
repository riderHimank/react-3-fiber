import React, { Suspense, useRef, useState, useEffect } from "react";
import { useGLTF, useVideoTexture, useTexture, Text } from "@react-three/drei";
import video from "./assets/video.mp4"
import alcher from "./assets/alcher.png"
import * as THREE from 'three';
import './App.css'


function VideoScene() {
  return (
    <mesh scale={[0.5, 0.3, 0.5]} position={[0, 0, 0.015]}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url={alcher} />}>
        <VideoMaterial url={video} />
      </Suspense>
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}


function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}






export default function RoomScene_Fixing2(props) {
  
 
  const { nodes, materials } = useGLTF("models/RoomScene_Fixing2.gltf");
  const calculateTimeRemaining = () => {
    const currentDate = new Date();
    const targetDate = new Date('2024-01-23'); // Replace with your target date
    const timeDifference = targetDate.getTime() - currentDate.getTime();

    // Calculate hours, minutes, and seconds remaining
    const hoursRemaining = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours: hoursRemaining,
      minutes: minutesRemaining,
      seconds: secondsRemaining,
    };
  };

  const clockModelRef = useRef();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        name="WallsF"
        geometry={nodes.WallsF.geometry}
        material={materials.Walls}
        position={[-4.995, 1.591, 0.015]}
        scale={[1, 0.899, 1]}
      >
        <mesh
          name="IDHook"
          geometry={nodes.IDHook.geometry}
          material={materials.FurnitureAccent2}
          position={[1.299, 0.474, -3.754]}
          scale={[1, 1.112, 1]}
        >
          <mesh
            name="Plane"
            geometry={nodes.Plane.geometry}
            material={materials.ShobhasPallette}
            position={[-0.007, -0.411, 0.006]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="BezierCurve"
              geometry={nodes.BezierCurve.geometry}
              material={materials.ShobhasPallette}
              position={[0.03, -0.002, -0.032]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </mesh>
        </mesh>
      </mesh>
      <mesh
        name="Cupboard"
        geometry={nodes.Cupboard.geometry}
        material={materials.Furniture}
        position={[-5.629, 1.208, 0.389]}
      >
        <mesh
          name="Circle012"
          geometry={nodes.Circle012.geometry}
          material={materials.ShobhasPallette}
          position={[0.053, 0.715, -0.001]}
          rotation={[-1.565, 0, 0]}
        >
          <mesh
            name="Merch003"
            geometry={nodes.Merch003.geometry}
            material={materials.ShirtBlack}
            position={[0.024, 0.491, -0.115]}
            rotation={[3.136, 0, -0.464]}
            scale={0.992}
          >
            <mesh
              name="Hanger"
              geometry={nodes.Hanger.geometry}
              material={materials.ShobhasPallette}
              position={[0.004, -0.013, 0.962]}
              rotation={[Math.PI / 2, -1.37, Math.PI]}
              scale={1.008}
            />
          </mesh>
          <mesh
            name="Merch"
            geometry={nodes.Merch.geometry}
            material={materials.ShirtWhite}
            position={[0.024, 0.175, -0.113]}
            rotation={[3.136, 0, -0.399]}
            scale={0.992}
          >
            <mesh
              name="Merch006"
              geometry={nodes.Merch006.geometry}
              material={materials.ShobhasPallette}
              position={[0.004, -0.013, 0.962]}
              rotation={[Math.PI / 2, -1.37, Math.PI]}
              scale={1.008}
            />
          </mesh>
        </mesh>
        <mesh
          name="Cube010"
          geometry={nodes.Cube010.geometry}
          material={materials.ShobhasPallette}
          position={[0.24, -1.15, 0.709]}
        />
        <mesh
          name="Cube011"
          geometry={nodes.Cube011.geometry}
          material={materials.Furniture}
          position={[0.322, -0.867, -0.328]}
        >
          <mesh
            name="Cube012"
            geometry={nodes.Cube012.geometry}
            material={materials.FurnitureAccent}
            position={[-0.039, 0.119, -0.005]}
          />
          <mesh
            name="Cube013"
            geometry={nodes.Cube013.geometry}
            material={materials.FurnitureAccent2}
            position={[-0.027, 0.124, 0.002]}
          />
        </mesh>
        <mesh
          name="CupboardDoor001"
          geometry={nodes.CupboardDoor001.geometry}
          material={materials.FurnitureAccent}
          position={[0.376, 0.084, 0.82]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            name="Cube015"
            geometry={nodes.Cube015.geometry}
            material={materials.FurnitureAccent2}
            position={[0.466, -0.006, 0.154]}
            rotation={[-Math.PI, 0, -Math.PI / 2]}
          />
        </mesh>
        <group
          name="Piggy"
          position={[0.063, -0.63, -0.359]}
          rotation={[Math.PI / 2, 0, -2.224]}
          scale={0.176}
        >
          <mesh
            name="Alcancia_OK"
            geometry={nodes.Alcancia_OK.geometry}
            material={materials.PiggyBank}
          />
          <mesh
            name="Alcancia_OK_1"
            geometry={nodes.Alcancia_OK_1.geometry}
            material={materials.Keys}
          />
          <mesh
            name="coins"
            geometry={nodes.coins.geometry}
            material={materials.Gold}
            position={[1.264, 1.185, -0.043]}
            rotation={[Math.PI / 2, -0.918, -Math.PI]}
            scale={5.68}
          />
          <mesh
            name="Coins001"
            geometry={nodes.Coins001.geometry}
            material={materials.Gold}
            position={[0.48, 1.264, -0.043]}
            rotation={[Math.PI / 2, -0.918, -Math.PI]}
            scale={5.68}
          />
          <mesh
            name="Coins"
            geometry={nodes.Coins.geometry}
            material={materials.Gold}
            position={[1.48, 0.473, -0.043]}
            rotation={[Math.PI / 2, -0.918, -Math.PI]}
            scale={5.68}
          />
        </group>
      </mesh>
      <mesh
        name="bin"
        geometry={nodes.bin.geometry}
        material={materials.DustbinMat}
        position={[-5.521, 0.265, -0.667]}
        scale={0.836}
      />
      <mesh
        name="Desk2"
        geometry={nodes.Desk2.geometry}
        material={materials.Furniture}
        position={[-5.278, 0.814, -2.532]}
      >
        <group
          name="Monstera_plant"
          position={[-0.267, 0, -0.83]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.277}
        >
          <group
            name="Fiber_stick"
            position={[-0.012, 0.982, 0.007]}
            scale={3.014}
          >
            <mesh
              name="Mesh022"
              geometry={nodes.Mesh022.geometry}
              material={materials.Fiber}
            />
            <mesh
              name="Mesh022_1"
              geometry={nodes.Mesh022_1.geometry}
              material={materials["FIber Alpha"]}
            />
          </group>
          <mesh
            name="Leaves"
            geometry={nodes.Leaves.geometry}
            material={materials.Daun}
            position={[0.144, 2.892, 0.136]}
            scale={3.014}
          />
          <mesh
            name="Soil"
            geometry={nodes.Soil.geometry}
            material={materials.Soil_1}
            position={[-0.013, 0.844, 0.008]}
            scale={3.014}
          />
          <mesh
            name="Vase"
            geometry={nodes.Vase.geometry}
            material={materials["Glazed ceramic"]}
            position={[0, 0.457, 0]}
            scale={3.014}
          >
            <mesh
              name="Soil001"
              geometry={nodes.Soil001.geometry}
              material={materials.Soil_1}
              position={[-0.039, 0.129, 0.003]}
            />
          </mesh>
        </group>
        <group
          ref={clockModelRef}
          name="Clock"
          position={[-0.178, 0.102, 1.166]}
          rotation={[0, -0.279, 0]}
        >
          <Text
            position={[0.19, 0.04, 0.04]}
            fontSize={0.05}
            color="black"
            rotation={[0,Math.PI/2,0]}
            anchorX="center"
            anchorY="middle"
            textAlign="center"
          >
          {`${timeRemaining.hours} : ${timeRemaining.minutes} : ${timeRemaining.seconds}
           Remaining`}
          
          </Text>
         
          <mesh
            name="Cube063"
            geometry={nodes.Cube063.geometry}
            material={materials.ShobhasPallette}
          />
          <mesh
            name="Cube063_1"
            geometry={nodes.Cube063_1.geometry}
            material={materials.Imagemat}
          />
          <mesh
            name="Cube063_2"
            geometry={nodes.Cube063_2.geometry}
            material={materials.Screen}
          />
        </group>
        <group
          name="Pen"
          position={[0.104, 0.029, -0.407]}
          rotation={[0, 1.571, 0]}
          scale={4.132}
        >
          <mesh
            name="Torus004"
            geometry={nodes.Torus004.geometry}
            material={materials["gora trzymacza"]}
          />
          <mesh
            name="Torus004_1"
            geometry={nodes.Torus004_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.002"]}
            position={[0, 0.035, 0]}
            rotation={[0, -0.612, Math.PI]}
            scale={0.451}
          >
            <mesh
              name="Cylinder001"
              geometry={nodes.Cylinder001.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="DOL"
              geometry={nodes.DOL.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="DOL001"
              geometry={nodes.DOL001.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              name="gorny_element"
              geometry={nodes.gorny_element.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="lacznik_srodkowy"
              geometry={nodes.lacznik_srodkowy.geometry}
              material={materials["Material.003"]}
            />
            <mesh
              name="przyciski"
              geometry={nodes.przyciski.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              name="rysik"
              geometry={nodes.rysik.geometry}
              material={materials["Material.001"]}
            />
          </mesh>
          <mesh
            name="Cylinder002"
            geometry={nodes.Cylinder002.geometry}
            material={materials["gora trzymacza"]}
            position={[0, -0.001, 0]}
            scale={-0.011}
          />
          <mesh
            name="Torus001"
            geometry={nodes.Torus001.geometry}
            material={materials["Material.007"]}
            scale={0.985}
          />
        </group>
        <mesh
          name="Table001"
          geometry={nodes.Table001.geometry}
          material={materials.FurnitureAccent2}
          position={[0, 0.632, 0.389]}
        >
          <group
            name="SideDesk"
            position={[0.233, -1.006, 0.764]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.435, 0.435, 0.56]}
          >
            <mesh
              name="Cube087"
              geometry={nodes.Cube087.geometry}
              material={materials.FurnitureAccent}
            />
            <mesh
              name="Cube087_1"
              geometry={nodes.Cube087_1.geometry}
              material={materials.FurnitureAccent2}
            />
          </group>
        </mesh>
        <group
          name="tablet"
          position={[-0.065, 0.231, 0.333]}
          rotation={[-Math.PI / 2, 0.751, Math.PI / 2]}
          scale={1.863}
        >
          <VideoScene />
          <mesh
            name="Cube091"
            geometry={nodes.Cube091.geometry}
            material={materials["ekran.001"]}
          />
          <mesh
            name="Cube091_1"
            geometry={nodes.Cube091_1.geometry}
            material={materials.tworzywo}
          />
          <mesh
            name="Cube091_2"
            geometry={nodes.Cube091_2.geometry}
            material={materials.Screen}
          />
          <mesh
            name="dioda"
            geometry={nodes.dioda.geometry}
            material={materials.Material}
          />
          <mesh
            name="guziki_gora"
            geometry={nodes.guziki_gora.geometry}
            material={materials["Material.002"]}
            position={[0.216, 0.166, 0]}
            scale={[2.464, 1, 1]}
          />
          <mesh
            name="guziki_przod"
            geometry={nodes.guziki_przod.geometry}
            material={materials.tworzywo}
          />
          <mesh
            name="Stopka"
            geometry={nodes.Stopka.geometry}
            material={materials["ekran.003"]}
            position={[0, -0.088, -0.041]}
            rotation={[0.634, 0, 0]}
          />
          <mesh
            name="wspornikStopki"
            geometry={nodes.wspornikStopki.geometry}
            material={materials.tworzywo}
            position={[0, 0, -0.031]}
            scale={[1, 1, 0.493]}
          >
            <mesh
              name="Cube063_3"
              geometry={nodes.Cube063_3.geometry}
              material={materials.tworzywo}
              position={[0, -0.052, -0.062]}
              rotation={[-2.429, -0.008, -3.131]}
              scale={[0.257, 0.394, 0.021]}
            />
            <mesh
              name="Cylinder004"
              geometry={nodes.Cylinder004.geometry}
              material={materials.srubka}
              position={[0.055, 0.062, -0.007]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={[0.41, 0.375, 0.41]}
            />
            <mesh
              name="Cylinder008"
              geometry={nodes.Cylinder008.geometry}
              material={materials.srubka}
              position={[-0.055, 0.062, -0.007]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={[0.41, 0.375, 0.41]}
            />
            <mesh
              name="Cylinder009"
              geometry={nodes.Cylinder009.geometry}
              material={materials.srubka}
              position={[0.055, -0.054, -0.007]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={[0.41, 0.375, 0.41]}
            />
            <mesh
              name="Cylinder010"
              geometry={nodes.Cylinder010.geometry}
              material={materials.srubka}
              position={[-0.054, -0.054, -0.007]}
              rotation={[Math.PI / 2, 0, -Math.PI]}
              scale={[0.41, 0.375, 0.41]}
            />
          </mesh>
          <mesh
            name="wspornikStopkinachylenie"
            geometry={nodes.wspornikStopkinachylenie.geometry}
            material={materials["Material.006"]}
            position={[0, 0, -0.032]}
          />
          <mesh
            name="Cube095"
            geometry={nodes.Cube095.geometry}
            material={materials["ekran.001"]}
          />
          <mesh
            name="Cube095_1"
            geometry={nodes.Cube095_1.geometry}
            material={materials.tworzywo}
          />
          <mesh
            name="Cube095_2"
            geometry={nodes.Cube095_2.geometry}
            material={materials["z tylu naklejka przy kablach"]}
          />
          <mesh
            name="Cube095_3"
            geometry={nodes.Cube095_3.geometry}
            material={materials["materiał z elektronika"]}
          />
          <mesh
            name="kułka"
            geometry={nodes.kułka.geometry}
            material={materials["Material.002"]}
            position={[0.165, -0.158, -0.014]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={-0.005}
          />
          <mesh
            name="tył_dziury"
            geometry={nodes.tył_dziury.geometry}
            material={materials.tworzywo}
          />
        </group>
      </mesh>
      <mesh
        name="Table004"
        geometry={nodes.Table004.geometry}
        material={materials.FurnitureAccent2}
        position={[-3.431, 0.302, -3.132]}
        rotation={[0, -1.571, 0]}
      />
      <group name="Mat" position={[-3.214, 0.057, -1.175]} scale={2.545}>
        <mesh
          name="Circle011"
          geometry={nodes.Circle011.geometry}
          material={materials.Carpet}
        />
        <mesh
          name="Circle011_1"
          geometry={nodes.Circle011_1.geometry}
          material={materials.Carpet2}
        />
      </group>
      <mesh
        name="ShelfLower"
        geometry={nodes.ShelfLower.geometry}
        material={materials.Furniture}
        position={[-2.938, 1.175, -3.065]}
        rotation={[0, -1.571, 0]}
      >
        <group
          name="Frame005"
          position={[-0.285, 0.001, -0.424]}
          rotation={[Math.PI / 2, 0.257, -Math.PI / 2]}
          scale={0.343}
        >
          <mesh
            name="Cube068"
            geometry={nodes.Cube068.geometry}
            material={materials.ShobhasPallette}
          />
          <mesh
            name="Cube068_1"
            geometry={nodes.Cube068_1.geometry}
            material={materials.Imagemat}
          />
        </group>
        <mesh
          name="MiniBox001"
          geometry={nodes.MiniBox001.geometry}
          material={materials.ShobhasPallette}
          position={[-0.472, 0.065, -0.996]}
          rotation={[0, -0.07, 0]}
        />
        <mesh
          name="Trophy002"
          geometry={nodes.Trophy002.geometry}
          material={materials.Gold}
          position={[-0.386, 0.13, -0.721]}
          rotation={[0, 0.609, 0]}
          scale={0.088}
        >
          <mesh
            name="Plane005"
            geometry={nodes.Plane005.geometry}
            material={materials.ShobhasPallette}
            position={[-0.02, 0.923, -1.634]}
            rotation={[0, -0.006, 0]}
            scale={11.349}
          />
        </mesh>
      </mesh>
      <mesh
        name="ShelfUpper"
        geometry={nodes.ShelfUpper.geometry}
        material={materials.Furniture}
        position={[-2.938, 1.651, -3.065]}
        rotation={[0, -1.571, 0]}
      >
        <mesh
          name="BigTrophy001"
          geometry={nodes.BigTrophy001.geometry}
          material={materials.ShobhasPallette}
          position={[-0.473, 0.055, 0.01]}
          rotation={[0, -0.304, 0]}
        >
          <mesh
            name="Plane004"
            geometry={nodes.Plane004.geometry}
            material={materials.ShobhasPallette}
            position={[0.003, 0.246, -0.244]}
          />
          <mesh
            name="Trophy"
            geometry={nodes.Trophy.geometry}
            material={materials.Gold}
            position={[0.001, -0.006, -0.001]}
            rotation={[-Math.PI, 0.037, -Math.PI]}
            scale={0.145}
          />
        </mesh>
        <group
          name="Frame004"
          position={[-0.556, 0.007, -0.894]}
          rotation={[Math.PI / 2, 0.257, -Math.PI / 2]}
          scale={0.536}
        >
          <mesh
            name="Cube067"
            geometry={nodes.Cube067.geometry}
            material={materials.ShobhasPallette}
          />
          <mesh
            name="Cube067_1"
            geometry={nodes.Cube067_1.geometry}
            material={materials.Imagemat}
          />
        </group>
        <mesh
          name="SmallTrophy001"
          geometry={nodes.SmallTrophy001.geometry}
          material={materials.ShobhasPallette}
          position={[-0.36, 0.033, -0.447]}
          rotation={[0, -0.272, 0]}
        >
          <mesh
            name="Plane006"
            geometry={nodes.Plane006.geometry}
            material={materials.ShobhasPallette}
            position={[0.002, 0.266, -0.163]}
          />
          <mesh
            name="Trophy001"
            geometry={nodes.Trophy001.geometry}
            material={materials.Gold}
            position={[0.001, 0.172, -0.001]}
            rotation={[-Math.PI, 0.013, -Math.PI]}
            scale={0.118}
          />
        </mesh>
      </mesh>
      <mesh
        name="Slippies"
        geometry={nodes.Slippies.geometry}
        material={materials.ShobhasPallette}
        position={[-4.484, 0.068, -2.251]}
      />
      <mesh
        name="Darwaaza"
        geometry={nodes.Darwaaza.geometry}
        material={materials.FurnitureAccent2}
        position={[1.085, 1.306, -1.774]}
        rotation={[0, -1.571, 0]}
      >
        <mesh
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={materials.FurnitureAccent}
          position={[-0.413, -0.264, -0.008]}
        />
      </mesh>
      <mesh
        name="Calendar"
        geometry={nodes.Calendar.geometry}
        material={materials.ShobhasPallette}
        position={[-5.947, 2.176, -1.427]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <group
          name="AlarmClock001"
          position={[0.047, 0, -0.209]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube042"
            geometry={nodes.Cube042.geometry}
            material={materials.ShobhasPallette}
          />
          <mesh
            name="Cube042_1"
            geometry={nodes.Cube042_1.geometry}
            material={materials.Imagemat}
          />
        </group>
      </mesh>
      <mesh
        name="Bed"
        geometry={nodes.Bed.geometry}
        material={materials.FurnitureAccent2}
        position={[0.127, 0.437, 1.615]}
        rotation={[0, 1.571, 0]}
      >
        <mesh
          name="Cube018"
          geometry={nodes.Cube018.geometry}
          material={materials.FurnitureAccent}
          position={[0.123, 0.262, 0.889]}
          rotation={[0.353, 0, 0]}
        />
        <mesh
          name="Cube019"
          geometry={nodes.Cube019.geometry}
          material={materials.FurnitureAccent}
          position={[-0.162, 0.291, 0.756]}
          rotation={[0.385, 0.501, -0.091]}
        />
        <mesh
          name="Table006"
          geometry={nodes.Table006.geometry}
          material={materials.ShobhasPallette}
          position={[0, 0.12, -0.011]}
        />
        <mesh
          name="Table007"
          geometry={nodes.Table007.geometry}
          material={materials.Furniture}
          position={[0.001, 0.171, -0.298]}
        />
        <mesh
          name="Table008"
          geometry={nodes.Table008.geometry}
          material={materials.Furniture}
          position={[0.001, 0.22, -0.298]}
        />
      </mesh>
      <mesh
        name="WallsB"
        geometry={nodes.WallsB.geometry}
        material={materials.ShobhasPallette}
        position={[-3.397, 1.59, -1.468]}
      />
      <mesh
        name="Sil"
        geometry={nodes.Sil.geometry}
        material={materials.WindowSill}
        position={[-2.288, 1.493, 2.243]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
      />
      <mesh
        name="Ceiling_Main"
        geometry={nodes.Ceiling_Main.geometry}
        material={materials.ShobhasPallette}
        position={[-4.197, 3.155, -0.736]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        name="Desk1"
        geometry={nodes.Desk1.geometry}
        material={materials.Furniture}
        position={[-3.756, 0.814, -3.068]}
        rotation={[Math.PI, -1.571, 0]}
        scale={-1}
      >
        <group
          name="Wireless_Mouse"
          position={[0.425, 0, -1.599]}
          rotation={[0, 0, -Math.PI]}
          scale={-1.592}
        >
          <group
            name="Top"
            position={[-0.358, 0.024, -0.925]}
            rotation={[0, -1.571, 0]}
          >
            <mesh
              name="Cube104"
              geometry={nodes.Cube104.geometry}
              material={materials["Mouse - Mat Grey"]}
            />
            <mesh
              name="Cube104_1"
              geometry={nodes.Cube104_1.geometry}
              material={materials["Mouse - Wheel Grey"]}
            />
            <mesh
              name="Cube104_2"
              geometry={nodes.Cube104_2.geometry}
              material={materials["Mouse - Shiny Grey"]}
            />
          </group>
        </group>
        <group
          name="GKeys"
          position={[-0.079, 0.036, -0.27]}
          rotation={[-Math.PI / 2, -1.525, Math.PI / 2]}
          scale={-0.019}
        >
          <mesh
            name="Cube109"
            geometry={nodes.Cube109.geometry}
            material={materials.KeyboardBlack}
          />
          <mesh
            name="Cube109_1"
            geometry={nodes.Cube109_1.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <mesh
          name="LappyStand"
          geometry={nodes.LappyStand.geometry}
          material={materials.Keys}
          position={[-0.274, 0.015, -0.417]}
          rotation={[Math.PI, -1.571, 0]}
          scale={-1}
        >
          <group
            name="Lapp"
            position={[-0.13, 0.139, -0.098]}
            rotation={[0, -1.571, 0]}
          >
            <mesh
              name="Cube086"
              geometry={nodes.Cube086.geometry}
              material={materials.LappyMetal}
            />
            <mesh
              name="Cube086_1"
              geometry={nodes.Cube086_1.geometry}
              material={materials.Keys}
            />
            <mesh
              name="Cube086_2"
              geometry={nodes.Cube086_2.geometry}
              material={materials.Screen}
            />
          </group>
        </mesh>
        <mesh
          name="MicStand"
          geometry={nodes.MicStand.geometry}
          material={materials.Keys}
          position={[-0.299, 0.124, 0.332]}
          rotation={[0, -1.343, -Math.PI]}
          scale={-0.394}
        >
          <mesh
            name="Stand2"
            geometry={nodes.Stand2.geometry}
            material={materials.Keys}
            position={[-0.18, 1.037, 0.174]}
            rotation={[-0.351, -0.175, 0.04]}
          >
            <mesh
              name="Mic"
              geometry={nodes.Mic.geometry}
              material={materials.Keys}
              position={[-0.735, -0.845, 0.659]}
            />
          </mesh>
        </mesh>
        <mesh
          name="PhoneStand"
          geometry={nodes.PhoneStand.geometry}
          material={materials.LappyMetal}
          position={[-0.17, -0.001, -1.019]}
          rotation={[Math.PI, -0.905, 0]}
          scale={-0.128}
        >
          <group
            name="Phone"
            position={[-0.016, 0.586, 0.515]}
            rotation={[0, -1.569, -1.295]}
            scale={5.954}
          >
            <mesh
              name="Cube051"
              geometry={nodes.Cube051.geometry}
              material={materials.ShobhasPallette}
            />
            <mesh
              name="Cube051_1"
              geometry={nodes.Cube051_1.geometry}
              material={materials.Screen}
            />
          </group>
        </mesh>
        <mesh
          name="Succulent_plant"
          geometry={nodes.Succulent_plant.geometry}
          material={materials.porcelain}
          position={[-0.366, 0, -0.099]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={-1.715}
        >
          <mesh
            name="ground_real"
            geometry={nodes.ground_real.geometry}
            material={materials["Mud and grass"]}
            position={[0, 0.025, 0]}
            scale={0.053}
          />
          <mesh
            name="succulent_plant"
            geometry={nodes.succulent_plant.geometry}
            material={materials["succulent material"]}
            position={[0, 0.076, 0]}
          />
        </mesh>
      </mesh>
      <group
        name="SideTable2"
        position={[-3.786, 0.467, -2.936]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.433}
      >
        <mesh
          name="Cube088"
          geometry={nodes.Cube088.geometry}
          material={materials.FurnitureAccent}
        />
        <mesh
          name="Cube088_1"
          geometry={nodes.Cube088_1.geometry}
          material={materials.FurnitureAccent2}
        />
      </group>
      <group
        name="Bookshelf2"
        position={[-1.074, 1.712, -3.375]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.536}
      >
        <mesh
          name="Cube090"
          geometry={nodes.Cube090.geometry}
          material={materials.Furniture}
        />
        <mesh
          name="Cube090_1"
          geometry={nodes.Cube090_1.geometry}
          material={materials.FurnitureAccent}
        />
        <mesh
          name="Cube090_2"
          geometry={nodes.Cube090_2.geometry}
          material={materials.FurnitureAccent2}
        />
        <mesh
          name="Book001"
          geometry={nodes.Book001.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, 1.025, -0.086]}
          rotation={[3.128, 0, -Math.PI]}
          scale={2.145}
        />
        <mesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, 1.027, 0.187]}
          rotation={[-3.043, 0, Math.PI]}
          scale={2.44}
        />
        <mesh
          name="Cube002"
          geometry={nodes.Cube002.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, 1.019, 0.532]}
          rotation={[-3.093, 0, Math.PI]}
          scale={2.779}
        />
        <mesh
          name="Cube003"
          geometry={nodes.Cube003.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, 1.019, 0.837]}
          rotation={[-3.116, 0, Math.PI]}
          scale={2.145}
        />
        <mesh
          name="Cube004"
          geometry={nodes.Cube004.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -0.99, 0.488]}
          rotation={[-3.032, 0, Math.PI]}
          scale={2.145}
        />
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, 1.019, -0.894]}
          rotation={[-3.093, 0, Math.PI]}
          scale={2.779}
        />
        <mesh
          name="Cube006"
          geometry={nodes.Cube006.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, 1.019, -0.589]}
          rotation={[-3.116, 0, Math.PI]}
          scale={2.145}
        />
        <mesh
          name="Cube007"
          geometry={nodes.Cube007.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, 1.02, -0.335]}
          rotation={[-3.138, 0, Math.PI]}
          scale={1.903}
        />
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -0.989, 0.748]}
          rotation={[-2.932, 0, Math.PI]}
          scale={2.44}
        />
        <mesh
          name="Cube009"
          geometry={nodes.Cube009.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -0.996, -0.258]}
          rotation={[-3.104, 0, Math.PI]}
          scale={1.576}
        />
        <mesh
          name="Cube014"
          geometry={nodes.Cube014.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -0.997, -0.025]}
          rotation={[-3.078, 0, Math.PI]}
          scale={2.44}
        />
        <mesh
          name="Cube017"
          geometry={nodes.Cube017.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -0.997, -0.51]}
          rotation={[-3.075, 0, Math.PI]}
          scale={2.289}
        />
        <mesh
          name="Cube020"
          geometry={nodes.Cube020.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -0.997, -0.811]}
          rotation={[-3.119, 0, Math.PI]}
          scale={2.779}
        />
        <mesh
          name="Cube021"
          geometry={nodes.Cube021.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -0.993, 0.235]}
          rotation={[-3.055, 0, Math.PI]}
          scale={1.903}
        />
        <mesh
          name="Cube023"
          geometry={nodes.Cube023.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -2.008, -0.746]}
          rotation={[3.128, 0, -Math.PI]}
          scale={2.145}
        />
        <mesh
          name="Cube058"
          geometry={nodes.Cube058.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -2.007, -0.474]}
          rotation={[-3.043, 0, Math.PI]}
          scale={2.44}
        />
        <mesh
          name="Cube060"
          geometry={nodes.Cube060.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -2.014, -0.996]}
          rotation={[-3.138, 0, Math.PI]}
          scale={1.903}
        />
        <mesh
          name="Cube061"
          geometry={nodes.Cube061.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -2.015, 0.446]}
          rotation={[-3.104, 0, Math.PI]}
          scale={1.576}
        />
        <mesh
          name="Cube062"
          geometry={nodes.Cube062.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -2.016, 0.719]}
          rotation={[-3.078, 0, Math.PI]}
          scale={2.44}
        />
        <mesh
          name="Cube064"
          geometry={nodes.Cube064.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -2.015, 0.194]}
          rotation={[-3.075, 0, Math.PI]}
          scale={2.289}
        />
        <mesh
          name="Cube065"
          geometry={nodes.Cube065.geometry}
          material={materials.ShobhasPallette}
          position={[0.109, -2.015, -0.108]}
          rotation={[-3.119, 0, Math.PI]}
          scale={2.779}
        />
        <mesh
          name="soccer_ball"
          geometry={nodes.soccer_ball.geometry}
          material={materials.soccer_ball}
          position={[0.169, -2.733, -0.722]}
          rotation={[0, 1.571, 0]}
          scale={35.423}
        />
      </group>
      <mesh
        name="Floor"
        geometry={nodes.Floor.geometry}
        material={materials["Wood Floor"]}
        position={[-5.258, 0.033, -2.982]}
      />
    </group>
  );
}

useGLTF.preload("models/RoomScene_Fixing2.gltf");
