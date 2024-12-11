import React from "react";

const MeetOurTeam = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-10">Meet our Team</h1>
      <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <TeamMember
          name="Rumia Rahman"
          designation="Founder"
          image="/new/Advisor.jpg"
        />
        <TeamMember
          name="William Lucas"
          designation="Advisor"
          image="/new/Advisor.jpg"
        />
        <TeamMember
          name="Mr Abdullah"
          designation="CEO"
          image="/new/Advisor.jpg"
        />
      </div>
    </div>
  );
};

const TeamMember = ({ name, designation, image }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default MeetOurTeam;