import React from "react";
import { useSpring, animated } from "react-spring";

function NumberCounter({ endValue }) {
  let valueRefactor = parseInt(endValue);
  const { number } = useSpring({
    number: valueRefactor,
    from: { number: 0 },
    config: { duration: 1000 },
  });

  return (
    <div>
      <animated.span>
        {number.to((val) => Math.floor(val))}
      </animated.span>
    </div>
  );
}

export default NumberCounter;
