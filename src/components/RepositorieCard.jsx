import { FaCircle } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";

function RepositorieCard({ title, language, size, update, isPublic }) {
  return (
    <div className="RepositorieCard  w-full h-28 p-4 hover:bg-[#F5F5F5] border-t-2 border-[#F5F5F5]">
      <div className="flex justify-start items-center space-x-3 my-2 ">
        <h2 className="md:text-xl  ">{title}</h2>
        <button className="bg-[#B2DDFF] text-[#175CD3] px-2   rounded-2xl text-sm font-light border border-[#175CD3]">
          {isPublic ? "Public" : "Private"}
        </button>
      </div>
      <div className="flex space-x-6 text-gray-500 text-xs md:text-sm my-2">
        <div className="flex justify-center items-center space-x-2">
          <span>{language}</span>
          <FaCircle className="text-blue-primary w-2" />
        </div>
        <di className="flex justify-center items-center space-x-2">
          <GoDatabase />
          <span>{size}</span>
        </di>
        <div>
          <p>{update}</p>
        </div>
      </div>
    </div>
  );
}

export default RepositorieCard;
