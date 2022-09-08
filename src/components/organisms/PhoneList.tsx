import React from "react";
import { TPhone } from "types/TPhone";
import { Phone } from "../molecules/Phone";

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
