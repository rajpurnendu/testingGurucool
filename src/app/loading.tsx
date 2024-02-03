import Image from "next/image";
import Loadingicon from "../../public/images/wallet/Pulse-1s-200px.svg";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src={Loadingicon} height={100} width={100} alt="Loading..." />
    </div>
  );
};

export default Loading;
