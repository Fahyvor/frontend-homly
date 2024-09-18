"use client";
import Button2 from "@/components/Button2";
import CalendarGfg from "@/components/Calendar";
import Image from "next/image";
import React from "react";

const CustomerMessages = () => {
  return (
    <div className="px-14 w-full text-sm max-sm:px-7">
      <h2 className="text-xl font-medium my-3">Messaging</h2>

      <div className="customer_messages_container flex gap-4 pb-5 max-sm:flex-col">
        <div className="customer_messages_left w-1/4 md:w-[35%] max-sm:w-full">
          <button
            className="button_two_container text-center py-2 text-white rounded-3xl px-4"
          >
            Communicating with the agent
          </button>
          <Image
            src="/messagingImage.png"
            alt="messages"
            width={600}
            height={20}
            className="mt-3 max-sm:w-full"
          />
        </div>

        <div className="customer_messages_right w-3/4 bg-gray-100 p-20 md:p-10 max-sm:w-full
        max-sm:p-6">
          <div className="cus_messages_right_header flex flex-col gap-3 w-full h-full">
            <h2>
              <b>Agent box:</b>
            </h2>
            <p>
              Yes i have booked an inspection for the
            </p>
            

            <div className="date_select_options flex gap-3 lg:flex-row md:flex-col max-sm:flex-col">
              <div className="date_select_left h-fit">
                <p>
                  <b>Please:</b> Select your preferred day of inspection
                </p>

                <div className="date_section_container mt-2">
                  {/* <input type="date" required /> */}
                  <CalendarGfg />
                </div>
              </div>

              <div className="date_select_right w-full sm:w-2/3 flex flex-col justify-normal pl-6 flex-wrap
              max-sm:mt-4">
                <div className="time_and_location_container flex flex-col lg:flex-row items-center
                gap-4 justify-normal sm:w-full h-fit">
                  <div className="time_container flex flex-col gap-2 max-sm:w-full">
                    <p>Select your preferred time</p>
                    <div className="flex flex-wrap items-stretch object-contain
                    max-sm:justify-center mb-4 relative rounded-lg p-4 bg-white">
                      <div className="p-2 w-40 bg-slate-200 rounded-lg">
                        <div className="flex">
                          <select
                            name="hours"
                            className="bg-transparent text-xl appearance-none outline-none"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">10</option>
                            <option value="12">12</option>
                          </select>
                          <span className="text-xl mr-3">:</span>
                          <select
                            name="minutes"
                            className="bg-transparent text-xl appearance-none outline-none mr-4"
                          >
                            <option value="0">00</option>
                            <option value="30">30</option>
                          </select>
                          <select
                            name="ampm"
                            className="bg-transparent text-xl appearance-none outline-none"
                          >
                            <option value="am">AM</option>
                            <option value="pm">PM</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="location_container xl:w-2/3 md:w-2/3 max-sm:w-full flex flex-col gap-2">
                    <p>Select where to meet with agent</p>
                    <div className="flex flex-wrap items-stretch object-contain mb-4 relative rounded-lg p-4 bg-white">
                      <div className="flex -mr-px bg-white">
                        <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">
                          <Image
                            src="/location-img.png"
                            alt="location"
                            width={15}
                            height={15}
                            className="object-contain text-black"
                          />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow bg-slate-200"
                        placeholder="Popular landmark area"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accept_booking_preference w-[70%] flex items-center
            md:w-full gap-3 max-sm:w-full">
            <button className="request_agency_fee_btn my-auto">1</button>
              <div className=" mt-3 md:border-2 md:rounded-md md:m-3
              md:p-3 border-gray-900 lg:rounded-full p-1 flex lg:flex-row max-sm:px-1 max-sm:py-0
              md:flex-col gap-4 w-fit sm:w-cover text-xs max-sm:flex-col max-sm:w-full">
                <p className="request_agency_fee_btn max-sm:w-full max-sm:text-center">
                  18,Thursday May 2023
                </p>
                <p className="request_agency_fee_btn max-sm:text-center">10:00 AM</p>
                <p className="request_agency_fee_btn max-sm:text-center">
                  Popular landmark area
                </p>
                <p className="request_agency_fee_btn_2 bg-gray-900
                max-sm:text-center">booking preference</p>
              </div>
            </div>
            
            <hr className="my-6 border-gray-900" />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerMessages;
