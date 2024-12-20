import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../profile.PNG";
import {
    AiOutlineHome,
    AiOutlineMessage,
    AiOutlineBell,
    AiOutlineSearch,
    AiOutlinePlus,
} from "react-icons/ai"; // Using react-icons

const StoriesPage = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false); 

    const handleMenuToggle = () => setShowMenu(!showMenu); // Toggle menu visibility

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 bg-white shadow">
                <img
                    src={profile}
                    alt="Profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={() => navigate("/UserProfile")} // NavigateS to the User Profile page
                />
                <h1 className="text-xl font-semibold text-gray-800">Stories</h1>
                <div className="w-10 h-10" /> {}
            </div>

            {/* Stories Content */}
            <div className="flex-1 p-4">
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

            {/* Floating Button */}
            <div className="fixed bottom-16 right-6">
                {/* Main FAB */}
                <button
                    onClick={handleMenuToggle}
                    className="w-14 h-14 rounded-full bg-purple-500 text-white shadow-lg flex items-center justify-center hover:bg-purple-600 transition ease-in-out"
                >
                    <AiOutlinePlus className="text-3xl" />
                </button>

                {/* Options Menu */}
                {showMenu && (
                    <div className="absolute bottom-16 right-0 flex flex-col space-y-2 bg-white p-3 rounded-lg shadow-md">
                        <button
                            className="px-4 py-2 text-gray-700 text-purple-500 hover:text-blue-500 hover:bg-gray-100 rounded-lg text-sm"
                        >
                            Post a Story
                        </button>
                        <button
                            className="px-4 py-2 text-gray-700 text-purple-500 hover:text-blue-500 hover:bg-gray-100 rounded-lg text-sm"
                        >
                            Create Group
                        </button>
                        <button
                            className="px-4 py-2 text-gray-700 text-purple-500 hover:text-blue-500 hover:bg-gray-100 rounded-lg text-sm"
                        >
                            Start a Conversation
                        </button>
                    </div>
                )}
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
