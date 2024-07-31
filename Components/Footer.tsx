import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full lg:relative pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-red-500">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center lg:underline">
          Get In Touch
        </p>
        <div className="flex flex-col gap-6 lg:flex-row">
          <a href="wilems12@gmail.com" target="_blank">
            <MagicButton
              title="Email"
              icon={<HiOutlineMail className="text-[1.05rem]" />}
              position="right"
            />
          </a>
          <a href="https://wa.me/50942521970" target="_blank">
            <MagicButton
              title="WhatsApp"
              icon={<FaWhatsapp className="text-[1.05rem]" />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6">
        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <a href={info.link} key={info.id} target="_blank">
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>

        <p className="md:text-base text-sm md:font-normal font-light">
          © Wilems Rospide. All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
