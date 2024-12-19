import logo from "../assets/logo.png";
import gitlab from "../assets/Icon.png";

function Signin() {
  return (
    <div className="signin w-full flex h-screen ">
      <div className="right w-full hidden h-full md:w-[50%] md:flex justify-center items-center p-1  border rounded-lg ">
        <div className="w-[90%] flex flex-col p-2">
          <div className="">
            <div className="flex justify-center items-center space-x-4">
              <img src={logo} alt="logo" className="w-10 h-10  " />
              <h3 className="">CodeAnt AI</h3>
            </div>
            <h2 className="text-black-primary font-medium text-2xl text-center">
              Welcome to CodeAnt AI
            </h2>
          </div>

          <div className="w-full flex border  rounded-md">
            <div className="bg-gray-50 w-full text-center p-3 rounded-md">
              SAAS
            </div>
            <div className="bg-blue-primary w-full text-center p-3 rounded-md text-white">
              Self Hosted
            </div>
          </div>
          <div className=" w-full mt-4 flex flex-col space-y-3 justify-evenly items-center">
            <div className="bg-yellow-100 w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
              <img src={gitlab} alt="" />
              <h4>Self Hosted GitLab</h4>
            </div>
            <div className="bg-yellow-100 w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
              <img src={gitlab} alt="" />
              <h4>Self Hosted GitLab</h4>
            </div>
            <div className="bg-yellow-100 w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
              <img src={gitlab} alt="" />
              <h4>Self Hosted GitLab</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] right w-full h-full md:w-[50%] flex justify-center items-center p-1  border rounded-lg ">
        <div className="bg-white w-[90%] flex flex-col p-2 border rounded-lg h-[80%] justify-center items-center">
          <div className="">
            <div className="flex justify-center items-center space-x-4">
              <img src={logo} alt="logo" className="w-10 h-10  " />
              <h3 className="">CodeAnt AI</h3>
            </div>
            <h2 className="text-black-primary font-medium text-2xl text-center">
              Welcome to CodeAnt AI
            </h2>
          </div>

          <div className="w-full flex border  rounded-md">
            <div className="bg-gray-50 w-full text-center p-3 rounded-md">
              SAAS
            </div>
            <div className="bg-blue-primary w-full text-center p-3 rounded-md text-white">
              Self Hosted
            </div>
          </div>
          <div className=" w-full mt-4 flex flex-col space-y-3 justify-evenly items-center">
            <div className="bg-yellow-100 w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
              <img src={gitlab} alt="" />
              <h4>Self Hosted GitLab</h4>
            </div>
            <div className="bg-yellow-100 w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
              <img src={gitlab} alt="" />
              <h4>Self Hosted GitLab</h4>
            </div>
            <div className="bg-yellow-100 w-[80%] p-2 rounded-md flex justify-center items-center space-x-3 ">
              <img src={gitlab} alt="" />
              <h4>Self Hosted GitLab</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
