import logo from "../assets/logo.png";
import gitlab from "../assets/Icon.png";
import sidelogo from "../assets/Subtract.png";
import group from "../assets/Group 4.png";
import { FaArrowUp } from "react-icons/fa6";

function Signin() {
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

      <div className="bg-[#FAFAFA] right w-full h-full md:w-[50%]  p-1  border rounded-lg ">
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

            <div className="w-full flex border  rounded-md my-5 cursor-pointer">
              <button className="bg-gray-50 w-full text-center p-3 rounded-md">
                SAAS
              </button>
              <button className="bg-blue-primary w-full text-center p-3 rounded-md text-white">
                Self Hosted
              </button>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-4"></div>
            <div className=" w-full mt-4 flex flex-col space-y-3 justify-evenly items-center">
              <button className="cursor-pointer  border w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
                <img src={gitlab} alt="" />
                <h4>Self Hosted GitLab</h4>
              </button>
              <button className="cursor-pointer  border w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
                <img src={gitlab} alt="" />
                <h4>Self Hosted GitLab</h4>
              </button>
              <button className="cursor-pointer  border w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
                <img src={gitlab} alt="" />
                <h4>Self Hosted GitLab</h4>
              </button>
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
