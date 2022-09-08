import React, { SyntheticEvent, useState } from "react";
import { TPhone } from "types/TPhone";
import { Button } from "../atoms/Button";
import { InputDate } from "../atoms/InputDate";
import { InputNumber } from "../atoms/InputNumber";

type TFormProps = {
  setArrPhones: Function;
};

export const Form = ({ setArrPhones }: TFormProps) => {
  const [phoneValue, setPhoneValue] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleSubmitPhone = (event: SyntheticEvent) => {
    event.preventDefault();
    setArrPhones((prev: TPhone[]) => [
      ...prev,
      {
        number: phoneValue,
        id: Math.random(),
        startDate: startDate,
        endDate: endDate,
        active: true,
      },
    ]);
  };
  return (
    <form className="formPhone" onSubmit={handleSubmitPhone}>
      <InputNumber phoneValue={phoneValue} setPhoneValue={setPhoneValue} />
      <InputDate setDate={setStartDate} />
      <InputDate setDate={setEndDate} />
      <Button value="+" />
    </form>
  );
};
