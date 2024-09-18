"use client";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiMessageAltDots } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "@/app/axios/apiConfig";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserData } from "@/app/redux/userSlice";
import { selectUserData } from "@/app/redux/userSlice";
import { FormEvent } from "react";
// import { setSearchResults } from "@/app/redux/actions/searchActions";

const alternativeImages = [
  {
    image: "/google-logo.png",
    link: "www.gmail.com",
  },
  {
    image: "/facebook-logo.png",
    link: "www.facebook.com",
  },
  {
    image: "/message-logo.png",
    link: "www.google.com",
  },
  {
    image: "/apple-logo.png",
    link: "www.google.com",
  },
];

const Nav = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const [profileRegister, setProfileRegister] = useState<boolean>(false);
  const [profileLogin, setProfileLogin] = useState<boolean>(false);
  const [forgotPassword, setForgotPasssword] = useState<boolean>(false);
  const [mobileNav, setMovileNav] = useState<boolean>(false);
  const UserData = useSelector(selectUserData);

  const { loggedInUser } = UserData.user || {};

  const showUserLogin = () => {
    try {
      console.log("loggedInUser:", loggedInUser);

      if (!loggedInUser || !loggedInUser.email) {
        setProfileRegister(false);
        setProfileLogin(true);
        setMovileNav(false);
      } else {
        console.log("Redirecting to profile");
        router.push("/profile");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const showUserRegister = () => {
    setProfileRegister(true);
    setProfileLogin(false);
    setMovileNav(false);
    setForgotPasssword(false);
  };

  const hideAuthForms = () => {
    setProfileRegister(false);
    setProfileLogin(false);
    setForgotPasssword(false);
  };

  const showMobileNavItems = () => {
    setMovileNav(true);
  };

  const hideMobileNavItems = () => {
    setMovileNav(false);
    setProfileRegister(false);
    setProfileLogin(false);
    setForgotPasssword(false);
  };

  const forgotPasswordDisplay = () => {
    setForgotPasssword(true);
    setProfileRegister(false);
    setProfileLogin(false);
    setMovileNav(false);
  };

  const firstname = useRef<HTMLInputElement>(null);
  const lastname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const verify_password = useRef<HTMLInputElement>(null);

  const passwordVerification = () => {
    if (password.current?.value !== verify_password.current?.value) {
      console.log("Password not correct");
      return;
    }
  };

  const handleRegisterSubmit = async (e: FormEvent) => {
    e.preventDefault();
    passwordVerification();

    const user = {
      firstname: firstname.current?.value || "",
      lastname: lastname.current?.value || "",
      email: email.current?.value || "",
      username: username.current?.value || "",
      phone: phone.current?.value || "",
      password: password.current?.value || "",
      verify_password: verify_password.current?.value || "",
    };

    try {
      console.log("New User Created", user);
      const userCreated = await axios.post(`${API_URL}user/register`, user, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("User created Successfully", userCreated);

      if (firstname.current) firstname.current.value = "";
      if (lastname.current) lastname.current.value = "";
      if (email.current) email.current.value = "";
      if (username.current) username.current.value = "";
      if (phone.current) phone.current.value = "";
      if (password.current) password.current.value = "";
      if (verify_password.current) verify_password.current.value = "";
    } catch (error) {
      console.log("User not created", error);
    }

    showUserLogin();
  };

  // const email = useRef<HTMLInputElement>(null);
  // const password = useRef<HTMLInputElement>(null);

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: email.current?.value || "",
      password: password.current?.value || "",
    };

    try {
      console.log("User Details", data);

      const userLoggedIn = await axios.post(`${API_URL}user/login`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      console.log("User Logged In Data:", userLoggedIn.data);

      const storedUser = localStorage.setItem(
        "user",
        JSON.stringify(userLoggedIn.data.loggedInUser)
      );

      dispatch(
        setUserData({
          // token: userLoggedIn.data.token,
          user: { loggedInUser: userLoggedIn.data.loggedInUser },
        })
      );

      console.log("User Details successfully stored", storedUser);

      if (email.current) email.current.value = "";
      if (password.current) password.current.value = "";

      hideAuthForms();
      alert("Login Successful");
      router.push("/profile");
    } catch (error) {
      console.error("User not logged In", error);
      // console.error('Error message', error.message.data)
    }
  };

  const handleForgotPassword = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: email.current?.value || "",
    };

    try {
      console.log("User Email Address", data);
      const userEmail = await axios.put(
        `${API_URL}/user/forgotton/password`,
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      alert("Please check your mail for your new password");
      if (email.current) email.current.value = "";
      showUserLogin();
    } catch (error) {
      console.log("Error message", error);
    }
  };

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post(`${API_URL}property/search`, { query });
      const data = response.data;
      // dispatch(setSearchResults(data));
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div
      className="nav-container bg-white flex
    justify-between p-4 px-14 w-full max-sm:px-6"
    >
      <div className="nav-logo w-1/7">
        <a href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </a>
      </div>

      <div
        className="nav_search_container flex
        w-1/4 max-sm:w-1/2 items-center gap-4 rounded-3xl px-3
        justify-center py-1"
      >
        <input
          placeholder="Find homes     Explore places"
          className="w-5/6 bg-transparent border-none outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div
          className="nav_search_button
            rounded-full p-1"
          onClick={handleSearch}
        >
          <AiOutlineSearch color="white" />
        </div>
      </div>

      <div className="nav_right_side flex gap-5 items-center max-sm:hidden">
        <Link href="/notification">
          <Image
            src="/notification.png"
            alt="notification"
            width={30}
            height={30}
          />
        </Link>

        <Link href="/customer-message">
          <Image src="/chat.png" alt="chat" width={30} height={30} />
        </Link>

        <Link href="/cart">
          <Image src="/cart.png" alt="cart" width={30} height={30} />
        </Link>

        <p>
          <Image
            src="/profile.png"
            alt="profile"
            width={25}
            height={0.5}
            onClick={showUserLogin}
          />
        </p>
      </div>
      <div className="mobile-nav hidden max-sm:flex">
        <FaBars size={30} onClick={showMobileNavItems} />
      </div>

      {/* MOBILE NAVIGATION DROP DOWN ITEMS */}
      {mobileNav ? (
        <div
          className="mobile-nav-items hidden absolute bg-white
        w-[90vw] z-10 max-sm:flex max-sm:flex-col gap-8 pt-9 h-screen
        -ml-2"
        >
          <div className="flex justify-center">
            <Image
              src="/circle-cancel.png"
              alt="image"
              width={25}
              height={25}
              onClick={hideMobileNavItems}
            />
          </div>
          <div className="flex gap-3 justify-center">
            <Image
              src="/notification.png"
              alt="notification"
              width={15}
              height={15}
            />
            <a href="/notification">Notification</a>
          </div>

          <div className="flex gap-3 justify-center">
            <Image src="/chat.png" alt="chat" width={15} height={15} />
            <a href="/customer-message">Chat</a>
          </div>

          <div className="flex gap-3 justify-center">
            <Image src="/cart.png" alt="cart" width={15} height={15} />
            <a href="/cart">Cart</a>
          </div>

          <div className="flex gap-3 justify-center" onClick={showUserLogin}>
            <Image src="/profile.png" alt="profile" width={13} height={0.5} />
            <p>Profile</p>
          </div>
        </div>
      ) : null}

      {/* REGISTER DROPDOWN COMPONENT ONCE PROFILE IS BEING CLICKED ON  */}
      <div className="register-dropdown absolute">
        {profileRegister ? (
          <div
            className="register_container h-screen lg:-mt-4 w-[98vw] lg:-ml-12 md:-ml-12
        max-sm:-ml-3 flex flex-col justify-center
        px-20 max-sm:px-3 lg:pt-5 z-10 pb-10 fixed"
          >
            <div
              className="register-form lg:w-[55%] md:w-5/6 max-sm:w-full
            m-auto bg-white p-5 rounded-lg z-10 mt-10 px-6"
            >
              <div className="form-cancel w-full flex justify-end cursor-pointer">
                <Image
                  src="/circle-cancel.png"
                  alt="image"
                  width={25}
                  height={25}
                  onClick={hideAuthForms}
                />
              </div>

              <div className="welcome-header mt-3 mb-8">
                <h2>Let&apos;s get you started on Homly</h2>
              </div>
              <form onSubmit={handleRegisterSubmit}>
                <div className="form_container mt-3 w-full">
                  <div className="name_container lg:flex gap-3 my-5">
                    <div className="first_name_container w-full lg:w-1/2 mt-5">
                      <div className="first_name_label flex gap-2">
                        <Image
                          src="/login_profileIcon.png"
                          alt=""
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">First Name</p>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="first_name text-xs p-2 outline-none w-full mt-1"
                        ref={firstname}
                        required
                      />
                    </div>

                    <div className="last_name_container w-full lg:w-1/2 md:mt-5 max-sm:mt-5">
                      <div className="last_name_label flex gap-2">
                        <Image
                          src="/login_profileIcon.png"
                          alt=""
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">Last Name</p>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="last_name text-xs p-2 outline-none w-full mt-1"
                        ref={lastname}
                        required
                      />
                    </div>
                  </div>

                  <div className="email_and_phone_container lg:flex gap-3 lg:mt-1 max-sm:mt-5 mb-5">
                    <div className="login_email_container w-full lg:w-[55%] lg:mt-1">
                      <div className="email_label flex gap-2">
                        <Image
                          src="/email_icon.png"
                          alt=""
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">Email Address</p>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your email address"
                        className="email_address text-xs p-2 outline-none w-full mt-1"
                        ref={email}
                        required
                      />
                    </div>

                    <div className="phone_container w-full lg:w-[45%]">
                      <div className="phone_label flex gap-2 md:mt-5 max-sm:mt-5 lg:mt-1">
                        <Image
                          src="/phone_icon.png"
                          alt=""
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">Phone Number</p>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your number"
                        className="phone_number text-xs p-2 outline-none w-full mt-1"
                        ref={phone}
                        required
                      />
                    </div>
                  </div>

                  <div className="username_and_password lg:flex gap-3 max-sm:mb-5">
                    <div className="username_container w-full lg:w-1/2 lg:mt-1">
                      <div className="username_label flex gap-2">
                        <Image
                          src="/login_profileIcon.png"
                          alt=""
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">Username</p>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your username"
                        className="user_name text-xs p-2 outline-none w-full mt-1"
                        ref={username}
                        required
                      />
                    </div>

                    <div className="password_container w-full lg:w-1/2">
                      <div className="password_label flex gap-2 md:mt-5 max-sm:mt-5 lg:mt-1">
                        <Image
                          src="/lock-icon.png"
                          alt=""
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">Password</p>
                      </div>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="password text-xs p-2 outline-none w-full mt-1"
                        ref={password}
                        required
                      />
                    </div>
                  </div>

                  <div className="verify_password mt-5 mb-7 w-full lg:w-1/2">
                    <div className="verify_password_label flex gap-2">
                      <Image
                        src="/lock-icon.png"
                        alt=""
                        width={10}
                        height={10}
                      />
                      <p className="text-xs">Verify Password</p>
                    </div>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="verify-password text-xs p-2 outline-none w-full bg-white mt-1"
                      ref={verify_password}
                      required
                    />
                  </div>
                </div>

                <div className="register-submit-button-container mt-3 flex px-3">
                  <button
                    type="submit"
                    className="register-submit-button text-sm
                    text-white p-2 w-full rounded-full m-auto mt-5"
                  >
                    Proceed to Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        {/* LOGIN DROPDOWN COMPONENT ONCE PROFILE IS BEING CLICKED ON  */}
        {profileLogin ? (
          <div
            className="login_container fixed z-30 m-auto -mt-4 w-[98vw]
          -ml-12 lg:px-10 lg:py-10 pb-10  md:h-screen max-sm:h-screen
          md:py-20 max-sm:w-full"
          >
            <div
              className="login_form_container bg-white m-auto w-[35%]
            py-3 z-40 rounded-lg px-10 md:w-[60%] max-sm:w-[90%] max-sm:p-4"
            >
              <div className="form-cancel w-full flex justify-end cursor-pointer">
                <Image
                  src="/circle-cancel.png"
                  alt="image"
                  width={25}
                  height={25}
                  onClick={hideAuthForms}
                />
              </div>

              <div className="form_container_login mt-5">
                <h1 className="text-xl">Hey, Welcome to Homly</h1>

                <form onSubmit={handleLoginSubmit}>
                  <div className="login_username_container mt-8">
                    <div className="userlogin_container flex gap-2">
                      <Image
                        src="/profile-icon.png"
                        alt="user"
                        width={10}
                        height={10}
                      />
                      <p className="text-xs">Your Email</p>
                    </div>

                    <input
                      placeholder="Enter your email"
                      type="email"
                      name="username"
                      id="username"
                      className="p-1 max-sm:p-3
                      rounded-lg bg-transparent w-full outline-none border-slate-100 border-2 mt-1"
                      ref={email}
                      required
                    />
                  </div>

                  <div className="login_password_container mt-6">
                    <div className="passwordLogin_container w-full ">
                      <div className="password_login_upper flex gap-2">
                        <Image
                          src="/lock-icon.png"
                          alt="password"
                          width={10}
                          height={10}
                        />
                        <p className="text-xs">Password</p>
                        <div
                          className="forgot_password_container w-3/4 ml-9 flex justify-end text-xs
                          text-cyan-500 underline cursor-pointer"
                          onClick={forgotPasswordDisplay}
                        >
                          <p>Forgot your password?</p>
                        </div>
                      </div>

                      <div className="input_container">
                        <input
                          type="password"
                          placeholder="Enter your password"
                          className="input_password p-1 max-sm:p-3
                          rounded-lg bg-transparent w-full outline-none border-slate-100 border-2 mt-1"
                          ref={password}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="login_button mt-7 m-auto rounded-full
                    py-1 px-3
                    text-white flex justify-center w-[96%]"
                  >
                    Login
                  </button>
                </form>

                <div className="register_form mt-6 text-center text-xs">
                  <p>
                    Don&apos;t have an account?
                    <span
                      className="text-cyan-500 underline cursor-pointer"
                      onClick={showUserRegister}
                    >
                      Create Instant Account
                    </span>
                  </p>
                </div>

                <div className="alternative_seperator flex mt-8 items-center gap-2">
                  <hr className="w-2/3" /> <p className="text-sm">Or</p>{" "}
                  <hr className="w-2/3" />
                </div>

                <div className="alternative_login_options flex gap-8 justify-center mt-3 mb-4">
                  {alternativeImages.map((alternativeImage, index) => (
                    <div
                      key={index}
                      className="alternative_icon border-slate-100 border-2 p-2
                    rounded-full flex justify-center align-center"
                    >
                      <a href={alternativeImage.link}>
                        <Image
                          src={alternativeImage.image}
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {forgotPassword ? (
          <div
            className="login_container fixed z-30 m-auto -mt-4 w-[98vw]
          -ml-12 lg:px-10 lg:py-10 pb-10  md:h-screen max-sm:h-screen
          md:py-20 max-sm:w-full"
          >
            <div
              className="login_form_container bg-white m-auto lg:w-[40%]
            py-3 z-40 rounded-lg px-10 md:w-[60%] max-sm:w-[90%] max-sm:p-4"
            >
              <div className="form-cancel w-full flex justify-end cursor-pointer">
                <Image
                  src="/circle-cancel.png"
                  alt="image"
                  width={25}
                  height={25}
                  onClick={hideAuthForms}
                />
              </div>

              <div className="form_container_login mt-5">
                <h1 className="text-xl">Forgot your password?</h1>
                <p className="mt-2">We&apos;ll email a new password to you</p>

                <form onSubmit={handleForgotPassword}>
                  <div className="login_username_container mt-8">
                    <div className="userlogin_container flex gap-2">
                      <Image
                        src="/email_icon.png"
                        alt=""
                        width={15}
                        height={15}
                      />
                      <p className="text-xs">Your Email</p>
                    </div>

                    <input
                      placeholder="Enter your email"
                      type="email"
                      name="username"
                      id="username"
                      className="p-1 max-sm:p-3
                      rounded-lg bg-transparent w-full outline-none border-slate-100 border-2 mt-1"
                      ref={email}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="login_button mt-7 m-auto rounded-full
                    py-1 px-3
                    text-white flex justify-center w-[96%]"
                  >
                    Reset Password
                  </button>
                </form>

                <div className="register_form mt-6 text-center text-xs">
                  <p>
                    Don&apos;t have an account?
                    <span
                      className="text-cyan-500 underline cursor-pointer"
                      onClick={showUserRegister}
                    >
                      Create Instant Account
                    </span>
                  </p>
                </div>

                <div className="alternative_seperator flex mt-8 items-center gap-2">
                  <hr className="w-2/3" /> <p className="text-sm">Or</p>{" "}
                  <hr className="w-2/3" />
                </div>

                <div className="alternative_login_options flex gap-8 justify-center mt-3 mb-4">
                  {alternativeImages.map((alternativeImage, index) => (
                    <div
                      key={index}
                      className="alternative_icon border-slate-100 border-2 p-2
                    rounded-full flex justify-center align-center"
                    >
                      <a href={alternativeImage.link}>
                        <Image
                          src={alternativeImage.image}
                          alt="image"
                          width={30}
                          height={30}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
