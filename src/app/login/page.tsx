import Carousel from "@/components/Crousels/Crousel";
import Carousel1 from "@/components/Crousels/Crousel1";
import { BasicModal } from "@/components/login/BasicModal";
import Loginmodal from "@/components/login/Loginmodal";
import Link from "next/link";
// import { BasicModal } from "@/components/BasicModal";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: Props) {
  const showModal = searchParams?.modal;
  // console.log(searchParams);
  const slides: any[] = [
    {
      src: "https://picsum.photos/seed/img1/600/400",
      alt: "Image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img2/600/400",
      alt: "Image 2 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img1/600/400",
      alt: "Image 1 for carousel",
    },
    {
      src: "https://picsum.photos/seed/img3/600/400",
      alt: "Image 3 for carousel",
    },
  ];

  return (
    <>
      {/* <div className="bg-[purple] w-[100vw] h-[100vh] flex justify-center items-center"> */}
      {/* <Carousel slides={slides} /> */}
      <div className="max-w-6xl w-full aspect-[10/4] my-8 mx-auto">
        <Carousel1 slides={slides} />
      </div>
      {/* <Loginmodal /> */}
      {/* <Link
          href="?modal=true"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          OPEN THY MODAL
        </Link> */}
      {/* {showModal && <BasicModal />} */}
      {/* </div> */}
    </>
  );
}
