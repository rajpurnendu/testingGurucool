"use client";
import { getUserprofile } from "@/lib/data";
import React, { useEffect, useState } from "react";

const Supportchat = ({ loginToken }) => {
  const [loggedInUserDetails, setLoggedInUserDetails] = useState();
  useEffect(() => {
    const userProfile = async () => {
      if (loginToken) {
        let data = await getUserprofile(loginToken);
        setLoggedInUserDetails(data);
      }
    };
    userProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginToken]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//in.fw-cdn.com/30915417/487105.js";
    script.setAttribute("chat", true);
    document.body.appendChild(script);
    // document.body.classList.add('support_bar');
    script.onload = () => {
      if (window.fwcrm && typeof window.fwcrm.on === "function") {
        window.fwcrm.on("user:created", function () {
          window.fcWidget.user.setFirstName(
            loggedInUserDetails?.user?.firstName
          );
          window.fcWidget.user.setLastName(loggedInUserDetails?.user?.lastName);
          window.fcWidget.setUserUid(loggedInUserDetails?.user?.uid);
          window.fcWidget.user.setPhone(loggedInUserDetails?.user?.phone);
          window.fcWidget.user.setEmail(loggedInUserDetails?.user?.email);

          meta = {
            cf_user_uid: loggedInUserDetails?.user?.uid,
            cf_consultation_count: loggedInUserDetails?.userDetails
              ?.isInternational
              ? "$" + loggedInUserDetails?.userDetails?.internationalWallet
              : "Rs" + loggedInUserDetails?.userDetails?.wallet,
          };
        });
      }
    };
  }, [loggedInUserDetails]);
  return <></>;
};

export default Supportchat;
