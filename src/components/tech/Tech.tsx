import React from "react";
import { technologies } from "../../constants";
import BallCanvas from "../canvas/Ball";

const Tech = () => {
  return (
    <>
      {technologies.map((technology) => (
        <div key={technology.name} className="technology">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </>
  );
};

export default Tech;
