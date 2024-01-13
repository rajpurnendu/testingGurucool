import React from "react";
import popup from "../../../public/assets/POPUP.5c53778b19f092985e4d527654188b27.svg";
import Modal from "./ReusablePopUp";
import Image from "next/image";

interface MobileappPopupProps {
  issOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleOverlayClick: (e: React.MouseEvent) => void; // Updated function signature
}

export default function MobileappPopup({
  issOpen,
  openModal,
  closeModal,
  handleOverlayClick,
}: MobileappPopupProps) {
  const isMobile = window.innerWidth <= 600;

  // Determine the size based on the screen width
  const modalSize = isMobile ? "sm" : "md";

  const redirectToPlayStore = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.gurucool&pcampaignid=web_share";
  };

  return (
    <>
      <Modal
        issOpen={issOpen}
        openModal={openModal}
        closeModal={closeModal}
        handleOverlayClick={handleOverlayClick}
        size={modalSize}
        Login={false}
        userReview={false}
        Popup={true}
      >
        <Image
          src={popup}
          alt="Popup Image"
          onClick={redirectToPlayStore}
          className="w-full h-full cursor-pointer mx-auto"
        />
      </Modal>
    </>
  );
}
