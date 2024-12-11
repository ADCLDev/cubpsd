import HomeCourses from "@/components/home/HomeCourses";
import Image from "next/image";

const Courses = () => {
  const categoryDetails = `We provide all of the hottest courses that are in demand on the international scene. Furthermore, you will have online lab facilities that are ready to support your education. You can hone your abilities on the subject in our labs after class. You will gain confidence from the courses as you progress through your education with Revolution Tech Zone.`;

  const categoryList = [
    { id: 1, name: 'Graphic & Multimedia', image: 'https://www.creativeitinstitute.com/images/department/gd.png' },
    { id: 2, name: 'Web & Software', image: 'https://www.creativeitinstitute.com/images/department/wd.png' },
  ];

  return (
    <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-red-700 font-extrabold text-3xl">Courses</h1>
        <p className="text-base font-normal lg:w-3/4">{categoryDetails}</p>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-10 py-10">
        {/* List of Categories */}
        {categoryList.map((category) => (
          <div key={category.id} className="flex justify-center items-center text-center">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image width={50} height={50} src={category.image} alt={category.name} />
              </div>
              <div>
                <h3>{category.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Admission Is Going On</h1>
        <p className="w-3/4 mx-auto">
          We have designed our course list with the demanding skills in the local and global market. From the list, you can pick any online or offline course according to your preference.
        </p>
      </div>

      <div className="py-10">
        <HomeCourses />
      </div>
    </div>
  );
};

export default Courses;