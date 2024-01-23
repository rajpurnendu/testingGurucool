import Walletpackages from "@/components/wallet/Walletpackages";
import { decryptedData } from "@/lib/EncryptionDecryption";
import { cookies } from "next/headers";
import React from "react";

const Walletpage = ({
  searchParams,
}: {
  searchParams?: { coupon?: string };
}) => {
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");
  return (
    <Walletpackages
      loginToken={loginToken?.value}
      coupon={
        searchParams?.coupon ? decryptedData(searchParams?.coupon) : undefined
      }
    />
  );
};

export default Walletpage;
