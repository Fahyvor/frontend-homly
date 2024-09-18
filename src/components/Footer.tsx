"use client";

import Image from "next/image";
import { BsTwitter, BsYoutube, BsTiktok } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { ImInstagram } from "react-icons/im";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Footer = () => {
  return (
    <div className="footer-container w-full mb-5 px-14 max-sm:px-6 bg-white">
      <div
        className="footer_upper flex justify-end px-6 py-12
        max-sm:justify-center w-full"
      >
        <div className="newsletter_container w-full lg:w-1/3 md:w-2/3 p-7">
          <h1 className="font-bold text-3xl">LOOKING FOR</h1>
          <p>for the best apartment deals?</p>

          <div
            className="email_container flex gap-4 mt-4
              items-center rounded-3xl justify-between px-4
              py-1 max-sm:px-2"
          >
            <input
              placeholder="Enter your email address and enjoy the latest!"
              type="text"
              name="email-signup"
              className="bg-transparent w-2/3 text-sm max-sm:text-xs
                text-white border-none outline-none"
            />
            <button
              type="submit"
              className="text-xs 
                text-white p-1 rounded-3xl px-3 lg:w-1/3 md:w-2/3 w-1/2
                max-sm:px-2 email_button_submit"
            >
              Sign up now
            </button>
          </div>
        </div>
      </div>

      <div
        className="footer_lower px-8 flex lg:flex-row gap-6 mt-10
        flex-col max-sm:px-4"
      >
        <div
          className="footer_lower_left w-5/6 lg:1/5 md:2/3 
          flex flex-col gap-6"
        >
          <Image src="/logo.png" width={100} height={100} alt="logo" />
          <p>
            Share the culture, lifestyle and activities of places you explored
          </p>
        </div>

        <div
          className="footer_lower_right flex flex-col w-5/6 max-sm:w-full
          gap-8"
        >
          <div
            className="filter_display flex justify-end gap-4 max-sm:w-full
            max-sm:text-xs max-sm:items-center max-sm:flex max-sm:text-center"
          >
            <Swiper
              spaceBetween={9}
              slidesPerView={7}
              loop={true}
              // navigation={true}
              pagination={{clickable: true }}
              autoplay={{
                delay: 5000,
              }}
              effect={"slide"}
              touchRatio={1.5}
              modules={[Navigation, Pagination]}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              className="pb-6 px-9 max-sm:px-1 flex main_swiper mb-9 m-auto"
            >
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4 mb-9">
                  All
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4">
                  Luxury
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4">
                  Roomates
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4">
                  Single
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4">
                  Self contain
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4">
                  Flats
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4">
                  Home office
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4">
                  Duplex
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <p className="flex justify-center items-center text-center rounded-xl px-4">
                  Others
                </p>
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            className="footer_socials flex justify-end items-center
            gap-4 mt-5 max-sm:flex-col max-sm:items-start"
          >
            <p>Follow Us On Social Media</p>
            <div className="footer_socials_links flex gap-4 ">
              <Link href="#">
                <BsTwitter />
              </Link>
              <Link href="#">
                <BsYoutube />
              </Link>
              <Link href="#">
                <BsTiktok />
              </Link>
              <Link href="#">
                <ImInstagram />
              </Link>
              <Link href="#">
                <BiLogoTelegram />
              </Link>
            </div>

            <div className="footer_country_selection flex gap-3">
              <select>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
                <option>Nigeria</option>
              </select>
              <p>N 0 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
