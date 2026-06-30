import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    User, Plus, Mail,


    Phone,
    Building2,
    ArrowRight,
    UserRound,
    BadgeCheck,
} from "lucide-react";
import { UserContext } from "../context/UserContext";
import SearchBar from "../components/SearchBar";
import UserForm from "../components/UserForm";
const Dashboard = () => {
    const [search, setSearch] = useState("");
    const { users } = useContext(UserContext);
    const navigate = useNavigate();

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log("filetrDAta", search)

    const handle = () => {
        navigate("/create-new-user")
    }
    return (
        <div className="">
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 px-4 py-5 sm:px-6 md:px-8 lg:px-8 lg:py-5 shadow-2xl border-b border-white/10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                    {/* Left Section */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 px-4 py-1 rounded-full text-xs sm:text-sm font-medium mb-4">
                            👋 Welcome Back
                        </div>

                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                            User Dashboard
                        </h1>

                        <p className="text-blue-100 mt-3 text-sm sm:text-base lg:text-lg max-w-xl">
                            Manage, monitor and organize all registered users from one place.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">

                        {/* User Profile */}
                        <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-40"></div>

                            <div className="relative w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl">
                                <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                        </div>

                        {/* Create Button */}
                        <button
                            onClick={handle}
                            className="group flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-white text-blue-700 px-6 py-3 sm:py-3 font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50 active:scale-95"
                        >
                            <div className="rounded-full bg-blue-600 p-2 text-white transition-transform duration-300 group-hover:rotate-90">
                                <Plus className="w-5 h-5" />
                            </div>

                            <span className="whitespace-nowrap">
                                Create New User
                            </span>
                        </button>

                    </div>

                </div>
            </div>
            <div className=" mt-[340px]  md:mt-[230px]  max-w-[80%] mx-auto ">
                {/* Header */}

                <div className="flex justify-center">
                    <SearchBar
                        setSearch={setSearch} />
                </div>



                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            onClick={() => navigate(`/user/${user.id}`)}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-200 cursor-pointer"
                        >
                            {/* Avatar */}
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                            </div>

                            {/* User Info */}
                            <h2 className="text-xl font-bold text-center text-gray-800">
                                {user.name}
                            </h2>

                            <div className="mt-5 space-y-3 text-sm">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                    <span className="text-gray-600 break-all">
                                        {user.email}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-600">
                                        {user.phone}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Building2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                    <span className="text-gray-600">
                                        {user.company.name}
                                    </span>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="mt-6 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 font-medium">
                                View Profile
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;