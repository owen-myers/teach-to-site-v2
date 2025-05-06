interface BackgroundPatternProps {
  className?: string;
}

const BackgroundPattern = ({ className = "" }: BackgroundPatternProps) => {

  return (
    <div className={`absolute inset-0 w-full h-screen min-h-[600px] bg-gradient-to-b from-black via-gray-800 via-40% to-transparent ${className}`}>
      {/* <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pattern" width="100%" height="100%" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            {dots.map((dot, index) => (
              <circle
                key={index}
                cx={`${dot.x}%`}
                cy={`${dot.y}%`}
                r={dot.size}
                fill={`rgba(255, 253, 240, ${dot.opacity})`}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg> */}
    </div>
  );
};

export default BackgroundPattern; 