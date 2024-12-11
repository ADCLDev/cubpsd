import categoryList from "@/components/StaticData/CourseList";
import CategoryListCard from "@/components/staticDesigns/CategoryListCard";
import CategoryCoursesStatic from "@/components/staticDesigns/CategoryCoursesStatic";

const AllCourses = () => {

  return (
    <div className="mx-2 lg:mx-auto lg:max-w-4xl xl:max-w-7xl py-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-red-700 font-extrabold text-3xl">All Courses</h1>
        <p className="text-base font-normal lg:w-3/4">
          We offer all the trendy courses that are in demand in the global market. In addition, you are getting lab facilities where high-end computers with the required configuration are ready to facilitate your learning. After class, you can practice the topic in our labs to grow your skills. The courses are designed to make you confident throughout the learning journey with Revolution Tech Zone.
        </p>
      </div>
      {/* Category List Card */}
      <CategoryListCard />
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-3xl font-bold">Admission Is Going On</h1>
        <p className="w-3/4 mx-auto">
          We have designed our course list with the demanding skills in the local and global market. From the list, you can pick any online or offline course according to your preference.
        </p>
      </div>
      {categoryList.length > 0 ? (
        categoryList.map((category, index) =>
          category.courses.length !== 0 && (
            <div key={index} className="mb-10">
              <CategoryCoursesStatic
                type='all'
                category={category}
                courses={category.courses}
              />
            </div>
          )
        )
      ) : (
        <div>No Free Courses found.</div>
      )}
    </div>
  );
};

export default AllCourses;