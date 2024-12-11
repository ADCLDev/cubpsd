'use client';
import BlogDetail from '../../../components/BlogDetail';
import { usePathname } from 'next/navigation';

const BlogPostPage = () => {
  const path = usePathname().split('/').pop();

  const post1 = {
    title: 'The Future of Artificial Intelligence',
    author: 'John Doe',
    date: 'February 1st, 2024',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtnTK4XRF2CFt7lzGFpentwB8S49EVXoykU2cN7-7eQ&s',
    content: `The future of Artificial Intelligence (AI) is both exciting and transformative. AI is rapidly advancing, with machines becoming increasingly capable of performing tasks that once required human intelligence. From self-driving cars to advanced medical diagnostics, AI is poised to revolutionize numerous industries. However, as AI becomes more sophisticated, ethical concerns arise regarding its impact on employment, privacy, and potential biases. As we embrace the benefits of AI, we must also address these challenges to ensure responsible development and deployment. Ultimately, AI's future hinges on striking a balance between technological progress and ethical considerations, paving the way for a world where humans and machines coexist harmoniously.`,
  };

  const post2 = {
    title: 'cybersecurity-trends-in-2024',
    author: 'Jane Smith',
    date: 'April 15, 2024',
    image: 'https://miro.medium.com/v2/resize:fit:700/1*s1qtXIzST3ucygmuMQWICQ.png',
    content: `As the digital landscape continues to evolve, cybersecurity threats are becoming increasingly sophisticated and persistent. In 2024, we can anticipate a heightened focus on proactive defense strategies and advanced technologies to combat emerging cyber risks. The rise of Artificial Intelligence (AI) and Machine Learning (ML) will play a crucial role in enhancing threat detection, enabling real-time response, and automating security processes. Additionally, the adoption of Zero Trust Architecture and Cloud Security Posture Management (CSPM) will gain momentum, ensuring robust access controls and secure cloud migrations. Quantum computing will also emerge as a game-changer, necessitating the development of quantum-resistant encryption algorithms. Furthermore, the integration of Cyber Threat Intelligence (CTI) and Security Orchestration, Automation, and Response (SOAR) will streamline incident response and enhance overall cybersecurity resilience.`,
  };

  return (
    <>
      {path === 'The Future of Artificial Intelligence' ? (
        <BlogDetail post={post1} />
      ) : path === 'cybersecurity-trends-in-2024' ? (
        <BlogDetail post={post2} />
      ) : (
        <div>Post not found</div>
      )}
    </>
  );
};

export default BlogPostPage;