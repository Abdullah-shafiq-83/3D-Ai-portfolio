import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tilt from "./Tilt.jsx"; // Adjust path if needed

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <Tilt
          key={technology.name}
          className='w-28 h-28'
          options={{
            max: 25,
            speed: 400,
            scale: 1.05,
            glare: true,
            "max-glare": 0.3,
          }}
        >
          <div className='w-full h-full'>
            <BallCanvas icon={technology.icon} />
          </div>
        </Tilt>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
