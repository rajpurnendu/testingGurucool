import React from "react";

const page = () => {
  return (
    <div className="max-w-[72rem] mx-auto mt-[90px] mb-[55px] px-3">
      <div className="flex justify-center">
        <div className="flex justify-center xl:mb-[70px] mb-2 ">
          <h1 className="text-[24px]  xl:text-[36px] font-[700] text-center">
            Privacy Policy
          </h1>
        </div>
      </div>
      <hr className="border border-#ccc w-full my-[0.5rem]" />
      <p className="mb-[14px] xl:mb-[16px]">
        {`At GuruCool, we understand the importance of your privacy and are committed to protecting it. This privacy policy explains how we collect, use, and disclose your personal information when you use our website, mobile application, or any other service we offer (collectively, the "Services").`}
      </p>
      <p className="mb-[14px] xl:mb-[16px]">
        {`
This Privacy Policy is published in accordance with Rule 3(1) of the Information Technology (Intermediaries Guidelines) Rules, 2011 and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 which requires publishing of the Privacy policy for collection, use, storage, and transfer of sensitive personal data or information.`}
      </p>
      <h2 className="text-[20px] font-[500] text-center flex xl:text-[28px]">
        I. Collection of Information
      </h2>
      <p className="mb-[14px] xl:mb-[16px]">
        {`
We may collect personal information, such as your name, email address, phone number, and payment information, when you use our Services. We may also collect non-personal information, such as your device information, browser type, and IP address.`}
      </p>
      <h2 className="text-[20px] font-[500] text-center flex xl:text-[28px]">
        II. Use of Information
      </h2>
      <p className="mb-[14px] xl:mb-[16px]">
        {`
We use your personal information to provide you with the Services, process your payments, communicate with you, and improve our Services. We may also use your information for research and analysis purposes.`}
      </p>
      <h2 className="text-[20px] font-[500] text-center flex xl:text-[28px]">
        III. Disclosure of Information
      </h2>
      <p className="mb-[14px] xl:mb-[16px]">
        {`We do not sell or rent your personal information to third parties. We may disclose your personal information to our trusted service providers who assist us in providing the Services. We may also disclose your information to comply with legal obligations, protect our rights and property, and prevent fraud or other illegal activities.`}
      </p>
      <h2 className="text-[20px] font-[500] text-center flex xl:text-[28px]">
        IV. Security of Information
      </h2>
      <p className="mb-[14px] xl:mb-[16px]">
        {`We take appropriate measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.`}
      </p>
      <h2 className="text-[20px] font-[500] text-center flex xl:text-[28px]">
        V. Changes to Privacy Policy
      </h2>
      <p className="mb-[14px] xl:mb-[16px]">
        {`We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on our website. You are advised to review this policy periodically for any changes.`}
      </p>
      <h2 className="text-[20px] font-[500] text-center flex xl:text-[28px]">
        VI. Contact Us
      </h2>
      <p className="mb-[14px] xl:mb-[16px]">
        {`If you have any questions or concerns about our privacy policy, please contact us at `}

        <a
          href="mailto:hi@gurucool.life."
          className="text-[#007BFF] hover:text-[#3b71ca]"
        >
          hi@gurucool.life.
        </a>
      </p>
    </div>
  );
};

export default page;
