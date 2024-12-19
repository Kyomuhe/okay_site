import React from "react";
import { useNavigate } from "react-router-dom"; 
import profile from "../profile.PNG";
import { AiOutlineHome, AiOutlineMessage, AiOutlineBell, AiOutlineSearch } from "react-icons/ai"; // Using react-icons

const StoriesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 bg-white shadow">
                <img
                    src={profile}
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={() => navigate("/UserProfile")} // Navigate to the User Profile page
                />
                <h1 className="text-xl font-semibold text-gray-800">Stories</h1>
                <div className="w-10 h-10" /> {/* Empty space for alignment */}
            </div>

            {/* Stories Content */}
            <div className="flex-1 p-4">
                <h2 className="text-gray-700 text-lg font-semibold mb-4">
                    Stories Posted by People
                </h2>
                <div className="space-y-4">
                    {/* Placeholder for stories */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-gray-800 font-semibold">User Name</h3>
                        <p className="text-gray-600 mt-2">
                            This is a placeholder for a user’s story content.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="text-gray-800 font-semibold">User Name</h3>
                        <p className="text-gray-600 mt-2">
                            This is another placeholder for a user’s story content.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-around items-center p-2 bg-white shadow fixed bottom-0 w-full">
                <button
                    onClick={() => navigate("/notifications")}
                    className="flex flex-col items-center text-gray-600 hover:text-purple-500"
                >
                    <AiOutlineBell className="text-2xl" />
                    <span className="text-xs">Notifications</span>
                </button>
                <button
                    onClick={() => navigate("/")}
                    className="flex flex-col items-center text-gray-600 hover:text-purple-500"
                >
                    <AiOutlineHome className="text-2xl" />
                    <span className="text-xs">Home</span>
                </button>
                <button
                    onClick={() => navigate("/messages")}
                    className="flex flex-col items-center text-gray-600 hover:text-purple-500"
                >
                    <AiOutlineMessage className="text-2xl" />
                    <span className="text-xs">Messages</span>
                </button>
                <button
                    onClick={() => navigate("/search")}
                    className="flex flex-col items-center text-gray-600 hover:text-purple-500"
                >
                    <AiOutlineSearch className="text-2xl" />
                    <span className="text-xs">Search</span>
                </button>
            </div>
        </div>
    );
};

export default StoriesPage;
