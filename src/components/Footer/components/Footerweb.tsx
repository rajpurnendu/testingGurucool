import Image from "next/image";
import Logo from "../../../../public/assets/footericons/New Logo 1.svg";
import razorpay from "../../../../public/assets/footericons/Group 51457.svg";
import paytm from "../../../../public/assets/footericons/Group 51458.svg";
import stripe from "../../../../public/assets/footericons/Group 51459.svg";
import youtube from "../../../../public/assets/footericons/Youtube.svg";
import instagram from "../../../../public/assets/footericons/Instagram.svg";
import facebook from "../../../../public/assets/footericons/Facebook.svg";
import Whatsapp from "../../../../public/assets/footericons/Whatsapp.svg";
import Link from "next/link";

const Footerweb = () => {
  return (
    <div className="main-tool-bar w-[100%] h-[450px] bg-[#965efb] pt-[3.5%] pb-[3.5%] flex-col justify-between main-tool-bar hidden text-[white] md:flex">
      <div className="mx-auto my-0 max-w-[72rem] box-border px-[1rem]">
        <div className="flex flex-col justify-between h-[80%]">
          <div className="flex justify-between mb-[20px]">
            <div className="w-[40%]">
              {/* Logo  */}
              <Image
                src={Logo}
                height={100}
                width={200}
                alt="Gurucool Logo"
                style={{ width: "auto", height: "auto" }}
              />
              <div className="mt-[17px]">
                <strong>
                  GuruCool&apos;s expert astrologers considered the best in
                  India, are dedicated to delivering accurate and reliable
                  online astrology predictions. With a deep understanding of
                  planetary configurations and constellations, our astrologers
                  analyze the impact of celestial bodies on various aspects of
                  human life.
                </strong>
              </div>
            </div>
            <div className="w-[45%] grid grid-cols-2">
              <div>
                <h4 className="text-[20px]">Company</h4>
                <div>
                  <p className="my-[3px] mx-0 cursor-pointer">About Us</p>
                  <p className="my-[3px] mx-0 cursor-pointer">Privacy Policy</p>
                  <p className="my-[3px] mx-0 cursor-pointer"> T & C </p>
                </div>
              </div>
              <div>
                <h4 className="text-[20px]">Support</h4>
                <div>
                  <p className="my-[3px] mx-0 cursor-pointer">Contact us</p>
                  <p className="my-[3px] mx-0 cursor-pointer">Refund Policy</p>
                  <p className="my-[3px] mx-0 cursor-pointer">Disclaimer</p>
                </div>
              </div>
            </div>
          </div>
          {/* Style Lower Box  */}
          <div className="flex justify-around w-[100%]">
            <div className="w-[50%] mr-[5%]">
              <h5>Trusted & Seals </h5>
              <div className="flex">
                <div>
                  <Image src={razorpay} alt="Razorpay Logo" />
                </div>
                <div className="ml-20">
                  <Image src={paytm} alt="Paytm Logo" />
                </div>
                <div className="ml-20">
                  <Image src={stripe} alt="Stripe Logo" />
                </div>
              </div>
            </div>
            <div className="w-[45%]">
              <h5>Social Media</h5>
              <div className="flex w-[200px] justify-between">
                <Link
                  href="https://www.youtube.com/@GuruCool-life"
                  target="_blank"
                >
                  <Image
                    src={youtube}
                    alt="Youtube Logo"
                    height={50}
                    width={50}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/gurucool_life/"
                  target="_blank"
                >
                  <Image
                    src={instagram}
                    alt="Instagram Logo"
                    height={50}
                    width={50}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/GuruCool.life/"
                  target="_blank"
                >
                  <Image
                    src={facebook}
                    alt="Instagram Logo"
                    height={50}
                    width={50}
                  />
                </Link>
                <Link
                  href="https://whatsapp.com/channel/0029VaDvTMr002TFloVt030J"
                  target="_blank"
                >
                  <Image
                    src={Whatsapp}
                    alt="Instagram Logo"
                    height={50}
                    width={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-normal text-[15px] text-center text-[white] mt-4">
        © 2023 GuruCool.life. All rights reserved
      </p>
    </div>
  );
};

export default Footerweb;
