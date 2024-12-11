'use client';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
import Admission from "./Admission";
import Image from "next/image";
import { usePathname } from "next/navigation";


const CourseDetail = () => {



    return (
        <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl">


            <section className="py-10">

                <div className="flex flex-col lg:flex-row items-center gap-10">

                    <div className="flex flex-col gap-8 basis-1/2">
                        <p className="font-bold text-xl text-red-700 text-center lg:text-left">Turn Your Passion into an Artistic Profession</p>
                        <h1 className="font-bold text-4xl text-center lg:text-left">Professional Graphic Design</h1>
                        <div className="flex flex-col lg:flex-row gap-4 justify-center">
                            <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                                <p className="font-normal text-base">Duration</p>
                                <p className="font-bold text-2xl">6 Month</p>
                            </div>
                            <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                                <p className="font-normal text-base">Lectures</p>
                                <p className="font-bold text-2xl">48</p>
                            </div>
                            <div className="text-center h-20 w-36 flex flex-col justify-center border rounded-3xl mx-auto">
                                <p className="font-normal text-base">Projects</p>
                                <p className="font-bold text-2xl">30+</p>
                            </div>
                        </div>
                        <p>Considering the growing demand for visual content, marketers are promoting their products through graphical ideas nowadays. The increasing need for graphic designers has unlocked many opportunities for the people who prefer working independently. A study shows, all the companies prioritize their visual acceptance, even a small company spends up to 500 dollars to create a perfect logo. If you are passionate about making designs, this updated Graphic Design course is for you.</p>
                        <div className="flex gap-10">
                            <div><button className="btn btn-error">Admission</button></div>
                            <div><button className="btn btn-error">Join Free Seminar</button></div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div className="badge badge-outline h-[3rem] w-[7rem] text-nowrap">14,000 Review</div> 
                            <div className="badge badge-outline h-[3rem] w-[7rem] text-nowrap">18,000 Student</div> 
                        </div>

                    </div>

                    <div className="basis-1/2">
                        <Image width={500} height={500} className="w-full rounded-3xl" src="https://www.creativeitinstitute.com/images/course/course_1665409737.jpg" alt="" />
                    </div>

                </div>

            </section>

            <section>

                <div className="flex flex-col lg:flex-row gap-10 py-10">

                    <div className="basis-3/5">

                        <div className="flex flex-col gap-5 py-10">
                            <p className="font-bold text-5xl">Course Overview</p>
                            <p className="font-normal text-base">Our updated curriculum, along with the project-based work, prepares you to be a Professional Graphic Designer. The course module covers a wide range of topics, through which you learn how to use digital tools to create unique designs. Using Adobe Photoshop or Adobe Illustrator, you will be able to design a variety of things including banners, t-shirts, products, etc during the course. The lab facilities that we provide make you competent to perform better in the global marketplace. So, if you are interested to explore the field of innovative designs, enroll in this course now. </p>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-3xl">Course Curriculum</h1>
                            <div>
                                <ul className="grid grid-cols-2 gap-3">
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Professional Presentation</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Invoice Template Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Brochure Layout</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Desk & Wall Calendar Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Certificate Template Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Resume & Cover Letter Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Image Clipping</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Banner / Poster Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Web Banner Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Raster To Vector</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Letterhead Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Logo Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Product Packaging</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>T-Shirt Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Landscape Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Neck Joint</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Magazine Design</li>
                                    <li className="flex items-center gap-2"><span><MdCheckBoxOutlineBlank /></span>Web UI Design</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-3xl">Softwares You&apos;ll Learn</h1>
                            <div>
                                <ul className="grid grid-cols-2 gap-3">
                                    <li className="flex items-center gap-5"><span><Image width={50} height={50} src="https://www.creativeitinstitute.com/images/option/option1662293000.png" alt="" /></span>Adobe InDesign</li>
                                    <li className="flex items-center gap-5"><span><Image width={50} height={50} src="https://www.creativeitinstitute.com/images/option/option1662293041.png" alt="" /></span>Adobe Photoshop</li>
                                    <li className="flex items-center gap-5"><span><Image width={50} height={50} src="https://www.creativeitinstitute.com/images/option/option1662293072.png" alt="" /></span>Adobe XD</li>
                                    <li className="flex items-center gap-5"><span><Image width={50} height={50} src="https://www.creativeitinstitute.com/images/option/option1662293128.png" alt="" /></span>Adobe Illustrator</li>
                                    <li className="flex items-center gap-5"><span><Image width={50} height={50} src="https://www.creativeitinstitute.com/images/option/option1662369221.png" alt="" /></span>Microsoft Office PowerPoint</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-3xl">This course is Designed for</h1>
                            <div>
                                <ul className="grid grid-cols-2 gap-3">
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <Image width={500} height={500} className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371418.png" alt="" />
                                            <p>Anyone interested to learn freelancing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <Image width={500} height={500} className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371439.png" alt="" />
                                            <p>Job seekers</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <Image width={500} height={500} className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371456.png" alt="" />
                                            <p>Students</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <Image width={500} height={500} className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371472.png" alt="" />
                                            <p>Homemakers</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <Image width={500} height={500} className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371491.png" alt="" />
                                            <p>Anyone interested to learn Graphics Design</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col justify-center text-center border rounded-3xl h-52">
                                            <Image width={500} height={500} className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662371522.png" alt="" />
                                            <p>Immigrants</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <p className="font-bold text-3xl">Career Opportunities</p>
                            <div>
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3 gap-3">
                                            <Image width={50} height={50} className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662446690.png" alt="" />
                                            <p className="text-base">A graphic designer plays a vital role in promoting companies by creating appealing logos and posters. With the growing numbers of companies worldwide, the demand for professional graphic designers has surged in recent days. You will be able to get a remote job in or outside our country after completing the advanced graphic design course. Our career placement department will help you in this regard.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3 gap-3">
                                            <Image width={50} height={50} className="w-1/2 mx-auto" src="https://www.creativeitinstitute.com/images/option/option1662446732.png" alt="" />
                                            <p className="text-base">A study shows, almost  57% of people employed in the art and design industries are freelancers. The number is increasing with time as more people are opting for an independent career with a good earning. The global marketplaces like Fiverr, Upwork, Legit offer loads of projects on graphic design. You can also start a freelancing career being a skilled designer.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-3xl">Open Job Positions</h1>
                            <div>
                                <ul className="grid grid-cols-2 gap-3 font-bold text-xl">
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Graphics Designer</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Creative Executive</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Creative Director</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Logo Designer</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Photoshop Artist</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>Brand Promoter</li>
                                    <li className="flex items-center gap-2"><span><FaRegCircle /></span>UI Designer And Related Occupations</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 py-10">
                            <h1 className="font-bold text-5xl py-5">Exclusive Solutions That Set Us Apart</h1>
                            <div>
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-bold text-xl">
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <Image width={50} height={50} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372090.png" alt="" />
                                            <p className="font-bold text-xl py-5">Online Live Batch</p>
                                            <p className="text-base">Do you live abroad or prefer a remote learning process? We have launched online batches with all the offline facilities so that you can keep up with the technical advancement of today’s world. Now you can enroll in any course from anywhere, at any time.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <Image width={50} height={50} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372132.png" alt="" />
                                            <p className="font-bold text-xl py-5">Review Class</p>
                                            <p className="text-base">Do you face difficulty when you review the previous concepts? To ensure the best learning outcome, we arrange review classes that help our students overcome any problem in their skill development process. You will be able to understand the topics that you find complex under the close supervision of our skilled mentors.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <Image width={50} height={50} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372155.png" alt="" />
                                            <p className="font-bold text-xl py-5">Lifetime Support</p>
                                            <p className="text-base">Creative IT and its students share a lifetime bond. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing your course. Our expert support team ensures 24 hours service to all of our students. The personalized feedback that you receive from us, helps you grow, every day.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <Image width={50} height={50} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372191.png" alt="" />
                                            <p className="font-bold text-xl py-5">Practice lab support</p>
                                            <p className="text-base">We offer our students practice lab support so that they can complete their courseworks feasibly at any time. The uninterrupted learning environment that we ensure, helps the student gather practical knowledge in an efficient manner.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <Image width={50} height={50} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372211.png" alt="" />
                                            <p className="font-bold text-xl py-5">Class Videos</p>
                                            <p className="text-base">No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <Image width={50} height={50} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1662372262.png" alt="" />
                                            <p className="font-bold text-xl py-5">Career Placement Support</p>
                                            <p className="text-base">Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager.  So far this department has helped more than 16000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 66% in 2023.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
                                            <Image width={50} height={50} className="w-1/4" src="https://www.creativeitinstitute.com/images/option/option1665139532.png" alt="" />
                                            <p className="font-bold text-xl py-5">Virtual Internship</p>
                                            <p className="text-base">Without in-hand experience, no one can be competent in any skill. Practical work experience is a must have for better career opportunities. CIT offers its students virtual internship opportunities, where they can work under the supervision of industry experts. The online internships qualify to be as effective as offline work experience. Hence, you can also complete our internship at our office. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>


                    </div>

                    <Admission></Admission>   

                </div>




            </section>
        


        </div>
    );
};

export default CourseDetail;