"use client";
import Image from "next/image";
import Link from "next/link";
import Gurucool_Logo from "../../../public/assets/GurucoolNewWebLogo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BasicModal } from "../login/BasicModal";
import { logout } from "@/lib/actions";
import { getUserprofile } from "@/lib/data";

const Header = ({ loginToken }: { loginToken: string | undefined }) => {
  const [menuState, setMenuState] = useState("menu");
  const pathname = usePathname();
  const [login, setLogin] = useState(false);
  const [walletbal, setWalletbal] = useState(0);

  useEffect(() => {
    const userProfile = async () => {
      if (loginToken) {
        let data = await getUserprofile(loginToken);
        // console.log("====================================");
        // console.log(data);
        // console.log("====================================");
        setWalletbal(data?.wallet_balance);
      }
    };
    userProfile();
  }, [loginToken]);

  const onToggleMenu = () => {
    setMenuState((prevState) => (prevState === "menu" ? "close" : "menu"));
  };
  return (
    <>
      {login && <BasicModal setLogin={setLogin} />}

      <div className="bg-[#965EFB] fixed top-0 left-0 right-0 z-20">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-2 py-2">
          <div className="max-h-full">
            {/* <div className="md:w-200 md:h-200 sm:w-150 sm:h-150 w-100 h-100"> */}
            <Image
              src={Gurucool_Logo}
              width={150}
              height={150}
              alt="Gurucool"
            />
            {/* </div> */}
          </div>
          <div
            className={`md:static absolute ${
              menuState === "menu"
                ? "translate-y-[-100vh]"
                : "translate-y-[0vh]"
            } md:translate-y-[0vh] bg-[#965EFB] md:min-h-fit min-h-[60vh] left-0 top-[99%] w-full flex md:justify-center px-5 border-t-2 border-white md:border-none transition delay-300 duration-300 ease-in-out`}
          >
            <ul className="flex py-4 md:py-0 md:flex-row flex-col md:items-center md:gap-[3vw] gap-8">
              <li>
                <Link
                  className={clsx(
                    `py-1.5 px-4 rounded-full border-2 border-transparent hover:border-2 hover:border-white transition duration-300 ease-in-out text-white font-medium`,
                    {
                      "border-2 border-white": pathname === `/`,
                    }
                  )}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={clsx(
                    `py-1.5 px-4 rounded-full border-2 border-transparent hover:border-2 hover:border-white transition duration-300 ease-in-out text-white font-medium`,
                    {
                      "md:border-2 border-white border-b-2":
                        pathname === `/call-to-astrologers`,
                    }
                  )}
                  href="/call-to-astrologers"
                >
                  Consult Now
                </Link>
              </li>
              <li>
                <Link
                  className={clsx(
                    `py-1.5 px-4 rounded-full border-2 border-transparent hover:border-2 hover:border-white transition duration-300 ease-in-out text-white font-medium`,
                    {
                      "border-2 border-white": pathname === `/blogs`,
                    }
                  )}
                  href="/blogs/"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 border-2 border-white rounded-xl">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] md:w-[25px] h-[20px] md:h-[25px] "
              >
                <path
                  d="M13.8693 9.33984H7.86926M22.8693 11.3098V13.3698C22.8693 13.9198 22.4293 14.3698 21.8693 14.3898H19.9093C18.8293 14.3898 17.8393 13.5998 17.7493 12.5198C17.6893 11.8898 17.9293 11.2998 18.3493 10.8898C18.7193 10.5098 19.2293 10.2898 19.7893 10.2898H21.8693C22.4293 10.3098 22.8693 10.7598 22.8693 11.3098Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3493 10.8898C17.9293 11.2998 17.6893 11.8898 17.7493 12.5198C17.8393 13.5998 18.8293 14.3898 19.9093 14.3898H21.8693V15.8398C21.8693 18.8398 19.8693 20.8398 16.8693 20.8398H7.86926C4.86926 20.8398 2.86926 18.8398 2.86926 15.8398V8.83984C2.86926 6.11984 4.50926 4.21984 7.05926 3.89984C7.31926 3.85984 7.58926 3.83984 7.86926 3.83984H16.8693C17.1293 3.83984 17.3793 3.84984 17.6193 3.88984C20.1993 4.18984 21.8693 6.09984 21.8693 8.83984V10.2898H19.7893C19.2293 10.2898 18.7193 10.5098 18.3493 10.8898Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {loginToken && (
                <p className="text-[14px] md:text-[16px] font-medium text-white">
                  {walletbal}
                </p>
              )}
            </div>
            {loginToken ? (
              <button
                className="w-max bg-[#965EFB] px-4 py-2 rounded-full text-white font-semibold border-2 border-white"
                onClick={async () => {
                  logout();
                }}
              >
                Log Out
              </button>
            ) : (
              <button
                className="w-max bg-[#965EFB] px-4 py-2 rounded-full text-white font-semibold border-2 border-white"
                onClick={() => {
                  setLogin(true);
                }}
              >
                Log In
              </button>
            )}

            {menuState === "menu" ? (
              <Bars3Icon
                className="w-6 text-blue-50 cursor-pointer md:hidden transition delay-300 duration-300 ease-in-out"
                onClick={onToggleMenu}
              />
            ) : (
              <XMarkIcon
                className="w-6 text-blue-50 cursor-pointer md:hidden transition delay-300 duration-300 ease-in-out"
                onClick={onToggleMenu}
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
