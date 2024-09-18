"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/userSlice";
import { reviewsData } from "../../dummyData/index";
import ReviewItem from "../../components/ReviewItem";
import Link from "next/link";
import { FormEvent, ChangeEvent } from "react";

const detailsArray = [
  { icon: "/tribal-shield.png", label: "Ethinicity", value: "Igbo" },
  { icon: "/nationality.png", label: "Nationality", value: "Nigerian" },
  { icon: "/religion.png", label: "Religion", value: "Christianity" },
  { icon: "/links.png", label: "Relationship status", value: "Single" },
  { icon: "/age.png", label: "Age", value: "28yrs" },
  { icon: "/gender.png", label: "Gender", value: "Male" },
  {
    icon: "/occupation.png",
    label: "Occupation",
    value: "Computer Engineering",
  },
  {
    icon: "/school-work.png",
    label: "School/Workplace",
    value: "Computer Engineering",
  },
  { icon: "/pet.png", label: "Pet", value: "None" },
  {
    icon: "/links.png",
    label: "Social media handles",
    value: ["https://", "https://", "https://"],
  },
];

interface UpdateUserData {
  firstname: string;
  lastname: string;
  ethinicity: string;
  occupation: string;
  school: string;
  pet: string;
  socialHandle: string;
  biograph: string;
  education: string;
  achievements: string;
  dislikes: string;
  experiences: string;
  email: string;
  phone: string;
  profileimage: string;
  nationality: string;
  religion: string;
  gender: string;
  relationship: string;
  age: string;
  links: string;
}

const EditButton = () => (
  <button className="edit_button flex justify-center gap-2">
    <Image src="/edit.png" alt="" width={12} height={12} />
    Edit
  </button>
);

const ProfilePage = () => {

  const [userData, setUserData] = useState<UpdateUserData>({
    firstname: "",
    lastname: "",
    ethinicity: "",
    occupation: "",
    school: "",
    pet: "",
    socialHandle: "",
    biograph: "",
    education: "",
    achievements: "",
    dislikes: "",
    experiences: "",
    email: "",
    phone: "",
    profileimage: "",
    nationality: "",
    religion: "",
    gender: "",
    relationship: "",
    age: "",
    links: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const newValue = event.target?.type === 'number' ? +value : value;

    setUserData((prevFormData) => ({
        ...prevFormData,
        [name]: newValue,
    }));
  };

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

  setUserData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
  }

  const [showUploadButtons, setShowUploadButtons] = useState(false);

  const toggleUploadButtons = () => {
    setShowUploadButtons((prevValue) => !prevValue);
  };

  const [showEthnicity, setShowEthnicity] = useState<boolean>(false);
  
  const handleEthnicity = () => {
    setShowEthnicity(true);
  };

  const [showNationality, setShowNationality] = useState<boolean>(false);
  
  const handleNationality = () => {
    setShowNationality(true);
  };

  const [showReligion, setShowReligion] = useState<boolean>(false);
  
  const handleReligion = () => {
    setShowReligion(true);
  };

  const [showRelationship, setShowRelationship] = useState<boolean>(false);
  
  const handleRelationship = () => {
    setShowRelationship(true);
  };

  const [showAge, setShowAge] = useState<boolean>(false);
  
  const handleAge = () => {
    setShowAge(true);
  };

  const [showGender, setShowGender] = useState<boolean>(false);
  
  const handleGender = () => {
    setShowGender(true);
  };

  const [showOccupation, setShowOccupation] = useState<boolean>(false);
  
  const handleOccupation = () => {
    setShowOccupation(true);
  };

  const [showPet, setShowPet] = useState<boolean>(false);
  
  const handlePet = () => {
    setShowPet(true);
  };

  const [showLinks, setShowLinks] = useState<boolean>(false);
  
  const handleLinks = () => {
    setShowLinks(true);
  };

  const UserData = useSelector(selectUserData);
  // const loggedInUser = user?.loggedInUser;

  const { loggedInUser } = UserData.user || {};
  const { firstname = "", lastname = "" } = loggedInUser || {};

  console.log("Redux User Data:", loggedInUser);

  // const capitalizedFirstName = firstname?.charAt(0).toUpperCase() + firstname.slice(1);
  // const capitalizedLastName = lastname?.charAt(0).toUpperCase() + lastname.slice(1);

  const capitalizedFirstName =
    (firstname ?? "").charAt(0).toUpperCase() + (firstname ?? "").slice(1);
  const capitalizedLastName =
    (lastname ?? "").charAt(0).toUpperCase() + (lastname ?? "").slice(1);

  const defaultDetails = "User";

  const updateProfile = (e) => {
    e.preventDefault();

    try {
      console.log('User Updated', userData)
    } catch (error) {
      
    }
  }

  return (
    <div className="emmy flex flex-col justify-center items-center w-full relative">
      <form onSubmit={updateProfile}>
      <div className="upload_buttons_container flex flex-col items-center justify-center">
        <div className="flex items-center justify-center my-3">
          <button
            onClick={toggleUploadButtons}
            className="button_two_container text-center py-2 text-white text-xs rounded-3xl px-4 border-double flex items-center justify-center gap-3 mb-2"
          >
            Make an upload{" "}
            <Image src="/upload-img.png" alt="upload" width={30} height={30} />
          </button>
        </div>
        {showUploadButtons && (
          <div className="flex gap-2">
            <Link href="/agent-upload">
              <button className="agent-room-upload-btn">
                Upload as an Agent{" "}
                <Image
                  src="/upload-agent.png"
                  alt="upload"
                  width={30}
                  height={30}
                />
              </button>
            </Link>
            <Link href="/roommate-upload">
              <button className="agent-room-upload-btn">
                Upload as a Roommate{" "}
                <Image
                  src="/upload-roomate.png"
                  alt="upload"
                  width={30}
                  height={30}
                />
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="py-4 flex flex-col text-sm lg:px-14
      md:px-8 xl:px-14 2xl:px-6 justify-center lg:w-full xl:w-full 2xl:w-full self-center h-full">
        {/* TOP */}
        <div className="profile flex flex-col flex-wrap sm:flex-row md:flex-wrap gap-6 justify-between">
          {/* LEFT-SIDE */}
          <div className="left flex-2 bg-afmber-700 w-[22%] flex max-sm:w-full max-sm:mx-0 flex-col items-center">
            <h1 className="mb-6">My Profile Details</h1>
            <Image
              src="/page2-Ellipse 1 (2).png"
              alt="profile img"
              width={100}
              height={100}
            />
            <h2>
              {capitalizedFirstName ? capitalizedFirstName : defaultDetails}{" "}
              {capitalizedLastName ? capitalizedLastName : defaultDetails}
            </h2>
            <hr className=" border-blue-900 " />
            <div className=" p-1 w-full border-t-2 ">
              <h2>Extra Details</h2>
                <div
                  className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full"
                >
                  <span className="flex items-baseline gap-1">
                    <Image
                      src="/tribal-shield.png"
                      alt=""
                      width={20}
                      height={20}
                      className="edit_img"
                    />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showEthnicity ? (
                              <>
                              <h3>Ethnicity</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.ethinicity}
                              name="value"
                              onChange={handleInputChange}
                              placeholder="Ethnicity"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>Igbo</small>
                    </div>
                  </span>
                  <div onClick={handleEthnicity}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

              <div
                  className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full"
                >
                  <span className="flex items-baseline gap-1">
                    <Image
                      src="/nationality.png"
                      alt=""
                      width={20}
                      height={20}
                      className="edit_img"
                    />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showNationality ? (
                              <>
                              <h3>Nationality</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.achievements}
                              name="value"
                              onChange={handleInputChange}
                              placeholder="Nationality"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>Nigerian</small>
                    </div>
                  </span>
                  <div onClick={handleNationality}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

              <div className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full" >
                  <span className="flex items-baseline gap-1">
                    <Image  src="/religion.png"  alt=""  width={20} height={20} className="edit_img"  />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showReligion ? (
                              <>
                              <h3>Religion</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.religion}
                              name="value"
                              onChange={handleInputChange}
                              placeholder="Religion"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>Christianity</small>
                    </div>
                  </span>
                  <div onClick={handleReligion}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

              <div className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full" >
                  <span className="flex items-baseline gap-1">
                    <Image  src="/links.png"  alt=""  width={20} height={20} className="edit_img"  />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showRelationship ? (
                              <>
                              <h3>Relationship status</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.relationship}
                              name="value"
                              onChange={handleInputChange}
                              placeholder="Religion"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>Single</small>
                    </div>
                  </span>
                  <div onClick={handleRelationship}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

              <div className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full" >
                  <span className="flex items-baseline gap-1">
                    <Image  src="/age.png"  alt=""  width={20} height={20} className="edit_img"  />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showAge ? (
                              <>
                              <h3>Age</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.age}
                              name="age"
                              onChange={handleInputChange}
                              placeholder="Age"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>28yrs</small>
                    </div>
                  </span>
                  <div onClick={handleAge}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

              <div className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full" >
                  <span className="flex items-baseline gap-1">
                    <Image  src="/gender.png"  alt=""  width={20} height={20} className="edit_img"  />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showGender ? (
                              <>
                              <h3>Gender</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.gender}
                              name="gender"
                              onChange={handleInputChange}
                              placeholder="Gender"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>Male</small>
                    </div>
                  </span>
                  <div onClick={handleGender}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

              <div className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full" >
                  <span className="flex items-baseline gap-1">
                    <Image  src="/occupation.png"  alt=""  width={20} height={20} className="edit_img"  />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showOccupation ? (
                              <>
                              <h3>Occupation</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.occupation}
                              name="occupation"
                              onChange={handleInputChange}
                              placeholder="Occupation"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>Computer Engineering</small>
                    </div>
                  </span>
                  <div onClick={handleOccupation}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

              <div className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full" >
                  <span className="flex items-baseline gap-1">
                    <Image  src="/pet.png"  alt=""  width={20} height={20} className="edit_img"  />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showPet ? (
                              <>
                              <h3>Pet</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.pet}
                              name="pet"
                              onChange={handleInputChange}
                              placeholder="Pet"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>None</small>
                    </div>
                  </span>
                  <div onClick={handlePet}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

              <div className="extra_details_input flex justify-between items-baseline p-2 my-3 gap-2 w-full" >
                  <span className="flex items-baseline gap-1">
                    <Image  src="/links.png"  alt=""  width={20} height={20} className="edit_img"  />
                    <div>
                        
                        <div className='flex gap-2 w-full' >
                          {!showLinks ? (
                              <>
                              <h3>Social Media Handles</h3>
                              </>
                          ) : (
                              <input
                              type="text"
                              value={userData.links}
                              name="links"
                              onChange={handleInputChange}
                              placeholder="Links"
                              className='border-none outline-none text-xs
                              w-full p-1 text-neutral-950 bg-slate-50'
                              />
                          )}
                      </div>
                      <small>https://</small>
                    </div>
                  </span>
                  <div onClick={handleLinks}>
                  <EditButton />
                  </div>
                </div>
              {/* ))} */}

            </div>
          </div>
          {/* RIGHT-SIDE */}
          <div className="right bg-late-500 flex-1 lg:w-[78%] max-sm:w-full">
            <div className="agent-container md:w-full lg:w-full flex flex-col mb-10 ">
              {/* PROFILE CARD */}
              <div className="box p-12 bg-light-green border-deep-green border-2 flex-wrap max-sm:w-[100%]
              max-sm:p-3">
                <div className="bio">
                  <h1 className="font-bold">My Biograph</h1>
                  <h3 className="font-bold my-2">
                    I am a Creative Realtor with proper negotiation skills
                  </h3>
                  {/* <p className=" leading-7">
                    The male property agent avatar is designed to be
                    knowledgeable and professional. It is programmed with a
                    foundational understanding of real estate principles, laws,
                    and ethics. Its virtual training includes completing a
                    simulated real estate pre-licensing course, passing a
                    virtual licensing exam, and staying updated through virtual
                    continuing education
                  </p> */}
                  <textarea placeholder="Describe yourself i.e Write you full bio "
                    cols={150}
                    rows={6}
                    value={userData.biograph}
                    name="biograph"
                    onChange={handleTextareaChange}
                    className="w-full p-3 bg-slate-200 border-deep-green outline-none
                    border-2"
                    />
                </div>
                <div className="details bg-red-1 flex flex-wrap justify-between pt-8 pb-2 gap-2">
                  <div className="about_details">
                    <span className="font-bold mr-1">1k</span>likes
                  </div>
                  <div className="about_details">
                    <span className="font-bold mr-1">32</span>reviews
                  </div>
                  <div className="about_details">
                    <span className="font-bold mr-1">14</span>publishes
                  </div>
                  <div className="about_details">
                    <span className="font-bold mr-1">3.5</span>rating
                  </div>
                  <div className="about_details">
                    <span className="font-bold mr-1">12</span>sales
                  </div>

                  <div className="about_details">
                    <span className="font-bold mr-1">2</span>years
                  </div>

                  <div className="about_details">
                    <span className="font-bold mr-1">5</span>negatives
                  </div>
                </div>
                {/* ABOUT */}
                <div className="about flex flex-col sm:flex-row justify-between items-baseline
                pt-4 gap-2">
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/education.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain self-start mt-0 fill-red-900"
                      />
                      <p className="font-bold">Educational Background:</p>
                    </span>
                    {/* <p className="leading-loose">
                      The male property agent avatar is designed to be
                      knowledgeable and professional. It is programmed with a
                      foundational understanding of real estate principles,
                      laws, and ethics. Its virtual training includes completing
                      a simulated real estate pre-licensing course, passing a
                      virtual licensing exam, and staying updated through
                      virtual continuing education.
                    </p> */}
                    <textarea placeholder="Educational Background"
                    cols={150}
                    rows={6}
                    value={userData.education}
                    name="biograph"
                    onChange={handleTextareaChange}
                    className="w-full p-3 bg-slate-200 border-deep-green outline-none
                    border-2"
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1 items-baseline">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/breifcase (1).png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain  self-start mt-0"
                      />
                      <p className="font-bold">Professional Achievements:</p>
                    </span>
                    {/* <p className="leading-loose">
                      In its virtual world, the male property agent avatar may
                      acquire virtual certifications to specialize in various
                      aspects of real estate, depending on the needs of the
                      simulated clients or scenarios it encounters.
                    </p> */}
                    <textarea placeholder="Professional Achievements"
                    cols={150}
                    rows={6}
                    value={userData.achievements}
                    name="biograph"
                    onChange={handleTextareaChange}
                    className="w-full p-3 bg-slate-200 border-deep-green outline-none
                    border-2"
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/thumbs-like.png"
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain  self-start mt-0"
                      />
                      <p className="font-bold">Likes $ Dislikes:</p>
                    </span>
                    {/* <p className="leading-loose">
                      This avatar is equipped with strong virtual communication
                      skills, including verbal and written capabilities. It
                      possesses a virtual database of local real estate market
                      information, marketing techniques, negotiation strategies,
                      and problem-solving algorithms. It operates with the
                      highest ethical standards in virtual transactions.
                    </p> */}
                    <textarea placeholder="Likes and Dislikes"
                    cols={150}
                    rows={6}
                    value={userData.dislikes}
                    name="biograph"
                    onChange={handleTextareaChange}
                    className="w-full p-3 bg-slate-200 border-deep-green outline-none
                    border-2 lg:mt-0  md:mt-[1.75rem]"
                    />                                                                                                            
                  </div>
                </div>
                <hr className="mt-4 mb-4 border-blue-900" />
                <div className="experiences flex flex-col p-6 max-sm:p-2">
                  <h1 className="font-bold mb-6">My Experiences</h1>
                  <div className="flex gap-3 flex-col sm:flex-row">
                    <div className="flex-1 flex flex-col gap-3">
                      <Image
                        src="/roomate-img1.png"
                        alt=""
                        width={300}
                        height={300}
                        className="max-sm:w-full"
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
                        className="max-sm:w-full"
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
                        <Image  src="/carbon_location (1).png"  alt=""   width={20}  height={20}   />
                        Ore,Ibadan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit"
        className="upload_button w-1/2 max-sm:w-5/6 rounded-full
        py-2 font-semibold text-white mx-auto">
        Update Profile</button>
        <hr className=" border-blue-900 my-6" />
        {/* BOTTOM */}
        {/* REVIEWS */}
        <div className="flex flex-col p-14 max-sm:p-3">
          <h1 className=" font-bold mt-4">Reviews</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-2 mt-6">
            {reviewsData.map((review, index) => (
              <ReviewItem key={index} review={review} />
            ))}
          </div>
          <button className="show_all_button">
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
    </form>
    </div>
  );
};

export default ProfilePage;

// "use client"
// import Image from "next/image";
// import React from "react";
// import { useSelector } from "react-redux"
// import { selectUserData } from "../redux/userSlice";
// import { detailsArray, reviewsData } from "../../dummyData/index";
// import ReviewItem from "@/components/ReviewItem";

// const EditButton = () => (
//   <button className="edit_button">
//     <Image src="/edit.png" alt="" width={12} height={12} />
//     Edit
//   </button>
// );

// const ProfilePage = () => {

//   const UserData  = useSelector(selectUserData);
//   // const loggedInUser = user?.loggedInUser;

//   const { loggedInUser } = UserData.user || {};
//   const {firstname = '', lastname=''} = loggedInUser || {}

//   console.log('Redux User Data:', loggedInUser);

//   // const capitalizedFirstName = firstname?.charAt(0).toUpperCase() + firstname.slice(1);
//   // const capitalizedLastName = lastname?.charAt(0).toUpperCase() + lastname.slice(1);

//   const capitalizedFirstName = (firstname ?? '').charAt(0).toUpperCase() + (firstname ?? '').slice(1);
//   const capitalizedLastName = (lastname ?? '').charAt(0).toUpperCase() + (lastname ?? '').slice(1);

//   const defaultDetails = "User";

//   return (
//     <div className="emmy flex justify-center items-center w-full relative">
//       <div className="p-4 flex flex-col text-sm lg:px-20 xl:px-40 2xl:px-60 justify-center lg:w-full xl:w-[100vw] 2xl:w-[100vw] self-center h-full">
//         {/* TOP */}
//         <div className="profile flex flex-col flex-wrap sm:flex-row md:flex-wrap gap-1 justify-center">
//           {/* LEFT-SIDE */}
//           <div className="left flex-2 bg-afmber-700 sm:w-1/3 flex flex-col items-center">
//             <h1  className="mb-6">My Profile Details</h1>
//             <Image
//               src="/page2-Ellipse 1 (2).png"
//               alt="profile img"
//               width={100}
//               height={100}
//             />
//             <h2>{capitalizedFirstName ? capitalizedFirstName : defaultDetails} {capitalizedLastName ? capitalizedLastName : defaultDetails}</h2>
//             <hr className=" border-blue-900" />
//             <div className=" p-4 border-t-2">
//               <h2>Extra Details</h2>
//               {detailsArray.map((details, index) => (
//                 <div className="flex justify-between p-2 my-3 gap-12" key={index}>
//                   <span className="flex items-center gap-1">
//                     <Image
//                       src={details.icon}
//                       alt=""
//                       width={20}
//                       height={20}
//                       className="edit_img"
//                     />
//                     <p>
//                       <span className="font-bold text-sm">
//                         {details.label}: <br />
//                       </span>
//                       {Array.isArray(details.value)
//                         ? details.value.map((link, linkIndex) => (
//                             <button key={linkIndex} className="edit_button my-2 bg-slate-300">
//                               {link}
//                             </button>
//                           ))
//                         : details.value}
//                     </p>
//                   </span>
//                   <EditButton />
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* RIGHT-SIDE */}
//           <div className="right bg-late-500 flex-1 w-2/3 max-sm:w-full">
//             <div className="agent-container md:w-full lg:w-full flex flex-col mb-10 ">
//               {/* PROFILE CARD */}
//               <div className="box p-12 bg-light-green border-deep-green border-2 flex-wrap sm:w-[100%]">
//                 <div className="bio">
//                   <h1 className="font-bold">My Biograph</h1>
//                   <h3 className="font-bold my-2">
//                     I am a Creative Realtor with proper negotiation skills
//                   </h3>
//                   <p className=" leading-7">
//                     The male property agent avatar is designed to be
//                     knowledgeable and professional. It is programmed with a
//                     foundational understanding of real estate principles, laws,
//                     and ethics. Its virtual training includes completing a
//                     simulated real estate pre-licensing course, passing a
//                     virtual licensing exam, and staying updated through virtual
//                     continuing education
//                   </p>
//                 </div>
//                 <div className="details bg-red-1 flex flex-wrap justify-between pt-8 pb-2 gap-2">
//                   <div className="about_details">
//                     <span className="font-bold mr-1">1k</span>likes
//                   </div>
//                   <div className="about_details">
//                     <span className="font-bold mr-1">32</span>reviews
//                   </div>
//                   <div className="about_details">
//                     <span className="font-bold mr-1">14</span>publishes
//                   </div>
//                   <div className="about_details">
//                     <span className="font-bold mr-1">3.5</span>rating
//                   </div>
//                   <div className="about_details">
//                     <span className="font-bold mr-1">12</span>sales
//                   </div>

//                   <div className="about_details">
//                     <span className="font-bold mr-1">2</span>years
//                   </div>

//                   <div className="about_details">
//                     <span className="font-bold mr-1">5</span>negatives
//                   </div>
//                 </div>
//                 {/* ABOUT */}
//                 <div className="about flex flex-col sm:flex-row justify-between pt-4 gap-2">
//                   <div className="flex flex-col gap-1 flex-1">
//                     <span className="flex items-center gap-2">
//                       <Image
//                         src="/education.png"
//                         alt=""
//                         width={20}
//                         height={20}
//                         className="object-contain self-start mt-0 fill-red-900"
//                       />
//                       <p className="font-bold">Educational Background:</p>
//                     </span>
//                     <p className="leading-loose">
//                       The male property agent avatar is designed to be
//                       knowledgeable and professional. It is programmed with a
//                       foundational understanding of real estate principles,
//                       laws, and ethics. Its virtual training includes completing
//                       a simulated real estate pre-licensing course, passing a
//                       virtual licensing exam, and staying updated through
//                       virtual continuing education.
//                     </p>
//                   </div>
//                   <div className="flex flex-col gap-1 flex-1">
//                     <span className="flex items-center gap-2">
//                       <Image
//                         src="/breifcase (1).png"
//                         alt=""
//                         width={20}
//                         height={20}
//                         className="object-contain  self-start mt-0"
//                       />
//                       <p className="font-bold">Professional Achievements:</p>
//                     </span>
//                     <p className="leading-loose">
//                       In its virtual world, the male property agent avatar may
//                       acquire virtual certifications to specialize in various
//                       aspects of real estate, depending on the needs of the
//                       simulated clients or scenarios it encounters.
//                     </p>
//                   </div>
//                   <div className="flex flex-col gap-1 flex-1">
//                     <span className="flex items-center gap-2">
//                       <Image
//                         src="/thumbs-like.png"
//                         alt=""
//                         width={20}
//                         height={20}
//                         className="object-contain  self-start mt-0"
//                       />
//                       <p className="font-bold">Likes $ Dislikes:</p>
//                     </span>
//                     <p className="leading-loose">
//                       This avatar is equipped with strong virtual communication
//                       skills, including verbal and written capabilities. It
//                       possesses a virtual database of local real estate market
//                       information, marketing techniques, negotiation strategies,
//                       and problem-solving algorithms. It operates with the
//                       highest ethical standards in virtual transactions.
//                     </p>
//                   </div>
//                 </div>
//                 <hr className="mt-4 mb-4 border-blue-900" />
//                 <div className="experiences flex flex-col p-6">
//                   <h1 className="font-bold mb-6">My Experiences</h1>
//                   <div className="flex gap-3 flex-col sm:flex-row">
//                     <div className="flex-1 flex flex-col gap-3">
//                       <Image
//                         src="/roomate-img1.png"
//                         alt=""
//                         width={300}
//                         height={300}
//                       />
//                       <h2 className="font-bold">
//                         Was a speaker at the international buisness sumit
//                       </h2>
//                       <p className="flex gap-2">
//                         {" "}
//                         <Image
//                           src="/carbon_location (1).png"
//                           alt=""
//                           width={20}
//                           height={20}
//                         />
//                         Ore,Ibadan
//                       </p>
//                     </div>
//                     <div className="flex-1 flex flex-col gap-3">
//                       <Image
//                         src="/roomate-img2.png"
//                         alt=""
//                         width={300}
//                         height={300}
//                       />
//                       <h2 className="font-bold">
//                         Was a speaker at the international buisness sumit
//                       </h2>
//                       <p className="flex gap-2">
//                         {" "}
//                         <Image
//                           src="/carbon_location (1).png"
//                           alt=""
//                           width={20}
//                           height={20}
//                         />
//                         Ore,Ibadan
//                       </p>
//                     </div>
//                     <div className="flex-1 flex flex-col gap-3">
//                       <Image
//                         src="/roomate-img1.png"
//                         alt=""
//                         width={300}
//                         height={300}
//                       />
//                       <h2 className="font-bold">
//                         Was a speaker at the international buisness sumit
//                       </h2>
//                       <p className="flex gap-2">
//                         {" "}
//                         <Image
//                           src="/carbon_location (1).png"
//                           alt=""
//                           width={20}
//                           height={20}
//                         />
//                         Ore,Ibadan
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr className=" border-blue-900 my-6" />
//         {/* BOTTOM */}
//         {/* REVIEWS */}
//         <div className="flex flex-col p-14">
//             <h1 className=" font-bold mt-4">Reviews</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-2 mt-6">
//               {reviewsData.map((review, index) => (
//                 <ReviewItem key={index} review={review} />
//               ))}
//             </div>
//             <button className="show_all_button">
//               Show all reviews
//               <span>
//                 <Image
//                   src="/ep_arrow-up-bold.png"
//                   alt=""
//                   width={20}
//                   height={20}
//                   className="mb-2 object-contain"
//                 />
//               </span>
//             </button>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
