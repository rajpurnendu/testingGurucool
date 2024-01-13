"use client";
import React, { useState } from "react";
import MobileappPopup from "./MobileAppPopUp";

const MobilePop = () => {
  const [issOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // console.log("Cliked");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <MobileappPopup
        issOpen={issOpen}
        openModal={openModal}
        closeModal={closeModal}
        handleOverlayClick={handleOverlayClick}
      />
    </div>
  );
};

export default MobilePop;
