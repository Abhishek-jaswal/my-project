import React from 'react'

export default function Profile() {
    const user = {
        name: "Abhishek Jaswal",
        email: "abhishek@example.com",
        bio: "Aspiring Full-Stack Developer | JavaScript | React | Express.js | Django",
        avatar: "https://via.placeholder.com/150", // Replace with actual image URL
      };
    
      return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 text-center">
          <img
            src={user.avatar}
            alt="Profile Avatar"
            className="w-24 h-24 rounded-full mx-auto border-4 border-gray-200"
          />
          <h2 className="text-xl font-semibold text-gray-800 mt-4">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-600 mt-2">{user.bio}</p>
        </div>
      );
    };
