import Consultationhistory from "@/components/userprofile/consultationhistory/Consultationhistory";
import Followingastrologers from "@/components/userprofile/following/Followingastrologers";
import Rechargehistory from "@/components/userprofile/rechargehistory/Rechargehistory";
import Userdetails from "@/components/userprofile/userdetails/Userdetails";
import { cookies } from "next/headers";

const Userprofile = ({
  searchParams,
}: {
  searchParams?: { edit?: boolean };
}) => {
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");

  const edit = searchParams?.edit || false;
  return (
    <>
      <Userdetails loginToken={loginToken?.value} edit={edit} />
      <Followingastrologers loginToken={loginToken?.value as string} />
      <Rechargehistory loginToken={loginToken?.value as string} />
      <Consultationhistory loginToken={loginToken?.value} />
    </>
  );
};

export default Userprofile;
