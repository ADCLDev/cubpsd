import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="fixed top-32 md:top-48 z-50 right-0 flex-col items-center space-x-4 p-4 text-base md:text-3xl">
      <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.youtube.com/channel/your-profile" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
  );
}