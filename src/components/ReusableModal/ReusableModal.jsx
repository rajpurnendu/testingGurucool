// components/Modal.js

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const Modal = ({ show, onClose, children, size }) => {
  const modalRef = useRef();
  const location = usePathname();

  const getSize = (size) => {
    switch (size) {
      case "xs":
        return "20rem";
      case "sm":
        return "24rem";
      case "md":
        return "28rem";
      case "lg":
        return "36rem";
      case "4xl":
        return "56rem";
      case "auto":
        return "auto";
      default:
        return "28rem"; // Default to medium size
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  const modalWidth = getSize(size);

  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 ${
        show ? "backdrop-blur-sm" : ""
      }`}
      id="modal"
    >
      <div className="flex items-center justify-center min-h-full">
        <div
          ref={location === "/call-consultation-started" ? null : modalRef}
          className="relative mx-auto p-4 border shadow-lg rounded-[0.625rem] bg-white animate__animated animate__zoomIn animate__faster"
          style={{
            width: modalWidth,
            boxShadow:
              "0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 1px 0px rgba(0, 0, 0, 0.20), 0px 0px 2px 0px rgba(0, 0, 0, 0.14)",
          }}
        >
          <div className="text-center">{children}</div>
          {/* <div className="mt-4">
            <button
              onClick={onClose}
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none"
            >
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
