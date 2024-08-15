import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'https://i.ibb.co/dGkdRd0/img2.webp',
      title: 'Silver Aluminum Smart Watch',
      description: 'White Sport Band & 30% Off First Order',
    },
    {
      image: 'https://i.ibb.co/7S6T9F7/img3.webp',
      title: 'Premium Smartphone',
      description: 'Get the latest model with great offers',
    },
    {
      image: 'https://i.ibb.co/yyLVxz9/img5.webp',
      title: 'Bluetooth Headphones',
      description: 'Experience the best sound quality',
    },
    {
      image: 'https://i.ibb.co/g41BtPd/image3.webp',
      title: 'Gaming Console',
      description: 'Play the latest games with our console',
    },
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="min-w-full h-[500px] flex items-center justify-center bg-cover bg-left-top"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="text-left  w-11/12  p-8 lg:p-12  ">
              {/* <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 text-left ">{slide.title}</h2> */}
              {/* <p className="mt-4 text-lg lg:text-xl text-gray-600">{slide.description}</p> */}
              {/* <button className="mt-6 px-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500">
                Shop Now
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 ml-11 bg-red-500  text-white rounded-full shadow-lg"
      >
        &#9664;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 mr-11 bg-red-500   text-white rounded-full shadow-lg"
      >
        &#9654;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-yellow-400' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
