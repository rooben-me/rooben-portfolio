import React, { CSSProperties, useRef, useState } from "react";
import { default as Image, ImageProps } from "next/image.js";

interface ZoomProps {
  zoomPercentage?: number;
  backgroundColor?: string;
  backgroundOpacity?: number;
  animationDuration?: number;
}

/**
 * Zoom component
 * @param {ImageProps & ZoomProps} props
 */
export const ZoomableImage = (props: ImageProps & ZoomProps) => {
  const {
    zoomPercentage = 90,
    backgroundOpacity = 0.9,
    backgroundColor = "white",
    animationDuration = 300,
    ...imageProps
  } = props;

  if (zoomPercentage < 1 || zoomPercentage > 100) {
    throw new Error("Zoom percentage must be between 1 and 100");
  }

  if (backgroundOpacity < 0 || backgroundOpacity > 1) {
    throw new Error("Background opacity must be between 0 and 1");
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);

  const handleImageZoom = () => {
    if (!containerRef.current || clicked) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientHeight = containerRect.height;
    const clientWidth = containerRect.width;

    const wPrim = (window.innerWidth - containerRect.width) / 2;
    const hPrim = (window.innerHeight - containerRect.height) / 2;
    const cL = containerRect.left;
    const cT = containerRect.top;

    const zoomPerc = zoomPercentage / 100;
    const scale =
      ((window.innerHeight * zoomPerc) / clientHeight) * clientWidth >=
      window.innerWidth
        ? (window.innerWidth * zoomPerc) / clientWidth
        : (window.innerHeight * zoomPerc) / clientHeight;

    containerRef.current.style.transform = `translate(${wPrim - cL}px,${
      hPrim - cT
    }px) scale(${scale})`;

    window.document.addEventListener("scroll", closeWrapper, { once: true });

    setClicked(true);
  };

  const closeWrapper = () => {
    if (!containerRef.current) return;

    containerRef.current.style.transform = "scale(1)";
    setClicked(false);
  };

   const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      closeWrapper();
    }
  };

  const containerClasses = `relative transition duration-${animationDuration} ease-out ${
    props.layout === "fixed" ? "inline-block" : "block"
  } ${props.layout === "fixed" ? "max-w-max" : "w-full"} ${
    props.layout === "fixed" ? "max-h-max" : "h-full"
  } ${clicked ? "z-50" : "z-0"} ${clicked ? "overflow-hidden" : ""} ${
    clicked ? "bg-gray-500 bg-opacity-30" : ""
  }`;
  
  return (
    <>
      {clicked && (
        <div
          onKeyDown={handleKeyDown} 
          className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-40"
          onClick={closeWrapper}
        />
      )}
      <div className={containerClasses} ref={containerRef} onClick={handleImageZoom}>
        <Image {...imageProps} />
      </div>
    </>
  );
};
    
export default ZoomableImage;
