'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CybersecurityCoursePage() {
  const [activeTab, setActiveTab] = useState('courses');
  
  // Cybersecurity courses data
  const cybersecCourses = [
    {
      id: 1,
      title: 'Cybersecurity Foundations',
      description: 'Build essential cybersecurity knowledge and skills to protect digital assets, identify threats, and implement defensive strategies against modern cyber attacks.',
      level: 'Beginner',
      duration: '20 hours',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 165432,
      image: '/images/cyber-basics.jpg',
      hasCertificate: true,
      tags: ['cybersecurity', 'network security', 'beginners']
    },
    {
      id: 2,
      title: 'Ethical Hacking & Penetration Testing',
      description: 'Learn the methodologies, tools, and techniques used by ethical hackers to identify and exploit vulnerabilities, with hands-on labs in a safe environment.',
      level: 'Intermediate',
      duration: '32 hours',
      instructor: 'Michael Chen',
      rating: 4.9,
      students: 98745,
      image: '/images/ethical-hacking.jpg',
      hasCertificate: true,
      tags: ['ethical hacking', 'penetration testing', 'security']
    },
    {
      id: 3,
      title: 'Digital Forensics & Incident Response',
      description: 'Master the tools and techniques to investigate security breaches, collect digital evidence, and implement effective incident response procedures.',
      level: 'Advanced',
      duration: '28 hours',
      instructor: 'David Rodriguez',
      rating: 4.7,
      students: 54328,
      image: '/images/digital-forensics.jpg',
      hasCertificate: true,
      tags: ['digital forensics', 'incident response', 'threat hunting']
    },
    {
      id: 4,
      title: 'Cloud Security Specialist',
      description: 'Develop skills to secure cloud environments across major platforms (AWS, Azure, GCP), implement compliance controls, and protect data in multi-cloud architectures.',
      level: 'Intermediate',
      duration: '24 hours',
      instructor: 'Emily Patel',
      rating: 4.6,
      students: 42890,
      image: '/images/cloud-security.jpg',
      hasCertificate: true,
      tags: ['cloud security', 'AWS', 'Azure', 'GCP']
    }
  ];
  
  // Learning paths data
  const learningPaths = [
    {
      id: 1,
      title: 'Cybersecurity Analyst Path',
      courses: 8,
      duration: '125 hours',
      description: 'From cybersecurity fundamentals to advanced threat detection - become a qualified security analyst with the skills to protect organizations from emerging threats.',
      image: '/images/analyst-path.jpg'
    },
    {
      id: 2,
      title: 'Penetration Tester Path',
      courses: 7,
      duration: '140 hours',
      description: 'Build the ethical hacking skills needed to identify and exploit security vulnerabilities, conduct penetration tests, and help organizations strengthen their defenses.',
      image: '/images/pentester-path.jpg'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">      
      {/* Hero section - Dark blue/purple theme for cybersecurity */}
      <div className="pt-24 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Cybersecurity</h1>
              <p className="text-xl mb-6 text-gray-300">Develop the skills to protect organizations from digital threats and build a career in one of today's most in-demand fields.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Start Your Security Journey
                </button>
                <button className="bg-transparent border border-gray-400 hover:bg-indigo-800 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  View Career Paths
                </button>
              </div>
              <div className="mt-8 flex items-center text-gray-300">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-500 border-2 border-indigo-900"></div>
                  ))}
                </div>
                <span>Join <strong className="text-white">350K+</strong> professionals securing the digital world</span>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <div className="absolute inset-0 bg-indigo-800 rounded-lg flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-teal-500 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Cybersecurity section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn Cybersecurity?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">High Demand Skills</h3>
              <p className="text-gray-600">Cybersecurity professionals are among the most sought-after in tech, with a global shortage of qualified talent and competitive salaries.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Protect Critical Systems</h3>
              <p className="text-gray-600">Learn to defend critical infrastructure, sensitive data, and essential services from increasingly sophisticated cyber threats.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-600">The cybersecurity field offers diverse paths for advancement, from technical specialists to executive roles like Chief Information Security Officer.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex border-b border-gray-200 mb-8">
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'courses' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('courses')}
            >
              Cybersecurity Courses
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'paths' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('paths')}
            >
              Career Paths
            </button>
            <button 
              className={`py-3 px-6 font-medium ${activeTab === 'resources' ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('resources')}
            >
              Free Resources
            </button>
          </div>
          
          {activeTab === 'courses' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                {cybersecCourses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 bg-indigo-900 flex items-center justify-center">
                        <span className="text-lg text-white font-medium">{course.title}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">{course.level}</span>
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
                        <Link href={`/catalog/cybersecurity/course/${course.id}`} className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded transition-colors block text-center">
                          View Course
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button className="bg-white border border-teal-500 text-teal-500 hover:bg-teal-50 font-medium py-2 px-6 rounded transition-colors">
                  Load More Courses
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'paths' && (
            <div>
              <div className="grid md:grid-cols-2 gap-8">
                {learningPaths.map((path) => (
                  <div key={path.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-teal-500">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{path.title}</h3>
                      <div className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
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
                    <Link href={`/catalog/cybersecurity/path/${path.id}`} className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded transition-colors block text-center">
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
                <h3 className="text-xl font-semibold mb-4">Free Cybersecurity Resources</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-teal-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Vulnerability Database</h4>
                      <p className="text-gray-600">Access our constantly updated database of common vulnerabilities and exposures (CVEs).</p>
                      <a href="#" className="text-teal-500 hover:text-teal-600 text-sm mt-1 inline-block">Access Database →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-teal-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Cybersecurity Tools Guide</h4>
                      <p className="text-gray-600">Download our comprehensive guide to essential security tools for threat detection, vulnerability scanning, and forensic analysis.</p>
                      <a href="#" className="text-teal-500 hover:text-teal-600 text-sm mt-1 inline-block">Download Guide →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-teal-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Capture The Flag Challenges</h4>
                      <p className="text-gray-600">Test your cybersecurity skills with our collection of CTF challenges designed for all skill levels.</p>
                      <a href="#" className="text-teal-500 hover:text-teal-600 text-sm mt-1 inline-block">Start Challenges →</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-teal-500 mr-2">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Virtual Security Lab</h4>
                      <p className="text-gray-600">Access our free virtualized environment to practice defensive and offensive security techniques in a safe, isolated sandbox.</p>
                      <a href="#" className="text-teal-500 hover:text-teal-600 text-sm mt-1 inline-block">Launch Lab →</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Industry Certifications Section - New for cybersecurity */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Prepare for Industry Certifications</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "CompTIA Security+",
                logo: "CompTIA",
                description: "Foundation-level security certification covering network security, threats, vulnerabilities, and security procedures."
              },
              {
                name: "Certified Ethical Hacker (CEH)",
                logo: "EC-Council",
                description: "Learn the tools and techniques used by hackers to penetrate network systems and strengthen security posture."
              },
              {
                name: "CISSP",
                logo: "(ISC)²",
                description: "Advanced certification for security professionals who design, implement and manage cybersecurity programs."
              },
              {
                name: "OSCP",
                logo: "Offensive Security",
                description: "Hands-on penetration testing certification requiring candidates to successfully attack and penetrate various systems."
              }
            ].map((cert, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-indigo-600">{cert.logo.substring(0, 2)}</span>
                </div>
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
                <a href="#" className="text-teal-500 hover:text-teal-600 text-sm mt-3 inline-block">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Cybersecurity Labs Section - New section */}
      <div className="py-16 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Hands-On Cybersecurity Labs</h2>
          <p className="text-xl text-center text-indigo-200 mb-12 max-w-3xl mx-auto">Practice in realistic environments with our state-of-the-art virtual labs and simulations</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Attack & Defense Labs</h3>
              <p className="text-indigo-200 mb-4">Practice both offensive and defensive security techniques in isolated environments designed to mimic real-world scenarios.</p>
              <a href="#" className="inline-flex items-center text-teal-300 hover:text-teal-200">
                Explore Labs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-indigo-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Security Simulations</h3>
              <p className="text-indigo-200 mb-4">Experience realistic cyber attack simulations and practice your response strategies in safe, controlled environments.</p>
              <a href="#" className="inline-flex items-center text-teal-300 hover:text-teal-200">
                Try Simulations
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            <div className="bg-indigo-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Threat Analysis</h3>
              <p className="text-indigo-200 mb-4">Learn to identify, analyze, and respond to various cyber threats with hands-on practice using industry-standard tools.</p>
              <a href="#" className="inline-flex items-center text-teal-300 hover:text-teal-200">
                Start Analysis
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Thompson",
                role: "Security Operations Analyst",
                company: "TechDefend Inc.",
                image: "/images/testimonial-1.jpg",
                quote: "The practical labs and hands-on exercises helped me build confidence in my security skills. Within three months of completing the Cybersecurity Analyst path, I landed my dream job."
              },
              {
                name: "Priya Sharma",
                role: "Penetration Tester",
                company: "SecureNet",
                image: "/images/testimonial-2.jpg",
                quote: "The ethical hacking course prepared me for real-world scenarios better than any other training I've taken. The instructors have actual field experience and it shows in the quality of content."
              },
              {
                name: "Marcus Williams",
                role: "Security Consultant",
                company: "CyberShield Solutions",
                image: "/images/testimonial-3.jpg",
                quote: "Transitioning from IT to cybersecurity seemed daunting until I found these courses. The step-by-step approach and supportive community made all the difference in my career change."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Industry Partners section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted by Industry Leaders</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our cybersecurity programs are developed in collaboration with leading organizations to ensure curriculum relevance in the rapidly evolving security landscape.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5", "Partner 6", "Partner 7", "Partner 8"].map((partner, i) => (
              <div key={i} className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-gray-400 font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "Do I need prior knowledge to start learning cybersecurity?",
                answer: "While some basic IT knowledge is helpful, many of our courses are designed for complete beginners. Our Cybersecurity Foundations course requires no prior experience and provides all the fundamentals you need to build a solid foundation."
              },
              {
                question: "How long does it take to complete a cybersecurity learning path?",
                answer: "The time commitment varies based on your pace and prior knowledge. On average, our cybersecurity learning paths take 3-6 months to complete when studying 10-15 hours per week. Each path includes a recommended schedule to help you stay on track."
              },
              {
                question: "Will these courses help me prepare for industry certifications?",
                answer: "Yes! Our courses are designed to align with major industry certifications like CompTIA Security+, CEH, CISSP, and more. Many courses include practice exams and materials specifically targeted to help you succeed in certification exams."
              },
              {
                question: "Do you offer hands-on practice or just theoretical knowledge?",
                answer: "All our cybersecurity courses include hands-on labs and practical exercises. We provide virtual environments where you can practice techniques safely and legally, giving you real-world experience that employers value."
              },
              {
                question: "Can I get job placement assistance after completing a course or learning path?",
                answer: "Yes, graduates of our cybersecurity learning paths get access to our career services, including resume reviews, interview preparation, and our employer network. We also offer a job guarantee program for qualifying students who complete certain learning paths."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="#" className="text-teal-500 hover:text-teal-600 font-medium inline-flex items-center">
              View All FAQs
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Cybersecurity Career?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Join over 350,000 professionals who've trusted us to build their cybersecurity skills. Get started today with a free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="bg-transparent border border-white hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Talk to an Advisor
            </button>
          </div>
          <p className="mt-6 text-indigo-200 text-sm">No credit card required. 7-day free access to all courses and labs.</p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Learn Cybersecurity</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Learning Paths</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hands-on Labs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Certification Prep</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
              <p className="mb-4">Stay updated with the latest in cybersecurity education and industry trends.</p>
              <div className="flex space-x-4 mb-6">
                {['Facebook', 'Twitter', 'LinkedIn', 'YouTube'].map((social, i) => (
                  <a key={i} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-4 h-4 text-gray-400"></div>
                  </a>
                ))}
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 w-full py-2 px-3 rounded text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
                <button className="absolute right-1 top-1 bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Cybersecurity Learning Platform. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}