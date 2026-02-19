import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

export default function Image({ src, alt, fill, className }: ImageProps) {
  if (fill) {
    return (
      <div className="relative w-full h-full">
        <NextImage
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className || ""}`}
        />
      </div>
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={400}
      height={300}
      className={className}
    />
  );
}
