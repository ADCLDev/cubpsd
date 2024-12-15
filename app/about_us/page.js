import AboutUsPanel from '../../components/AboutUsPanel'
import Counts from '../../components/home/Counts'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {

  return (
    <div className='mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-10 space-y-20'>
      <div className='space-y-7'>
        <h1 className='text-[#CF0000] font-bold text-5xl'>Mission & Vision</h1>
        <p className='text-[#605f62]'>Revolution Tech Zone is an institution where empowering the community with an excellent standard of learning is what we desire. We endeavour for the continuous improvement of our leaders who will work to construct a better future. We will continue to share our knowledge for contributing to the success of individuals and to serve society in the best interest.</p>
      </div>
      <div className='space-y-7'>
        <h1 className='font-bold text-5xl'>Our Milestone</h1>
        <p className='text-[#605f62]'>Thousands of prosperous independent contractors call Revolution Tech Zone Institute home in Bangladesh. Over the years, we have trained and developed freelancers. We help students discover the professions they want in order to become financially stable and we foster youthful talent by sharing knowledge.</p>
      </div>
      
      <div>
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20 py-10 lg:p-10 rounded-3xl">

<div className="flex flex-col gap-3 w-full">
    <h1 className="font-bold text-3xl lg:text-5xl">World-Renowned IT Expert.</h1>
    <p className="text-base font-normal">Revolution Tech Zone has been working toward the goal of producing IT experts. To ensure a better future in today's fast-paced, technologically-dependent society, you must acquire IT skills. Through unwavering commitment, we aspire to produce IT professionals who want to work across various industries.</p>
    <div className="flex gap-3">
        <div><button className="btn btn-error">Browse Course </button></div>            
    </div>                
</div>

<div className="w-full lg:w-1/2">
    <Image width={500} height={500} className="p-3" src="https://www.creativeitinstitute.com/images/featured/02_default.jpg" alt="" />
</div>
</div>
      </div>
      <Counts></Counts>
      <AboutUsPanel></AboutUsPanel>

     <div className='space-y-14'>
      <h1 className='font-bold text-4xl'>Training Departments</h1>

      <div className='grid grid-cols-3  lg:grid-cols-5 gap-8'>
      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/gd.png" alt="" />
    </div>
    <div>
      <h3>Graphic &amp; Multimedia</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/wd.png" alt="" />
    </div>
    <div>
    <h3>Web &amp; Software</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/dm.png" alt="" />
    </div>
    <div>
    <h3>Digital Marketing</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/cy.png" alt="" />
    </div>
    <div>
    <h3>Cyber Security</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/net.png" alt="" />
    </div>
    <div>
    <h3>Networking Technology</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/ve.png" alt="" />
    </div>
    <div>
    <h3>Film &amp; Media</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/lg.png" alt="" />
    </div>
    <div>
    <h3>English Language</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/robot.png" alt="" />
    </div>
    <div>
    <h3>Robotics &amp; Automation</h3>
    </div>
  </div>
</div>



      <div className="flex justify-center items-center">
  <div className="flex flex-col items-center">
    <div className="mb-4">
      <Image width={50} height={50} src="https://www.creativeitinstitute.com/images/department/aws.png" alt="" />
    </div>
    <div>
    <h3>Cloud Computing</h3>
    </div>
  </div>
</div>
      </div>

     </div>

    </div>
  )
}

export default AboutUs
