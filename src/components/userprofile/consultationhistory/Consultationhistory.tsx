"use client";
import Accordian from "@/components/Reuseableaccordian/Accordian";
import { getUserAllConsultations, getUserprofile } from "@/lib/data";
import clsx from "clsx";
import { useEffect, useState } from "react";
import PaginatedItems from "./components/Paginateditems";

const Consultationhistory = ({
  loginToken,
}: {
  loginToken: string | undefined;
}) => {
  const [items, setItems] = useState([]);
  const [tabstatus, setTabstatus] = useState("");
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTabstatus(e.currentTarget.value);
  };
  const [uid, setUid] = useState(0);

  useEffect(() => {
    if (loginToken) {
      const fetchUserDetails = async () => {
        const userData = await getUserprofile(loginToken);
        setUid(userData?.user?.uid);
      };
      fetchUserDetails();
    }
  }, [loginToken]);

  useEffect(() => {
    if (uid && loginToken) {
      const fetchConsultations = async () => {
        const data = await getUserAllConsultations(loginToken, uid, tabstatus);
        setItems(data);
      };
      fetchConsultations();
    }
  }, [uid, tabstatus, loginToken]);

  return (
    <Accordian title="Consultations History">
      <div className="flex justify-center">
        <button
          className={clsx(
            "w-[92px] text-base outline-none flex justify-center items-center pt-2 pb-2 px-4 font-semibold rounded-tl-[6px] rounded-bl-[6px]",
            {
              "bg-[#8d66d4] text-white": tabstatus === "",
              "bg-[#e8dcff] text-[#4a5568]": tabstatus !== "",
            }
          )}
          onClick={handleChange}
          value=""
        >
          ALL
        </button>
        <button
          className={clsx(
            "w-[92px] text-base outline-none flex justify-center items-center pt-2 pb-2 px-4 font-semibold",
            {
              "bg-[#8d66d4] text-white": tabstatus === "Call",
              "bg-[#e8dcff] text-[#4a5568]": tabstatus !== "Call",
            }
          )}
          onClick={handleChange}
          value="Call"
        >
          CALL
        </button>
        <button
          className={clsx(
            "w-[92px] text-base outline-none flex justify-center items-center pt-2 pb-2 px-4 font-semibold rounded-tr-[6px] rounded-br-[6px]",
            {
              "bg-[#8d66d4] text-white": tabstatus === "Chat",
              "bg-[#e8dcff] text-[#4a5568]": tabstatus !== "Chat",
            }
          )}
          onClick={handleChange}
          value="Chat"
        >
          CHAT
        </button>
      </div>
      {items.length > 0 && <PaginatedItems itemsPerPage={4} items={items} />}
    </Accordian>
  );
};

export default Consultationhistory;
