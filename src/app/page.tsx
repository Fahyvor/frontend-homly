"use client"
import Image from 'next/image'
import { BiMapPin, BiMicrophone } from 'react-icons/bi'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button1 from '../components/Button1';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'; 
import Button2 from '@/components/Button2';

const homeArray = [
  {
    image: "/homeHouse1.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/homeHouse2.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/homeHouse3.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "roomate"
  },
  {
    image: "/homeHouse4.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  }
];

const experienceArray = [
  {
    image: "/homeExperience1.png",
    description: "Was a speaker at the international business summit",
    location: "Ore, Ibadan",
  },
  {
    image: "/homeExperience2.png",
    description: "Was a speaker at the international business summit",
    location: "Ore, Ibadan",
  },
  {
    image: "/homeExperience3.png",
    description: "Was a speaker at the international business summit",
    location: "Ore, Ibadan",
  },
  {
    image: "/homeExperience4.png",
    description: "Was a speaker at the international business summit",
    location: "Ore, Ibadan",
  }
];

const fullHouses = [
  {
    image: "/fullHouse1.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/fullHouse2.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/fullHouse3.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
];

const allHouses = [
  {
    image: "/allHouse1.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse2.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse3.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse4.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse5.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse6.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse7.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse8.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse9.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse10.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse11.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
  {
    image: "/allHouse12.png",
    title: "1 bedroom apartment",
    price: "N350k",
    location: "Ore, Ibadan",
    trust: "3.5",
    user_type: "agent"
  },
]

export default function Home() { 
  return (
    <div className='home_body_container w-full px-14 max-sm:px-6'>
    <div className='home-container bg-white w-full flex max-sm:hidden
    justify-center items-center max-sm:py-10 mt-5'>
      <div className='home_container_post flex my-40 w-1/2
      rounded-2xl justify-center gap-9 max-sm:w-5/6 max-sm:flex-col'>
        <div className='input_and_microphone flex
        items-center gap-3 w-full py-1 px-5 rounded-3xl'>
          <input type='text'
          placeholder='Where are you right now? Share the moment'
          className='bg-transparent w-full p-2 text-xs border-none outline-none'/>
          <div className='input_microphone p-1 rounded-full'>
            <BiMicrophone  color="white"/>
          </div>
        </div>
        <button type='submit'
        className='submit_button rounded-3xl text-white
        px-4 w-1/5 max-sm:w-2/3 mx-auto'>Post</button>
      </div>
    </div>

    <div className='slide_toggle pb-5 bg-white pl-8 w-full max-sm:pb-1 max-sm:w-full z-0'>
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
        scrollbar={{ draggable: true}}
        // onSlideChange={ () => console.log('slide change') }
        className='pb-6 flex main_swiper ml-12 w-2/3 max-sm:pb-1 max-sm:w-full'
        >
          <SwiperSlide className="mb-8"><p className='rounded-2xl text-center border-solid md:px-3'>All</p></SwiperSlide>
          <SwiperSlide><p className='rounded-2xl text-center border-solid'>Luxury</p></SwiperSlide>
          <SwiperSlide><p className='rounded-2xl text-center border-solid'>Roommates</p></SwiperSlide>
          <SwiperSlide><p className='rounded-2xl text-center border-solid'>Single</p></SwiperSlide>
          <SwiperSlide><p className='rounded-2xl text-center border-solid'>Self contain</p></SwiperSlide>
          <SwiperSlide><p className='rounded-2xl text-center border-solid'>Flats</p></SwiperSlide>
          <SwiperSlide><p className='rounded-2xl text-center border-solid'>Home office</p></SwiperSlide>
          <SwiperSlide><p className='rounded-2xl text-center border-solid'>Duplex</p></SwiperSlide>
          <SwiperSlide><p className='rounded-2xl text-center border-solid'>Others</p></SwiperSlide>
        </Swiper>
      </div>

      <div className="houses_display_container grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-4 gap-4 max-sm:gap-8 pb-5
      max-sm:flex-col max-sm:items-center max-sm:mt-6">
        {homeArray.map((home, index) => (
          <div key={index} className="home_item">
            <div className="flex justify-end px-2">
              <Image src="/cart1.png" alt="" width={30} height={30} 
                className="absolute mt-2" />
            </div>
            <div className="home_houses_image">
              <Image src={home.image} alt="home" width={400} height={100}
              className='w-full' />
            </div>

            <div className="home_houses_description flex justify-between mt-4">
              <div className="houses_description_left text-sm">
                <h6>{home.title}</h6>
                <div className="location_icon_and_location flex gap-1 mt-4">
                  <Image src="/location.png" alt="location" width={20} height={10} />
                  <p>{home.location}</p> <p className='fw-8 font-medium'>@{home.user_type}</p>
                </div>
              </div>

              <div className="houses_description_right text-right text-sm">
                <p className='font-medium text-2xl'>{home.price}</p>
                <div className='flex gap-1 items-center mt-1'>
                  <Image src="/star.png" alt="rating" width={20} height={1} />
                  <p>Trust {home.trust}</p>
                </div>
              </div>
            </div>

            <div className="show_more_button mt-3 w-1/3 flex ">
              <Button1 text="Extra" />
            </div>
          </div>
        ))}
      </div>

      <div className='home_experiences flex flex-col lg:flex-row lg:gap-3
      gap-6 mt-4
      max-sm:items-center'>
            <div className='experience_writeup w-2/3 lg:w-[22%] max-sm:w-full
            max-sm:pb-4'>
              <h1 className='font-bold text-2xl '>Experiences</h1>
              <p className='lg:w-2/3'>Share the culture,
                lifestyle and activities of places you explored.
              </p>
              <div className='experience_button w-5/6 lg:w-full
              text-xs mt-4'>
                <Button1 text="Create Your Account" />
              </div>
            </div>

            <div className='experience_card_container grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-4 gap-4 max-sm:gap-8 pb-5
            max-sm:flex-col max-sm:items-center w-full'>
              {experienceArray.map((experience, index) => (
              <div key={index} className='home_experience_container
              max-sm:flex max-sm:justify-center'>
                <div className='experience_cards'>
                    <div className='experience_card_images max-sm:w-full W-1/4'>
                      <Image src={experience.image} alt='image' width={320} height={300} 
                      className='w-full'/>
                    </div>

                    <div className='experience_description flex flex-col gap-3
                    max-sm:w-5/6 mt-6'>
                      <h4 className='text-sm'>{experience.description}</h4>
                      <div className='flex gap-1'>
                        <Image src="/location.png" alt="location" width={20} height={10} />
                        <p className='text-xs'>{experience.location}</p>
                      </div>
                    </div>

                    <div className='experience_follow_container mt-4
                    w-1/3'>
                      <Button2 text="Follow" />
                    </div>
                </div>
              </div>
              ))}
            </div>
      </div>

      <div className='complete_houses grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 gap-4 max-sm:gap-8 pb-6
      max-sm:flex-col max-sm:items-center'>
        {fullHouses.map((full_house, index) => (
          <div key={index} className="complete_house_item">
            <div className="flex justify-end px-2">
              <Image src="/cart1.png" alt="" width={30} height={30} 
                className="absolute mt-2" />
            </div>
            <div className="complete_houses_image">
              <Image src={full_house.image} alt="home" width={450} height={100} 
              className='w-full'/>
            </div>

            <div className="complete_houses_description flex justify-between mt-4">
              <div className="complete_houses_description_left text-sm flex flex-col gap-4">
                <h6>{full_house.title}</h6>
                <div className="location_icon_and_location flex gap-1">
                  <Image src="/location.png" alt="location" width={20} height={10} />
                  {/* <AiFillMapPin size={18} color="#7e8cad" /> */}
                  <p>{full_house.location} <b>@{full_house.user_type}</b></p>
                </div>
              </div>

              <div className="complete_houses_description_right text-right text-sm flex flex-col gap-2">
                <p className='font-medium text-2xl'>{full_house.price}</p>
                <div className='flex gap-1 items-center'>
                  <Image src="/star.png" alt="rating" width={20} height={1} />
                  <p>Trust {full_house.trust}</p>
                </div>
              </div>
            </div>

            <div className="show_more_button mt-3 w-1/3 flex ">
              <Button1 text="Extra" />
            </div>
          </div>
        ))}
      </div>

      <div className='All_houses gap-4 max-sm:gap-8 lg:mt-5 grid
      md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 pb-8 mt-6'>
      {allHouses.map((all_house, index) => (
          <div key={index} className="All_house_item max-sm:flex
          max-sm:flex-col ">
            <div className="flex justify-end px-2">
              <Image src="/cart1.png" alt="" width={30} height={30} 
                className="absolute mt-2" />
            </div>
            <div className="All_houses_image max-sm:w-full max-sm:flex
            max-sm:justify-center">
              <Image src={all_house.image} alt="home" width={400} height={100} 
              className='w-full'/>
            </div>

            <div className="All_houses_description flex justify-between mt-4
            max-sm:w-full">
              <div className="All_houses_description_left text-sm">
                <h6>{all_house.title}</h6>
                <div className="location_icon_and_location flex mt-4 gap-1">
                  <Image src="/location.png" alt="location" width={20} height={10} />
                  {/* <AiFillMapPin size={18} color="#7e8cad" /> */}
                  <p>{all_house.location}</p>
                  <p className='font-semibold'>@{all_house.user_type}</p>
                </div>
              </div>

              <div className="All_houses_description_right text-right text-sm">
                <p className='font-medium text-2xl'>{all_house.price}</p>
                <div className='flex gap-1 items-center mt-1'>
                  <Image src="/star.png" alt="rating" width={20} height={1} />
                  <p>Trust {all_house.trust}</p>
                </div>
              </div>
            </div>

            <div className="show_more_button mt-3 w-1/3 flex ">
              <Button1 text="Extra" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
