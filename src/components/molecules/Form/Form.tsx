import React, { SyntheticEvent, useState } from "react";
import { TPhone } from "types/TPhone";
import { Button } from "../../atoms/Button";
import DatePicker from "react-datepicker";
import InputMask from "react-input-mask";

import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";

type TFormProps = {
  setArrPhones: Function;
};

export const Form = ({ setArrPhones }: TFormProps) => {
  const [phoneValue, setPhoneValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmitPhone = async (event: SyntheticEvent) => {
    event.preventDefault();

    const res = await fetch("http://localhost:8080/phone", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: phoneValue,
        id: Math.random(),
        startDate: startDate.getTime(),
        endDate: endDate.getTime(),
        active: true,
      }),
    });

    setArrPhones(await res.json());
  };
  return (
    <div className="container">
      <form className="formPhone" onSubmit={handleSubmitPhone}>
        <h3>Enter deteils</h3>
        <div className="formInputs">
          <InputMask
            className="input__phone"
            placeholder="+7(999)999-99-99"
            mask="+7\ (999)999-99-99"
            onChange={(event) => {
              setPhoneValue(event.target.value);
            }}
          />
          <div>
            <div className="formClocks">
              <span>from </span>
              <DatePicker
                className="datePicker"
                dateFormat={"hh:mm dd/MM"}
                selected={startDate}
                showTimeSelect
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>
            <div className="formClocks">
              <span>till</span>
              <DatePicker
                className="datePicker"
                dateFormat={"hh:mm dd/MM"}
                selected={endDate}
                showTimeSelect
                onChange={(date: Date) => setEndDate(date)}
              />
            </div>
          </div>
        </div>
        <Button className=" button button__add" value="add" />
      </form>
    </div>
  );
};
