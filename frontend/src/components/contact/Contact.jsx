import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { HiOutlinePhone, HiOutlineMail} from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import './contact.css';

const ContactSection = () => {
  return (
    <div className="bg-teal-50 text-slate-950 py-4 px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Social Media Links */}
      <div className="flex justify-between w-full md:w-auto">
        <a href="#" className="social-link hover:text-blue-500 transition duration-300 transform hover:-translate-y-1">
          <FaFacebook className="text-blue-500 text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="https://x.com/MedplusCloud?t=nmVy5C-GbOnxIJLkO38A8w&s=09" className="social-link hover:text-blue-500 transition duration-300 transform hover:-translate-y-1">
          <FaTwitterSquare className="text-slate-900 text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="https://www.instagram.com/medplus.cloud?utm_source=qr&igsh=YXc2bXk4OXBxenE3" className="social-link hover:text-pink-500 transition duration-300 transform hover:-translate-y-1">
          <FaInstagram className="text-pink-500 text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
        <a href="https://www.linkedin.com/in/medplus-health-34b635308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link hover:text-blue-400 transition duration-300 transform hover:-translate-y-1">
          <FaLinkedin className="text-blue-400 text-lg" />
        </a>
        <div className="border-r border-blue-600 h-6 mx-6"></div>
      </div>
      {/* Contact Info */}
      {/* Middle: Contact Information */}
      <div className="flex items-center mb-4 md:mb-0">
        <HiOutlinePhone className="text-blue-500 text-lg mr-2" />
        <span className="mr-4 font-mono font-bold">0792755901</span>
      </div>

      {/* Right side: Email and Search Icon */}
      <div className="flex items-center">
        <HiOutlineMail className="text-blue-500 text-lg mr-2" />
        <span className="mr-4 font-mono font-bold">info@medplus.cloud</span>
        <RiSearchLine className="text-blue-500 text-lg hover:text-gray-400 transition duration-300" />
      </div>
    </div>
  );
};

export default ContactSection;
