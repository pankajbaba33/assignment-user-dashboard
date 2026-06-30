import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    MapPin,
    Building2,
    Landmark,
    Mailbox,
    Mail,
    Phone,
    Globe,
    ArrowLeft,
} from "lucide-react";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { users } = useContext(UserContext);

    const user = users.find((item) => item.id === Number(id));

    if (!user) {
        return <h2 className="text-center text-2xl font-semibold mt-10">User Not Found</h2>;
    }

    return (
        <div className="min-h-screen py-10 px-4 bg-gray-100">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Header */}
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute -top-2 left-6 flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-2 py-1 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back
                    </button>

                    <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 sm:mt-0">
                        <div className="w-24 h-24 rounded-full bg-white text-blue-600 flex items-center justify-center text-4xl font-bold shadow-lg">
                            {user.name.charAt(0).toUpperCase()}
                        </div>

                        <div className="text-center sm:text-left">
                            <h1 className="text-3xl font-bold">{user.name}</h1>
                            <p className="text-blue-100">@{user.username}</p>
                            <p className="mt-2">{user.company.name}</p>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Personal Information */}
                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800 mb-5 border-b pb-2">
                            Personal Information
                        </h2>

                        <div className="space-y-5">

                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-red-500 mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-700">Email</p>
                                    <p className="text-gray-600 break-all">{user.email}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-green-500 mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-700">Phone</p>
                                    <p className="text-gray-600">{user.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Globe className="w-5 h-5 text-blue-500 mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-700">Website</p>
                                    <a
                                        href={`https://${user.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-700 hover:underline break-all"
                                    >
                                        {user.website}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Building2 className="w-5 h-5 text-purple-500 mt-1" />
                                <div>
                                    <p className="font-semibold text-gray-700">Company</p>
                                    <p className="text-gray-600">{user.company.name}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Address */}
                    <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800 mb-5 border-b pb-2">
                            Address Details
                        </h2>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                <p>
                                    <span className="font-semibold">Street:</span>{" "}
                                    {user?.address?.street ?? "Empty"}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Building2 className="w-5 h-5 text-purple-600" />
                                <p>
                                    <span className="font-semibold">Suite:</span>{" "}
                                    {user?.address?.suite ?? "Empty"}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Landmark className="w-5 h-5 text-green-600" />
                                <p>
                                    <span className="font-semibold">City:</span>{" "}
                                    {user?.address?.city ?? "Empty"}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mailbox className="w-5 h-5 text-orange-600" />
                                <p>
                                    <span className="font-semibold">Zip Code:</span>{" "}
                                    {user?.address?.zipcode ?? "Empty"}
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Geo Location */}
                    <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 shadow-sm">

                        <h2 className="text-xl flex items-center gap-2 font-bold text-gray-800 mb-5 border-b pb-2">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            Geo Location
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            <div className="bg-white rounded-xl p-5 shadow">
                                <p className="text-gray-500 text-sm">Latitude</p>
                                <h3 className="text-2xl font-bold text-blue-600">
                                    {user?.address?.geo?.lat ?? "Empty"}
                                </h3>
                            </div>

                            <div className="bg-white rounded-xl p-5 shadow">
                                <p className="text-gray-500 text-sm">Longitude</p>
                                <h3 className="text-2xl font-bold text-indigo-600">
                                    {user?.address?.geo?.lng ?? "Empty"}
                                </h3>
                            </div>

                        </div>

                        {/* Google Map */}
                        {user?.address?.geo?.lat && user?.address?.geo?.lng && (
                            <div className="mt-6 overflow-hidden rounded-2xl shadow-lg border border-gray-200">
                                <iframe
                                    title="User Location"
                                    width="100%"
                                    height="450"
                                    loading="lazy"
                                    className="w-full"
                                    src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&z=14&output=embed`}
                                />
                            </div>
                        )}

                        {/* Google Maps Button */}
                        {user?.address?.geo?.lat && user?.address?.geo?.lng && (
                            <div className="mt-5 flex justify-end">
                                <a
                                    href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                                >
                                    <MapPin className="w-5 h-5" />
                                    Open in Google Maps
                                </a>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserDetails;