// app/pgd/page.jsx
import Image from 'next/image';
import { CalendarDays, Clock } from 'lucide-react';

const courses = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    batch: "3rd Batch",
    startDate: "28 Feb, 2025",
    duration: "144 hrs",
    price: "42,900",
    image: "https://img.freepik.com/free-vector/cartoon-graphic-design-landing-page_52683-70881.jpg?ga=GA1.1.724683099.1731423728&semt=ais_hybrid",
    alt: "Graphic design workspace with creative tools and digital tablet"
  },
  {
    id: "data-science",
    title: "Data Science",
    batch: "7th Batch",
    startDate: "28 Feb, 2025",
    duration: "144 hrs",
    price: "42,900",
    image: "https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18141.jpg?ga=GA1.1.724683099.1731423728&semt=ais_hybrid",
    alt: "Data science visualization dashboard with analytics"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    batch: "5th Batch",
    startDate: "28 Feb, 2025",
    duration: "144 hrs",
    price: "42,900",
    image: "https://img.freepik.com/free-photo/map-lying-wooden-table_53876-105723.jpg?ga=GA1.1.724683099.1731423728&semt=ais_hybrid",
    alt: "Digital marketing strategy meeting with analytics displays"
  },
  {
    id: "supply-chain",
    title: "Supply Chain Management",
    batch: "7th Batch",
    startDate: "28 Feb, 2025",
    duration: "144 hrs",
    price: "42,900",
    image: "https://img.freepik.com/free-vector/company-specializing-foreign-products-import-goods-services-import-goods-services-international-sales-process-concept-pinkish-coral-bluevector-isolated-illustration_335657-1793.jpg?ga=GA1.1.724683099.1731423728&semt=ais_hybrid",
    alt: "Modern warehouse management and logistics operations"
  }
];

const CourseCard = ({ course }) => {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition-all duration-300 group bg-white">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image}
          alt={course.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/50 to-transparent flex items-end">
          <h3 className="text-xl font-semibold text-white p-6">
            Post Graduate Diploma (PGD) in {course.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-lg font-semibold mb-4 text-gray-800">
          Post Graduate Diploma (PGD) in {course.title}({course.batch})
        </h4>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarDays className="w-5 h-5" />
            <span>Starts: {course.startDate}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span>Duration: {course.duration}</span>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="text-lg font-semibold text-wine-900">
            TK. {course.price}
          </div>
          <button className="btn btn-primary text-white px-6 py-2 rounded-md transition-colors duration-300">
            Enrol Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function PGDPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-wine-900/5 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-wine-900">
            Post Graduate Diploma (PGD)
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Advance your career with our specialized postgraduate diploma programs designed for working professionals.
          </p>
        </div>
      </div>

      {/* Courses Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}