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
      {/* <Birtchart />
      <Followingastrologers />
      <Rechargehistory />
      <Consultationhistory /> */}
    </>
  );
};

export default Userprofile;
