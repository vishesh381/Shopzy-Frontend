/* eslint-disable no-unused-vars */
// src/pages/ProfilePage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutUser(navigate));
  };

  if (!user) {
    return <div className="text-center mt-16 text-gray-600">Loading Profile...</div>;
  }

  const avatarUrl = "https://randomuser.me/api/portraits/men/75.jpg";

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md border">
      <div className="flex flex-col items-center">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800">{user.username}</h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <div className="mt-2 text-sm text-blue-600 font-medium">
          {Array.isArray(user.roles) &&
            user.roles.map(role => role.replace("ROLE_", "")).join(', ')}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
        >
          <IoExitOutline className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
