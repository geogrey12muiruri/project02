import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { motion } from "framer-motion"; 
import ambulanceIcon from "../../assets/icons8-neurology-78.png";
import flaskIcon from "../../assets/icons8-cardiology-55.png";
import kidneyIcon from "../../assets/icons8-kidney-64.png";
import cancerIcon from "../../assets/icons8-cancer-ribbon-48.png";
import CategoryCard from "../../components/category/CategoryCard"; 
import pregnancyIcon from "../../assets/icons8-pregnancy-48.png";
import pediatricsImage from "../../assets/icons8-community-48.png"
const doctors = [
  { name: "Dr. John Doe", image: "doctor1.jpg", profession: "Cardiologist" },
  { name: "Dr. Jane Smith", image: "doctor2.jpg", profession: "Dermatologist" },
  { name: "Dr. Michael Johnson", image: "doctor3.jpg", profession: "Orthopedic Surgeon" },
  { name: "Dr. Sarah Williams", image: "doctor4.jpg", profession: "Pediatrician" },
  { name: "Dr. David Brown", image: "doctor5.jpg", profession: "Psychiatrist" },

  // Add more doctors as needed
];

const services = [
  { title: "Ambulance Service", description: "24/7 emergency ambulance services" },
  { title: "Lab Tests", description: "Diagnostic lab tests for accurate results" },
  { title: "Radiology Services", description: "Advanced radiology imaging services" },
  { title: "Pediatric Care", description: "Specialized care for children" },
  { title: "Dental Services", description: "Comprehensive dental care" },
  { title: "Mental Health Counseling", description: "Professional counseling services" },
  // Add more services as needed
];

const categories= [
  { icon: ambulanceIcon, description: "", title: "Nephrology"},
  { icon: flaskIcon, description: "" , title: "Cardiology"},
  {icon: kidneyIcon, description: "", title: "Neurology"},
  {icon: pregnancyIcon, description: "", title: "Gynacology"},
  {icon: cancerIcon, description: "", title: "Oncology"},
  {icon: pediatricsImage, description: "", title: "Pediatrics"}


  // Add more services with their respective icons
];

const PatientPage = ({authUser}) => {
  return (
    <div className="container mx-auto p-4">
      
        <div className="bg-gray-800 border border-gray-800 shadow-lg flex space-between rounded-2xl w-full sticky z-50 p-4">
          <h1 className="text-2xl font-bold text-white">Welcome,{authUser.username} Our Doctors are available!</h1>      
        
        </div>
  
      {/*  */}
      <div className="flex items-center mb-4 p-8 space-between">
  <div className="flex-1">
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-2 border border-cyan-400 rounded-lg focus:outline-none mr-4"
    />
  </div>
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 ">
    <FaSearch className="text-white" />
  </button>
</div>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-white font-mono mb-2 text-center">Categories </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Category Cards */}
          {categories.map((category, index) => (
  <CategoryCard key={index} icon={category.icon} title={category.title} description={category.description} />
))}
          
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-white mb-2 font-bold font-mono text-center">Services Offered</h2>
        <div className="grid grid-cols-2 gap-4 box-shadow: rgba(0, 0, 0, 0.2) 0px 60px 40px -7px;">
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on load
            transition={{ duration: 0.5 }} // Animation duration
            className="rounded-lg shadow-md p-4 bg-lime-200"
          >
            <h3 className="text-lg font-bold text-white">Service Title</h3>
            <p className="text-gray-600 mt-2">Service Description</p>
          </motion.div>
          {/* Repeat the motion.div for each service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on load
            transition={{ duration: 0.5 }} // Animation duration
            className="rounded-lg shadow-md p-4 bg-emerald-500"
          >
            <h3 className="text-lg font-bold text-blue-600">Service Title</h3>
            <p className="text-gray-600 mt-2">Service Description</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on load
            transition={{ duration: 0.5 }} // Animation duration
            className="rounded-lg shadow-md p-4 bg-pink-700"
          >
            <h3 className="text-lg font-bold text-blue-600">Service Title</h3>
            <p className="text-gray-600 mt-2">Service Description</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on load
            transition={{ duration: 0.5 }} // Animation duration
            className="rounded-lg shadow-md p-4 bg-rose-200"
          >
            <h3 className="text-lg font-bold text-blue-600">Service Title</h3>
            <p className="text-gray-600 mt-2">Service Description</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on load
            transition={{ duration: 0.5 }} // Animation duration
            className="rounded-lg shadow-md p-4 bg-fuchsia-600"
          >
            <h3 className="text-lg font-bold text-blue-600">Service Title</h3>
            <p className="text-gray-600 mt-2">Service Description</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation on load
            transition={{ duration: 0.5 }} // Animation duration
            className="rounded-lg shadow-md p-4 bg-cyan-400"
          >
            <h3 className="text-lg font-bold text-blue-600">Service Title</h3>
            <p className="text-gray-600 mt-2">Service Description</p>
          </motion.div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">Top Doctors</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} name={doctor.name} image={doctor.image} profession={doctor.profession} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DoctorCard = ({ name, image, profession }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-2" />
      <h3 className="text-lg font-bold text-blue-600">{name}</h3>
      <p className="text-gray-600 mt-2">{profession}</p>
    </div>
  )
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  )
};

export default PatientPage;