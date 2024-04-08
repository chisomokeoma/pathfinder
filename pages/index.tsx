import Image from "next/image";
import { Inter } from "next/font/google";
import { GrLocation, GrMailOption } from "react-icons/gr";
import { PiPhoneCallLight } from "react-icons/pi";
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { LoveIcon, NotificationIcon } from "@/src/components/home";
import { Button, Indicator } from "@mantine/core";



export default function Home() {
  return (
    <main className=" flex flex-col   w-full ">
      <nav className=" py-[11px] px-[clamp(3.1rem,8.375vw,7.4rem)] flex justify-between bg-purple text-white">
        <section className=" flex gap-[clamp(0.9rem,2vw,1.8rem)] ">
          <div className=" flex  gap-[10px] items-center ">
            <GrLocation color="#DAD4FF" size={20} />

            <p className=" text-creame text-[14px] font-medium font-[Inter]">
              123 Str., Lagos, Nigeria
            </p>
          </div>

          <div className=" flex items-center gap-[9.6px]">
            <GrMailOption color="#DAD4FF" />
            <p className=" text-creame text-[14px] font-medium font-[Inter]">
              info@pathfinders.com
            </p>
          </div>
        </section>
        <section className="flex gap-[1.18rem]">
          <div className=" flex items-center gap-[9.6px]">
            <PiPhoneCallLight color="#DAD4FF" size={20} />
            <p className=" text-creame text-[14px] font-medium font-[Inter]">
              Call us:
            </p>
            <p className=" text-creame text-[14px] font-medium font-[Inter]">
              234 801234567
            </p>
          </div>

          <div className=" flex gap-[9.6px] items-center">
            <p className=" text-[#DAD4FF] text-[14px] font-medium">
              Follow Us On :
            </p>
            <article className=" flex gap-[9.6px]">
              <FaFacebookF color="#E7EFFC" size={16} />
              <FaTwitter color="#E7EFFC" size={16} />
              <FaWhatsapp color="#E7EFFC" size={18} />
              <FaLinkedinIn color="#E7EFFC" size={16} />
              <FaYoutube color="#E7EFFC" size={16} />
            </article>
          </div>
        </section>
      </nav>

      <header className="py-[11px] px-[clamp(3.1rem,8.375vw,7.4rem)] justify-between items-center flex">
        <section className=" flex gap-[clamp(2.5rem,5.9vw,5.3rem)] items-center">
          <figure className=" w-[clamp(2.7rem,4.4vw,4.4rem)] h-[clamp(2.7rem,4.4vw,4.4rem)]">
            <Image
              className="!h-full !w-full"
              src="/logo.svg"
              width={100}
              height={0}
              alt="logo"
            />
          </figure>

          <ul className=" flex justify-between gap-[11px]">
            <li>Home</li>
            <li>Resources</li>
            <li>Mentors</li>
            <li>Blog</li>
          </ul>
        </section>
        <section className=" flex gap-[26px] ">
          <div className="flex border-[#8D9DB5]  px-[9px] border items-center rounded-[50px] min-w-[120px] w-[80%] overflow-hidden">
            <article className=" flex gap-[10px] items-center">
              <TbCategoryPlus />
              <p>Categories</p>
              <MdOutlineKeyboardArrowDown />
            </article>
            <input type="text" placeholder="Search For Mentors . . ."  className="border-none outline-none"/>
          </div>

          <div className=" flex gap-[29px]">
            <article className=" flex gap-[29px]">
              <div className=" gap-[14px] flex ">
                <Indicator
                  inline
                  label="0"
                  size={18}
                  color="#4B0082"
                  offset={6}
                >
                  <LoveIcon />
                </Indicator>
                <Indicator
                  inline
                  label="0"
                  size={18}
                  color="#4B0082"
                  offset={6}
                >
                  <NotificationIcon />
                </Indicator>
              </div>
            </article>

            <Button className=" bg-purple rounded-[50px] hover:bg-[#7630F7]">
              {" "}
              Log in
            </Button>
          </div>
        </section>
      </header>
    </main>
  );
}
