import React from "react";

interface WaveDividerProps {
  color?: string;
  position?: "top" | "bottom";
  className?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ 
  color = "#efe8d5", 
  position = "bottom",
  className = ""
}) => {
  const waveClass = position === "top" ? "wave-divider-top" : "wave-divider";
  
  return (
    <div className={`${waveClass} ${className}`}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
        className="relative block w-full h-[120px]"
      >
        <path 
          d="m0 128 80-10.7C160 107 320 85 480 96c160 11 320 53 480 64s320-11 400-21.3l80-10.7v192H0Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;