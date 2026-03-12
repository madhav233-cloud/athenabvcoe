interface ImagePlaceholderProps {
  aspect?: string;
  label?: string;
  className?: string;
}

const ImagePlaceholder = ({ aspect = "16/9", label = "IMAGE", className = "" }: ImagePlaceholderProps) => (
  <div
    className={`image-placeholder relative overflow-hidden ${className}`}
    style={{ aspectRatio: aspect }}
  >
    <div className="absolute inset-0">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" stroke="hsl(223, 25%, 15%)" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="hsl(223, 25%, 15%)" strokeWidth="0.5" />
      </svg>
    </div>
    <span className="relative z-10 text-xs uppercase tracking-wider">{label}</span>
  </div>
);

export default ImagePlaceholder;
