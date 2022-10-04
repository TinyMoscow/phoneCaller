import React, { useEffect, useState } from "react";
import { TPhone } from "types/TPhone";
import { Form } from "../../molecules/Form/Form";
import { PhoneList } from "../../organisms/PhoneList/PhoneList";

import "./PhoneTemplate.css";

export const PhoneTemplate = () => {
  const [arrPhones, setArrPhones] = useState<TPhone[]>([]);

  const handleDeletePhone = async (id: number) => {
    const res = await fetch(`http://localhost:8080/phone/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setArrPhones(await res.json());
  };

  const handleActivePhone = (phone: TPhone) => {
    let x = arrPhones.indexOf(phone);
    arrPhones[x].active = !arrPhones[x].active;
    setArrPhones([...arrPhones]);
  };

  const getPhones = async () => {
    const res = await fetch("http://localhost:8080/phones", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    // if (!res.json()) {
    //   setArrPhones([]);
    // } else {
    // }
    setArrPhones(await res.json());
  };

  useEffect(() => {
    console.log("useEffect");
    getPhones();
  }, []);

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
