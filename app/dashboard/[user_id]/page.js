'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';


// { user, enrolledCourses, classSchedule }
const UserDashboard = () => {
  const router = useRouter();
  // get user_id from /dashboard/user_id
  const user_id = usePathname().split('/').pop();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-indigo-600 py-6 px-8">
            <h1 className="text-white text-3xl font-bold">User Dashboard</h1>
          </div>
          <div className="py-8 px-8">
            <div className="flex items-center mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                <Image
                  src='https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg'
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Demo User</h2>
                <p className="text-gray-600">Demo Email</p>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Enrolled Courses</h3>
              <p className="text-gray-600">You are not enrolled in any courses yet.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Class Schedule</h3>
              <p className="text-gray-600">You don't have any classes scheduled yet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;