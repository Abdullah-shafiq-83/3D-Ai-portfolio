// src/components/Tilt.js
import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Tilt(props) {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, props.options || {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

    return () => {
      // Optional cleanup
      if (tiltRef.current.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, [props.options]);

  return (
    <div ref={tiltRef} className={props.className}>
      {props.children}
    </div>
  );
}

export default Tilt;
