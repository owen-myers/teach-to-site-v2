interface NotebookGridProps {
  className?: string;
}

const NotebookGrid = ({ className = "" }: NotebookGridProps) => {
  return (
    <div className={`absolute ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="notebook-dots" width="25" height="25" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle cx="12.5" cy="12.5" r="1" fill="rgba(0,0,0,0.2)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#notebook-dots)" />
      </svg>
    </div>
  );
};

export default NotebookGrid; 