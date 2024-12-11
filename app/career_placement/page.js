import React from 'react';

const CareerPlacement = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Launching Successful Careers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://imageio.forbes.com/specials-images/imageserve/6459402c5e13e406939c02fa/Teamwork-friendship-hiking-help-each-other-trust-assistance-silhouette-in-mountains-/960x0.jpg?format=jpg&width=960" alt="Achievement" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Gateway to Tech Excellence</h2>
            <p className="text-gray-600 mb-4">
            At Revolution Tech Zone, we understand the importance of bridging the gap between education and industry. Our dedicated career placement team works tirelessly to ensure our students are well-prepared for the dynamic tech landscape, providing them with the necessary skills, guidance, and opportunities to excel.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
            <li>Personalized career counseling and mentorship</li>
              <li>Regular industry-academia collaborations and workshops</li>
              <li>Exclusive access to job fairs and recruitment drives</li>
              <li>Internship and project opportunities with leading tech firms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPlacement;