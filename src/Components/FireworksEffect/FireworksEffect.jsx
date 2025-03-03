import React, { useEffect, useRef } from "react";
import Confetti from "canvas-confetti";

export default function FireworksEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const firework = () => {
      Confetti({
        particleCount: 100,
        spread: 160,
        startVelocity: 30,
        decay: 0.9,
        scalar: 1.2,
        origin: { x: Math.random(), y: Math.random() * 0.5 },
      });
    };

    const interval = setInterval(firework, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="fixed inset-0 -z-50" ref={canvasRef}></div>;
}