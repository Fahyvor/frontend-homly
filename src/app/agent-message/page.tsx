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
        <div className="customer_messages_left w-1/4 max-sm:w-full">
          <button
            className="button_two_container bg-black-900 text-center py-2 text-white rounded-3xl px-4"
          >
            continuing to chat
          </button>
          <Image
            src="/messagingImage.png"
            alt="messages"
            width={600}
            height={20}
            className="mt-3"
          />
        </div>

        <div className="customer_messages_right w-3/4 bg-gray-100 p-20 max-sm:w-full md:p-10 max-sm:p-6">
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

              <div className="date_select_right w-full sm:w-full md:w-full flex flex-col justify-normal pl-6 flex-wrap">
                <div className="time_and_location_container flex flex-col lg:flex-row
                max-sm:w-full items-center gap-4 justify-normal h-fit md:w-full">
                  <div className="time_container flex flex-col gap-2 max-sm:w-full md:w-full">
                    <p>Select your preferred time</p>
                    <div className="flex flex-wrap items-stretch object-contain mb-4 relative
                    max-sm:justify-center rounded-lg p-4 bg-white md:justify-center">
                      <div className="p-2 w-40 bg-slate-200 rounded-lg ">
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

                  <div className="location_container xl:w-2/3 md:w-full sm:w-1/3 flex flex-col gap-2 max-sm:w-full">
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

            <div className="select_inspection_containers flex gap-4 items-center mt-2">
              <div className="book_inspection">
                <p className="ring-2 ring-offset-2 ring-gray-900 px-[1.5px] py-0 rounded-full inspection-btn text-xs font-bold">
                  Accept Booking
                </p>
              </div>

              <div className="request_agency_fee">
                <p className="request_agency_fee_btn">Request another</p>
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
