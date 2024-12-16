import React from 'react';

const TermsOfServicePage = () => {
  const terms = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: "By accessing and using the Professional Skill Development Center (PSDC) website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services."
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: "You must be at least 18 years of age and possess the legal authority to enter into these terms. By enrolling in our courses, you confirm that you meet the minimum educational requirements specified for each program."
    },
    {
      id: "course-enrollment",
      title: "Course Enrollment and Payment",
      content: "Course fees must be paid in full before accessing course materials. All payments are non-refundable unless otherwise specified. PSDC reserves the right to modify course fees and payment terms at any time with prior notice to enrolled students."
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      content: "All course materials, including but not limited to videos, documents, and presentations, are the intellectual property of PSDC. You may not reproduce, distribute, or create derivative works without our explicit permission."
    },
    {
      id: "student-conduct",
      title: "Student Conduct",
      content: "Students are expected to maintain professional behavior during all interactions. Any form of harassment, discrimination, or disruptive behavior may result in immediate termination of your enrollment without refund."
    },
    {
      id: "modifications",
      title: "Modifications to Service",
      content: "PSDC reserves the right to modify or discontinue any course or service with appropriate notice to enrolled students. We will ensure minimal disruption to ongoing courses and provide suitable alternatives where necessary."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-wine-900/5 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-wine-900">
            Terms of Service
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before accessing or using the services of Professional Skill Development Center.
          </p>
        </div>
      </div>

      {/* Terms Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Last Updated Banner */}
          <div className="bg-wine-900 text-white px-6 py-3">
            <p className="text-sm">Last Updated: February 15, 2024</p>
          </div>

          {/* Terms Sections */}
          <div className="p-6 space-y-8">
            {/* Introduction */}
            <div className="bg-gray-50 p-6 rounded-md">
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service govern your use of the Professional Skill Development Center website and services. 
                By using our services, you agree to these terms in their entirety.
              </p>
            </div>

            {terms.map((term) => (
              <section key={term.id} className="space-y-3">
                <h2 className="text-2xl font-semibold text-wine-900">
                  {term.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {term.content}
                </p>
              </section>
            ))}

            {/* Contact Section */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-wine-900">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700">Professional Skill Development Center</p>
                <p className="text-gray-700">Email: contact@cubspdc.com</p>
                <p className="text-gray-700">Phone: 01974955226</p>
                <p className="text-gray-700">Address: House-36, Road-5, Dhanmondi, Dhaka-1205</p>
              </div>
            </section>

            {/* Agreement Notice */}
            <div className="bg-gray-50 p-6 rounded-md mt-8">
              <p className="text-gray-700 leading-relaxed text-center">
                By using our services, you acknowledge that you have read and understood these Terms of Service 
                and agree to be bound by them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;