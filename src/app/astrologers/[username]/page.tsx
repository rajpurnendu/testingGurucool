import AstrologerWeb from "@/components/AstrologerProfile/AstrologerWeb";
import { Get_ASTROLOGER_FEEDBACK, Get_Single_Astrologer } from "@/lib/data";
import AstrologerMobile from "@/components/AstrologerProfile/AstrologerMobile";
import { cookies } from "next/headers";
const page = async ({ params }: { params: { username: string } }) => {
  let param = params.username;

  const data = await Get_Single_Astrologer(param);
  const FeedbackData1 = await Get_ASTROLOGER_FEEDBACK(data.guru.gid);
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");
  console.log(".......>");

  console.log(loginToken?.value);
  console.log(".......>");
  return (
    <div>
      <AstrologerWeb
        data={data.guru}
        loginToken={loginToken?.value}
        feedback={FeedbackData1?.feedback}
      />
      <AstrologerMobile
        data={data.guru}
        loginToken={loginToken?.value}
        feedback={FeedbackData1?.feedback}
      />
    </div>
  );
};

export default page;
