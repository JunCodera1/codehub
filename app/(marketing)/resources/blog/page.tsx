// app/(marketing)/resources/blog/page.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../../components/ui/header';

// Mock data for blog posts
const BLOG_POSTS = [
  {
    id: 1,
    title: 'How to Master React Hooks: A Complete Guide for 2025',
    excerpt: 'Learn how to use React Hooks effectively in your projects with practical examples and best practices.',
    author: 'John Doe',
    authorImage: '/api/placeholder/80/80',
    date: 'April 5, 2025',
    readTime: '8 min read',
    image: '/api/placeholder/800/420',
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 2,
    title: 'Next.js 14 Performance Optimization Techniques You Need to Know',
    excerpt: 'Boost your Next.js application performance with these proven optimization strategies for better user experience.',
    author: 'Emily Chen',
    authorImage: '/api/placeholder/80/80',
    date: 'April 2, 2025',
    readTime: '10 min read',
    image: '/api/placeholder/800/420',
    tags: ['Next.js', 'Performance', 'Web Development']
  },
  {
    id: 3,
    title: 'TypeScript Advanced Patterns: Generics, Utility Types, and More',
    excerpt: 'Take your TypeScript skills to the next level by mastering advanced type patterns used by professional developers.',
    author: 'Michael Smith',
    authorImage: '/api/placeholder/80/80',
    date: 'March 28, 2025',
    readTime: '12 min read',
    image: '/api/placeholder/800/420',
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: 4,
    title: 'Building a Modern CI/CD Pipeline with GitHub Actions and AWS',
    excerpt: 'Learn how to create a robust continuous integration and deployment pipeline for your projects using GitHub Actions and AWS services.',
    author: 'Sarah Johnson',
    authorImage: '/api/placeholder/80/80',
    date: 'March 25, 2025',
    readTime: '15 min read',
    image: '/api/placeholder/800/420',
    tags: ['DevOps', 'AWS', 'GitHub']
  },
  {
    id: 5,
    title: 'Getting Started with Machine Learning for Web Developers',
    excerpt: 'A practical introduction to machine learning concepts and tools that web developers can use to enhance their applications.',
    author: 'David Wilson',
    authorImage: '/api/placeholder/80/80',
    date: 'March 20, 2025',
    readTime: '18 min read',
    image: '/api/placeholder/800/420',
    tags: ['Machine Learning', 'AI', 'Web Development']
  },
  {
    id: 6,
    title: 'CSS Grid and Flexbox: Modern Layout Techniques Compared',
    excerpt: 'When to use CSS Grid vs Flexbox: A comprehensive comparison with practical examples for responsive web design.',
    author: 'Lisa Brown',
    authorImage: '/api/placeholder/80/80',
    date: 'March 18, 2025',
    readTime: '8 min read',
    image: '/api/placeholder/800/420',
    tags: ['CSS', 'Web Design', 'Frontend']
  },
  {
    id: 7,
    title: 'Mastering Node.js Streams for Better Performance',
    excerpt: 'How to handle large data efficiently with Node.js streams and improve your application performance.',
    author: 'Kevin Zhang',
    authorImage: '/api/placeholder/80/80',
    date: 'March 15, 2025',
    readTime: '11 min read',
    image: '/api/placeholder/800/420',
    tags: ['Node.js', 'JavaScript', 'Backend']
  },
  {
    id: 8,
    title: 'GraphQL vs REST: Choosing the Right API Strategy for Your Project',
    excerpt: 'A detailed comparison of GraphQL and REST APIs with guidelines on when to use each approach.',
    author: 'Rachel Lee',
    authorImage: '/api/placeholder/80/80',
    date: 'March 12, 2025',
    readTime: '13 min read',
    image: '/api/placeholder/800/420',
    tags: ['API', 'GraphQL', 'REST']
  },
];

// List of tags for filtering
const TAGS = [
  'All',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Web Development',
  'Backend',
  'Frontend',
  'DevOps',
  'AWS',
  'CSS',
  'Machine Learning',
  'API',
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  
  // Filter blog posts based on search term and tag
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <Header/>
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-10 flex flex-col md:flex-row justify-between gap-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              className="absolute right-3 top-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <button
                  key={tag}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedTag === tag 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <Link href={`/resources/blog/${post.id}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                      <img 
                        src={post.authorImage} 
                        alt={post.author} 
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.author}</div>
                        <div className="flex text-xs text-gray-500">
                          <span>{post.date}</span>
                          <span className="mx-1">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg 
              className="mx-auto h-12 w-12 text-gray-400"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No articles found</h3>
            <p className="mt-1 text-gray-500">Try changing your search term or selecting a different tag.</p>
          </div>
        )}
        
        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="mt-12">
            <nav className="flex justify-center">
              <ul className="flex space-x-1">
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 border border-gray-300 rounded-l-md hover:bg-gray-100 flex items-center"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 hover:bg-gray-100"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 hover:bg-gray-100"
                  >
                    3
                  </a>
                </li>
                <li>
                  <span className="px-4 py-2 border border-gray-300 text-gray-500">...</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 hover:bg-gray-100"
                  >
                    8
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-3 py-2 border border-gray-300 rounded-r-md hover:bg-gray-100 flex items-center"
                  >
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
        
        {/* CTA Banner */}
        <div className="mt-16 bg-blue-700 rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold mb-2">Join our community</h2>
              <p className="text-blue-100">
                Get access to our free resources, connect with other developers, and stay updated with the latest in programming.
              </p>
            </div>
            <div>
              <button className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}