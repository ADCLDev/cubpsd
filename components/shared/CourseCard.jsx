import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course, category }) => {
  return (
    <Link href={`/static_courses/${category.id}/course/${course.course_id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-0">
        {/* Image Section */}
        <div className="relative h-56 w-full bg-blue-900">
          <Image
            src={course.logo_image}
            alt={course.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
          <div className="absolute top-4 left-4">
            <p className="text-yellow-400 text-lg font-medium mb-2">
              {category.name}
            </p>
            <h2 className="text-white text-2xl font-bold">
              {course.name}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Rating and Stats */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-orange-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="flex gap-4">
              <div className="px-4 py-1 rounded-full border border-gray-200 text-sm">
                {course.reviews} Review
              </div>
              <div className="px-4 py-1 rounded-full border border-gray-200 text-sm">
                {course.students} Student
              </div>
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between pt-4">
            <div className="space-y-1">
              <p className="text-gray-600 text-sm">Course Fee:</p>
              <p className="text-xl font-bold">
                {course.fee}
              </p>
            </div>
            <button className="px-6 py-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors duration-300 font-medium">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;