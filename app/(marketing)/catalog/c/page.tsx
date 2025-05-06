'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../../components/ui/header';

export default function CProgrammingCoursePage() {
  const [activeTab, setActiveTab] = useState('courses');
  
  // Dummy data for courses
  const cCourses = [
    {
      id: 1,
      title: 'C Programming Foundations',
      description: 'Master the fundamentals of C programming, one of the most influential and powerful programming languages that forms the backbone of modern software development.',
      level: 'Beginner',
      duration: '18 hours',
      instructor: 'John Smith',
      rating: 4.7,
      students: 187456,
      image: '/images/c-basics.jpg',
      hasCertificate: true,
      tags: ['c', 'programming', 'beginners']
    },
    {
      id: 2,
      title: 'Advanced C Programming and Memory Management',
      description: 'Dive deep into advanced C concepts including pointers, memory management, data structures, and optimization techniques used by professional developers.',
      level: 'Intermediate',
      duration: '24 hours',
      instructor: 'Richard Stallman',
      rating: 4.9,
      students: 94562,
      image: '/images/c-advanced.jpg',
      hasCertificate: true,
      tags: ['c', 'advanced', 'memory management']
    },
    {
      id: 3,
      title: 'C for Embedded Systems Development',
      description: 'Learn how to develop software for embedded systems and microcontrollers using C, with hands-on projects and real-world applications.',
      level: 'Advanced',
      duration: '32 hours',
      instructor: 'Emily Chen',
      rating: 4.8,
      students: 54321,
      image: '/images/c-embedded.jpg',
      hasCertificate: true,
      tags: ['c', 'embedded systems', 'hardware']
    },
    {
      id: 4,
      title: 'Data Structures and Algorithms in C',
      description: 'Build a strong foundation in computer science fundamentals by implementing common data structures and algorithms using C programming.',
      level: 'Intermediate',
      duration: '28 hours',
      instructor: 'David Thompson',
      rating: 4.6,
      students: 65789,
      image: '/images/c-dsa.jpg',
      hasCertificate: true,
      tags: ['c', 'data structures', 'algorithms']
    }
  ];
  
  // Dummy data for paths
  const learningPaths = [
    {
      id: 1,
      title: 'C Developer Path',
      courses: 7,
      duration: '110 hours',
      description: 'From beginner to professional C developer - master the language that powers operating systems, embedded devices, and high-performance applications.',
      image: '/images/c-dev-path.jpg'
    },
    {
      id: 2,
      title: 'Systems Programmer Path',
      courses: 9,
      duration: '140 hours',
      description: 'Specialize in low-level systems programming with C, including operating systems concepts, driver development, and performance optimization.',
      image: '/images/systems-programmer-path.jpg'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero section */}
      <div className="pt-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Master C Programming</h1>
              <p className="text-xl mb-6 text-gray-300">Learn the fundamental language that powers operating systems, embedded devices, and high-performance applications.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Start Learning C
                </button>
                <button className="bg-transparent border border-gray-500 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  View Learning Path
                </button>
              </div>
              <div className="mt-8 flex items-center text-gray-300">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-500 border-2 border-gray-900"></div>
                  ))}
                </div>
                <span>Join <strong className="text-white">950K+</strong> learners already mastering C</span>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why C section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn C?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Foundation of Computing</h3>
              <p className="text-gray-600">C forms the basis of many other languages like C++, Java, and Python, and understanding C gives you deeper insights into how computers work.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance & Efficiency</h3>
              <p className="text-gray-600">C provides close-to-hardware control with minimal overhead, making it ideal for performance-critical applications and embedded systems.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Standard</h3>
              <p className="text-gray-600">C remains essential in operating systems, game engines, embedded systems, and applications where performance is critical.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex border-b border-gray-200 mb-8">
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'courses' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('courses')}
            >
              C Programming Courses
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'paths' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('paths')}
            >
              Learning Paths
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'resources' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('resources')}
            >
              Free Resources
            </button>
          </div>
          
          {activeTab === 'courses' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                {cCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                        <span className="text-lg text-white font-medium">{course.title}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">{course.level}</span>
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
                        <Link href={`/catalog/c-programming/course/${course.id}`} className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors block text-center">
                          View Course
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-2 px-6 rounded transition-colors">
                  Load More Courses
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'paths' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                {learningPaths.map((path) => (
                  <div key={path.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-orange-500">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{path.title}</h3>
                      <div className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
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
                    <Link href={`/catalog/c-programming/path/${path.id}`} className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition-colors block text-center">
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
                <h3 className="text-xl font-semibold mb-4">Free C Programming Resources</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">C Programming Standards</h4>
                      <p className="text-gray-600">Access the official C language specifications and standards documentation.</p>
                      <a href="#" className="text-orange-500 hover:text-orange-600 text-sm mt-1 inline-block">Access Standards →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">C Reference Guide</h4>
                      <p className="text-gray-600">Download our comprehensive reference guide to C language syntax and standard library functions.</p>
                      <a href="#" className="text-orange-500 hover:text-orange-600 text-sm mt-1 inline-block">Download Guide →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">C Coding Challenges</h4>
                      <p className="text-gray-600">Test your C programming skills with our collection of coding challenges for all skill levels.</p>
                      <a href="#" className="text-orange-500 hover:text-orange-600 text-sm mt-1 inline-block">Start Challenges →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-orange-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Online C Compiler</h4>
                      <p className="text-gray-600">Access our free online C compiler to practice coding without installing anything on your computer.</p>
                      <a href="#" className="text-orange-500 hover:text-orange-600 text-sm mt-1 inline-block">Launch Compiler →</a>
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
            {[
              {
                name: "Michael Johnson",
                text: "Learning C was intimidating at first, but this course broke down complex concepts into manageable chunks. Now I'm confidently building applications and understanding low-level programming concepts."
              },
              {
                name: "Sarah Williams",
                text: "As someone with a Java background, this course helped me understand memory management and pointers in C. The instructor's real-world examples were particularly valuable for my embedded systems work."
              },
              {
                name: "Robert Chen",
                text: "The Data Structures in C course completely transformed my understanding of efficient programming. The skills I gained helped me land a job in systems programming at a major tech company."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
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
                  "{testimonial.text}"
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
                question: "Is C programming difficult to learn?",
                answer: "C has a steeper learning curve than some modern languages, but our structured approach makes it accessible. The language's simplicity (fewer keywords and constructs) means there's less to memorize, though concepts like pointers and memory management may take time to master."
              },
              {
                question: "Why learn C when there are newer languages available?",
                answer: "C remains essential because it provides fundamental understanding of how computers work at a lower level. It's still widely used in operating systems, embedded systems, and performance-critical applications. Learning C also makes learning other languages easier since many are derived from C."
              },
              {
                question: "Do I need any prior programming experience to learn C?",
                answer: "No prior experience is required for our beginner courses. While some programming background may help, we start from the very basics and build your knowledge step by step."
              },
              {
                question: "What kind of jobs can I get with C programming skills?",
                answer: "C programming opens doors to careers in systems programming, embedded systems development, game development, operating system design, device driver development, and more. Many industries like automotive, aerospace, and telecommunications rely heavily on C."
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
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master C Programming?</h2>
          <p className="text-xl mb-8 text-gray-300">Join thousands of students who have built their programming foundation with our C courses.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Explore C Courses
            </button>
            <button className="bg-transparent border border-gray-500 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-colors">
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
              <h3 className="text-white font-semibold mb-4">Learn C Programming</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">C Fundamentals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Advanced C Concepts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">C for Embedded Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Structures in C</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">C Standards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Code Examples</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Developer Forum</a></li>
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
                {['facebook', 'twitter', 'linkedin', 'github'].map((social) => (
                  <a href="#" key={social} className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
              <p className="text-sm">Subscribe </p>
              <p className="text-sm">Subscribe to our newsletter for C programming tips and updates</p>
              <form className="mt-2 flex">
                <input type="email" placeholder="Your email" className="bg-gray-700 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-orange-500" />
                <button className="bg-orange-500 text-white px-4 rounded-r hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Learn C Programming. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}