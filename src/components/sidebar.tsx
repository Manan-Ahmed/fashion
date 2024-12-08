"use client"
import React from 'react';
import { FiDelete } from "react-icons/fi";


import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        onClick={toggleSidebar}
        className="rounded-md lg:hidden "
      >
        ☰ 
      </button>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-all duration-300 transform ${
          isOpen &&  '-translate-x-full'
        } lg:translate-x-0 lg:relative lg:bg-transparent lg:opacity-100 lg:block lg:w-64`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleSidebar}
            className="text-white  rounded-md"
          >
            <FiDelete size={30}/>

          </button>
        </div>

        <div className="flex flex-col items-center mt-10">
          <Link href="#" className="text-white py-2 px-4 hover:bg-gray-700 w-full text-center">
            Home
          </Link>
          <Link href="#" className="text-white py-2 px-4 hover:bg-gray-700 w-full text-center">
            Sana Safinaz
          </Link>
          <Link href="#" className="text-white py-2 px-4 hover:bg-gray-700 w-full text-center">
            Contact
          </Link>
          <Link href="#" className="text-white py-2 px-4 hover:bg-gray-700 w-full text-center">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
