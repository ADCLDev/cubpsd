import CourseCard from "@/components/shared/CourseCard";

const Web = () => {
  const courses = [
    {
      image: 'https://www.creativeitinstitute.com/images/course/course_1663052056.jpg',
      title: 'Web Development',
      review: '1,520',
      student: '1,900',
      fee: '50,000'
    },
 {
      image: 'https://www.creativeitinstitute.com/images/course/course_1662795698.jpg',
      title: 'MERN Stack Development',
      review: '680',
      student: '850',
      fee: '95,000'
    },
 {
      image: 'https://www.creativeitinstitute.com/images/course/course_1673929467.jpg',
      title: 'App Development With Kotlin',
      review: '1,220',
      student: '2,400',
      fee: '50,000'
    },
 {
      image: 'https://www.creativeitinstitute.com/images/course/course_1662801340.jpg',
      title: 'Python Django',
      review: '256',
      student: '320',
      fee: '30,000'
    },
 {
      image: 'https://www.creativeitinstitute.com/images/course/course_1662804460.jpg',
      title: 'Python Machine Learning',
      review: '896',
      student: '1,120',
      fee: '40,000'
    },
 {
      image: 'https://www.creativeitinstitute.com/images/course/course_1674371266.jpg',
      title: 'Front-End Development with React',
      review: '850',
      student: '1,200',
      fee: '60,000'
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

export default Web;