import { IoMdAdd } from "react-icons/io";
import { FiRefreshCw } from "react-icons/fi";
import RepositorieCard from "../components/RepositorieCard";
import Sidebar from "../components/Sidebar";

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
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 bg-[#FAFAFA] h-screen overflow-auto p-4 mt-10 md:mt-0">
        <div className="p-4 w-full h-full bg-white rounded-lg">
          <div className="flex flex-col md:flex-row justify-start md:justify-between space-y-4 md:space-y-0">
            <div>
              <h2 className="text-2xl">Repositories</h2>
              <p className="text-gray-400 text-xs">33 total repositories</p>
            </div>
            <div className="flex space-x-4">
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

          {/* Search and Repository List */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <div className="">
              {repositories.map((repo, index) => (
                <RepositorieCard key={index} {...repo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
