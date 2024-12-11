import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course, category }) => {
  return (
    <>
      <Link href={`/static_courses/${category.id}/course/${course.course_id}`}>
        <div className="card w-[22rem] bg-red-600 text-white shadow-xl">
          <figure>
            <Image
              width={500}
              height={500}
              src={course.logo_image}
              alt={`${course.name}`}
            />
          </figure>
          <div className="card-body gap-4">
            <p className="text-sm text-yellow-500">{category.name}</p>
            <h3 className="font-bold">Course Fee: {course.fee} </h3>
            <h1 className="font-bold text-xl">{course.name}</h1>
            <div className="flex items-center gap-3">
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
              <p ></p>
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {/* <a>View Details</a>
                    <a>Enroll</a> */}
                    {/* <button style={{display: 'flex'}} className="btn btn-outline btn-info">
                        View Details
                    </button>
                    
                      <a  style={{display: 'flex'}}  className="btn btn-outline btn-error">
                          Enroll
                      </a> */}
                    
                    {/* <a href='https://docs.google.com/forms/d/e/1FAIpQLSfKrradQ3wN8U38QjHopuHbPP9596CGZZiP-dFNAOweETs-YA/viewform?usp=sf_link' className="btn btn-outline btn-error">
                    Enroll Now
                    </a> */}
                    {/* <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfKrradQ3wN8U38QjHopuHbPP9596CGZZiP-dFNAOweETs-YA/viewform?usp=sf_link'>
                      <button className="btn btn-outline btn-error">
                          Enroll Now
                      </button>
                    </Link> */}
                    {/* <Link href='https://docs.google.com/forms/d/e/1FAIpQLSfKrradQ3wN8U38QjHopuHbPP9596CGZZiP-dFNAOweETs-YA/viewform?usp=sf_link'>
                      <button className="btn btn-outline btn-error">
                        Enroll Now
                      </button>
                    </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;