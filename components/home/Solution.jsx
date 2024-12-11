import Image from "next/image";

const Solution = () => {
    return (
        <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">

            <div className="flex flex-col gap-5 text-center">
                <h1 className="text-4xl font-bold">Exclusive Solutions that Set Us Apart</h1>
                <p className="font-normal text-base"> We aim to maximize your learning experience by offering you more resources that will enable you to grow infinitely.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-5">

                
      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        <Image width={500} height={500} className="w-1/4" src="/new/hourglass.png" alt="" />
        <p className="font-bold text-xl py-5">Lifetime Support</p>
        <p className="text-base">Our top teaching institution offers unparalleled Lifetime Support, providing career services, continuing education opportunities, a vibrant alumni network, and counseling for personal growth throughout your entire journey, ensuring lifelong success and empowerment beyond your degree.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        
        <Image width={500} height={500} className="w-1/4" src='/new/promotion.png'sz alt="" />
        <p className="font-bold text-xl py-5">Career Placement Support</p>
        <p className="text-base">Our top-tier Career Placement Support fuels student success through personalized career guidance, industry networking opportunities, mock interviews with feedback, resume building assistance, and strategic partnerships with leading employers actively recruiting our talented graduates.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        <Image width={500} height={500} className="w-1/4" src="/new/webinar.png" alt="" />
        <p className="font-bold text-xl py-5">Class Videos</p>
        <p className="text-base">Our institution provides comprehensive Class Videos, allowing students to revisit lectures, discussions, and demonstrations at any time. These high-quality video recordings, available online, facilitate flexible learning, reinforce key concepts, and enable effective review for exams and assignments, ensuring academic mastery.</p>
      </div>

            </div>

        </div>
    );
};

export default Solution;