'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
import categoryList from '../../../../../components/StaticData/CourseList';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import AdmissionStatic from '../../../../../components/staticDesigns/AdmissionStatic';
import Image from "next/image";

const page = () => {
    const course_id = usePathname().split('/').pop();
    const category_id = usePathname().split('/')[2];
    const category = categoryList.find(category => category.id === parseInt(category_id));
    const course = category.courses.find(course => course.course_id === parseInt(course_id));

  return (
    <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">
        <section className="py-10">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex flex-col gap-8 basis-1/2">
                    <p className="font-bold text-xl text-red-700 text-center lg:text-left">{course.slogan}</p>
                    <h1 className="font-bold text-4xl text-center lg:text-left">{course.course_title}</h1>
                    <div className="flex flex-col lg:flex-row gap-4 justify-center">
                        <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                            <p className="font-normal text-base">Duration</p>
                            <p className="font-bold text-2xl">{course.duration}</p>
                        </div>
                        <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                            <p className="font-normal text-base">Lectures</p>
                            <p className="font-bold text-2xl">{course.lecture}</p>
                        </div>
                        <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                            <p className="font-normal text-base">Projects</p>
                            <p className="font-bold text-2xl">{course.projects}</p>
                        </div>
                    </div>
                    <p>{course.course_details}</p>
                    {/* <div className="flex gap-10">
                        <div><button className="btn btn-error">Admission</button></div>
                        <div><button className="btn btn-error">Join Free Seminar</button></div>
                    </div> */}
                    <div className="flex items-center gap-3">
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="badge badge-outline h-[3rem] w-[7rem] text-nowrap">{course.reviews} Review</div> 
                        <div className="badge badge-outline h-[3rem] w-[7rem] text-nowrap">{course.students} Student</div> 
                    </div>
                </div>
                <div className="basis-1/2">
                    <Image width={500} height={500} className="w-full rounded-3xl" src={course.logo_image} alt="" />
                </div>
            </div>
        </section>
        <section>

            <div className="flex flex-col lg:flex-row gap-10 py-10">

                <div className="basis-3/5">

                    <div className="flex flex-col gap-5 py-10">
                        <p className="font-bold text-5xl">Course Overview</p>
                        <p className="font-normal text-base">{course.course_overview}</p>
                    </div>

                    <div className="flex flex-col gap-5 py-10">
                        <h1 className="font-bold text-3xl">Course Curriculum</h1>
                        <div>
                            <ul className="grid grid-cols-2 gap-3">
                            {course?.course_curriculum && course?.course_curriculum.map((curriculum, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span><MdCheckBoxOutlineBlank /></span>{curriculum}
                                </li>
                            ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 py-10">
                        <h1 className="font-bold text-3xl">Softwares You&apos;ll Learn</h1>
                        <div>
                            <ul className="grid grid-cols-2 gap-3">
                                {course?.software && course?.software.map((software_data, index) => (
                                    <li key={index} className="flex items-center gap-5">
                                        <span><Image width={50} height={50} src={software_data.icon} alt={software_data.name} /></span>{software_data.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 py-10">
                        <h1 className="font-bold text-3xl">This course is Designed for</h1>
                        <div>
                            <ul className="grid grid-cols-2 gap-3">
                                {course?.design_for && course?.design_for.map((design, index) => (
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <Image width={500} height={500} className="w-1/2 mx-auto" src={design.icon} alt={design.name} />
                                            <p>Anyone interested to learn freelancing</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 py-10">
                        <p className="font-bold text-3xl">Career Opportunities</p>
                        <div>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                {course?.career_oppertunity && course?.career_oppertunity.map((career, index) => (
                                    <li key={index}>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3 gap-3">
                                            <Image width={50} height={50} className="w-1/2 mx-auto" src={career.icon} alt={career.name} />
                                            <p className="text-base">{career.description}</p>
                                        </div>
                                    </li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 py-10">
                        <h1 className="font-bold text-3xl">Open Job Positions</h1>
                        <div>
                            <ul className="grid grid-cols-2 gap-3 font-bold text-xl">
                                {course?.job_position && course?.job_position.map((job, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <span><FaRegCircle /></span>{job.name}
                                    </li>  
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 py-10">
                        <h1 className="font-bold text-5xl py-5">Exclusive Solutions That Set Us Apart</h1>
                        <div>
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-bold text-xl">
                        {course?.exclusive_service && course?.exclusive_service.map((service, index) => (
                                    <li key={index}>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <Image width={50} height={50} className="w-1/4" src={service.icon} alt={service.name} />
                                            <p className="font-bold text-xl py-5">{service.name}</p>
                                            <p className="text-base">{service.description}</p>
                                        </div>
                                    </li>  
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <AdmissionStatic course={course}></AdmissionStatic>   
            </div>
        </section>
    </div>
  )
}

export default page