
import { useState } from "react";

export function useModal() {
  const [issOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
    // console.log("Cliked");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return { issOpen, openModal, closeModal, handleOverlayClick };
}