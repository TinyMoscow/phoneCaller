import React, { MouseEventHandler } from "react";

type TButtonProps = {
  value: string;
  onClick?: MouseEventHandler;
  className?: string;
};

export const Button = ({ value, onClick, className = "" }: TButtonProps) => (
  <button className={className} onClick={onClick}>
    {value}
  </button>
);
