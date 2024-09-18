"use client";
import Button2 from "@/components/Button2";
import CalendarGfg from "@/components/Calendar";
import Image from "next/image";
import React from "react";

const CustomerMessages = () => {
  return (
    <div className="px-14 w-full text-sm max-sm:px-6">
      <h2 className="text-xl font-medium my-3">Messaging</h2>

      <div className="customer_messages_container flex max-sm:flex-col gap-4 pb-5">
        <div className="customer_messages_left w-1/4 max-sm:w-full">
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
            className="mt-3"
          />
        </div>

        <div className="customer_messages_right w-3/4 bg-gray-100 p-20
        max-sm:p-6 max-sm:w-full">
          <div className="cus_messages_right_header flex flex-col gap-3 w-full h-full">
            <h2>
              <b>Client box:</b>
            </h2>
            <p>Hello there,</p>
            <p>
              You indicated interest in a property i uploaded, would you love to
              Book an inspection
            </p>

            <div className="select_inspection_containers flex gap-4 items-center">
              <div className="book_inspection">
                <p className="ring-2 ring-offset-2 ring-gray-900 p-2 rounded-full inspection-btn text-xs font-bold">
                  Book inspection
                </p>
              </div>

              <div className="request_agency_fee">
                <p className="request_agency_fee_btn">Request agency fee</p>
              </div>
            </div>

            <hr className="my-6 border-gray-900" />

            <div className="date_select_options flex gap-3 lg:flex-row md:flex-col w-full 
            max-sm:w-full max-sm:flex-col">
              <div className="date_select_left h-fit">
                <p>
                  <b>Please:</b> Select your preferred day of inspection
                </p>

                <div className="date_section_container max-sm:w-[90%] max-sm:mt-3">
                  {/* <input type="date" required /> */}
                  <CalendarGfg />
                </div>
              </div>

              <div className="date_select_right w-full sm:w-2/3 flex flex-col justify-normal pl-6 flew-wrap">
                <div className="time_and_location_container flex flex-col lg:flex-row items-center gap-4 justify-normal sm:w-full h-fit">
                  <div className="time_container flex flex-col gap-2">
                    <p>Select your preferred time</p>
                    <div className="flex flex-wrap items-stretch object-contain mb-4 relative rounded-lg p-4 bg-white">
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

                  <div className="location_container xl:w-2/3 md:w-2/3 sm:w-1/3 flex flex-col gap-2">
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

                <div className="caution flex flex-col lg:flex-row items-center mt-20 sm:w-full">
                  <Image
                    src="/caution-img.png"
                    alt="caution"
                    width={60}
                    height={60}
                  />
                  <b>Your Security is our priority:</b>Make sure to meet agents
                  in an open space
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-900" />
            <div className="accept_booking_preference w-[70%] sm:w-full">
              <p>Yes I Have accepted your booking preference for the</p>
              <div className=" mt-3 md:border-2 border-gray-900 rounded-full p-1 flex flex-col md:flex-row gap-4 w-fit sm:w-cover text-xs ">
                <span className="request_agency_fee_btn">
                  18,Thursday May 2023
                </span>
                <span className="request_agency_fee_btn">10:00 AM</span>
                <span className="request_agency_fee_btn">
                  Popular landmark area
                </span>
              </div>
            </div>
            <hr className="my-6 border-gray-900" />
            <div className="w-fit">
              <p>
                <b>For your security</b> contact details will be share to you
                and your agent on your morning of inspection
              </p>
              <div className="bg-caution-pink mt-6 ml-8 flex flex-col items-center justify-center p-4 gap-4 md:flex-row
              max-sm:mx-1 max-sm:my-3">
                <Image
                  src="/caution-img.png"
                  alt="caution"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col">
                  <span>
                    <b>You are not to be charged any added fees</b> (for
                    example: inspection fee, etc)
                    <b> aside fees from this platform</b>
                  </span>
                  <span>
                    <b>Report any agent who default on our policy.</b>
                  </span>
                  <span>
                    <b>Your money </b>(agency fees){" "}
                    <b>
                      is secured and could be refunded when you pay through the
                      platform.
                    </b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerMessages;
