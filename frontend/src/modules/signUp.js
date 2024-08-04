import React, { useState, useRef, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import LogContext from "../context/notes/LogContext";
import SignUpAlert from "./Signup_Alert";
import WrongAlert from "./Wrong_Alert";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let [logs, setLogs] = useState(null);
  const Logs = useContext(LogContext);
  let { sign_up } = Logs;
  const navigate = useNavigate();
  let username = useRef(null);
  let email_error = useRef(null);
  let pass_error = useRef(null);
  let user_error = useRef(null);
  let password = useRef(null);
  let [shos, setShos] = useState(false);
  let [dhos, setDhos] = useState(false);
  let Email = useRef(null);

  useEffect(() => {
    if (Logs.email === false) {
      email_error.current.textContent = "This email already exists";
      setDhos(true);
    } else {
      email_error.current.textContent = "";
    }
    if (Logs.email === true) {
      setShos(true);
      const timerId = setTimeout(() => {
        navigate("/SignIn");
        Logs.email = "";
      }, 2000);

      return () => clearTimeout(timerId);
    }
  }, [Logs.email, Logs.pass, Logs, navigate]);

  useEffect(() => {
    if (dhos) {
      const timerId = setTimeout(() => {
        setDhos(false);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [dhos]);

  useEffect(() => {
    if (shos) {
      const timerId = setTimeout(() => {
        setShos(false);
      }, 3000);

      return () => clearTimeout(timerId);
    }
  }, [shos]);

  const handleSignUp = async (e) => {
    if (
      username.current.value.trim() !== "" ||
      Email.current.value.trim() !== "" ||
      password.current.value.trim() !== ""
    ) {
      if (username.current.value.trim() === "") {
        user_error.current.textContent = "Please enter the username";
      }
      if (Email.current.value.trim() === "") {
        email_error.current.textContent = "Please enter the email";
      }
      if (password.current.value.trim() === "") {
        pass_error.current.textContent = "Please enter the password";
      }

      if (
        username.current.value.length <= 14 &&
        Email.current.value.length <= 66 &&
        password.current.value.length <= 14
      ) {
        e.preventDefault();
        sign_up(
          username.current.value,
          Email.current.value,
          password.current.value
        );

        username.current.value = "";
        Email.current.value = "";
        password.current.value = "";
      } else {
        if (username.current.value.length > 14) {
          user_error.current.textContent =
            "You can't enter a username longer than 14 characters";
          return;
        }
        if (Email.current.value.length > 66) {
          email_error.current.textContent =
            "You can't enter an email longer than 66 characters";
          return;
        }
        if (password.current.value.length > 14) {
          pass_error.current.textContent =
            "You can't enter a password longer than 14 characters";
          return;
        }
      }
    } else {
      if (username.current.value.trim() === "") {
        user_error.current.textContent = "Please enter the username";
      }
      if (Email.current.value.trim() === "") {
        email_error.current.textContent = "Please enter the email";
      }
      if (password.current.value.trim() === "") {
        pass_error.current.textContent = "Please enter the password";
      }
    }
  };

  const handleFetchingValues = (e) => {
    setLogs({ ...logs, [e.target.name]: e.target.value });
    if (username.current.value.length <= 14 && username.current.value !== "")
      user_error.current.textContent = "";
    if (Email.current.value.length <= 66 && Email.current.value !== "")
      email_error.current.textContent = "";
    if (password.current.value.length <= 14 && password.current.value !== "")
      pass_error.current.textContent = "";
  };

  return (
    <div className="flex flex-col overflow-x-hidden gap-y-4">
      <WrongAlert dhos={dhos} />
      <SignUpAlert shos={shos} />
      <div className="flex flex-col m-auto items-center justify-center md:p-6 ssm:p-2 bg-white shadow-sm shadow-black w-[40%] relative bottom-[2rem] md:w-[30rem] sm:w-[60%] ssm:w-[70%] sssm:w-[80%] sssm:-mt-8 sssm:h-[40%]">
        <div className="container flex flex-col gap-y-4 h-full items-center justify-center bg-white p-10 sssm:w-[100%] sssm:p-3">
          <div className="flex flex-row items-center">
            <h1 className="items-center p-2 font-sans text-blue-600 bg-blue-100 rounded-md md:text-2xl ssm:text-lg">
              Sign-Up
            </h1>
          </div>
          <form className="flex flex-col items-center w-full gap-y-1">
            <div className="flex flex-col w-full gap-y-2">
              <label
                htmlFor="UserName"
                className="items-start text-blue-600 md:text-sm ssm:text-sm"
              >
                UserName
              </label>
              <div className="flex flex-col w-full gap-y-1">
                <input
                  type="text"
                  name="UserName"
                  className="md:p-3 ssm:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-sm ssm:text-sm sssm:p-1 sssm:placeholder:text-[10px] sssm:placeholder:p-1"
                  id="UserName"
                  placeholder="Type your UserName"
                  ref={username}
                  onChange={handleFetchingValues}
                />
                <p className="text-xs text-red-600" ref={user_error}></p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <label
                htmlFor="E-mail"
                className="text-blue-600 md:text-sm ssm:text-sm"
              >
                E-mail
              </label>
              <div className="flex flex-col w-full gap-y-1">
                <input
                  type="email"
                  name="E-mail"
                  className="md:p-3 ssm:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-sm ssm:text-sm sssm:p-1 sssm:placeholder:text-[10px] sssm:placeholder:p-1"
                  id="E-mail"
                  placeholder="Type your Email"
                  ref={Email}
                  onChange={handleFetchingValues}
                />
                <p className="text-xs text-red-600" ref={email_error}></p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-2">
              <label
                htmlFor="Password"
                className="text-blue-600 md:text-sm ssm:text-sm"
              >
                Password
              </label>
              <div className="flex flex-col w-full gap-y-1">
                <input
                  type="password"
                  name="Password"
                  className="md:p-3 ssm:p-3 cursor-pointer rounded-md placeholder:text-sm shadow-sm shadow-black w-full md:text-sm ssm:text-sm sssm:p-1 sssm:placeholder:text-[10px] sssm:placeholder:p-1"
                  id="Password"
                  placeholder="Type your Password"
                  ref={password}
                  onChange={handleFetchingValues}
                />
                <p className="text-xs text-red-600" ref={pass_error}></p>
              </div>
            </div>
            <div className="flex w-full mt-2 gap-x-1">
              <input type="checkbox" className="md:p-1" />
              <p className="md:text-sm text-blue-500 ssm:text-[10px] sssm:text-[9px]">
                Agree to the license terms and agreements
              </p>
            </div>
            <input
              type="button"
              value="Register"
              className="p-2 mt-[5px] cursor-pointer rounded-md shadow-sm shadow-black bg-blue-600 hover:bg-blue-400 transition-all ease-in-out duration-300 text-white w-[10rem]"
              onClick={handleSignUp}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
