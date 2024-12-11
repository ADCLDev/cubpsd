import CourseCardStatic from "@/components/shared/CourseCardStatic";

const CategoryCoursesStatic = ({ type, category, courses }) => {
  return (
    <div>
      {type==='all' ? (<h1 className="font-bold text-3xl">Courses on: {category.name}</h1>): <h1 className="font-bold text-3xl">Courses</h1>  }
      
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {Array.isArray(courses) && courses.length > 0 ? (
          courses.map((course, ind) => (
            <CourseCardStatic key={ind} course={course} category={category} />
          ))
        ) : (
          <p>No free courses found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCoursesStatic;