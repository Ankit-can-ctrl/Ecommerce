import { IoChevronDownOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { TiMessages } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" w-full h-full flex flex-col md:flex-row items-start justify-center py-20 border-b-2 border-gray-200">
        <div className="Contact_us w-full px-5 flex flex-col gap-2 ">
          <div className="flex gap-20 items-center justify-between text-xl">
            <h1 className="">Contact Us</h1>
            {isOpen ? (
              <IoIosArrowUp onClick={toggleDropdown} />
            ) : (
              <IoChevronDownOutline onClick={toggleDropdown} className="" />
            )}
          </div>

          <div
            className={`text-gray-400  transition-all 
            duration-300 bg-gray-200 p-4
            ease-in-out
            rounded-md
            transform overflow-hidden
            origin-top ${!isOpen ? " h-0" : " h-full"}`}
          >
            <p>
              Classyshop - Mega Super Store <br />
              Golf-Link 1<br /> India <br />
              ak537664@gmail.com
            </p>
            <p className="text-red text-2xl pt-3">(+91) 9876-543-210</p>
            <div className="chat flex items-center gap-4">
              <TiMessages className="text-5xl text-red" />
              <p className=" text-black font-semibold">
                Online Chat <br />
                Get Expert Help
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
}

export default Footer;

function FooterBottom() {
  const paymentOptions = [
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/carte_bleue.png",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/visa.png",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/master_card.png",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/american_express.png",
    "https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_blockpaymentlogo/views/img/paypal.png",
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="social_icons w-full flex items-center justify-center p-5 gap-5">
        <FaInstagram className="text-4xl hover:text-red cursor-pointer" />
        <FaFacebook className="text-4xl hover:text-red cursor-pointer" />
        <FaSquareXTwitter className="text-4xl hover:text-red cursor-pointer" />
        <FaPinterest className="text-4xl hover:text-red cursor-pointer" />
        <FaYoutube className="text-4xl hover:text-red cursor-pointer" />
      </div>
      <div className="payment_options w-full flex items-center justify-center gap-1">
        {paymentOptions.map((item, index) => (
          <img key={index} src={item} alt="Payment" />
        ))}
      </div>
      <p className=" text-sm text-center py-5 text-gray-500">
        © 2025 - Ecommerce software by
        <br /> Ankit™
      </p>
    </div>
  );
}
