import { BasicModal } from "@/components/login/BasicModal";
import Link from "next/link";
// import { BasicModal } from "@/components/BasicModal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.modal;
  // console.log(searchParams);

  return (
    <>
      <div className="bg-[purple] w-[100vw] h-[100vh]">
        kkk
        {/* <Link
          href="?modal=true"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          OPEN THY MODAL
        </Link> */}
        {/* {showModal && <BasicModal />} */}
      </div>
    </>
  );
}
