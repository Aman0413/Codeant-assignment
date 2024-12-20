import { IoMdAdd } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import RepositorieCard from "../components/RepositorieCard";

function Home() {
  const repositories = [
    {
      title: "design-system",
      language: "React",
      size: "730 KB",
      update: "Udate 1 day ago",
      isPublic: true,
    },
    {
      title: "codeant-ci-app",
      language: "Javascript",
      size: "5871 KB",
      update: "Udate 2 day ago",
      isPublic: false,
    },
    {
      title: "analytics-dashboard",
      language: "Python",
      size: "4521 KB",
      update: "Udate 5 day ago",
      isPublic: false,
    },
    {
      title: "mobile-app",
      language: "Swift",
      size: "3096 KB",
      update: "Udate 3 day ago",
      isPublic: true,
    },
    {
      title: "e-commerce-platform",
      language: "Java",
      size: "6210 KB",
      update: "Udate 6 day ago",
      isPublic: false,
    },
    {
      title: "blog-website",
      language: "HTML/CSS",
      size: "1876 KB",
      update: "Udate 4 day ago",
      isPublic: true,
    },
    {
      title: "social-network",
      language: "PHP",
      size: "5432 KB",
      update: "Udate 7 day ago",
      isPublic: true,
    },
  ];
  return (
    <div className="bg-[#FAFAFA] w-full h-full flex justify-center items-center fixed">
      <div className="p-4 w-[96%] h-[96%] bg-white rounded-lg">
        <div className=" flex flex-col justify-start  md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col justify-start space-y-1">
            <h2 className="text-2xl">Repositories</h2>
            <p className="text-gray-400 text-xs">33 total repositories</p>
          </div>

          <div className="flex mt-4 items-ce md:mt-0 nter space-x-4">
            <button className="border rounded-md p-2 flex items-center space-x-2">
              <FiRefreshCw />
              <span>Refresh All</span>
            </button>
            <button className="border bg-blue-primary text-white rounded-md p-2 flex items-center space-x-2">
              <IoMdAdd />
              <span> Add Repositories</span>
            </button>
          </div>
        </div>
        {/* input box */}
        <div>
          <div className="w-full max-w-sm min-w-[200px] relative mt-4">
            <div className="relative">
              <input
                type="text"
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search Repositories"
              />
              <button
                className="absolute left-1 top-1 rounded  p-1.5 border border-transparent text-center text-sm text-gray-400 transition-all shadow-sm hover:shadow  focus:shadow-none  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Repositories */}

          <div className="mt-4 overflow-y-auto h-screen ">
            {repositories.map((data, index) => {
              return (
                <RepositorieCard
                  key={index}
                  title={data.title}
                  language={data.language}
                  size={data.size}
                  update={data.update}
                  isPublic={data.isPublic}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
