"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa"; // Assuming you have react-icons installed
import Gurucool_Logo from "../../../public/assets/GurucoolNewWebLogo.svg";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { BasicModal } from "../login/BasicModal";
import { logout } from "@/lib/actions";
import { getUserprofile } from "@/lib/data";
import TopBar from "../TopBar/TopBar";
import "./Header.css";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

const Header = ({ loginToken }: { loginToken: string | undefined }) => {
  const [menuState, setMenuState] = useState("menu");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<any>();
  const [login, setLogin] = useState(false);
  const [walletbal, setWalletbal] = useState(0);
  const [drop, setDrop] = useState(false);

  // Check if the current path is exactly '/web-stories/...'
  // Regex pattern to match paths that start with '/web-stories/' and have additional segments
  const webStoriesSubpathRegex = /^\/web-stories\/.+$/;

  // Check if the current path matches the regex pattern
  const isWebStoriesSubpath = webStoriesSubpathRegex.test(pathname);

  // const avatarRef = useRef<HTMLElement | null>(null);
  const ToggelOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const toggelDrop = useCallback(() => {
    setDrop(!drop);
  }, [drop]);
  const dropdownRef = useRef<any>(null);

  const handleClickOutside = (event: Event) => {
    // Use type assertion to treat event.target as an HTMLElement
    const target = event.target as HTMLElement;

    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setDrop(false);
    }
  };
  useEffect(() => {
    // Attach the listeners on component mount.
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    // Detach the listeners on component unmount.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // const handleUserAvatarClickOutside = useCallback(
  //   (event: any) => {
  //     if (avatarRef.current && avatarRef.current.contains(event.target)) {
  //       setDrop(false);
  //     }
  //   },
  //   [avatarRef, setDrop]
  // );

  // useEffect(() => {
  //   if (drop) {
  //     document.removeEventListener("mousedown", handleUserAvatarClickOutside);
  //   } else {
  //     document.addEventListener("mousedown", handleUserAvatarClickOutside);
  //   }
  // }, [drop, handleUserAvatarClickOutside]);

  useEffect(() => {
    if (loginToken) {
      const userProfile = async () => {
        let data = await getUserprofile(loginToken);

        setWalletbal(data?.wallet_balance);
        setUserDetails(data.user);
      };
      userProfile();
    }

    ToggelOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginToken]);
  const onToggleMenu = () => {
    setMenuState((prevState) => (prevState === "menu" ? "close" : "menu"));
  };

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuState("menu");
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuState]);

  // const [isSticky, setIsSticky] = useState(true);

  if (isWebStoriesSubpath) {
    // Return null or any other fallback UI when the path is a subpath of '/web-stories/'
    return null;
  }

  return (
    <>
      {login && <BasicModal setLogin={setLogin} />}
      <TopBar loginToken={loginToken ?? ""} state={open} fn={ToggelOpen} />
      <div
        ref={sidebarRef}
        // className={`bg-[#965EFB] fixed ${
        //   open == false ? "top-0" : "top-12"
        // }  left-0 right-0 z-20`}
        className="bg-[#965EFB]"
        id="header"
      >
        <nav className="relative max-w-[72rem] h-[4rem] mx-auto flex justify-between items-center px-2 py-2">
          <div className="max-h-full flex gap-2">
            {menuState === "menu" ? (
              <Bars3Icon
                className="w-8 text-blue-50 cursor-pointer md:hidden"
                onClick={() => {
                  onToggleMenu();
                  if (loginToken) {
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Home_Menu",
                    });
                    sendGAEvent({
                      event: "buttonClicked",
                      value: "Home_Menu",
                    });
                  } else {
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Home_Menu_Nologin",
                    });
                    sendGAEvent({
                      event: "buttonClicked",
                      value: "Home_Menu_Nologin",
                    });
                  }
                }}
              />
            ) : (
              <Bars3Icon
                className="w-8 text-blue-50 cursor-pointer md:hidden"
                onClick={() => {
                  onToggleMenu();
                  if (loginToken) {
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Home_Menu",
                    });
                    sendGAEvent({
                      event: "buttonClicked",
                      value: "Home_Menu",
                    });
                  } else {
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Home_Menu_Nologin",
                    });
                    sendGAEvent({
                      event: "buttonClicked",
                      value: "Home_Menu_Nologin",
                    });
                  }
                }}
              />
            )}
            {/* <div className="md:w-200 md:h-200 sm:w-150 sm:h-150 w-100 h-100"> */}
            <Link href={"/"}>
              <Image
                src={Gurucool_Logo}
                width={150}
                height={150}
                alt="Gurucool"
              />
            </Link>
            {/* </div> */}
          </div>
          <div
            className={`z-20 md:static absolute ${
              menuState === "menu"
                ? "translate-x-[-100vh] xl:translate-x-[0] md:translate-x-0"
                : "translate-x-[0vh]"
            } md:translate-y-[0vh] bg-[#965EFB] md:min-h-full min-h-[100vh] left-0 top-[0] xl:w-full  flex md:justify-center px-5  border-white md:border-none transition  duration-200 ease-in-out`}
            style={{ transition: "transform 0.7s ease-in-out" }}
          >
            <ul className="flex py-4 md:py-0 md:flex-row flex-col md:items-center md:gap-[3vw] gap-8">
              <div className="flex gap-4">
                <Link href="/">
                  <Image
                    src={Gurucool_Logo}
                    width={130}
                    height={130}
                    alt="Gurucool"
                    className="md:hidden"
                  />
                </Link>

                <XMarkIcon
                  className="w-8 text-blue-50 cursor-pointer md:hidden transition delay-300 duration-300 ease-in-out"
                  onClick={onToggleMenu}
                />
              </div>

              <li>
                <Link
                  onClick={() => {
                    onToggleMenu();
                    if (loginToken) {
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "Home_Menu",
                      });
                      sendGAEvent({
                        event: "buttonClicked",
                        value: "Home_Menu",
                      });
                    } else {
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "HomeMenu_Unlogin_Home",
                      });
                      sendGAEvent({
                        event: "buttonClicked",
                        value: "HomeMenu_Unlogin_Home",
                      });
                    }
                  }}
                  className={clsx(
                    `py-1.5 px-4 text-[14px] lg:text-[16px] rounded-full border-2 border-transparent hover:border-2 hover:border-white transition duration-300 ease-in-out text-white font-medium`,
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
                  onClick={() => {
                    onToggleMenu();
                    if (loginToken) {
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "Home_Menu_Consult_Now",
                      });
                      sendGAEvent({
                        event: "buttonClicked",
                        value: "Home_Menu_Consult_Now",
                      });
                    } else {
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "HomeMenu_Unlogin_Consult_Now",
                      });
                      sendGAEvent({
                        event: "buttonClicked",
                        value: "HomeMenu_Unlogin_Consult_Now",
                      });
                    }
                  }}
                  className={clsx(
                    `py-1.5 px-4 rounded-full text-[14px] lg:text-[16px] border-2 border-transparent hover:border-2 hover:border-white transition duration-300 ease-in-out text-white font-medium`,
                    {
                      "md:border-2 border-white border-b-2 text-[14px] lg:text-[16px]":
                        pathname?.includes(`/call-to-astrologers`),
                    }
                  )}
                  href="/call-to-astrologers"
                >
                  Consult Now
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    onToggleMenu();
                    if (loginToken) {
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "Home_Menu_Blogs",
                      });
                      sendGAEvent({
                        event: "buttonClicked",
                        value: "Home_Menu_Blogs",
                      });
                    } else {
                      sendGTMEvent({
                        event: "buttonClicked",
                        value: "HomeMenu_Unlogin_Blogs",
                      });
                      sendGAEvent({
                        event: "buttonClicked",
                        value: "HomeMenu_Unlogin_Blogs",
                      });
                    }
                  }}
                  className={clsx(
                    `py-1.5 px-4 text-[14px] lg:text-[16px] rounded-full border-2 border-transparent hover:border-2 hover:border-white transition duration-300 ease-in-out text-white font-medium`,
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

          <div ref={dropdownRef} className="flex items-center gap-3">
            <Link href={"/wallet/pricelist"}>
              <div
                className={`flex ${
                  loginToken ? "visible" : "invisible"
                } items-center gap-2 px-2 py-1 md:px-4 md:py-2 border-2 border-white rounded-xl`}
              >
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

                <p className="text-[14px] lg:text-[16px] w-max font-medium text-white">
                  ₹ {(walletbal && Math.floor(walletbal)) || 0}
                </p>
              </div>
            </Link>
            {/* {loginToken ? (
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
            )} */}
            {loginToken ? (
              userDetails?.avatar?.url ? (
                <div
                  onClick={() => {
                    toggelDrop();
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Home_ProfileClick",
                    });
                    sendGAEvent({
                      event: "buttonClicked",
                      value: "Home_ProfileClick",
                    });
                  }}
                  className="cursor-pointer overflow-hidden flex justify-center items-center w-[25px] h-[25px] rounded-[50%] text-[10px] bg-[#512da8] text-[#c4c4c4] text-center  mx-auto xl:w-[40px] xl:h-[40px] xl:text-[20px] border-[2px] transition-all duration-300 border-transparent ease-out hover:border-white"
                >
                  <Image
                    className=" rounded-full"
                    width="100"
                    height="100"
                    src={userDetails?.avatar?.url || ""}
                    alt="userProfile"
                  />
                </div>
              ) : (
                <div
                  onClick={() => {
                    toggelDrop();
                    sendGTMEvent({
                      event: "buttonClicked",
                      value: "Home_ProfileClick",
                    });
                    sendGAEvent({
                      event: "buttonClicked",
                      value: "Home_ProfileClick",
                    });
                  }}
                  className="cursor-pointer relative flex justify-center items-center overflow-hidden w-[30px] h-[30px] rounded-[50%] text-[10px] bg-[#512da8] text-[#c4c4c4] mx-auto my-2 xl:w-[40px] xl:h-[40px] xl:text-[20px] border-[2px] transition-all duration-300 border-transparent ease-out hover:border-white"
                >
                  {userDetails?.firstName?.charAt(0).toUpperCase()}
                  {userDetails?.lastName?.charAt(0).toUpperCase()}
                </div>
              )
            ) : (
              <FaUserCircle
                className="block text-[25px] xl:text-[40px] text-[#c4c4c4] cursor-pointer"
                onClick={() => {
                  setLogin(true);
                  sendGTMEvent({
                    event: "buttonClicked",
                    value: "Unlogin_Profile_Enter",
                  });
                  sendGAEvent({
                    event: "buttonClicked",
                    value: "Unlogin_Profile_Enter",
                  });
                }}
              />
            )}
            {loginToken ? (
              <div
                className={`animate__animated animate__bounceIn absolute top-[101.5%] right-0 ${
                  drop ? "block" : "hidden"
                } bg-white shadow-lg p-[10px] z-[1000] w-[214px] h-auto rounded-[4px] transition-all duration-500 ease-in-out`}
                // ref={avatarRef as LegacyRef<HTMLDivElement>}
              >
                <div className="flex flex-col items-start gap-2">
                  <Link
                    href="/my-profile"
                    onClick={toggelDrop}
                    className="w-full hover:scale-105 transition-all duration-200 ease-in-out"
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/wallet/pricelist"
                    onClick={toggelDrop}
                    className="w-full hover:scale-105 transition-all duration-200 ease-in-out"
                  >
                    Wallet
                  </Link>
                  <button
                    className="w-full text-left hover:scale-105 transition-all duration-200 ease-in-out"
                    onClick={async () => {
                      logout();
                      toggelDrop;
                    }}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </nav>
        {/* <TopBar state={open} fn={ToggelOpen} /> */}
      </div>
    </>
  );
};

export default Header;
