import React, { useState, useRef, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import LogContext from "../context/notes/LogContext";
import SignInAlert from "./Sign_Inalert";
import { Link, useNavigate } from "react-router-dom";
import WrongAlert from "./Wrong_Alert";

const SignIn = () => {
  let [logs, setLogs] = useState(null);
  const navigate = useNavigate();
  const Logs = useContext(LogContext);
  let { sign_in } = Logs;
  let email_error = useRef(null);
  let pass_error = useRef(null);
  let emailError = "Please Enter the E-mail of the User";
  let passError = "Please Enter the password of the User";
  let [shos, setShos] = useState(false);
  let [dhos, setDhos] = useState(false);
  let Email = useRef(null);
  let password = useRef(null);
  useEffect(() => {
    console.log(Logs.email, Logs.pass);
    // This effect will run whenever email or pass change in the context
    if (Logs.email === false) {
      email_error.current.textContent = "Invalid email";
      setDhos(true);
    } else {
      email_error.current.textContent = "";
    }

    if (Logs.pass === false) {
      pass_error.current.textContent = "Invalid password";
      setDhos(true);
    } else {
      pass_error.current.textContent = "";
    }
    if (Logs.email === true && Logs.pass === true) {
      setShos(true);
      localStorage.setItem("token", Logs.token);

      if (Logs.email === true && Logs.pass === true) {
        const timerId = setTimeout(() => {
          navigate("/");
          Logs.email = "";
          Logs.pass = "";
        }, 2000);

        return () => clearTimeout(timerId);
      }
    }
  }, [Logs.email, Logs.pass]);
  let Sign_func = async (e) => {
    e.preventDefault();
    if (
      Email.current.value.trim() !== "" ||
      password.current.value.trim() !== ""
    ) {
      if (Email.current.value.trim() === "") {
        email_error.current.textContent = emailError;
      }
      if (password.current.value.trim() === "") {
        pass_error.current.textContent = passError;
      }

      sign_in(Email.current.value.trim(), password.current.value.trim());
    } else {
      if (Email.current.value.trim() === "") {
        email_error.current.textContent = "Please Enter the Email of user";
      }
      if (password.current.value.trim() === "") {
        pass_error.current.textContent = "Please Enter the password of user";
      }
    }

    Email.current.value = "";
    password.current.value = "";
  };
  let fetching_Values = (e) => {
    setLogs({ ...logs, [e.target.name]: e.target.value });
    if (Email.current.value.length <= 66 && Email.current.value !== "")
      email_error.current.textContent = "";
    if (password.current.value.length <= 14 && password.current.value !== "")
      pass_error.current.textContent = "";
  };

  return (
    <div className="flex flex-col overflow-hidden gap-y-4">
      <WrongAlert dhos={dhos} />
      {useEffect(() => {
        if (dhos) {
          const timerId = setTimeout(() => {
            setDhos(false);
          }, 3000);

          return () => clearTimeout(timerId);
        }
      }, [dhos])}
      <SignInAlert shos={shos} />
      {useEffect(() => {
        if (shos) {
          const timerId = setTimeout(() => {
            setShos(false);
          }, 3000);

          return () => clearTimeout(timerId);
        }
      }, [shos])}

      <div className=" flex flex-col m-auto items-center justify-center mb-11 md:p-6 ssm:p-2 bg-white shadow-sm shadow-black w-[40%] h-[25rem] relative md:w-[30rem] sm:w-[60%] ssm:w-[70%] sssm:w-[80%] sssm:-mt-8 sssm:h-[40%]">
        <div className="container flex flex-col gap-y-6 h-full items-center justify-center bg-white p-10 sssm:w-[100%] sssm:p-3 ">
          <div className="flex flex-row items-center">
            <h1 className="items-center p-2 font-sans text-blue-600 bg-purple-100 rounded-md md:text-2xl ssm:text-lg">
              Sign-In
            </h1>
          </div>

          <form className="flex flex-col items-center w-full gap-y-2">
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
                  placeholder="type your Email"
                  ref={Email}
                  onChange={fetching_Values}
                />

                <p className="text-xs text-red-600 " ref={email_error}></p>
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
                  placeholder="type your Password"
                  ref={password}
                  onChange={fetching_Values}
                />

                <p className="text-xs text-red-600 " ref={pass_error}></p>
              </div>
            </div>
            <div className="flex w-full mt-2 gap-x-1">
              <input type="checkbox" className="md:p-1" />
              <p className="md:text-sm text-blue-500 ssm:text-[10px] sssm:text-[9px]">
                Agree to the liscence terms and the Agreements{" "}
              </p>
            </div>
            <p className="md:text-sm text-blue-500 ssm:text-[10px] sssm:text-[9px]">
              You've no Account?{" "}
              <Link
                className="text-blue-900 underline hover:text-blue-700 transition-all 0.5s ease-in-out"
                to={"/SignUp"}
              >
                Register now
              </Link>
            </p>
            <input
              type="button"
              value="Login"
              className="p-2 mt-[5px] cursor-pointer rounded-md shadow-sm shadow-black bg-blue-600 hover:bg-blue-400 transition-all ease-in-out duration-300 text-white w-[10rem]"
              onClick={Sign_func}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
