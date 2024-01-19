import AstrologerWeb from "@/components/AstrologerProfile/AstrologerWeb";
import {
  Get_ASTROLOGER_FEEDBACK,
  Get_Single_Astrologer,
  Get_SIMILAR_ASTROLOGER,
  getUserprofile,
} from "@/lib/data";
import AstrologerMobile from "@/components/AstrologerProfile/AstrologerMobile";
import { cookies } from "next/headers";

const page = async ({ params }: { params: { username: string } }) => {
  let param = params.username;

  const data = await Get_Single_Astrologer(param);
  const FeedbackData1 = await Get_ASTROLOGER_FEEDBACK(data?.guru?.gid);
  const SimilarAstroData1 = await Get_SIMILAR_ASTROLOGER(data?.guru?.gid);
  const cookieStore = cookies();
  const loginToken = cookieStore.get("loginToken");
  const datafollow = loginToken && (await getUserprofile(loginToken.value));

  const isFollowing = datafollow?.userDetails.following?.some((item: any) =>
    item.user.guru.includes(data?.guru.user?.guru)
  );

  return (
    <div>
      <AstrologerWeb
        isFollowing={isFollowing}
        data={data.guru}
        loginToken={loginToken?.value}
        feedback={FeedbackData1?.feedback}
        similar={SimilarAstroData1}
      />
      <AstrologerMobile
        data={data.guru}
        loginToken={loginToken?.value}
        feedback={FeedbackData1?.feedback}
        similar={SimilarAstroData1}
      />
    </div>
  );
};

export default page;
