import React,  { useEffect, useState } from "react";
import '../style/GridAnimation.css';

const GRID_ROWS =  30;
const GRID_COLS =  10;

const GridAnimation = () => {
  const [activeBlocks, setActiveBlocks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomBlocks = [];
      const blockCount = Math.floor(Math.random() * 15) + 5;

      for(let i = 0; i < blockCount; i++) {
        const row = Math.floor(Math.random() * GRID_ROWS);
        const col = Math.floor(Math.random() * GRID_COLS);
        randomBlocks.push(`${row}-${col}`);
      }

      setActiveBlocks(randomBlocks);
    }, 2000);

    return() => clearInterval(interval);
  }, []);


  return (
    <div className="grid-animated">
      {Array.from( { length: GRID_ROWS}).map((_, row) => 
        Array.from({ length: GRID_COLS }).map((_, col) => {
          const id = `${row}-${col}`;

          return (
            <div
              key={id}
              className={`cell ${activeBlocks.includes(id) ? "active" : ""}`}
            />
          );
        })
      )}
    </div>
  );
};

export default GridAnimation;