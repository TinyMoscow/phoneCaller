import React, { MouseEventHandler } from "react";

type TButtonProps = {
  value: string;
  onClick?: MouseEventHandler;
};

export const Button = ({ value, onClick }: TButtonProps) => (
  <button onClick={onClick}>{value}</button>
);
