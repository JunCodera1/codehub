'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/ui/header';

export default function CatalogPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Danh sách các khóa học mẫu
  const courses = [
    {
      id: 1,
      title: 'Learn Python 3.12 Fundamentals',
      description: 'Learn the basics of Python 3.12, one of the most powerful, versatile, and in-demand programming languages today.',
      level: 'Beginner',
      duration: '23 hours',
      instructor: 'Angela Yu',
      rating: 4.8,
      students: 245783,
      image: '/images/python-basics.jpg',
      hasCertificate: true,
      tags: ['python', 'programming', 'beginners'],
      category: 'programming'
    },
    {
      id: 2,
      title: 'Python for Data Science and Machine Learning',
      description: 'Master Python for data analysis, visualization, machine learning, and deep learning with TensorFlow & PyTorch.',
      level: 'Intermediate',
      duration: '38 hours',
      instructor: 'Jose Portilla',
      rating: 4.7,
      students: 189542,
      image: '/images/python-data-science.jpg',
      hasCertificate: true,
      tags: ['python', 'data science', 'machine learning'],
      category: 'data-science'
    },
    {
      id: 3,
      title: 'Advanced Python: Design Patterns & Best Practices',
      description: 'Take your Python skills to the next level with advanced concepts, design patterns, and professional best practices.',
      level: 'Advanced',
      duration: '18 hours',
      instructor: 'Ardit Sulce',
      rating: 4.9,
      students: 42865,
      image: '/images/python-advanced.jpg',
      hasCertificate: true,
      tags: ['python', 'advanced', 'design patterns'],
      category: 'programming'
    },
    {
      id: 4,
      title: 'Python for Web Development with Django',
      description: 'Build robust web applications from scratch using Python and Django full-stack framework.',
      level: 'Intermediate',
      duration: '32 hours',
      instructor: 'Mosh Hamedani',
      rating: 4.8,
      students: 78432,
      image: '/images/python-django.jpg',
      hasCertificate: true,
      tags: ['python', 'django', 'web development'],
      category: 'web-development'
    },
    {
      id: 5,
      title: 'JavaScript: The Complete Guide',
      description: 'Master JavaScript with the most comprehensive course available. Projects, challenges, quizzes, JavaScript ES6+, OOP, AJAX, Webpack.',
      level: 'All Levels',
      duration: '52 hours',
      instructor: 'Maximilian Schwarzmüller',
      rating: 4.7,
      students: 156492,
      image: '/images/javascript-complete.jpg',
      hasCertificate: true,
      tags: ['javascript', 'web development', 'front-end'],
      category: 'web-development'
    },
    {
      id: 6,
      title: 'Machine Learning A-Z™: Hands-On Python & R',
      description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts.',
      level: 'Intermediate',
      duration: '44 hours',
      instructor: 'Kirill Eremenko',
      rating: 4.6,
      students: 768921,
      image: '/images/machine-learning-az.jpg',
      hasCertificate: true,
      tags: ['machine learning', 'python', 'r'],
      category: 'data-science'
    },
    {
      id: 7,
      title: 'React - The Complete Guide',
      description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
      level: 'All Levels',
      duration: '48 hours',
      instructor: 'Maximilian Schwarzmüller',
      rating: 4.8,
      students: 325679,
      image: '/images/react-complete.jpg',
      hasCertificate: true,
      tags: ['react', 'javascript', 'frontend'],
      category: 'web-development'
    },
    {
      id: 8,
      title: 'SQL Bootcamp: Zero to Hero',
      description: 'Learn SQL for data analysis and database management with PostgreSQL - go from beginner to advanced.',
      level: 'Beginner',
      duration: '15 hours',
      instructor: 'Jose Portilla',
      rating: 4.7,
      students: 98432,
      image: '/images/sql-bootcamp.jpg',
      hasCertificate: true,
      tags: ['sql', 'database', 'postgresql'],
      category: 'database'
    }
  ];
  
  // Lọc khóa học theo danh mục và tìm kiếm
  const filteredCourses = courses.filter(course => {
    // Lọc theo danh mục
    if (activeFilter !== 'all' && course.category !== activeFilter) {
      return false;
    }
    
    // Lọc theo tìm kiếm
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    return true;
  });
  
  // Sắp xếp khóa học
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'popular') {
      return b.students - a.students;
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'newest') {
      // Đây là mô phỏng, trong thực tế sẽ so sánh ngày phát hành
      return b.id - a.id;
    }
    return 0;
  });
  
  // Danh sách các danh mục
  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'programming', name: 'Programming Languages' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science & AI' },
    { id: 'database', name: 'Database' },
    { id: 'mobile', name: 'Mobile Development' }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero section */}
      <div className="pt-24 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-4xl font-bold mb-4">Course Catalog</h1>
          <p className="text-xl text-indigo-200 max-w-3xl">
            Browse our comprehensive library of courses taught by industry experts. 
            Find the perfect course to advance your skills and achieve your goals.
          </p>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeFilter === category.id 
                        ? 'bg-indigo-100 text-indigo-700 font-medium' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Level</h2>
                <div className="space-y-2">
                  {['Beginner', 'Intermediate', 'Advanced', 'All Levels'].map(level => (
                    <label key={level} className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-500 mr-2" />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Features</h2>
                <div className="space-y-2">
                  {['Certificate', 'Coding Exercises', 'Practice Tests'].map(feature => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-500 mr-2" />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Rating</h2>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="rounded text-indigo-500 mr-2" />
                      <div className="flex items-center">
                        <span className="mr-1">{rating}+</span>
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg key={star} className="w-4 h-4" fill={star <= Math.floor(rating) ? 'currentColor' : 'none'} viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              <button className="w-full mt-8 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded transition-colors">
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Course listing */}
          <div className="flex-1">
            {/* Search and sort controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search courses..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute left-3 top-2.5 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <label className="mr-2 text-sm text-gray-600">Sort by:</label>
                <select 
                  className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            
            {/* Filtered results info */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing <span className="font-medium">{sortedCourses.length}</span> courses
                {activeFilter !== 'all' && (
                  <> in <span className="font-medium">
                    {categories.find(cat => cat.id === activeFilter)?.name}
                  </span></>
                )}
              </p>
              <div className="flex space-x-2">
                <button className="p-2 bg-gray-200 rounded-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 bg-indigo-100 text-indigo-600 rounded-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Course grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {sortedCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 bg-indigo-900 flex items-center justify-center">
                      <span className="text-lg text-white font-medium">{course.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">{course.level}</span>
                      <span className="text-sm text-gray-500">{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                        <span className="text-sm">{course.instructor}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm ml-1">{course.rating}</span>
                        <span className="text-xs text-gray-500 ml-2">({course.students.toLocaleString()} students)</span>
                      </div>
                    </div>
                    {course.hasCertificate && (
                      <div className="mt-4 flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        With Certificate
                      </div>
                    )}
                    <div className="mt-6">
                      <Link href={`/catalog/course/${course.id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition-colors block text-center">
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            {sortedCourses.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center">
                  <button className="p-2 border rounded-l-md hover:bg-gray-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="px-4 py-2 border-t border-b bg-indigo-50 text-indigo-600 font-medium">1</button>
                  <button className="px-4 py-2 border-t border-b hover:bg-gray-50">2</button>
                  <button className="px-4 py-2 border-t border-b hover:bg-gray-50">3</button>
                  <span className="px-3 py-2 border-t border-b">...</span>
                  <button className="px-4 py-2 border-t border-b hover:bg-gray-50">10</button>
                  <button className="p-2 border rounded-r-md hover:bg-gray-50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
            
            {/* No results */}
            {sortedCourses.length === 0 && (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium mb-2">No courses found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
                <button 
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded transition-colors"
                  onClick={() => {
                    setActiveFilter('all');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Newsletter section */}
      <div className="bg-indigo-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Course Updates & Exclusive Offers</h2>
          <p className="text-indigo-200 mb-6">Join our newsletter and be the first to know about new courses and special promotions.</p>
          <form className="flex flex-col md:flex-row gap-2 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-indigo-300 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Browse Courses</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Programming Languages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Science & AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a href="#" key={social} className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
              <p className="text-sm">Need help with anything?</p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition-colors">support@example.com</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Learn Tech Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}