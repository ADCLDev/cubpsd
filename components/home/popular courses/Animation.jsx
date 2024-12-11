import CourseCard from "@/components/shared/CourseCard";

const Animation = () => {
  const courses = [
    {
        image: 'https://www.creativeitinstitute.com/images/course/course_1662866125.jpg',
        title: 'Professional 3D Animation',
        review: '3,200',
        student: '4,000',
        fee: '50,000'
      },
   {
        image: 'https://www.creativeitinstitute.com/images/course/course_1663052405.jpg',
        title: 'Interior and Exterior Design',
        review: '2,000',
        student: '2,500',
        fee: '50,000'
      },
   {
        image: 'https://www.creativeitinstitute.com/images/course/course_1663052435.jpg',
        title: '3D Product Modeling',
        review: '136',
        student: '170',
        fee: '20,000'
      },
   {
        image: 'https://www.creativeitinstitute.com/images/course/course_1663052460.jpg',
        title: '3D Floor Plan',
        review: '120',
        student: '150',
        fee: '20,000'
      },
  ]
    return (
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

            {
                courses.map((course,ind)=>(<CourseCard key={ind} course={course}></CourseCard>))
            }
    </div>
    );
};

export default Animation;