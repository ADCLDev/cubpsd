import React from 'react';

const OurAchievement = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Remarkable Achievements</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg" alt="Achievement" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Empowering Minds, Shaping Futures</h2>
            <p className="text-gray-600 mb-4">
              At Revolution Tech Zone, we take pride in our students' remarkable achievements and the impact they make in the ever-evolving tech industry. Our cutting-edge curriculum, industry-experienced faculty, and unwavering commitment to excellence have propelled our students to new heights.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Top placements in renowned tech companies worldwide</li>
              <li>Numerous national and international hackathon winners</li>
              <li>Groundbreaking research and innovative projects</li>
              <li>Recognized as a premier institution for tech education</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievement;