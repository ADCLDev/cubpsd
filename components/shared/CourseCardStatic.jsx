import Image from "next/image";
import Link from "next/link";

const CourseCardStatic = ({ course, category }) => {
  return (
    <div className="card w-[22rem] bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <Link href={`/static_courses/${category.id}/course/${course.course_id}`}>
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={course.logo_image}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/50 to-transparent flex items-end">
            <h3 className="text-xl font-semibold text-white p-6">
              {course.course_title}
            </h3>
          </div>
        </div>
      </Link>
      <div className="card-body gap-4">
        <p className="text-sm text-yellow-500">{category.name}</p>
        <h1 className="font-bold text-xl">{course.course_title}</h1>
        <div className="flex items-center gap-4">
          <div className="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <div className="badge badge-outline h-[3rem] w-[20rem] text-nowrap">
            {course.reviews} Review
          </div>
          <div className="badge badge-outline h-[3rem] w-[20rem] text-nowrap">
            {course.students} Student
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <p className="font-bold">Course Fee: {course.fee} BDT</p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfKrradQ3wN8U38QjHopuHbPP9596CGZZiP-dFNAOweETs-YA/viewform?usp=sf_link"
            className="btn btn-outline btn-error"
          >
            <span>Enroll Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCardStatic;