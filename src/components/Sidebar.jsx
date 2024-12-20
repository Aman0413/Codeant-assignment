import {
  IoCallOutline,
  IoCodeSlash,
  IoHomeOutline,
  IoMenu,
} from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import logo from "../assets/logo.png";
import { LuBookText, LuSettings } from "react-icons/lu";
import { MdOutlineCloudQueue } from "react-icons/md";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 md:static  w-screen md:w-[20%] bg-white md:h-screen p-4 text-black-primary flex flex-col justify-between border-r-2 border-gray-200`}
    >
      <div className="flex flex-col ">
        <div className="flex items-center justify-between space-x-2 w-full cursor-pointer">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="profile" className="w-10 h-10 rounded-full" />
            <h1 className="text-2xl">CodeAnt AI</h1>
          </div>
          <div className="font-bold text-2xl md:hidden">
            {open ? (
              <RxCross2 onClick={() => setOpen(!open)} />
            ) : (
              <IoMenu onClick={() => setOpen(!open)} />
            )}
          </div>
        </div>

        {/* Sidebar Links */}
        <div
          className={`mt-5 flex-col space-y-1 md:space-y-4 ${
            open ? "block" : "hidden md:flex"
          } font-medium`}
        >
          <select className="w-full p-2 mt-4 rounded-md border border-gray-300 cursor-pointer">
            <option>UtkarshDhairyaPanwar..</option>
          </select>
          {[
            { icon: <IoHomeOutline />, label: "Home" },
            { icon: <IoCodeSlash />, label: "Repositories" },
            { icon: <LuBookText />, label: "Documentation" },
            { icon: <MdOutlineCloudQueue />, label: "Cloud" },
            { icon: <LuSettings />, label: "Settings" },
          ].map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 cursor-pointer hover:bg-blue-primary hover:text-white p-2 rounded-md transition-all ease-in-out duration-300"
            >
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div
        className={`flex flex-col space-y-3 font-medium  ${
          open ? "block" : "hidden md:flex"
        } ml-2 mt-2 `}
      >
        <div className="flex items-center space-x-2">
          <IoCallOutline />
          <span>Support</span>
        </div>
        <div className="flex items-center space-x-2">
          <MdLogout />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
