import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    // Phase: enter (fade in logo)
    const holdTimer = setTimeout(() => setPhase("hold"), 800);
    // Phase: exit (fade out whole screen)
    const exitTimer = setTimeout(() => setPhase("exit"), 2000);
    // Phase: done (unmount)
    const doneTimer = setTimeout(() => onComplete(), 2900);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#001c55",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        transition: "opacity 0.8s ease",
        opacity: phase === "exit" ? 0 : 1,
      }}
    >
      {/* Hexagon Logo + DP initials */}
      <div
        style={{
          opacity: phase === "enter" ? 0 : 1,
          transform: phase === "enter" ? "scale(0.8)" : "scale(1)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Hexagon SVG with DP */}
        <svg
          width="120"
          height="138"
          viewBox="0 0 120 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer hexagon */}
          <polygon
            points="60,4 114,33 114,105 60,134 6,105 6,33"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            opacity="0.6"
          />
          {/* Inner hexagon */}
          <polygon
            points="60,14 104,38 104,100 60,124 16,100 16,38"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
          />
          {/* DP text */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fill="white"
            fontFamily="Inter, sans-serif"
            fontSize="40"
            fontWeight="700"
            letterSpacing="-1"
          >
            DP
          </text>
        </svg>

        {/* Dev Pandey in script style */}
        <p
          style={{
            color: "white",
            fontFamily: "'Architects Daughter', 'Dancing Script', cursive",
            fontSize: "28px",
            fontWeight: 400,
            margin: 0,
            letterSpacing: "1px",
            opacity: 0.9,
          }}
        >
          Dev Pandey
        </p>
      </div>
    </div>
  );
}
