import React from "react";

interface ITag {
  withDot?: boolean;
  icon?: React.ReactElement;
  rounded?: boolean;
  color: string;
  backgroundColor: string;
  className?: string;
  text: string;
}

export const Tag = ({
  withDot = false,
  rounded = false,
  color,
  backgroundColor,
  icon,
  className = "",
  text,
}: ITag) => {
  return (
    <span
      className={`inline-flex mr-3 items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium ${color} ${backgroundColor} ${
        rounded ? "rounded-full" : "rounded"
      } ${className}`}
    >
      {withDot && (
        <svg
          className={`${color} -ml-0.5 h-2 w-2`}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
      )}
      {icon}
      <span className={`text-sm ${color} first-letter:uppercase`}>
        {text.split(" ").join("-")}
      </span>
    </span>
  );
};
