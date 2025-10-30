import React from 'react';
import { FaBoxOpen, FaSignOutAlt } from 'react-icons/fa';
import { PiArticle } from "react-icons/pi";
import { Link,Outlet } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";

const AdminLayout = () => {

  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('token')
  localStorage.removeItem('user')
    navigate('/login')
  }
  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <div className="w-14 bg-[#1E293B] flex flex-col items-center py-4 justify-between">
        {/* Top Icons */}
        <div className="flex flex-col items-center space-y-6">
          <Link
            to="admin"
            className="flex flex-col items-center text-white hover:text-yellow-500 cursor-pointer"
          >
            <FaBoxOpen title="Products" size={24} />
            <span className="text-xs mt-1">Products</span>
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <Link
            to="write"
            className="flex flex-col items-center text-white hover:text-yellow-500 cursor-pointer"
          >
            <PiArticle title="Products" size={24} />
            <span className="text-xs mt-1">Articles</span>
          </Link>
        </div>

        {/* Logout Button at Bottom */}
        <div onClick={logout} className="mb-4 flex flex-col items-center text-white hover:text-yellow-500 cursor-pointer">
          <FaSignOutAlt title="Logout" size={24} />
          <span className="text-xs mt-1" >Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
