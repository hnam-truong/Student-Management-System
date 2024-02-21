import React, { useState } from "react";
import ModalReservation from "../../atoms/TerminalReservation/TerminalReservation";

const Home: React.FC = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <ModalReservation isShow={isShow} setIsShow={setIsShow}>
      ...
    </ModalReservation>
  );
};
export default Home;
