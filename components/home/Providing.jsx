import Image from "next/image";


const Providing = () => {
    return (
        <div className="flex flex-col gap-5 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-10">
            
            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20 py-10 lg:p-10 bg-wine-600 text-white rounded-3xl">
    <div className="w-full lg:w-1/3">
        <Image width={500} height={500} className="p-3" src="https://images-dom.prod.aws.idp-connect.com/commimg/myhotcourses/blog/post/myhc_69446.jpg" alt="" />
    </div>
    <div className="flex flex-col gap-3 w-full p-5 lg:p-0 lg:w-2/3">
        <h1 className="font-bold text-3xl">We offer project-based learning programs.</h1>
        <p className="text-base font-normal">We believe in skills gained through practical projects. 
        A great number of people struggle to start their career in the tech field for only having conceptual knowledge. 
        Revolution Tech Zone makes sure to provide hands-on training to prepare you for job markets. 
        Our course module contains projects that are designed to track your progress. 
        During the course, you will be able to make a portfolio yourself to showcase your practical skills to the potential employers.</p>
    </div>
</div>


<div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20 py-10 lg:p-10 bg-wine-800 text-white rounded-3xl">

    <div className="flex flex-col gap-3 w-full p-5 lg:p-0 lg:w-1/2">
        <h1 className="font-bold text-3xl lg:text-5xl">Renowned IT Experts At your Service</h1>
        <p className="text-base font-normal">The goal of Revolution Tech Zone's endeavors is to produce IT specialists. To ensure a better future in today's fast-paced, technologically-dependent society, you must acquire IT skills. We work really hard to develop IT specialists who can successfully apply and work in a variety of areas.</p>
        <div className="flex gap-3">
            <button className="btn bg-black text-white hover:bg-slate-700">Browse Course </button>
        </div>
                   
                    

    </div>

    <div className="w-full lg:w-1/2">
        <Image width={500} height={500} className="p-3" src="https://i.guim.co.uk/img/media/a3766b9d303332d4a77d09b7fa3a29e5104d41c4/0_328_4920_2952/master/4920.jpg?width=465&dpr=1&s=none" alt="" />
    </div>
</div>
        </div>
    );
};

export default Providing;