import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#B01737] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About PSDC</h3>
            <p className="text-sm">
              Professional Skill Development Center at Canadian University of Bangladesh 
              is dedicated to advancing careers through specialized education and 
              practical training programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-gray-200">Home</a></li>
              <li><a href="/about_us" className="hover:text-gray-200">About Us</a></li>
              <li><a href="/learning_path" className="hover:text-gray-200">Learning Paths</a></li>
              <li><a href="/career_advice" className="hover:text-gray-200">Career Advice</a></li>
              <li><a href="/contact_us" className="hover:text-gray-200">Contact Us</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><a href="/category/all" className="hover:text-gray-200">Skill Development</a></li>
              <li><a href="/pgd" className="hover:text-gray-200">Post Graduate Diploma</a></li>
              <li><a href="/freelancing" className="hover:text-gray-200">Freelancing</a></li>
              <li><a href="/job_placement" className="hover:text-gray-200">Workplacement</a></li>
              <li><a href="/internship" className="hover:text-gray-200">Internship</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:01974955226">01974955226</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:contact@cubspdc.com">contact@cubspdc.com</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                House-36, Road-5, Dhanmondi, Dhaka-1205
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 Professional Skill Development Center. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="/privacy-policy" className="hover:text-gray-200">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-gray-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;