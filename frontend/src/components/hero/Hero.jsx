import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AutoplayCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionStyle, setTransitionStyle] = useState('slide-left'); // Initial transition style
  const slides = [
    {
      img: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1714993049/image3_b7pxgc.jpg",
      title: "Welcome to Medplus Health",
      subtitle: "Bridging Health Care"
    },
    {
      img: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1714993048/image2_l4qa43.jpg",
      title: "Join a Network of Medical Professionals",
      subtitle: "Connect, Collaborate and share knowledge to enhance overall health"
    },
    // Add more slides as needed
  ];

  const handleNextSlide = () => {
    const styles = ['slide-left', 'slide-right', 'fade']; // Array of transition styles
    const randomStyle = styles[Math.floor(Math.random() * styles.length)]; // Choose random style
    setTransitionStyle(randomStyle);
    const nextSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextSlide);
  };

  useEffect(() => {
    const timeoutId = setTimeout(handleNextSlide, 3000); // Adjust this for desired duration

    return () => clearTimeout(timeoutId);
  }, [currentSlide]); // Run effect on currentSlide change

  return (
    <div className="carousel w-full h-[300px] bg-blend-over-lay relative"> {/* Set desired height */}
      
      <div className="carousel-track relative overflow-hidden w-full h-full"> {/* Maintain full height within carousel */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item absolute top-0 left-0 w-full h-full transition duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            } ${transitionStyle}`}
          >
            <img src={slide.img} className="w-full h-full object-cover" alt={slide.title} />
            <div className="absolute flex justify-center items-center w-full h-full bg-black bg-opacity-50">
              <div className="text-white text-center">
                <h1 className="text-xl text-white font-sans font-bold text-transparent bg-clip-text animate-gradient">{slide.title}</h1>
                <p className="text-sm ">{slide.subtitle}</p>
                <div className="mt-4 flex justify-center"> {/* Updated to flex justify-center */}
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded mr-2">
                    Learn More
                  </button>
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Dots */}
      <div className="flex justify-center mt-4 absolute bottom-0 w-full"> {/* Ensure dots are at the bottom */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    
    </div>
  );
};

export default AutoplayCarousel;
