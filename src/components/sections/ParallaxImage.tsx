import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

const ParallaxImage = ({
  src,
  alt,
  className = "",
  speed = 0.3,
  overlay = false,
  overlayOpacity = 0.4,
  children,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {overlay && (
          <div
            className="absolute inset-0"
            style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
          />
        )}
      </motion.div>
      {children && (
        <div className="relative z-10">{children}</div>
      )}
    </div>
  );
};

export default ParallaxImage;
