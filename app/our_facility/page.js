import React from 'react';

const OurFacility = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Cutting-Edge Facility</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://eis-fms.com/wp-content/uploads/2019/09/EIS-News-4-ways-good-facilities-management-can-help-your-business.jpg" alt="Facility" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Designed for Immersive Learning</h2>
            <p className="text-gray-600 mb-4">
              At Revolution Tech Zone, we believe in providing a state-of-the-art learning environment that fosters innovation and excellence. Our facilities are meticulously designed to cater to the diverse needs of our students, offering the perfect blend of modern technology and collaborative spaces.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Cutting-edge computer labs equipped with the latest hardware and software</li>
              <li>Dedicated cybersecurity and networking labs for hands-on training</li>
              <li>Cozy study lounges and breakout areas for group projects</li>
              <li>High-speed internet and modern classroom technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacility;