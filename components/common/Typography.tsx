import React from "react";

export const Text = ({
  children,
  className,
}: {
  children: JSX.Element | string;
  className?: string;
}) => {
  return (
    <p
      className={`text-slate-600 leading-relaxed max-w-xl mt-4 text-center text-base md:text-xl ${className}`}
    >
      {children}
    </p>
  );
};

export const Title = ({
  children,
  className,
}: {
  children: JSX.Element | string;
  className?: string;
}) => {
  return (
    <h1
      className={`text-2xl md:text-5xl font-semibold text-slate-800 !leading-snug max-w-2xl text-center ${className}`}
    >
      {children}
    </h1>
  );
};
