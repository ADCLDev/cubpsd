"use client"

import { Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import Image from "next/image";

const Admission = () => {

    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    // const [course, setCourse] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setEmail('');
        setName('');
        setPhone('');
        // setCourse('');
      }
  return (
    <div className="basis-3/5 relative">
                        <div className="bg-rose-100 p-10 flex flex-col gap-5 sticky top-16 xl:top-20 rounded-3xl">
                            <p className="font-bold text-3xl">Admission Is Going On</p>
                            <p className="font-normal text-base">Enroll now to any of our Offline (On- Campus) or Online (Live Class) courses as per your suitable time.</p>
                            <div className="h-44 flex flex-col justify-center gap-3 pl-7 xl:w-96 rounded-3xl bg-red-600">
                                <p className="text-white font-bold text-xl">Course Fee Offline</p>
                                <p className="text-white font-bold text-2xl">BDT 50,000</p>
                                <div>
                                    <button onClick={() => setOpenModal(true)} className="bg-white text-red-700 p-2 w-48 rounded-xl">Enroll Now</button>
                                    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <Image width={50} height={50} className="mx-auto" src="https://www.creativeitinstitute.com/logo.png" alt="" />
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white text-center">Give valid Information</h3>
            <p className="font-normal text-base text-center">After fill-up form our team contact you</p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your name" />
              </div>
              <TextInput
                id="name"
                placeholder="Jane Doe"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your Phone" />
              </div>
              <TextInput
                id="phone"
                placeholder="+880xxxxxxxxxx"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="course" value="Your Wanted Course" />
              </div>
              {/* <TextInput
                id="phone"
                placeholder="+880xxxxxxxxxx"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              /> */}
                <select className="text-black input input-bordered xl:w-full" id="service" name="service">
                <option value="">Professional Graphic Design</option>
                <option value="">Motion Graphic</option>
                <option value="">UX/UI Design</option>
                <option value="">Digital Image Editing</option>
                <option value="">Adobe Photoshop</option>
                <option value="">Adobe Illustrator</option>
                <option value="">Web Development</option>
                <option value="">MERN Stack Development</option>
                <option value="">App Development With Kotlin</option>
                <option value="">Python Django</option>
                <option value="">Python Machine Learning</option>
                <option value="">Front-End Development with React</option>
                <option value="">Professional 3D Animation</option>
                <option value="">Interior and Exterior Design</option>
                <option value="">3D Floor Plan</option>
              </select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="onlineOffline" value="Take Your Course" />
              </div>
              <div className="flex items-center gap-5">
                              <input type="radio" id="option1" name="options" value="option1"/>
<label htmlFor="option1">Offline</label>

<input type="radio" id="option2" name="options" value="option2"/>
<label htmlFor="option2">Online</label>
              </div>

              <div className="flex justify-center py-10">
                <input className="border p-2 rounded-lg bg-red-500 text-white px-10" type="submit" value="Submit" />
              </div>

            </div>
          </div>
        </Modal.Body>
      </Modal>
                                </div>
                            </div>
                            <div className="h-44 flex flex-col justify-center gap-3 pl-7 xl:w-96 rounded-3xl bg-red-600">
                                <p className="text-white font-bold text-xl">Course Fee Online</p>
                                <p className="text-white font-bold text-2xl">BDT 20,000</p>
                                <div><button onClick={() => setOpenModal(true)} className="bg-white text-red-700 p-2 w-48 rounded-xl">Enroll Now</button></div>
                            </div>                            
                        </div>
                    </div>
  )
}

export default Admission
