"use client"
import React, { useEffect } from 'react'
import mobile from "../../../public/assets/icons/mobile.svg";
import web from "../../../public/assets/icons/web.svg";
import Image from 'next/image';
import Link from 'next/link';
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google'
type Props = {}

const MobileViewModal = ({ loginToken }: { loginToken: string | undefined }) => {
    const [showModal, setShowModal] = React.useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) { // Adjust the width threshold as per your mobile breakpoint
                setShowModal(true);
            } else {
                setShowModal(false);
            }
        };
    
        handleResize(); // Check initial width
    
        window.addEventListener('resize', handleResize); // Listen for window resize events
    
        return () => {
            window.removeEventListener('resize', handleResize); // Clean up the event listener
        };
    }, []);
    

  return (
    <>
        {showModal ? (
        <>
          <div
            // className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            className='relative bottom-0 overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none sm:hidden'
          >
            <div className="fixed bottom-[-30px] w-full my-6 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className='border-b border-solid border-blueGray-200'>
                <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                     {/* × */}
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                <div className="flex flex-col items-center justify-between p-3 rounded-t">
                  <h3 className="text-base font-semibold">
                    Continue with
                  </h3>
                  <p className='font-normal text-[#707070] text-[10px]'>Continue in our app for better experience</p>
                </div>
                  
                  </div>
                {/*body*/}
                <div className="relative p-6 flex gap-4 flex-col">
                  <div className='rounded-md border-black flex items-center w-full  justify-between gap-7'>
                    <div className='flex gap-7'>
                  <div className='h-8 w-8 rounded-lg bg-white border-gray-400 border flex items-center justify-center'>
                    <Image width={24} height={24} src={mobile} alt={'icons'} className='h-6 w-6'/>
                  </div>
                  <p className='text-[#3A3938] font-semibold text-[12px] self-center'>Gurucool App</p>
                  </div>
                  <a href="https://play.google.com/store/apps/details?id=com.gurucool&pcampaignid=web_share">
                  <button className='bg-[#965EFB] text-white py-[6px] px-[10px] rounded-lg border w-24 border-gray-300' 
                 onClick={() => {
                    if(loginToken) {
                      sendGTMEvent({ event: 'buttonClicked', value: 'AppDownload_Header_Click' })
                      sendGAEvent({
                        event: "buttonClicked",
                        value: "AppDownload_Header_Click",
                      });
                    } else {
                      sendGTMEvent({ event: 'buttonClicked', value: 'AppDownload_Header_Click' })
                      sendGAEvent({
                        event: "buttonClicked",
                        value: "AppDownload_Header_Click",
                      });
                    }
                  }}
                  >
                    Download
                  </button>
                  </a>
                  </div>
                  <div className='rounded-md border-black flex items-center w-full  justify-between gap-7'>
                    <div className='flex gap-7'>
                  <div className='h-8 w-8 rounded-lg bg-white border-gray-400 border flex items-center justify-center'>
                    <Image width={24} height={24} src={web} alt={'icons'} className='h-6 w-6'/>
                  </div>
                  <p className='text-[#3A3938] font-semibold text-[12px] self-center'>Web Browser</p>
                  </div>
                  <button className='bg-white py-[6px] px-[10px] rounded-lg border w-24'  onClick={() => setShowModal(false)}>
                    Continue
                  </button>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

        </>
  )
}

export default MobileViewModal