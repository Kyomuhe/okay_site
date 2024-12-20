import React, { useState } from 'react';
import profile from "../profile.PNG";

const UserProfile = () => {
    const [activeTab, setActiveTab] = useState('story');
    const [friendsTab, setFriendsTab] = useState('therapists');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'story':
                return (
                    <div className="relative">
                        <div className="flex justify-between items-center mb-4">
                            <button className="py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-300 transform hover:scale-105 ml-auto">
                                + Post a Story
                            </button>
                        </div>
                        <div className="mt-12">
                            <p>Your stories will appear here.</p>
                        </div>
                    </div>
                );
                case 'friends':
                    return (
                        <div className="relative">
                            {/* Friends and Therapists Tab */}
                            <div className="flex justify-start mb-4 border-b-2 pb-2">
                                <button
                                    className={`py-2 px-6 ${friendsTab === 'therapists' ? 'border-b-4 border-blue-500 text-blue-500 font-semibold' : 'text-gray-600 hover:text-blue-500'}`}
                                    onClick={() => setFriendsTab('therapists')}
                                >
                                    Therapists
                                </button>
                                <button
                                    className={`py-2 px-6 ${friendsTab === 'friends' ? 'border-b-4 border-blue-500 text-blue-500 font-semibold' : 'text-gray-600 hover:text-blue-500'}`}
                                    onClick={() => setFriendsTab('friends')}
                                >
                                    Other Companions
                                </button>
                            </div>
                
                            {/* Friends or Therapists Content */}
                            <div className="mt-4">
                                {friendsTab === 'therapists' ? (
                                    <div>
                                        <p>Your Therapist friends will apear here</p>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Your other Companions will apear here</p>

                                    </div>
                                )}
                            </div>
                        </div>
                    );
                            
                    
            case 'groups':
                return (
                    <div className="relative">
                        <div className="flex justify-between items-center mb-4">
                            <button className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition ease-in-out duration-300 transform hover:scale-105 ml-auto">
                                + Create Group
                            </button>
                        </div>
                        <div className="mt-12">
                            <p>Your groups will appear here.</p>
                        </div>
                    </div>
                );
            case 'ongoing':
                return (
                    <div className="relative">
                        <div className="flex justify-between items-center mb-4">
                        <button className="py-2 px-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition ease-in-out duration-300 transform hover:scale-105 ml-auto">
                             + Start a Conversation
                        </button>
                        </div>
                        <div className="mt-12">
                            <p>Ongoing conversations will appear here.</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
    <div className="max-h-screen bg-white">
        <div className="max-h-screen bg-white flex flex-col items-center">
    {/* Profile Section */}
        <div className="relative flex flex-col items-center w-full max-w-screen-lg px-6 mt-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center mx-auto">
            <img
                src={profile}
                alt="Profile"
                className="w-24 h-24 rounded-full bg-gray-300"
            />
        </div>

        {/* Edit Profile Button */}
        <button
            className="absolute right-0 py-1 px-4 border border-gray-300 text-black rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition ease-in-out duration-300"
        >
            Edit Profile
        </button>
    </div>

    <div className="text-center mt-4">
        {/* Full Name */}
        <h1 className="text-2xl font-bold mt-4 text-gray-800">
            Full Name
        </h1>

        
        {/* Placeholder for username */}
        <h2 className="text-xl font-semibold mt-2 text-gray-600">
            @Username
        </h2>

        {/* Profession or Problem */}
        <p className="text-gray-500 mt-2">
            Profession or problem
        {/* Check user type */}
        </p>


        {/* Placeholder for bio */}
        <p className="text-gray-600">
            This is a short bio about the user.
        </p>


        </div>
        </div>

            <nav className="flex justify-around border-b mb-6">
                <button
                    className={`py-2 px-4 ${activeTab === 'story' ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('story')}
                >
                    Stories
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'friends' ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('friends')}
                >
                    Companions
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'groups' ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('groups')}
                >
                    Groups
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'ongoing' ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('ongoing')}
                >
                    Ongoing Conversation
                </button>
            </nav>

            <div className="text-center text-gray-700 p-6">
                {renderTabContent()}
            </div>

            <footer className="text-center mt-6 p-6">
                <p className="text-gray-500">&copy; 2024 It's Okay App</p>
            </footer>
        </div>
    );
};

export default UserProfile;
