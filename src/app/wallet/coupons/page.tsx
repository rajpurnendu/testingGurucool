import Coupons from "@/components/wallet/Coupons";
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
      forAmount={searchParams?.forAmount}
      loginToken={loginToken?.value}
    />
  );
};

export default Couponspage;
