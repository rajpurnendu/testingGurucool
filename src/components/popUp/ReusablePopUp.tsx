import React from "react";
import { FaTimes } from "react-icons/fa";

const getSize = (size: string) => {
  switch (size) {
    case "xs":
      return "w-80";
    case "sm":
      return "w-96";
    case "md":
      return "w-108";
    case "4xl":
      return "w-224";
    case "auto":
      return "w-auto";
    default:
      return "w-108"; // Default to medium size
  }
};

const getPadding = (props: { userReview: boolean }) => {
  return props.userReview ? "p-0" : "p-5";
};

const getBackground = (props: {
  Login: boolean;
  userReview: boolean;
  Popup: boolean;
}) => {
  if (props.userReview) return "bg-transparent";
  if (props.Popup) return "bg-transparent";
  if (props.Login) return "bg-purple-600";
  return "bg-white";
};

const getCloseIconColor = (props: {
  userReview: boolean;
  Popup: boolean;
  Login: boolean;
}) => {
  if (props.userReview || props.Popup) return "text-white";
  if (props.Login) return "text-black";
  return "text-black";
};

interface ModalProps {
  size: string;
  issOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleOverlayClick: (e: React.MouseEvent) => void;
  Login: boolean;
  userReview: boolean;
  Popup: boolean;
  children: React.ReactNode;
}

function Modal({
  size,
  issOpen,
  openModal,
  closeModal,
  handleOverlayClick,
  Login,
  userReview,
  Popup,
  children,
}: ModalProps) {
  //   const loginToken = localStorage.getItem("loginToken");

  return (
    <div>
      {issOpen && (
        <div
          onClick={handleOverlayClick}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <div
            className={`animate__animated animate__zoomIn animate__faster ${getSize(
              size
            )} ${getBackground({ Login, userReview, Popup })} rounded-lg ${
              Popup ? "" : "shadow-md"
            }`}
          >
            <button
              className={`absolute top-${Popup ? "33" : "10"} right-${
                Popup ? "67" : "10"
              } ${getCloseIconColor({
                userReview,
                Popup,
                Login,
              })} w-6 h-6 flex items-center justify-center bg-none border-none cursor-pointer`}
              onClick={closeModal}
            >
              <FaTimes className="text-base" />
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
