interface BackgroundPatternProps {
  className?: string;
}

const BackgroundPattern = ({ className = "" }: BackgroundPatternProps) => {
  // Create an array of 100 random positions
  const dots = Array.from({ length: 100 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1 + 1, // Random size between 1 and 2
    opacity: Math.random() * 0.5 + 0.5, // Random opacity between 0.5 and 1.0
    duration: Math.random() * 2 + 2, // 2s to 4s
    delay: Math.random() * 4 // 0s to 4s
  }));

  return (
    <div className={`absolute inset-0 w-full h-screen min-h-[600px] bg-gradient-to-b from-black via-gray-800 via-40% to-transparent ${className}`}>
      <style>{`
        @keyframes glimmer {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pattern" width="100%" height="100%" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            {dots.map((dot, index) => (
              <circle
                key={index}
                cx={`${dot.x}%`}
                cy={`${dot.y}%`}
                r={dot.size}
                fill={`rgba(255, 253, 240, ${dot.opacity})`}
                style={{
                  animation: `glimmer ${dot.duration}s ease-in-out ${dot.delay}s infinite`,
                }}
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern; 