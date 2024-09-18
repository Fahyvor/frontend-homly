'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { amenitiesData, reviewsData } from "@/dummyData";
import ReviewItem from "@/components/ReviewItem";
import Amenity from "@/components/Amenity";
import { LOCAL_API_URL } from "../axios/apiConfig";
import { useRouter } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter()

  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    // Fetch property data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`${LOCAL_API_URL}property`);
        const data = await response.json();
        console.log("Fetched data:", data)
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchData();
  }, []);


  const goToMessaging = () => {
    router.push('/agent-message');
  }
  return (
    <>
      <div className="flex justify-center items-center w-full relative">
        <div className=" max-sm:p-0 p-4 flex flex-col text-sm lg:px-14 xl:px-14 2xl:px-14 justify-center lg:w-full xl:w-[100vw] 2xl:w-[100vw] 
        max-sm:w-full md:w-full self-center">
          {/* HEADER */}
          <div className="header-container max-sm:flex max-sm:flex-col-reverse max-sm:gap-4">
            {/* TEXT SECTION */}
            <div className="mb-4 max-sm:px-6">
              <h1 className="text-xl font-bold mb-2">
                Property Description - Landmark Area
              </h1>
              <div className="flex items-center justify-between">
                <div className="left flex gap-4 font-lg flex-wrap max-sm:w-1/2">
                  <span className="flex  gap-2">
                    <Image
                      src="/material-symbols_star.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                    Trust:3.5
                  </span>
                  <span className="flex  gap-2">
                    <Image
                      src="/material-symbols_real-estate-agent-outline.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                    @agent
                  </span>
                  <span className="flex  gap-2">
                    <Image
                      src="/carbon_location.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    location
                  </span>
                </div>
                <div className="right sm:flex gap-3 right-2 hidden">
                  <span className="flex items-center gap-2">
                    <Image
                      src="/lucide_share.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    Share
                  </span>
                  <span className="flex items-center gap-2">
                    <Image
                      src="/likes.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    Likes
                  </span>
                </div>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className="flex gap-2 lg:gap-4 xl:gap-2 2xl:gap-2 w-full">
              {/* First image takes 2 columns and 2 rows */}
              <div className="w-1/2 max-sm:w-full">
                <Image src="/Rectangle 3.png" alt="" width={700} height={400} className="object-cover lg:w-full" />
              </div>

              {/* Remaining 4 images - hidden on small screens */}
              <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 max-sm:hidden
              gap-2 w-1/2">
                <div className="">
                  <Image src="/Rectangle 4.png" alt="" width={300} height={200} className="object-cover w-full"/>
                </div>

                <div className="">
                  <Image src="/Rectangle 5.png" alt="" width={300} height={200} className="object-cover w-full"/>
                </div>

                <div className="">
                  <Image src="/Rectangle 6.png" alt="" width={300} height={200} className="object-contain w-full"/>
                </div>

                <div className="">
                  <Image src="/Rectangle 7.png" alt="" width={300} height={200} className="object-contain w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* DESC AND PRICE */}
          <div className="desc-price-container mb-2 flex flex-col py-8 md:flex-row">
            {/* LEFT SIDE */}
            <div className="left flex-3 mr-12 w-full  md:w-2/3">
              <div className=" flex items-center justify-between mb-2 max-sm:justify-end">
                <h1 className="text-xl font-bold self-start pl-0 max-sm:hidden">
                  Property Description - Landmark Area
                </h1>
                <div className="flex items-center flex-col sm:flex-row max-sm:-mt-28  max-sm:pr-6 md:w-[65%]">
                  <div className="flex">
                    <Image  src="/Ellipse 1.png"  alt=""  width={50} height={50} className="object-contain z-20" />
                    <Image  src="/Ellipse-2.png"  alt=""  width={50} height={50} className="object-contain -ml-8 z-10" />
                    <Image  src="/Ellipse-3.png"  alt=""  width={50} height={50} className="object-contain -ml-8" />
                  </div>
                  <p className="text-deep-green text-xs font-thin mb-2 flex flex-col">
                    Compare{" "} With <br />
                    <span className=" max-sm:flex">
                      Other agents
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 items-center max-sm:gap-[0.5rem] gap-[3rem] mt-3 max-sm:grid-cols-3
              max-sm:px-6">
                <div className="toilets flex gap-3 border-[1.9px] max-sm:border-2
                 py-5 px-6 max-sm:p-4 flex-wrap items-center max-sm:flex-col max-sm:items-start">
                  <Image
                    src="/toilet.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain max-sm:w-1/4"
                  />
                  <p className="text-lg font-medium max-sm:text-sm">2 toilets</p>
                </div>
                <div className="bedrooms flex gap-3 border-[1.9px] py-5 px-6 max-sm:p-4 flex-wrap items-center">
                  <Image
                    src="/double-bed.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain max-sm:w-1/4"
                  />
                  <p className="text-lg font-medium max-sm:text-sm">2 bedrooms</p>
                </div>
                <div className="amenities flex gap-3 border-[1.9px] py-5 px-6 max-sm:p-4 flex-wrap items-center max-sm:flex-col max-sm:items-start">
                  <Image
                    src="/home-house-map-roof-round (1).png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain max-sm:w-1/4"
                  />
                  <p className="text-lg font-medium max-sm:text-sm">52 amenities</p>
                </div>
              </div>
              <hr className="mt-6 mb-3 border-gray-200 border-[1.5px] max-sm:mx-6" />
              <div className="extras p-2 max-sm:px-6">
                <h2 className="text-xl font-bold mb-4">Extras</h2>
                <div className="px-4 flex flex-col gap-5">
                  <span className="flex gap-3 p-2 font-medium text-[18px]">
                    <Image src="/market.png" alt="" width={20} height={20} />
                    Conducive Environment
                  </span>
                  <span className="flex gap-3 p-2 font-medium text-[18px]">
                    <Image src="/market.png" alt="" width={20} height={20} />
                    Close to central Market
                  </span>
                  <span className="flex gap-3 p-2 font-medium text-[18px]">
                    <Image
                      src="/surrounding.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                    Quiet Surrounding
                  </span>
                </div>
              </div>
              <hr className="my-6 border-gray-400 border-1 max-sm:hidden" />
              <span className="flex gap-1 px-6 max-sm:hidden">
                <Image
                  src="/material-symbols_real-estate-agent-outline.png"
                  alt=""
                  width={20}
                  height={20}
                />
                @agent
              </span>
              <hr className="mt-6 mb-3 border-gray-400 border-1 max-sm:mt-3 max-sm:mb-1" />
            </div>
            {/* RIGHT SIDE */}
            <div className="right flex flex-col gap-2 p-6 rounded-lg shadow-[5px_5px_15px_10px_rgba(100,100,100,0.1)]
            w-full sm:flex-2 max-sm:w-[80%] lg:w-1/3 md:h-1/3 lg:h-1/3 md:w-1/2 text-sm flex-grow-0 max-sm:mt-6 top-0 right-0 max-sm:mx-6">
              {" "}
              {/* Add shadow-md for box shadow */}
              <div className="flex justify-between mb-4">
                <div className="flex gap-2">
                  <span className="font-bold text-gray-400"><s>N540k</s></span>
                  <span className="text-sm font-bold">N470,000/year</span>
                </div>
                <span className="flex gap-1">
                  <Image
                    src="/material-symbols_star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  Trust: 3.5
                </span>
              </div>
              <div className=" upload_button rounded-full text-white bg-deep-green p-2 mt-2 text-center" onClick={goToMessaging}>
                Communicate with Agent
              </div>
              <span className="self-center p-2">You Won`t be charged Yet</span>
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between">
                  <span>Hospitality Fee</span>
                  <span>10%</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance Fee</span>
                  <span>5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Legal Fee</span>
                  <span>0%</span>
                </div>
              </div>
              <hr className="mt-2 mb-2 border-gray-400 border-[1.9px] max-sm:mx-4" />
              <div className="flex justify-between">
                <span className="text-sm">Total Amount:</span>
                <span className="font-bold text-sm">N485,000-N500,000</span>
              </div>
            </div>
          </div>

          {/* AGENT */}
          <div className="agent-container md:w-full lg:w-[63%] flex flex-col mb-10 ">
            {/* TITLE */}
            <p className="mb-6 font-bold text-[24px] max-sm:hidden">Meet Your Agent</p>
            {/* AGENT CARD */}
            <div className="box p-12 bg-light-green border-deep-green border-2 max-sm:p-0">
              <p className="hidden max-sm:flex text-[18px] font-semibold pl-36 mt-4 w-full">Meet the agent</p>
              <div className="details bg-red-1 flex justify-around pt-4 pb-2 max-sm:items-center">
                <div className="flex flex-col items-center gap-2">
                  <Image src="/Ellipse 1.png" alt="" width={70} height={70}  />
                  <h2 className="font-bold">Profile Name</h2>
                  <span className="-mt-4 max-sm:-mt-1">Premium Agent</span>
                </div>
                <div className="grid lg:grid-cols-2 max-sm:grid-cols-3 gap-6 w-[35%] max-sm:w-[60%]">
                  <div>
                    <p className="flex flex-col sm:flex-row items-baseline">
                    <span className="font-bold mr-1 text-2xl">32</span>reviews
                    </p>
                    <hr className=" border-gray-400 border-[1.8px] w-full" />
                  </div>
                  <div>
                    <p className="flex flex-col sm:flex-row items-baseline">
                      <span className="font-bold mr-1 text-2xl">3.5</span>rating
                    </p>
                    <hr className=" border-gray-400 border-[1.8px]" />
                  </div>
                  <div>
                    <p className="flex flex-col sm:flex-row items-baseline">
                      <span className="font-bold mr-1 text-2xl">2</span>years
                    </p>
                    <hr className=" border-gray-400 border-[1.8px]" />
                  </div>
                  <div>
                    <p className="flex flex-col sm:flex-row items-baseline">
                      <span className="font-bold mr-1 text-2xl">14</span>publishes
                    </p>
                    <hr className=" border-gray-400 border-[1.8px]" />
                  </div>
                  <div>
                    <p className="flex flex-col sm:flex-row items-baseline">
                      <span className="font-bold mr-1 text-2xl">12</span>sales
                    </p>
                    <hr className=" border-gray-400 border-[1.8px]" />
                  </div>
                  <div>
                    <p className="flex flex-col sm:flex-row items-baseline">
                      <span className="font-bold mr-1 text-2xl">5</span>negatives
                    </p>
                    <hr className=" border-gray-400 border-[1.8px]" />
                  </div>
                </div>
              </div>
              <hr className="mt-4 mb-4 border-gray-400 border[1.5px]" />
              <div className="about flex flex-col gap-5 p-2 max-sm:px-4">
                <div className="flex gap-1">
                  <Image
                    src="/cil_education.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain  self-start mt-0 max-sm:w-1/2"
                  />
                  <p className="leading-loose">
                    <span className="font-bold">Educational Background:</span>{" "}
                    The male property agent avatar is designed to be
                    knowledgeable and professional. It is programmed with a
                    foundational understanding of real estate principles, laws,
                    and ethics. Its virtual training includes completing a
                    simulated real estate pre-licensing course, passing a
                    virtual licensing exam, and staying updated through virtual
                    continuing education.
                  </p>
                </div>
                <div className="flex gap-1">
                  <Image
                    src="/pajamas_work.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain  self-start mt-0 max-sm:w-1/4"
                  />
                  <p className="leading-loose">
                    <span className="font-bold">
                      Professional Achievements:
                    </span>{" "}
                    In its virtual world, the male property agent avatar may
                    acquire virtual certifications to specialize in various
                    aspects of real estate, depending on the needs of the
                    simulated clients or scenarios it encounters.
                  </p>
                </div>
                <div className="flex gap-1">
                  <Image
                    src="/fluent_thumb-like-dislike-16-regular.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain  self-start mt-0 max-sm:w-1/3"
                  />
                  <p className="leading-loose">
                    <span className="font-bold">Likes & Dislikes:</span> This
                    avatar is equipped with strong virtual communication skills,
                    including verbal and written capabilities. It possesses a
                    virtual database of local real estate market information,
                    marketing techniques, negotiation strategies, and
                    problem-solving algorithms. It operates with the highest
                    ethical standards in virtual transactions.
                  </p>
                </div>
              </div>
              <hr className="mt-4 mb-4 border-gray-400 border-[1.8px] max-sm:mx-5" />
              <div className="experiences flex flex-col p-6">
                <h1 className="font-bold mb-6">My Experiences</h1>
                <div className="flex gap-3 flex-col sm:flex-row">
                  <div className="flex-1 flex flex-col gap-3">
                    <Image
                      src="/agent-img-1.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                    <h6 className="font-medium">
                      Was a speaker at the international buisness sumit
                    </h6>
                    <p className="flex gap-2">
                      {" "}
                      <Image
                        src="/carbon_location (1).png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      Ore,Ibadan
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                    <Image
                      src="/agent-img-2.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                    <h6 className="font-medium">
                      Was a speaker at the international buisness sumit
                    </h6>
                    <p className="flex gap-2">
                      {" "}
                      <Image
                        src="/carbon_location (1).png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      Ore,Ibadan
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col gap-3">
                    <Image
                      src="/agent-img-1.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                    <h6 className="font-medium">
                      Was a speaker at the international buisness sumit
                    </h6>
                    <p className="flex gap-2">
                      {" "}
                      <Image
                        src="/carbon_location (1).png"
                        alt=""
                        width={20}
                        height={20}
                      />
                      Ore,Ibadan
                    </p>
                  </div>
                </div>
                <div className="upload_button rounded-full text-white bg-deep-green p-2 mt-8 mb-4 w-full sm:w-[40%]
                cursor-pointer text-center" onClick={goToMessaging}>
                  Communicate with Agent
                </div>
                <hr className="mt-4 mb-4 border-gray-400 border-1" />
                <p className="pl-2 mt-4">
                  To Protect Your Money, never make a payment away from this
                  website
                </p>
              </div>
            </div>
          </div>

          {/* ABOUT */}
          <div className="w-[64%] max-sm:px-6 max-sm:w-full">
            <div className="">
              <h1 className="font-bold">About this place</h1>
              <p className="pl-6 py-4 leading-[2rem]">
                Property agents are well-educated professionals who play a
                pivotal role in the real estate industry. They acquire the
                necessary knowledge and skills through formal education,
                licensing, and ongoing training. By combining their educational
                background with practical experience, property agents assist
                clients in achieving their real estate goals while adhering to
                ethical and legal standards. make it brief
              </p>
            </div>
            <hr className="mt-4 mb-4 border-gray-400 border-1" />
            {/* AMENITIES */}
            <div className="amenities">
              <h1 className="font-bold mb-4">What this Place has to Offer</h1>
              <div className="flex items-center gap-4 sm:gap-14 mb-6 flex-col sm:flex-row self-start sm:self-start">
                <div className="flex flex-col gap-4 self-start sm:self-start ml-0">
                  {amenitiesData
                    .slice(0, amenitiesData.length / 2)
                    .map((amenity, index) => (
                      <Amenity
                        key={index}
                        icon={amenity.icon}
                        text={amenity.text}
                      />
                    ))}
                </div>
                <div className="flex flex-col gap-4 self-start mt-[-2]">
                  {amenitiesData
                    .slice(amenitiesData.length / 2)
                    .map((amenity, index) => (
                      <Amenity
                        key={index}
                        icon={amenity.icon}
                        text={amenity.text}
                      />
                    ))}
                </div>
              </div>
              <div className="upload_button text-white text-center rounded-full flex items-center gap-2
              w-1/4 justify-center max-sm:w-1/2">
                <p className="font-medium">Show all Amenities{" "}</p>
                <span>
                  <Image
                    src="/ep_arrow-up-bold.png"
                    alt=""
                    width={20}
                    height={20}
                    quality={100}
                    className="mb-2 object-contain"
                  />
                </span>
              </div>
            </div>
          </div>
          <hr className="mt-4 mb-4 border-gray-400 border-1" />

          {/* REVIEWS */}
          <div className="flex flex-col max-sm:px-6">
            <h1 className=" font-bold mt-4">Reviews</h1>
            <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-16 px-6 mt-6">
              {reviewsData.map((review, index) => (
                <ReviewItem key={index} review={review} />
              ))}
            </div>
            <div className="upload_button flex text-white justify-center items-center my-6 rounded-full
            gap-2 w-1/5 cursor-pointer max-sm:w-1/2">
              Show all reviews
              <span>
                <Image
                  src="/ep_arrow-up-bold.png"
                  alt=""
                  width={20}
                  height={20}
                  quality={80}
                  className="mb-2 object-contain"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyPage;
