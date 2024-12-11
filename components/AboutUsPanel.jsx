"use client";

import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { FaHistory } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";

const AboutUsPanel = () => {
  const [goal, setGoal] = useState(true);
  const [vision, setVision] = useState(false);
  const [history, setHistory] = useState(false);
  const [culture, setCulture] = useState(false);
  const [values, setValues] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="flex flex-col basis-1/4 gap-5">
        <p
          onClick={() => {
            setGoal(true);
            setVision(false);
            setHistory(false);
            setCulture(false);
            setValues(false);
          }}
          className={goal ? "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer active" : "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer"}
        >
          <span className="text-red-500 text-2xl py-3">
            <FaRegEye />
          </span>{" "}
          Our Goal
        </p>
        <p
          onClick={() => {
            setGoal(false);
            setVision(true);
            setHistory(false);
            setCulture(false);
            setValues(false);
          }}
          className={vision ? "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer active" : "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer"}
        >
          <span className="text-red-500 text-2xl py-3">
            <TbTargetArrow />
          </span>{" "}
          Our Vision
        </p>
        <p
          onClick={() => {
            setGoal(false);
            setVision(false);
            setHistory(true);
            setCulture(false);
            setValues(false);
          }}
          className={history ? "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer active" : "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer"}
        >
          <span className="text-red-500 text-2xl py-3">
            <FaHistory />
          </span>{" "}
          History
        </p>
        <p
          onClick={() => {
            setGoal(false);
            setVision(false);
            setHistory(false);
            setCulture(true);
            setValues(false);
          }}
          className={culture ? "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer active" : "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer"}
        >
          <span className="text-red-500 text-2xl py-3">
            <FaPeopleGroup />
          </span>{" "}
          Culture
        </p>
        <p
          onClick={() => {
            setGoal(false);
            setVision(false);
            setHistory(false);
            setCulture(false);
            setValues(true);
          }}
          className={values ? "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer active" : "flex items-center gap-2 font-semibold px-10 hover:cursor-pointer"}
        >
          <span className="text-red-500 text-2xl py-3">
            <BiSolidDonateHeart />
          </span>{" "}
          Our Values
        </p>
      </div>
      <div className="basis-3/4 flex flex-col justify-center">
  
  <div className={goal ? "flex flex-col lg:flex-row justify-center" : "hidden"}>
    <div className="space-y-7">
      <h1 className="text-[#CF0000] font-bold text-5xl">Our Goal</h1>
    <p className="text-[#605f62]">
      Our goal is to be one of the best IT training institutes in the world by providing quality training to learners.
    </p>
    </div>
    <img src="https://www.creativeitinstitute.com/images/cit_statement/cit_statement_banner1663040124.jpg" alt="" />
    
  </div>

  <div className={vision ? "flex flex-col lg:flex-row justify-center" : "hidden"}>
    <div className="space-y-7">
      <h1 className="text-[#CF0000] font-bold text-5xl">Our Vision</h1>
    <p className="text-[#605f62]">
      We aspire to empower the young generation providing quality training on trendy topics.
    </p>
    </div>
    <img src="https://www.creativeitinstitute.com/images/cit_statement/cit_statement_banner1663040686.jpg" alt="" />
    
  </div>

  <div className={history ? "flex flex-col lg:flex-row justify-center" : "hidden"}>
    <div className="space-y-7">
    <h1 className="text-[#CF0000] font-bold text-5xl">History</h1>
    <p className="text-[#605f62]">
      The journey of Revolution Tech Zone Institute started with the Advisor MD Hassanuzaman. Doing comprehensive courses, we aim to have many students become self-reliant in this long journey of the institution. Many of the students became entrepreneurs and created job opportunities for others. Revolution Tech Zone Institute also collaborated with the projects of the Ministry of ICT and gained the recognition as the best IT Institute in our country.
    </p>      
    </div>
    <img src="https://www.creativeitinstitute.com/images/cit_statement/cit_statement_banner1663040729.jpg" alt="" />

  </div>

  <div className={culture ? "flex flex-col lg:flex-row justify-center" : "hidden"}>
    <div className="space-y-7">
    <h1 className="text-[#CF0000] font-bold text-5xl">Culture</h1>
    <p className="text-[#605f62]">
      Many people from different backgrounds work in our organization. Revolution Tech Zone has a diverse culture that appreciates the labor and talent of all the members. Anyone irrespective of their gender, class, and education would find a great work environment where everyone works in harmony with love and respect.
    </p>      
    </div>
    <img src="https://www.creativeitinstitute.com/images/cit_statement/cit_statement_banner1663040776.jpg" alt="" />

  </div>

  <div className={values ? "flex flex-col lg:flex-row justify-center" : "hidden"}>
    <div className="space-y-7">
    <h1 className="text-[#CF0000] font-bold text-5xl">Our Value</h1>
    <p className="text-[#605f62]">
      Regular practice: We encourage students to practice the lessons regularly. At any time, for any need, you will be able to reach us.
    </p>      
    </div>
    <img src="https://www.creativeitinstitute.com/images/cit_statement/cit_statement_banner1663054747.jpg" alt="" />

  </div>

</div>

    </div>
  );
};

export default AboutUsPanel;
