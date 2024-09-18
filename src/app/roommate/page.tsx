"use client";
import Amenity from "@/components/Amenity";
import ReviewItem from "@/components/ReviewItem";
import { amenitiesData, reviewsData } from "@/dummyData";
import Image from "next/image";
import React, { useState } from "react";

const PropertyPage = () => {
  return (
    <div className="emmy flex justify-center items-center w-full relative">
      <div className="container p-4 flex flex-col text-sm lg:px-20 xl:px-40 2xl:px-60  md:w-[100vw] lg:w-[100vw] ">
        {/* HEADER */}
        <div className="header-container">
          {/* TEXT SECTION */}
          <div className="mb-4 ">
            <h1 className="text-xl font-bold mb-2">
              Property Description - Luxury Apartment Condor
            </h1>
            <div className="flex items-center justify-between">
              <div className="left flex gap-4 font-lg flex-wrap">
                <span className="flex  gap-2">
                  <Image
                    src="/material-symbols_star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  Trust:3.5
                </span>
                <span className="flex  gap-2">
                  <Image
                    src="/material-symbols_real-estate-agent-outline.png"
                    alt=""
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  @owner
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
          <div className="grid grid-cols-4 grid-rows-2 gap-2 lg:gap-1 xl:gap-1 ">
            {/* First image takes 2 columns and 2 rows */}
            <div className="md:col-span-2 row-span-2 col-span-4">
              <Image src="/Rectangle 9.png" alt="" width={700} height={400} />
            </div>

            {/* Remaining 4 images - hidden on small screens */}
            <div className="hidden md:block lg:block  col-span-1 row-span-1">
              <Image
                src="/page2-Rectangle 4 (1).png"
                alt=""
                width={300}
                height={200}
              />
            </div>

            <div className="hidden md:block lg:block  col-span-1 row-span-1">
              <Image
                src="/page2-Rectangle 5 (1).png"
                alt=""
                width={300}
                height={200}
              />
            </div>

            <div className="hidden md:block lg:block  col-span-1 row-span-1">
              <Image
                src="/page2-Rectangle 6 (1).png"
                alt=""
                width={300}
                height={200}
              />
            </div>

            <div className="hidden md:block lg:block  col-span-1 row-span-1">
              <Image
                src="/page2-Rectangle 7 (1).png"
                alt=""
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* DESC AND PRICE */}
        <div className="desc-price-container mb-2 flex flex-col py-8 md:flex-row">
          {/* LEFT SIDE */}
          <div className="left flex-3 mr-12  md:w-2/3">
            <div className="h-15 flex items-center justify-between">
              <h1 className="text-lg sm:text-xl font-bold self-start mb-4 ">
                Property Description - Landmark Area
              </h1>
            </div>
            <div className="flex items-center gap-4 space-x-4 ">
              <div className="toilets flex gap-2 ring-1 py-3 px-4 sm:p-6 flex-wrap">
                <Image
                  src="/ph_toilet.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
                2 toilets
              </div>
              <div className="bedrooms flex gap-2 ring-1 py-3 px-4 sm:p-6 flex-wrap">
                <Image
                  src="/double-bed.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
                2 bedrooms
              </div>
              <div className="amenities flex gap-2 ring-1 py-3 px-4 sm:p-6 flex-wrap">
                <Image
                  src="/home-house-map-roof-round (1).png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain"
                />
                52 amenities
              </div>
            </div>
            <hr className="mt-6 mb-6 border-blue-900" />
            <div className="extras p-2">
              <h2 className="text-xl font-bold mt-2 mb-4">Extras</h2>
              <div className="px-4 flex flex-col">
                <span className="flex gap-3 p-2">
                  <Image src="/market.png" alt="" width={20} height={20} />
                  Conduce Environment
                </span>
                <span className="flex gap-3 p-2">
                  <Image src="/market.png" alt="" width={20} height={20} />
                  Close to central Market
                </span>
                <span className="flex gap-3 p-2">
                  <Image
                    src="/surrounding (1).png"
                    alt=""
                    width={20}
                    height={20}
                  />
                  Quiet Surrounding
                </span>
              </div>
            </div>
            <hr className="mt-6 mb-6 border-blue-900" />
            <span className="flex gap-1 px-6">
              <Image
                src="/material-symbols_real-estate-agent-outline.png"
                alt=""
                width={20}
                height={20}
              />
              @roommate
            </span>
            <hr className="mt-6 mb-6 border-blue-900" />
          </div>
          {/* RIGHT SIDE */}
          <div className="right flex flex-col gap-2 p-6 rounded-md w-full sm:flex-2 sm:w-2/3 lg:w-1/3 md:h-1/3 lg:h-1/3 shadow-lg text-sm flex-grow-0 sticky top-0 right-0">
            {" "}
            {/* Add shadow-md for box shadow */}
            <div className="flex justify-between mb-4">
              <span className="text-sm font-bold">N24,000/year</span>
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
            <button className="ring-2 ring-button-shadow rounded-3xl text-white bg-deep-green p-2 mt-2">
              Communicate with Roommate
            </button>
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
            </div>
            <hr className="mt-2 mb-2 border-blue-900" />
            <div className="flex justify-between">
              <span className="text-sm">Total Amount:</span>
              <span className="font-bold text-sm">N485,000-N500,000</span>
            </div>
          </div>
        </div>

        {/* ROOMMATE */}
        <div className="agent-container md:w-full lg:w-full flex flex-col mb-10 ">
          {/* TITLE */}
          <h1 className="mb-6 font-bold">Meet Your Roommate</h1>
          {/* AGENT CARD */}
          <div className="box p-12 bg-light-green border-deep-green border-2 ">
            <div className="details bg-red-1 flex justify-around pt-4 pb-2">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/page2-Ellipse 1 (2).png"
                  alt=""
                  width={70}
                  height={70}
                />
                <h2 className="font-bold">Profile Name</h2>
                <span>Short Bio</span>
              </div>
              <div className="flex flex-col gap-3">
                <p className="flex flex-col sm:flex-row">
                  <span className="font-bold mr-1">32</span>reviews
                </p>
                <hr className=" border-blue-900" />
                <p className="flex flex-col sm:flex-row">
                  <span className="font-bold mr-1">3.5</span>rating
                </p>
                <hr className=" border-blue-900" />
                <p className="flex flex-col sm:flex-row">
                  <span className="font-bold mr-1">2</span>years
                </p>
                <hr className=" border-blue-900" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="flex flex-col sm:flex-row">
                  <span className="font-bold mr-1">14</span>publishes
                </p>
                <hr className=" border-blue-900" />

                <p className="flex flex-col sm:flex-row">
                  <span className="font-bold mr-1">12</span>sales
                </p>
                <hr className=" border-blue-900" />

                <p className="flex flex-col sm:flex-row">
                  <span className="font-bold mr-1">5</span>negatives
                </p>
                <hr className=" border-blue-900" />
              </div>
            </div>
            <hr className="mt-4 mb-4 border-blue-900" />
            <div className="about flex flex-col gap-5 p-2">
              <div className="flex gap-1">
                <Image
                  src="/cil_education.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain  self-start mt-0"
                />
                <p className="leading-loose">
                  <span className="font-bold">Educational Background:</span> The
                  male property agent avatar is designed to be knowledgeable and
                  professional. It is programmed with a foundational
                  understanding of real estate principles, laws, and ethics. Its
                  virtual training includes completing a simulated real estate
                  pre-licensing course, passing a virtual licensing exam, and
                  staying updated through virtual continuing education.
                </p>
              </div>
              <div className="flex gap-1">
                <Image
                  src="/pajamas_work.png"
                  alt=""
                  width={20}
                  height={20}
                  className="object-contain  self-start mt-0"
                />
                <p className="leading-loose">
                  <span className="font-bold">Professional Achievements:</span>{" "}
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
                  className="object-contain  self-start mt-0"
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
            <hr className="mt-4 mb-4 border-blue-900" />
            <div className="experiences flex flex-col p-6">
              <h1 className="font-bold mb-6">My Experiences</h1>
              <div className="flex gap-3 flex-col sm:flex-row">
                <div className="flex-1 flex flex-col gap-3">
                  <Image
                    src="/roomate-img1.png"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <h2 className="font-bold">
                    Was a speaker at the international buisness sumit
                  </h2>
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
                    src="/roomate-img2.png"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <h2 className="font-bold">
                    Was a speaker at the international buisness sumit
                  </h2>
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
                    src="/roomate-img1.png"
                    alt=""
                    width={300}
                    height={300}
                  />
                  <h2 className="font-bold">
                    Was a speaker at the international buisness sumit
                  </h2>
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
              <hr className="mt-4 mb-4 border-blue-900" />
              <div className="mt-4">
                <h1 className="font-bold">Extra Details</h1>
                <div className="mt-4">
                  <span className="flex  gap-3 my-5">
                    <Image
                      src="/tribal-shield.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <p>
                      <span className="font-bold">Ethinicity:</span>Igbo
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image
                      src="/nationality.png"
                      alt=""
                      width={20}
                      height={20}
                    />
                    <p>
                      <span className="font-bold">Nationality:</span>Nigerian
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image src="/religion.png" alt="" width={20} height={20} />
                    <p>
                      <span className="font-bold">Religion:</span>Christianity
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image
                      src="/links.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <p>
                      <span className="font-bold">Relationship status:</span>
                      Single | Dating | Married
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image src="/age.png" alt="" width={20} height={20} />
                    <p>
                      <span className="font-bold">Age:</span>28yrs
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image src="/gender.png" alt="" width={20} height={20} />
                    <p>
                      <span className="font-bold">Gender:</span>Male
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image
                      src="/occupation.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <p>
                      <span className="font-bold">Occupation:</span>Computer
                      Engineering
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image
                      src="/school-work.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <p>
                      <span className="font-bold">School/ Work place:</span>
                      Computer Engineering
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image src="/pet.png" alt="" width={20} height={20} />
                    <p>
                      <span className="font-bold">Pet:</span>None
                    </p>
                  </span>
                  <span className="flex  gap-3 my-5">
                    <Image
                      src="/links.png"
                      alt=""
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="font-bold">Social Media Handle:</span>
                    <span className="flex gap-2">
                      <Image
                        src="/tiktok.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <Image
                        src="/facebook.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <Image
                        src="/instagram.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <Image
                        src="/linkedin.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <Image
                        src="/twitter.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </span>
                  </span>
                </div>
              </div>
              <button className="ring-2 ring-button-shadow rounded-2xl text-white bg-deep-green p-2 mt-8 mb-4 w-full sm:w-[40%]">
                Communicate with roommate
              </button>
              <hr className="mt-4 mb-4 border-blue-900" />
              <p className="pl-2 mt-4">
                To Protect Your Money, never make a payment away from this
                website
              </p>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="">
          <div className="">
            <h1 className="font-bold">About this place</h1>
            <p className="p-6 leading-loose">
              Property agents are well-educated professionals who play a pivotal
              role in the real estate industry. They acquire the necessary
              knowledge and skills through formal education, licensing, and
              ongoing training. By combining their educational background with
              practical experience, property agents assist clients in achieving
              their real estate goals while adhering to ethical and legal
              standards. make it brief
            </p>
          </div>
          <hr className="mt-4 mb-8 border-blue-900" />
          <div className="">
            <span>
              <p>
                <span className="font-bold pr-1">House Rules</span>(These will
                be expected for roommates)
              </p>
            </span>
            <div className="px-10 py-5">
              <ol className="list-decimal leading-loose">
                <li>
                  Property agents are well-educated professionals who play a
                  pivotal role in the real estate industry. They acquire the
                  necessary knowledge and skills through formal education,
                  licensing.
                </li>
                <li>
                  By combining their educational background with practical
                  experience.{" "}
                </li>
                <li>
                  Agents assist clients in achieving their real estate goals
                  while adhering to ethical and legal standards.
                </li>
                <li>make it brief</li>
              </ol>
            </div>
          </div>
          <hr className="mt-4 mb-8 border-blue-900" />
          <div className="">
            <span>
              <p>
                <span className="font-bold pr-1">Considerations</span>(These are
                special preferences for roommates)
              </p>
            </span>
            <div className="px-10 py-5">
              <ol className="list-decimal leading-loose">
                <li>
                  Property agents are well-educated professionals who play a
                  pivotal role in the real estate industry. They acquire the
                  necessary knowledge and skills through formal education,
                  licensing.
                </li>
                <li>
                  By combining their educational background with practical
                  experience.{" "}
                </li>
                <li>
                  Agents assist clients in achieving their real estate goals
                  while adhering to ethical and legal standards.
                </li>
                <li>make it brief</li>
              </ol>
            </div>
          </div>
          <hr className="mt-4 mb-4 border-blue-900" />
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
            <button className="flex gap-2 items-center justify-center ring-2 ring-button-shadow rounded-full bg-deep-green p-1 mt-8 mb-12 w-60 text-white">
              Show all Amenities{" "}
              <span>
                <Image
                  src="/ep_arrow-up-bold.png"
                  alt=""
                  width={20}
                  height={20}
                  className="mb-2 object-contain"
                />
              </span>
            </button>
          </div>
        </div>
        <hr className="mt-4 mb-4 border-blue-900" />

        {/* REVIEWS */}
        <div className="flex flex-col">
          <h1 className=" font-bold mt-4">Reviews</h1>
          <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-2 mt-6">
            {reviewsData.map((review, index) => (
              <ReviewItem key={index} review={review} />
            ))}
          </div>
          <button className="flex gap-2 items-center justify-center ring-2 ring-button-shadow rounded-full bg-deep-green p-1 mt-8 mb-12 w-60 text-white">
            Show all reviews
            <span>
              <Image
                src="/ep_arrow-up-bold.png"
                alt=""
                width={20}
                height={20}
                className="mb-2 object-contain"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
