import { IoChevronDownOutline } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { TiMessages } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import ButtonMain from "../components/ButtonMain";
function Footer() {
  const footerProductLinks = [
    "Prices drop",
    "New products",
    "Best sales",
    "Contact us",
    "Sitemap",
    "Stores",
  ];
  const footerCompanyLinks = [
    "Delivery",
    "Legal Notice",
    "Terms and conditions of use",
    "About us",
    "Secure payment",
    "Login",
  ];
  return (
    <>
      <div className=" w-full h-full flex flex-col md:flex-row lg:items-center gap-5 py-10 px-5 border-b-2 border-gray-200">
        <div className="Contact_us w-full px-5 flex  flex-col gap-2 ">
          <h1 className=" text-2xl font-normal text-gray-500">Contact Us</h1>

          <div
            className={`text-gray-400 p-4 bg-gray-100 md:bg-white rounded-md }`}
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
        <div className="Products  w-full px-5 flex flex-col gap-2 ">
          <h1 className=" text-2xl font-normal text-gray-500">Products</h1>

          <div
            className={`text-gray-400 p-4 bg-gray-100 md:bg-white rounded-md }`}
          >
            <ul className=" flex flex-col gap-1">
              {footerProductLinks.map((item, index) => (
                <li
                  className="w-fit  hover:text-red hover:translate-x-[20px] transition duration-500"
                  key={index}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Our_company w-full h-full align-top px-5 flex flex-col  gap-2 ">
          <h1 className=" text-2xl font-normal text-gray-500">Our Company</h1>

          <div
            className={`text-gray-400 p-4  rounded-md bg-gray-100 md:bg-white }`}
          >
            <ul className=" flex flex-col gap-1">
              {footerCompanyLinks.map((item, index) => (
                <li
                  className="w-fit  hover:text-red hover:translate-x-[20px] transition duration-500"
                  key={index}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="Subscribe w-full hidden lg:flex flex-col items-start justify-start gap-2">
          <h2 className="text-2xl font-normal text-gray-500 capitalize">
            Subscribe to newsletter
          </h2>
          <div className="pl-2 flex flex-col gap-3">
            <p className=" text-gray-400">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <input
              type="email"
              placeholder="ak537664@gmail.com"
              className=" bg-gray-200 rounded-md py-2 px-3 outline-none"
            />
            <ButtonMain text={"Subscribe"} />
            <div className=" pl-2">
              <input type="checkbox" />
              <span className=" text-sm text-gray-400">
                {" "}
                I agree to the terms and conditions and the privacy policy.
              </span>
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
    <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between ">
      <div className="social_icons  flex items-center justify-center p-5 gap-5">
        <FaInstagram className="text-4xl hover:text-red cursor-pointer transition duration-300" />
        <FaFacebook className="text-4xl hover:text-red cursor-pointer transition duration-300" />
        <FaSquareXTwitter className="text-4xl hover:text-red cursor-pointer transition duration-300" />
        <FaPinterest className="text-4xl hover:text-red cursor-pointer transition duration-300" />
        <FaYoutube className="text-4xl hover:text-red cursor-pointer transition duration-300" />
      </div>
      <p className="hidden lg:flex text-sm text-center py-5 text-gray-500">
        © 2025 - Ecommerce software by
        <br /> Ankit™
      </p>
      <div className="payment_options flex items-center justify-center gap-1">
        {paymentOptions.map((item, index) => (
          <img key={index} src={item} alt="Payment" />
        ))}
      </div>
      <p className=" lg:hidden text-sm text-center py-5 text-gray-500">
        © 2025 - Ecommerce software by
        <br /> Ankit™
      </p>
    </div>
  );
}
