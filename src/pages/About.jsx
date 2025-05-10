import React from 'react';

const About = () => {
  return (
    <div className="px-6 md:px-20 py-12 bg-gray-100 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div>
          <img
            src="https://images.pexels.com/photos/3633850/pexels-photo-3633850.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="About Odour"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">About Odour</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
            At <span className="font-semibold text-black">Odour</span>, we believe that fragrance is more than just a scent — it's a reflection of your soul.
            Our carefully curated perfumes are designed to capture emotion, personality, and unforgettable memories in every spray.
            Whether you're discovering your signature scent or gifting something special, Odour is here to make every moment fragrant.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
