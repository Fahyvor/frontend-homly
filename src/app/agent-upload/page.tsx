"use client";
import Button2 from "@/components/Button2";
import Image from "next/image";
import { FormEvent, ChangeEvent } from "react";
import { AiOutlineCaretDown, AiFillCaretDown } from "react-icons/ai";
import { API_URL } from "../axios/apiConfig";
import React, { useState } from "react";
import { LOCAL_API_URL } from "../axios/apiConfig";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/userSlice";
import axios from "axios"

const Offers = [
  {   item: "Fitted Kitchen with accessories", value:  "Fitted Kitchen with accessories"},
  {   item: "Secure Estate", value: "Secure Estate"   },
  {   item: "Modern Day POP Ceiling", value: "Modern Day POP Ceiling"  },
  {   item: "Green Area", value: "Green Area"  },
  {   item: "Detailed finishing", value: "Detailed finishing"   },
  {   item: "Pendant lighting & Chandeliers", value:  "Pendant lighting & Chandeliers"},
  {   item: "Wardrobes", value: "Wardrobes"    },
  {   item: "TV Console", value: "TV Console"    },
  {   item: "Water heater", value: "Water heater"   },
  {   item: "Swimming pool", value: "Swimming pool"   },
  {   item: "Heat extractor", value: "Heat extractor"   },
  {   item: "CCtv Camera", value: "CCtv Camera"   },
  {   item: "Close proximity to road", value: "Close proximity to road"   },
  {   item: "Internet access", value: "Internet access"   }
];

interface FormData {
  location: string;
  number_of_toilets: string | number;
  number_of_bedroom: string | number;
  amenities: string[];
  extra_list: string[];
  category: string;
  price: string | number;
  insurance_fee: string | number;
  hospitality_fee: string | number;
  legal_fee: string | number;
  description: string;
  images: File[];
}

interface Option {
  value: string;
  label: string;
  image: string;
}

const AgentUpload = () => {
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    location: "",
    number_of_toilets: "",
    number_of_bedroom: "",
    amenities: [],
    extra_list: [],
    category: "",
    price: "",
    insurance_fee: "",
    hospitality_fee: "",
    legal_fee: "",
    description: "",
    images: []
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const newValue = event.target.type === 'number' ? +value : value;

    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: newValue,
    }));
};

  const UserData = useSelector(selectUserData);
  const { loggedInUser } = UserData.user || {};
  const { firstname = "" } = loggedInUser || {};
  const defaultDetails = "owner";


  const [selectedFileNames, setSelectedFileNames] = useState<string[]>(Array.from({ length: 5 }, () => ""));
  const [selectedFiles, setSelectedFiles] = useState<Array<File | null>>([null, null, null, null, null]);

  const handleFilesChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles[index] = file;
    setSelectedFiles(newSelectedFiles);

    setFormData((prevFormData) => ({
        ...prevFormData,
        images: newSelectedFiles.filter((file) => file !== null) 
    }));
  
    console.log('file changed at index', index, file);
    console.log('Updated selectedFiles', newSelectedFiles);
};

  const [showInput, setShowInput] = useState<boolean>(false);

  const handleClick = () => {
    setShowInput(true);
  };

  const [showHospitalityFee, setShowHospitalityFee] = useState<boolean>(false);
  
  const handleHospitalityClick = () => {
    setShowHospitalityFee(true);
  };

  const [showLegalFee, setShowLegalFee] = useState<boolean>(false);
  
  const handleLegalClick = () => {
    setShowLegalFee(true);
  };

  const [showCategory, setShowCategory] = useState<boolean>(false);
  
  const handleCategory = () => {
    setShowCategory(true);
  };

  const [showAmount, setShowAmount] = useState<boolean>(false);
  
  const handleAmountClick = () => {
    setShowAmount(true);
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);

  const options: Option[] = [
    { value: 'Conducive Environment', label: 'Conducive Environment',
        image: '/environment.png' },
    { value: 'Close to central market', label: 'Close to central market',
        image: '/central_market.png' },
    { value: 'Adequate security', label: 'Adequate security',
        image: '/security.png' },
    { value: 'Quiet Surrounding', label: 'Quiet Surrounding', 
        image: '/surrounding.png' },
  ];

  const handleOptionClick = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
    setFormData({
        ...formData,
        extra_list: selectedOptions,
    });
  };

   const handleOfferClick = (value: string) => {
    if (selectedOffers.includes(value)) {
      setSelectedOffers(selectedOffers.filter((offer) => offer !== value));
    } else {
      setSelectedOffers([...selectedOffers, value]);
    }
    setFormData({
        ...formData,
        amenities: selectedOffers,
    });
  };

  const createAgentProperty = async (e: FormEvent) => {
    e.preventDefault();

    try {
        if (selectedFiles.every(file => file !== null)) {
            const formDataWithImages = new FormData();
      
            selectedFiles.forEach((file, index) => {
              formDataWithImages.append(`images[${index}]`, file);
            });
      
            for (const key in formData) {
              if (key !== 'images') {
                formDataWithImages.append(key, String(formData[key]));
              }
        }
      
        // Log the formDataWithImages to see if it contains all the necessary data
        console.log('formDataWithImages', formDataWithImages);

        // const data = JSON.stringify(formData)
        console.log(formData);
        const propertyCreated = await axios.post(`${API_URL}property/create`, formDataWithImages, {
            headers: {
                Accept: 'multipart/form-data',
            },
        });
        console.log('Property Creation Successful', propertyCreated);
    } else {
        console.error('Please select images before submitting the form')
    }
    } catch (error) {
        console.log('Property Creation Unsuccessful', error);
    }


}

  return (
    <div className="agent_upload_container px-14 max-sm:px-6 w-full">
      <form onSubmit={createAgentProperty} className="flex flex-col">
      <div className="agent_upload_header">
        <div className="upload_header_upper flex gap-2">
          <Image
            src="/description_symbol.png"
            alt="image"
            width={20}
            height={20}
          />
          <h2 className="text-xl">Add Description</h2>
        </div>

        <div className="upload_header_lower flex gap-3 mt-1 w-full">
          <div className="flex gap-2">
            <Image src="/real_estate.png" alt="owner" width={15} height={15} />
            <small>@{firstname ? firstname : defaultDetails}</small>
          </div>

        <div className="flex gap-2 w-full" onClick={handleClick}>
          {!showInput ? (
                  <>
                  <Image src="/location_.png" alt="location" width={15} height={15} />
                  <small>Add location</small>
                  </>
              ) : (
                  <input
                  type="text"
                  value={formData.location}
                  name="location"
                  onChange={handleInputChange}
                  placeholder="Enter location"
                  className='border-none outline-none text-xs
                  w-5/6 text-neutral-950 bg-slate-50'
                  />
              )}
          </div>
        </div>
      </div>

      <div className="mt-5">
      
        <div
        className="upload_images_container flex gap-4 ">
          {selectedFiles[0] ? (
                <div
                    className=" w-1/2 flex items-center justify-center"
                    style={{  backgroundImage: selectedFiles[0] ? `url(${URL.createObjectURL(selectedFiles[0])})` : 'none', }}
                >
                    
                    <label htmlFor={`file${0}`} className='upload_image overflow-hidden'
                    // style={{  backgroundImage: selectedFiles[0] ? `url(${URL.createObjectURL(selectedFiles[0])})` : 'none', }}
                    >
                    <div>
                    <div className="w-full">
                    <Image src={URL.createObjectURL(selectedFiles[0])} alt='image' width={50} height={50} 
                    className='object-cover w-full'/>
                    </div>
                    <input
                        type='file'
                        id={`file${0}`}
                        className='hidden'
                        onChange={(e) => handleFilesChange(0)(e)}
                    />
                    </div>
                </label>
          </div>
          ) : (
            <div className="upload_image_left w-1/2 flex items-center justify-center py-32">
                    <label htmlFor={`file${0}`} className='upload_image'>
                    <input
                        type='file'
                        id={`file${0}`}
                        className='hidden'
                        onChange={(e) => handleFilesChange(0)(e)}
                    />
                    <Image src="/camera.png" alt='' width={40} height={40} />
                    </label>
                    {selectedFiles[0] && <p>{selectedFiles[0].name}</p>}
              </div>
          )}

          <div className="upload_image_right grid lg:grid-cols-2 w-1/2 gap-3">
              {[1, 2, 3, 4].map((index) => (
                <label key={index} htmlFor={`file${index + 1}`} className='upload_image flex justify-center
                items-center cursor-pointer'
                style={{  backgroundImage: selectedFiles[index] ? `url(${URL.createObjectURL(selectedFiles[index])})` : '/camera_bg.png', }}
                >
                    <input type='file'
                    id={`file${index + 1}`}
                    className='hidden'
                    onChange={handleFilesChange(index)} 
                    />
                    {!selectedFiles[index] && <Image src="/camera.png" alt='' width={40} height={40}/>}
                    {selectedFiles[index] && 
                    <div className="w-full">
                        <Image src={URL.createObjectURL(selectedFiles[index])} alt="image" width={80} height={80} 
                        className='w-full' />
                        {/* <p>{selectedFiles[index].name}</p> */}
                    </div>
                    }
                </label>
              ))}
          </div>
        </div>
        </div>

        <div
          className="property_section flex gap-3 mt-8 w-full md:flex-col
            max-sm:flex-col"
        >
          <div className="flex gap-6 max-sm:flex-col">
          <div className="property_section_left w-[70%] max-sm:w-full">
            
            <div className="property_section_header flex gap-2">
              <Image
                src="/description_symbol.png"
                alt="property"
                width={20}
                height={20}
              />
              {/* <h2 className="text-xl font-medium">Property Category</h2> */}
                <div onClick={handleCategory} className='lg:w-3/4 md:w-5/6'>
                      {!showCategory ? (
                          <h2 className="text-xl font-medium cursor-pointer">Property Category</h2>

                      ) : (
                          <select id="Category" 
                          value={formData.category}
                          onChange={handleInputChange}
                          name="category" 
                          className="p-2 w-5/6 bg-transparent">
                          <option disabled>Category</option>
                          <option value="Luxury">Luxury</option>
                          <option value="Studio">Studio</option>
                          <option value="Single Room">Single Room</option>
                          <option value="Self Contain">Self Contain</option>
                          <option value="Flats">Flats</option>
                          <option value="Others">Others</option>
                          </select>
                      )}
                </div>
            </div>

            <div
              className="more_property_description grid max-sm:flex-col 
                            max-sm:w-full gap-4 my-4 max-sm:grid-cols-2 md:grid-cols-2"
            >
              <div
                className="toilet_number flex gap-2 border-[1px] border-sky-500 p-3
                            items-center flex-wrap"
              >
                <Image src="/toilet.png" alt="toilet" width={20} height={20} />
                <select id="Toilets" 
                    value={formData.number_of_toilets}
                    onChange={handleInputChange}
                    name="number_of_toilets" 
                    className="p-2 w-5/6 bg-transparent">
                    <option disabled>No of Toilets</option>
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
                </select>
              </div>

              <div
                className="bedroom_number flex gap-2 border-[1px] border-sky-500 p-3
                            items-center flex-wrap"
              >
                <Image
                  src="/bedroom_icon.png"
                  alt="bedroom"
                  width={20}
                  height={20}
                />
                  <select id="Toilets" 
                    value={formData.number_of_bedroom}
                    onChange={handleInputChange}
                    name="number_of_bedroom"
                    className="p-2 w-5/6 bg-transparent">
                    <option disabled>No of Bedrooms</option>
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
                  </select>
              </div>

              {/* <div
                className="amenities flex gap-2 border-[1px] border-sky-500 p-3
                    items-center flex-wrap"
              >
                <Image
                  src="/amenities.png"
                  alt="amenities"
                  width={20}
                  height={20}
                />
                <h3>Total amenities : </h3>
                <select
                  id="amenities"
                  name="amenities"
                  value={selectedAmenity}
                  onChange={handleAmenitySelectChange}
                  className="border-2 flex-1"
                >
                  <option value="">Select Amenity</option>
                  {Offers.map((amenity, index) => (
                    <option key={index} value={amenity.item}>
                      {amenity.item}
                    </option>
                  ))}
                </select>
              </div> */}
            </div>

            <hr />

            <div className="select_extras my-3 lg:w-[55%] md:w-full max-sm:w-[70%]">
              <h3 className="font-medium text-xl mb-3">Select Extras</h3>

              <div className="extras-list flex flex-col gap-4 my-6">
                {options.map((option) => (
                <div
                    key={option.value}
                    className={`extras-item py-1 px-2 cursor-pointer
                    flex gap-2 border-[0.5px] border-slate-100
                      ${selectedOptions.includes(option.value) ? 'selected bg-gray-200' : ''}`}
                    onClick={() => handleOptionClick(option.value)}
                >
                    <Image src={option.image} alt='environment' width={20} height={20} />
                    <p className='text-sm'>{option.label}</p>
                </div>
                ))}

                <div>
                  {/* Selected Options: {selectedOptions.join(', ')} */}
                </div>

              <div className="w-[50%] mb-4 cursor-pointer">
                <Button2 text="Add More Extra" />
              </div>
            </div>

            <hr />

            <div className="tell_us my-4">
              <h1 className="text-bold">Tell us about this place</h1>
              <input
                type="textarea"
                placeholder="Write some short description about this place, like a little history 
                            and storytelling for people to admire the place just as you do."
                value={formData.description}
                name="description"
                onChange={handleInputChange}
                className="outline-none mt-2 w-full h-[2rem] text-xs"
              />
            </div>

            <hr />

            <div className="what_theplace_offers mt-4">
              <h2 className="text-bold mb-3">What this place offers</h2>

              <div className="grid lg:grid-cols-2 gap-1 mb-6 md:grid-cols-2
              max-sm:grid-cols-1">
              {
                Offers.map((offer) => (
                <div  key={offer.value} className={`flex gap-2 w-[50%] cursor-pointer
                md:w-[90%] max-sm:w-[70%] m-1 p-1 border-[1px] items-center 
                ${selectedOffers.includes(offer.value) ? 'selected bg-gray-200' : ''}`}
                onClick={() => handleOfferClick(offer.value)}>
                    <Image src="/house_offers.png" alt='offers' width={15} height={15} />
                    <p className='text-xs'>{offer.item}</p>
                </div>
                ))
            }
              </div>

              <div
                className="w-[20%] 
                            md:w-[35%] max-sm:w-[60%] mb-6"
              >
                <Button2 text="Add more amenities" />
              </div>
            </div>
            </div>
            </div>

          <div className="property_section_right w-[22%] mx-3 bg-white rounded-2xl p-6
                    h-[35%] md:w-[55%] max-sm:w-full max-sm:m-auto py-12">
          <div
            
          >
            <div className="property_section_header flex justify-between items-center mb-6">
              {/* <h2 className="text-gray-500 text-xl font-medium">Add Amount</h2> */}
              <div className='flex gap-2' onClick={handleAmountClick}>
                  {!showAmount ? (
                      <>
                      <h2 className="text-gray-500 text-xl font-medium">Add Amount</h2>
                      </>
                  ) : (
                      <input
                      type="text"
                      value={formData.price}
                      name="price"
                      onChange={handleInputChange}
                      placeholder="Amount"
                      className='border-none outline-none text-xs
                      w-5/6 text-neutral-950 bg-slate-100 p-2'
                      />
                  )}
                </div>
              <div
                className="duration_dropdown flex px-2 py-1 border-[1px] border-gray-950
                            rounded-full gap-2"
              >
                {/* <p>duration</p>
                <Image
                  src="/caret_arrow.png"
                  alt="duration"
                  width={10}
                  height={10}
                /> */}
                <select id="Duration" 
                    // value={formData.duration}
                    onChange={handleInputChange}
                    name="duration"
                    className="p-2 w-5/6 bg-transparent">
                    <option disabled>Duration</option>
                    <option value="1 month">1 month</option>
                    <option value="2 months">2 months</option>
                    <option value="3 months">3 months</option>
                    <option value="4 months">4 months</option>
                    <option value="5 months">5 months</option>
                    <option value="6 months">6 months</option>
                    <option value="7 months">7months</option>
                    <option value="8 months">8 months</option>
                    <option value="9 months">9 months</option>
                    <option value="10 months">10 months</option>
                    <option value="11 months">11 months</option>
                    <option value="1 year">1 year</option>
                    <option value="2 years">2 years</option>
                    <option value="3 years">3 years</option>
                  </select>
              </div>
            </div>

            <p className="text-center my-3 text-sm">
              <i>How much is this property?</i>
            </p>

            {/* <div className="max_agency_fee my-3">
              <div className="agency_fee_upper flex justify-between">
                <h3 className="text-gray-500 font-medium">
                  Maximum Agency Fee
                </h3>
                <h3 className="text-gray-400">None</h3>
              </div>

              <div className="agency_fee_lower">
                <p>None</p>
                <input type="range" className="w-full" />
              </div>
            </div> */}

            <div className="min_agency_fee my-2">
              <div className="agency_fee_upper flex justify-between">
                {/* <h3 className="text-gray-500 font-medium">
                  Minimum Agency Fee
                </h3> */}
                {/* <h3 className="text-gray-400">None</h3> */}
                {/* <div className='flex gap-2' onClick={handleHospitalityClick}>
                    {!showHospitalityFee ? (
                        <>
                        <h3 className='text-gray-400'>None</h3>
                        </>
                    ) : (
                        <input
                        type="text"
                        value={formData.hospitality_fee}
                        name="hospitality_fee"
                        onChange={handleInputChange}
                        placeholder="Hospitality Fee"
                        className='border-none outline-none text-xs
                        w-5/6 text-neutral-950 bg-slate-100 p-2'
                        />
                    )}
                </div> */}
              </div>

              {/* <div className="agency_fee_lower">
                <p>None</p>
                <input type="range" className="w-full" />
              </div> */}
            </div>

            <div className="legal_fees mt-3">
              <div className="legal_fees_upper flex justify-between">
                <h3 className="text-gray-500 font-medium">Legal fee</h3>
                <div className='flex gap-2' onClick={handleLegalClick}>
                  {!showLegalFee ? (
                      <>
                      <h4 className='text-gray-400'>$1.2</h4>
                      </>
                  ) : (
                      <input
                      type="text"
                      value={formData.legal_fee}
                      name="legal_fee"
                      onChange={handleInputChange}
                      placeholder="Legal Fee"
                      className='border-none outline-none text-xs
                      w-5/6 text-neutral-950 bg-slate-100 p-2'
                      />
                  )}
                </div>
              </div>

              <input type="text" className="outline-none w-full mt-5"
              value={formData.price}
              name="price"
              onChange={handleInputChange}
              required />
            </div>

            <hr />

            <div className="total_amount flex justify-between mt-5">
              <p>Total amount:</p>
              <p className="text-gray-300 font-semibold">{formData.price}.00</p>
            </div>
          </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="upload_button my-6 
                py-2 rounded-full px-12 w-1/3 text-white mb-8 max-sm:w-[60%] 
                max-sm:px-6 md:w-2/3"
          >
            <p>Proceed to Upload</p>
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default AgentUpload;
