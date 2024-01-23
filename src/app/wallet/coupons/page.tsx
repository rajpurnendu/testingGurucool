import Coupons from "@/components/wallet/Coupons";
import { decryptedData } from "@/lib/EncryptionDecryption";
import { cookies } from "next/headers";

const Couponspage = ({
  searchParams,
}: {
  searchParams?: { forAmount?: string };
}) => {
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");
  return (
    <Coupons
      forAmount={
        searchParams?.forAmount
          ? decryptedData(searchParams?.forAmount)
          : undefined
      }
      loginToken={loginToken?.value}
    />
  );
};

export default Couponspage;
