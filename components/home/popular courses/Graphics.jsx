import CourseCard from "@/components/shared/CourseCard";


const Graphics = () => {
  const courses = [
    {
      image: 'https://www.creativeitinstitute.com/images/course/course_1665409737.jpg',
      title: 'Professional Graphic Design',
      review: '9,000',
      student: '18,000',
      fee: '50,000'
    },
    {
      image: 'https://www.creativeitinstitute.com/images/course/course_1662552115.jpg',
      title: 'Motion Graphic',
      review: '4,160',
      student: '5,200',
      fee: '50,000'
    },

 {
      image: 'https://www.creativeitinstitute.com/images/course/course_1662637290.jpg',
      title: 'UX/UI Design',
      review: '2,800',
      student: '3,500',
      fee: '50,000'
    },

     {
      image: 'https://www.creativeitinstitute.com/images/course/course_1682738408.jpg',
      title: 'Digital Image Editing',
      review: '4,000',
      student: '5,000',
      fee: '20,000'
    },

 {
      image: 'https://www.creativeitinstitute.com/images/course/course_1662639286.jpg',
      title: 'Adobe Photoshop',
      review: '520',
      student: '650',
      fee: '16,000'
    },
 {
      image: 'https://www.creativeitinstitute.com/images/course/course_1663052023.jpg',
      title: 'Adobe Illustrator',
      review: '400',
      student: '500',
      fee: '16,000'
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

export default Graphics;