import React from "react";
import { ComputerDesk } from "./models'sJS/ComputerDesk";
import { AlarmClock } from "./models'sJS/AlarmClock";
import { Calendar } from "./models'sJS/Calendar";
import { Computer } from "./models'sJS/Computer";
import { Cupboard } from "./models'sJS/Cupboard";
import { Microphone } from "./models'sJS/Microphone";
import { Phone } from "./models'sJS/Phone";
import { Trophy } from "./models'sJS/Trophy";
import RoomTexture from "./RoomTexture";


const Room=()=>{
    return(
        <group scale={1} >
        <RoomTexture />
        <group scale={2.5} position={[1, 0.55, -0.75]} >
          <ComputerDesk position={[0, 0, 0]} />
          <AlarmClock position={[-0.75, 0.45, 0]} />
          <Calendar scale={0.02} position={[0, 1, 0.48]} />
          <Computer
            scale={0.001}
            position={[0, 0.4, 0]}
            rotation={[0, Math.PI, 0]}
          />
          <Cupboard
            position={[1.5, -0.34, 0.28]}
            rotation={[0, -Math.PI, 0]}
            scale={0.7}
          />
          <Microphone scale={0.02} position={[0.5, 0.4, 0]} />
          <Phone
            scale={0.2}
            position={[-1, 0.5, 0]}
            rotation={[0, -Math.PI, 0]}
          />
          <Trophy position={[-0.6, 0.4, 0.2]} />
        </group>
      </group>
    )
}

export default Room;