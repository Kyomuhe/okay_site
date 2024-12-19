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
                                    Friends
                                </button>
                            </div>
                
                            {/* Friends or Therapists Content */}
                            <div className="mt-4">
                                {friendsTab === 'therapists' ? (
                                    <div>
                                        <h3 className="text-xl font-semibold">Therapists</h3>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Therapist 1</li>
                                            <li>Therapist 2</li>
                                            <li>Therapist 3</li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div>
                                        <h3 className="text-xl font-semibold">Friends</h3>
                                        <ul className="list-disc list-inside mt-2">
                                            <li>Friend 1</li>
                                            <li>Friend 2</li>
                                            <li>Friend 3</li>
                                        </ul>
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
        <div className="min-h-screen bg-white">
            <div className="text-center mb-6">
            <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto bg-gray-300"
        />
        
        {/* Placeholder for username */}
        <h2 className="text-xl font-semibold mt-2 text-gray-400 animate-pulse">
            Username
        </h2>

        {/* Placeholder for bio */}
        <p className="text-gray-600">
            This is a short bio about the user.
        </p>
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
                    Friends
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
