import Link from "next/link";
import Image from "next/image";
import img from "../../public/assets/not-found.webp";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        className="lg:w-[350px] w-[200px] md:w-[300px] h-full mb-4 animate-bounce"
        width="500"
        height="500"
        src={img.src}
        alt="Page Not Found"
      />
      <h1 className="text-3xl font-semibold text-gray-700">Page Not Found</h1>
      <p className="text-gray-500 mt-2">
        {"The page you are looking for doesn't exist."}
      </p>
      <Link href="/">
        <p className="mt-4 text-blue-500 hover:underline">
          Go back to the home page
        </p>
      </Link>
    </div>
  );
}
