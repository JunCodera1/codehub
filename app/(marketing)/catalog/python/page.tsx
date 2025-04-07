'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../../components/ui/header';

export default function PythonCoursePage() {
  const [activeTab, setActiveTab] = useState('courses');
  
  // Dummy data for courses
  const pythonCourses = [
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
      tags: ['python', 'programming', 'beginners']
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
      tags: ['python', 'data science', 'machine learning']
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
      tags: ['python', 'advanced', 'design patterns']
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
      tags: ['python', 'django', 'web development']
    }
  ];
  
  // Dummy data for paths
  const learningPaths = [
    {
      id: 1,
      title: 'Python Developer Path',
      courses: 8,
      duration: '120 hours',
      description: 'Go from beginner to professional Python developer with this comprehensive learning path.',
      image: '/images/python-dev-path.jpg'
    },
    {
      id: 2,
      title: 'Data Scientist with Python',
      courses: 12,
      duration: '160 hours',
      description: 'Master data analysis, visualization, and machine learning using Python\'s powerful libraries.',
      image: '/images/data-scientist-path.jpg'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero section */}
      <div className="pt-24 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Python Programming</h1>
              <p className="text-xl mb-6 text-indigo-200">Learn one of the world's most popular programming languages with our comprehensive courses and expert instructors.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Start Learning Python
                </button>
                <button className="bg-transparent border border-indigo-300 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  View Learning Path
                </button>
              </div>
              <div className="mt-8 flex items-center text-indigo-200">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-indigo-900"></div>
                  ))}
                </div>
                <span>Join <strong className="text-white">1.2M+</strong> learners already mastering Python</span>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 bg-indigo-800 rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-indigo-500 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Python section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn Python?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Beginner Friendly</h3>
              <p className="text-gray-600">Python is known for its readability and simplicity, making it the perfect language for beginners.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Versatile & In-Demand</h3>
              <p className="text-gray-600">Used in web development, data science, AI, automation, and many other fields with high job demand.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Rich Ecosystem</h3>
              <p className="text-gray-600">Access thousands of libraries and frameworks like Django, Flask, NumPy, Pandas, and TensorFlow.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex border-b border-gray-200 mb-8">
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'courses' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('courses')}
            >
              Python Courses
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'paths' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('paths')}
            >
              Learning Paths
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'resources' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('resources')}
            >
              Free Resources
            </button>
          </div>
          
          {activeTab === 'courses' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                {pythonCourses.map((course) => (
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
                      <p className="text-gray-600 mb-4">{course.description}</p>
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
                        <Link href={`/catalog/python/course/${course.id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition-colors block text-center">
                          View Course
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button className="bg-white border border-indigo-500 text-indigo-500 hover:bg-indigo-50 font-medium py-2 px-6 rounded transition-colors">
                  Load More Courses
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'paths' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                {learningPaths.map((path) => (
                  <div key={path.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-500">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{path.title}</h3>
                      <div className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                        {path.courses} courses
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{path.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {path.duration} total
                    </div>
                    <Link href={`/catalog/python/path/${path.id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded transition-colors block text-center">
                      Explore Path
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'resources' && (
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Free Python Resources</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Python Documentation</h4>
                      <p className="text-gray-600">Official Python documentation with tutorials, library references, and guides.</p>
                      <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm mt-1 inline-block">Access Documentation →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Free Python eBook</h4>
                      <p className="text-gray-600">Download our comprehensive guide to Python programming basics.</p>
                      <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm mt-1 inline-block">Download eBook →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Practice Problems</h4>
                      <p className="text-gray-600">Sharpen your Python skills with our collection of practice problems for all levels.</p>
                      <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm mt-1 inline-block">Start Practicing →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-indigo-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Python YouTube Tutorials</h4>
                      <p className="text-gray-600">Watch our series of Python tutorial videos covering beginner to advanced topics.</p>
                      <a href="#" className="text-indigo-500 hover:text-indigo-600 text-sm mt-1 inline-block">Watch Tutorials →</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-medium">Student Name</h4>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "This Python course exceeded my expectations. The instructor's teaching style made complex concepts easy to understand, and the hands-on projects solidified my learning."
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Do I need prior programming experience to learn Python?",
                answer: "No prior experience is needed! Python is known for its readable syntax and is often recommended as a first programming language. Our beginner courses start from absolute basics."
              },
              {
                question: "How long will it take to learn Python?",
                answer: "The learning time varies based on your goals. Basic proficiency can be achieved in 4-6 weeks with consistent practice. Becoming job-ready typically takes 3-6 months depending on your prior experience and learning pace."
              },
              {
                question: "Will I get a certificate after completing a Python course?",
                answer: "Yes, most of our Python courses include a certificate of completion that you can share on your LinkedIn profile or with potential employers."
              },
              {
                question: "Can I access the course materials offline?",
                answer: "Yes, our premium courses allow you to download videos and resources for offline viewing through our mobile app."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="py-16 bg-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Python?</h2>
          <p className="text-xl mb-8 text-indigo-200">Join thousands of students who have transformed their careers with our Python courses.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-900 hover:bg-indigo-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Explore Python Courses
            </button>
            <button className="bg-transparent border border-indigo-300 hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Try Free Tutorial
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Learn Python</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Python Basics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Advanced Python</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Python for Data Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Python Web Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Python Documentation</a></li>
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
              <p className="text-sm">Subscribe to our newsletter for Python tips and updates</p>
              <form className="mt-2 flex">
                <input type="email" placeholder="Your email" className="bg-gray-700 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-indigo-500" />
                <button className="bg-indigo-500 text-white px-4 rounded-r hover:bg-indigo-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Learn Python Online. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}                