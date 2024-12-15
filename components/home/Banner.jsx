import Image from "next/image";
import Link from "next/link";
import { IoLibrary, IoPlanet } from "react-icons/io5";
import YouTubeVideo from "./YoutubeVideo";

const Banner = () => {


    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center py-10 gap-5 mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">

                <div className="flex flex-col gap-3">

                    <p className="flex gap-3 text-lg font-bold"><span><Image src="/courses_image/reward.png" alt="" width={25} height={25} /></span>Inspiring Applied Knowledge</p>
                    <h1 className="font-bold text-5xl">Conquer the Tech World <br></br>Become an  <span className="font-extrabold text-5xl text-red-500">Expert</span></h1>
                    {/* <h1 className="font-extrabold text-5xl text-[#F5B800]"></h1> */}
                    <p className="font-normal text-base lg:text-xl">Center for Professional Skill Development is prepared to improve your learning experience with knowledgeable mentors and up-to-date curriculum, all with the goal of transforming labor into assets. Select the course of your choice.</p>
                    <div className="flex gap-5">
                        <Link href='/category/all'><div><button className="btn btn-xl w-[200px] text-xl bg-red-600 hover:bg-red-700 text-white"><span className="text-xl hidden md:flex"><IoLibrary /></span>Courses </button></div></Link>
                        {/* <Link href='/free_category/all'><div><button className="btn bg-[#F5B800] hover:bg-[#ebbc31]"><span className="text-xl hidden md:flex"><IoPlanet /></span>Free Courses </button></div>  </Link>                   */}
                    </div>

                    <div className="flex items-center gap-2">
                        <div><p className="font-semibold text-l">Powered by Canadian University of Bangladesh</p></div>
                    </div>


                </div>

                <div>

                {/* <YouTubeVideo></YouTubeVideo>  */}


                </div>

            </div>
        </div>
    );
};

export default Banner;