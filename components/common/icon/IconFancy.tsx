type IconSize = "small" | "medium" | "large";

const iconSizes: Record<IconSize, { width: number; height: number }> = {
  small: { width: 8, height: 8 },
  medium: { width: 11, height: 11 },
  large: { width: 14, height: 14 },
};

const IconStar = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 78 100"
    className={`fill-current ${className}`}
  >
    <path d="M77.1752 50.0049C77.185 49.9186 77.1606 49.8209 77.1068 49.7508C77.0531 49.6825 76.9749 49.6352 76.887 49.6206C56.037 49.2233 39.1879 27.3946 38.8818 0.372897C38.8818 0.166091 38.7515 0 38.5919 0C38.4323 0 38.2972 0.166091 38.2956 0.372897C37.9894 27.3929 21.1436 49.2249 0.288698 49.6206C0.200764 49.6352 0.122598 49.6825 0.0688604 49.7508C0.0167516 49.8209 -0.00765633 49.9088 0.00211407 49.9951C-0.00765633 50.0814 0.0167516 50.1791 0.0688604 50.2475C0.122598 50.3175 0.200764 50.3648 0.288698 50.3794C21.1436 50.7768 37.9894 72.6054 38.2956 99.6271C38.2956 99.8323 38.4258 100 38.5854 100C38.7434 100 38.8785 99.8323 38.8818 99.6271C39.1879 72.6054 56.0337 50.7735 76.887 50.3794C76.9749 50.3648 77.0531 50.3175 77.1068 50.2475C77.1606 50.1791 77.185 50.0912 77.1752 50.0049Z" />
  </svg>
);

interface IconFancyProps {
  size?: IconSize;
}

const IconFancy = ({ size = "medium" }: IconFancyProps) => {
  const { width, height } = iconSizes[size];

  return (
    <>
      <IconStar
        width={width}
        height={height}
        className="absolute -top-2 left-6 text-purple-5"
      />

      <IconStar
        width={width - 3}
        height={height - 3}
        className="absolute -bottom-2 left-16 text-purple-500"
      />
    </>
  );
};
export default IconFancy;
