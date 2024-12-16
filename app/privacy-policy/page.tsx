import React from 'react';

const PrivacyPolicyPage = () => {
  const policies = [
    {
      id: "information-collection",
      title: "Information Collection",
      content: "We collect information that you provide directly to us, including when you register for our courses, complete a form, or communicate with us. This may include your name, email address, phone number, educational background, and professional experience."
    },
    {
      id: "information-usage",
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process your course registrations, communicate with you about our programs, and send you technical notices and support messages."
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, conducting our business, or serving our students."
    },
    {
      id: "data-security",
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-wine-900/5 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-wine-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            At Professional Skill Development Center, we take your privacy seriously. 
            This policy describes how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      {/* Policy Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Last Updated Banner */}
          <div className="bg-wine-900 text-white px-6 py-3">
            <p className="text-sm">Last Updated: February 15, 2024</p>
          </div>

          {/* Policy Sections */}
          <div className="p-6 space-y-8">
            {policies.map((policy) => (
              <section key={policy.id} className="space-y-3">
                <h2 className="text-2xl font-semibold text-wine-900">
                  {policy.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {policy.content}
                </p>
              </section>
            ))}

            {/* Contact Section */}
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-wine-900">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-700">Email: contact@cubspdc.com</p>
                <p className="text-gray-700">Phone: 01974955226</p>
                <p className="text-gray-700">Address: House-36, Road-5, Dhanmondi, Dhaka-1205</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;