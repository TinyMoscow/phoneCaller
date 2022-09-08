import React from "react";

type TInputDateProps = {
  setDate: Function;
};

export const InputDate = ({ setDate }: TInputDateProps) => (
  <input
    className="inputPhone"
    type="datetime-local"
    onChange={(event) => {
      setDate(event.target.value);
    }}
  />
);
