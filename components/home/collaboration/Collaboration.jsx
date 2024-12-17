"use client"

import { useState } from "react";
import Working from "./Working";
import Member from "./Member";
import Concern from "./Concern";

const Collaboration = () => {

    const [working,setWorking] = useState(true);
    const [member,setMember] = useState(false);
    const [concern,setConcern] = useState(false);

    return (
        <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-10">

            <h1 className="font-bold text-5xl text-center">700+ Companies Are Connected to Us</h1>

            <div className="flex gap-5 justify-center py-10">

<div><button onClick={()=>{
setWorking(true);
setMember(false);
setConcern(false);
}} className={working ? `bg-wine-800 text-white font-bold py-2 px-4 rounded`: `bg-slate-200 text-black font-bold py-2 px-4 rounded`}>Working With</button></div>

<div><button onClick={()=>{
    setMember(true);
    setWorking(false);
    setConcern(false);
}} className={member ? `bg-wine-800 text-white font-bold py-2 px-4 rounded`: `bg-slate-200 text-black font-bold py-2 px-4 rounded`}>Members Of</button></div>

<div><button onClick={()=>{
    setConcern(true);
    setWorking(false);
    setMember(false);
}} className={concern ? `bg-wine-800 text-white font-bold py-2 px-4 rounded`: `bg-slate-200 text-black font-bold py-2 px-4 rounded`}>Our Concerns</button></div>


</div>

            {working && <Working></Working>}
            {member && <Member></Member>}
            {concern && <Concern></Concern>}

        </div>
    );
};

export default Collaboration;