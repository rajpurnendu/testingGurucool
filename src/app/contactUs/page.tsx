const page = () => {
  return (
    <div className="max-w-[72rem] mx-3 xl:mx-auto mt-[90px]">
      <h1 className="text-[24px] font-[700] mb-[30px]  xl:text-[36px] xl:mb-[35px] xl:mt-[35px]">
        Gurucool
      </h1>
      <p className="mb-0 text-[16px] text-[#333] text-justify">
        GuruCool is a platform that connects users with expert astrologers,
        enabling them to receive personalized consultancy services. Astrologers
        on GuruCool undergo a thorough verification process to ensure
        high-quality service. As a platform, GuruCool charges a nominal fee from
        the consultancy fee to cover operational costs. Users can conveniently
        add funds to their GuruCool wallet through trusted payment gateways like
        Razorpay and utilize the wallet balance to pay for consultancy services
      </p>
      <h1 className="text-[24px] font-[700] mb-[30px]  xl:text-[36px] xl:mb-[35px] xl:mt-[35px] mt-[30px]">
        Contact Us
      </h1>
      <div className="mt-[4px] mb-0">
        <p className="mb-0 text-[16px] text-[#333]">
          {`If you have any questions or concerns, please don't hesitate to reach
        out to us:`}
        </p>
        <div className="border mt-[22px] border-[#ccc] rounded-[8px] p-[6px]">
          <p className="text-[16px]">Email:</p>

          <a
            href="mailto:hi@gurucool.life"
            className="text-[16px] text-[#007BFF] hover:text-[#3b71ca] "
          >
            hi@gurucool.life
          </a>

          <p className="text-[16px]">Address:</p>

          <a
            href="#"
            className="text-[16px] text-[#007BFF] hover:text-[#3b71ca]"
          >
            Nohata House 190-A Viduyth Nagar, Sarthi Marg, Jaipur, Rajasthan
            302021
          </a>
        </div>
        <p className="mt-[1rem] mb-[1rem]">{`We're here to help and will get back to you as soon as possible!`}</p>
      </div>
    </div>
  );
};

export default page;
