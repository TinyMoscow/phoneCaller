import React from "react";
import { TPhone } from "types/TPhone";
import { Button } from "../../atoms/Button";
import { format } from "date-fns";

import "./Phone.css";

type TPhoneProps = {
  phone: TPhone;
  handleDeletePhone: Function;
  handleActivePhone: Function;
};

export const Phone = ({
  phone,
  handleDeletePhone,
  handleActivePhone,
}: TPhoneProps) => {
  return (
    <div className="phone">
      <input
        type="checkbox"
        checked={phone.active}
        onChange={() => handleActivePhone(phone)}
      />

      <span className="listItem">{phone.number}</span>
      <span className="listItem">
        {format(phone.startDate, "hh:mm (dd/MM)")}
      </span>
      <span className="listItem">{format(phone.endDate, "hh:mm (dd/MM)")}</span>
      <Button
        className="button button__delete"
        value="delete"
        onClick={() => handleDeletePhone(phone.id)}
      />
    </div>
  );
};
