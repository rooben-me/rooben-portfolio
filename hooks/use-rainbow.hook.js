/* eslint-disable array-callback-return */
import React from "react";

import range from "../utils/range";
import { generateId } from "../utils/generateId";
import useIncrementingNumber from "../hooks/use-incrementing-number.hook";

const rainbowColors = [
  "hsl(230deg, 100%, 45%)", // blue
  "hsl(240deg, 100%, 45%)", // indigo
  "hsl(260deg, 100%, 55%)", // violet
  "hsl(325deg, 100%, 48%)", // pink
];
const paletteSize = rainbowColors.length;
const WINDOW_SIZE = 3;

// During compile-time build, we have to assume no browser support.
// On mount, we'll check if `CSS.registerProperty` exists
const hasBrowserSupport =
  typeof window !== "undefined"
    ? typeof window.CSS.registerProperty === "function"
    : false;

const getColorPropName = (id, index) => `--magic-rainbow-color-${id}-${index}`;

const useRainbow = ({ intervalDelay = 2000 }) => {
  const prefersReducedMotion =
    typeof window === "undefined"
      ? true
      : window.matchMedia("(prefers-reduced-motion: no-preference)");

  const isEnabled = hasBrowserSupport && prefersReducedMotion.matches;

  const { current: uniqueId } = React.useRef(generateId());

  // Register all custom properties
  React.useEffect(() => {
    if (!isEnabled) {
      return;
    }

    range(0, WINDOW_SIZE).map((index) => {
      const name = getColorPropName(uniqueId, index);
      const initialValue = rainbowColors[index];

      try {
        CSS.registerProperty({
          name,
          initialValue,
          syntax: "<color>",
          inherits: false,
        });
      } catch (error) {
        console.log(error);
      }
    });
  }, [WINDOW_SIZE, isEnabled]);

  const intervalCount = useIncrementingNumber(intervalDelay);

  return range(0, WINDOW_SIZE).reduce((acc, index) => {
    const effectiveIntervalCount = isEnabled ? intervalCount : 0;

    const name = getColorPropName(uniqueId, index);
    const value = rainbowColors[(effectiveIntervalCount + index) % paletteSize];

    return {
      ...acc,
      [name]: value,
    };
  }, {});
};

export default useRainbow;
