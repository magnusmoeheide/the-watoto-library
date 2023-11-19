import React, { useState, useEffect } from "react";

const Counter = ({
  icon = "",
  description = "",
  header = "",
  targetNumber,
  duration = 2000,
  isAdmin,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTimestamp = Date.now();
    const endTimestamp = startTimestamp + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min(
        (now - startTimestamp) / (endTimestamp - startTimestamp),
        1
      );
      setCount(Math.floor(progress * targetNumber));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    tick();
  }, [targetNumber, duration]);

  return (
    <div className="counter">
      {isAdmin ? (
        <input type="number" value={count} />
      ) : (
        <p className="number">{count}</p>
      )}

      <h3 className="underline-animation-header">
        <span dangerouslySetInnerHTML={{ __html: icon }}></span> {header}
      </h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default Counter;
