import React from "react";

type TInputNumberProps = {
  phoneValue: string;
  setPhoneValue: Function;
};

export const InputNumber = ({
  phoneValue,
  setPhoneValue,
}: TInputNumberProps) => (
  <input
    id="phoneValue"
    className="inputPhone"
    type="phone"
    placeholder="+7(999)999-99-99"
    value={phoneValue}
    onChange={(event) => {
      setPhoneValue(event.target.value);
    }}
  />
);
