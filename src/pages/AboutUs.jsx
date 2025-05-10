import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Learn more about our company, mission, and values.
          </p>
        </section>

         {/* New Section with Image and Text */}
<section className="mt-12 px-4 md:px-10 py-8">
  <div className="grid grid-cols-1 md:grid-cols-2 ">
    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src="https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="About Odour"
        className="w-100 h-100 object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Text Section */}
    <div className="flex flex-col justify-center px-4 md:px-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Our Values
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        At Odour, we strive to provide not just exceptional fragrances, but
        also an experience that uplifts the soul. Our values are rooted in
        creativity, sustainability, and a passion for delivering the finest
        quality in everything we do.
      </p>
    </div>
  </div>
</section>




        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8 mt-10">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">COO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-64 text-center">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">CTO</p>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default AboutUs;
