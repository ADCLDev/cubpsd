import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  const posts = [
    // Add your blog post data here
    { title: 'The Future of Artificial Intelligence', author: 'John Doe', date: 'February 1, 2024', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtnTK4XRF2CFt7lzGFpentwB8S49EVXoykU2cN7-7eQ&s', excerpt: 'Explore the exciting advancements in AI technology and their potential impact on various industries.' },
    { title: 'Cybersecurity Trends in 2024', author: 'Jane Smith', date: 'April 15, 2024', image: 'https://miro.medium.com/v2/resize:fit:700/1*s1qtXIzST3ucygmuMQWICQ.png', excerpt: 'Stay ahead of the curve by learning about the latest cybersecurity threats and best practices.Learn & understand best insights to look out for in 2024.' },
    // ...
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex items-center">
                    <Image
                      src="/author-avatar.jpg"
                      alt="Author Avatar"
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    <span className="text-gray-600">{post.author}</span>
                    <span className="text-gray-500 mx-2">|</span>
                    <span className="text-gray-600">{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;