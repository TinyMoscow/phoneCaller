import React from "react";
import { TPhone } from "types/TPhone";
import { Button } from "../atoms/Button";

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
        onClick={() => handleActivePhone(phone)}
      />
      <span>{phone.number}</span>
      <span>///{phone.startDate.toString()}</span>
      <span>///{phone.endDate.toString()}</span>
      <Button value="удалить" onClick={() => handleDeletePhone(phone)} />
    </div>
  );
};
