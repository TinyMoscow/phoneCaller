import React from "react";
import { TPhone } from "types/TPhone";
import { Phone } from "../../molecules/Phone";

import "./PhoneList.css";

type TPhoneListProps = {
  arrPhones: TPhone[];
  handleDeletePhone: Function;
  handleActivePhone: Function;
};

export const PhoneList = ({
  arrPhones,
  handleDeletePhone,
  handleActivePhone,
}: TPhoneListProps) => {
  return (
    <div className="phoneList">
      <h3 className="listTitle">Phone list</h3>
      <div className="description phone">
        <span>on</span>
        <span>phone</span>
        <span>from</span>
        <span>till</span>
        <span>delete</span>
      </div>
      {arrPhones.map((phone) => (
        <Phone
          key={phone.id}
          phone={phone}
          handleDeletePhone={handleDeletePhone}
          handleActivePhone={handleActivePhone}
        />
      ))}
    </div>
  );
};
