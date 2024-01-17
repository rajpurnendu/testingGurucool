import Walletpackages from "@/components/wallet/Walletpackages";
import { cookies } from "next/headers";
import React from "react";

const Walletpage = () => {
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");
  return <Walletpackages loginToken={loginToken?.value} />;
};

export default Walletpage;
