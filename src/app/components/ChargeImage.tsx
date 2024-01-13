"use client";
import { useState } from "react";
import ModalButton from "./ModalButton";

export const ChargeImage = () => {
  const [image, setImage] = useState();
  return <ModalButton setImage={setImage} />;
};
