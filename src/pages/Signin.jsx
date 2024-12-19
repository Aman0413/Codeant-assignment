import logo from "../assets/logo.png";
import gitlab from "../assets/Icon.png";
import sidelogo from "../assets/Subtract.png";
import group from "../assets/Group 4.png";
import { FaArrowUp } from "react-icons/fa6";
import key from "../assets/key.png";
import { useState } from "react";
import github from "../assets/image 1.png";
import bitbucket from "../assets/Icon (1).png";
import azure from "../assets/Icon (2).png";

function Signin() {
  const [selected, setSelected] = useState("SAAS");

  const selfHostedData = [
    {
      id: 1,
      icon: gitlab,
      title: "Self Hosted GitLab",
    },
    {
      id: 2,
      icon: key,
      title: "Sign in with SSO",
    },
  ];

  const saasData = [
    {
      id: 1,
      icon: github,
      title: "Sign in with GitHub",
    },
    {
      id: 2,
      icon: bitbucket,
      title: "Sign in with Bitbucket",
    },
    {
      id: 3,
      icon: azure,
      title: "Sign in with Azure DevOps",
    },
    {
      id: 4,
      icon: gitlab,
      title: "Sign in with GitLab",
    },
  ];
  return (
    <div className="signin w-full flex h-screen  ">
      <div className="right w-full hidden h-full md:w-[50%] md:flex justify-center items-center p-1  border rounded-lg relative ">
        <div className="relative ">
          <div className=" p-3 rounded-2xl shadow-2xl border text-sm flex flex-col space-y-4 bg-white z-10 ">
            <div className="flex justify-start items-center space-x-2">
              <img src={logo} alt="" className="w-10" />
              <h3 className="font-bold">AI to Detect & Autofix Bad Code</h3>
            </div>
            <div className="w-full bg-gray-300 h-[1px]"></div>
            <div className="flex justify-start items-center space-x-7">
              <div className="flex  flex-col justify-center items-center space-x-5">
                <span className="font-bold">30+</span>
                <span className="text-gray-500 text-xs">Language Support</span>
              </div>
              <div className="flex  flex-col justify-center items-center space-x-2">
                <span className="font-bold">10K+</span>
                <span className="text-gray-500 text-xs">Developers</span>
              </div>
              <div className="flex  flex-col justify-center items-center space-x-2">
                <span className="font-bold">100K+</span>
                <span className="text-gray-500 text-xs">Hours Saved</span>
              </div>
            </div>
            <div></div>
          </div>

          <div className="border shadow-2xl p-3 rounded-2xl w-64 absolute z-10 bg-white left-32 top-[9rem]">
            <div className="flex justify-between items-center space-x-2  ">
              <div>
                <img src={group} alt="" className="w-12" />
              </div>
              <div className="flex flex-col justify-start items-center ">
                <div className="flex justify-start items-center space-x-2">
                  <span className="text-[#0049C6] font-bold">
                    <FaArrowUp />
                  </span>
                  <span className="text-[#0049C6] font-bold">14%</span>
                </div>
                <div>This Week</div>
              </div>
            </div>

            <div className="font-bold text-black-primary text-2xl mt-4">
              <div>Issues Fixed</div>
              <div>500K+</div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 -z-10">
          <img src={sidelogo} alt="" className="w-60" />
        </div>
      </div>

      <div className="bg-[#FAFAFA] right w-full flex justify-center items-center  h-full md:w-[50%]  p-1  border rounded-lg ">
        <div className="bg-[#FAFAFA]  w-full h-full flex flex-col justify-center items-center">
          <div className="bg-white w-[90%] flex flex-col p-2 border rounded-lg h-[80%] justify-center items-center">
            <div className="flex flex-col items-center space-y-5">
              <div className="flex justify-center items-center space-x-4">
                <img src={logo} alt="logo" className="w-10 h-10  " />
                <h3 className="text-2xl">CodeAnt AI</h3>
              </div>
              <h2 className="text-black-primary font-medium text-2xl text-center">
                Welcome to CodeAnt AI
              </h2>
            </div>

            <div className="relative w-full flex border rounded-md my-5 cursor-pointer">
              {/* Sliding Indicator */}
              <div
                className={`absolute top-0 h-full w-1/2 bg-blue-primary rounded-md transition-all duration-500 ease-in-out ${
                  selected === "SAAS" ? "left-0" : "left-1/2"
                }`}
              ></div>

              {/* Buttons */}
              <button
                className={`w-full text-center p-3 font-medium z-10 ${
                  selected === "SAAS" ? "text-white" : "text-black-primary"
                }`}
                onClick={() => setSelected("SAAS")}
              >
                SAAS
              </button>
              <button
                className={`w-full text-center p-3 font-medium z-10 ${
                  selected === "Self Hosted"
                    ? "text-white"
                    : "text-black-primary"
                }`}
                onClick={() => setSelected("Self Hosted")}
              >
                Self Hosted
              </button>
            </div>

            <div className="w-full h-[1px] bg-gray-200 my-4"></div>
            <div className=" w-full mt-4 flex flex-col space-y-3 justify-evenly items-center font-medium">
              {selected === "SAAS"
                ? saasData.map((data) => {
                    return (
                      <button
                        key={data.id}
                        className="cursor-pointer  border w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 "
                      >
                        <img src={data.icon} alt="" />
                        <h4>{data.title}</h4>
                      </button>
                    );
                  })
                : selfHostedData.map((data) => {
                    return (
                      <button
                        key={data.id}
                        className="cursor-pointer  border w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 "
                      >
                        <img src={data.icon} alt="" />
                        <h4>{data.title}</h4>
                      </button>
                    );
                  })}
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            By signing up you agree to the{" "}
            <span className="text-black font-medium">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
