import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function PaperBlastRain() {
  const [numPieces, setNumPieces] = useState(150);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    const handleScroll = () => {
      setNumPieces((prev) => prev + 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-black">
      <Confetti width={width} height={height} numberOfPieces={numPieces} />
    </div>
  );
}
