import React, { useState } from "react";
import { TPhone } from "types/TPhone";
import { Form } from "../molecules/Form";
import { PhoneList } from "../organisms/PhoneList";

export const PhoneTemplate = () => {
  const [arrPhones, setArrPhones] = useState<TPhone[]>([]);
  localStorage.setItem("phonesList", JSON.stringify(arrPhones));

  const handleDeletePhone = (phone: TPhone) => {
    let x = arrPhones.indexOf(phone);
    arrPhones.splice(x, 1);
    setArrPhones([...arrPhones]);
  };

  const handleActivePhone = (phone: TPhone) => {
    let x = arrPhones.indexOf(phone);
    arrPhones[x].active = !arrPhones[x].active;
    setArrPhones([...arrPhones]);
  };

  return (
    <>
      <Form setArrPhones={setArrPhones} />
      <PhoneList
        handleDeletePhone={handleDeletePhone}
        arrPhones={arrPhones}
        handleActivePhone={handleActivePhone}
      />
    </>
  );
};
