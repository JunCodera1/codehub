'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Illustration from '../../../public/images/features-illustration.svg';

// Learning topics data
const topics = [
  {
    img: '/javascript-icon.svg',
    title: 'JavaScript',
    description: 'Learn the fundamentals of JavaScript, from basics to advanced concepts.',
    progress: 6,
    module: 'Introduction',
  },
  {
    img: '/python-icon.svg',
    title: 'Python',
    description: 'Master Python programming with hands-on exercises and projects.',
    progress: 24,
    module: 'Data Structures',
  },
  {
    img: '/react-icon.svg',
    title: 'React',
    description: 'Build modern web applications with the React library.',
    progress: 0,
    module: 'Not started',
  },
  {
    img: '/html-icon.svg',
    title: 'HTML & CSS',
    description: 'Learn to create and style websites with HTML and CSS.',
    progress: 65,
    module: 'Responsive Design',
  },
];

export default function Learn() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  
  return (
    <section className="relative bg-slate-50">
      {/* Bg illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={1440}
          height={440}
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h2 className="h2 font-sans mb-4">
              <p className="text-indigo-600">Keep learning</p>
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
                Build your programming skills with interactive tutorials, real-world projects, and personalized learning paths.
              </p>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left sidebar - course list */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="font-bold text-lg mb-4">My Learning</h3>
                <nav>
                  {topics.map((topic, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedTopic(topic)}
                      className={`mb-2 p-3 rounded-md cursor-pointer flex items-center gap-3 hover:bg-slate-100 transition ${selectedTopic.title === topic.title ? 'bg-slate-100 border-l-4 border-indigo-500' : ''}`}
                    >
                      <div className="w-8 h-8 flex-shrink-0">
                        <Image
                          src={topic.img}
                          width={32}
                          height={32}
                          alt={topic.title}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{topic.title}</h4>
                        {topic.progress > 0 && (
                          <div className="w-full bg-slate-200 rounded-full h-1.5 mt-1">
                            <div 
                              className="bg-indigo-600 h-1.5 rounded-full" 
                              style={{ width: `${topic.progress}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </nav>
                <div className="mt-6">
                  <button className="w-full bg-indigo-50 text-indigo-600 font-medium py-2 px-4 rounded hover:bg-indigo-100 transition">
                    Browse all courses
                  </button>
                </div>
              </div>
            </div>

            {/* Main content area */}
            <div className="lg:w-3/4">
              {/* Current course card */}
              <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                <div className="bg-indigo-600 text-white p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-indigo-100 text-sm font-medium mb-1">COURSE</div>
                      <h2 className="text-2xl font-bold">{selectedTopic.title}</h2>
                      <div className="mt-1">Current Module: {selectedTopic.module}</div>
                    </div>
                    <div className="text-center">
                      <div className="inline-block rounded-full bg-indigo-500 p-2 w-16 h-16 flex items-center justify-center">
                        <span className="text-xl font-bold">{selectedTopic.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <p className="text-slate-600">{selectedTopic.description}</p>
                      
                      <div className="flex gap-2 mt-3">
                        <div className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                          Interactive Lessons
                        </div>
                        <div className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                          8 Projects
                        </div>
                        <div className="text-xs px-3 py-1 bg-slate-100 rounded-full text-slate-600">
                          Certificate
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-slate-100 text-slate-700 font-medium py-2 px-4 rounded hover:bg-slate-200 transition">
                        Syllabus
                      </button>
                      <button className="bg-indigo-600 text-white font-medium py-2 px-6 rounded hover:bg-indigo-700 transition">
                        Resume
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning path section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Learning Path</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center border-2 border-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <div className="h-12 w-1 bg-slate-200 mx-3"></div>
                      <div className="flex-1 bg-slate-50 p-3 rounded border border-slate-200">
                        <div className="font-medium">Introduction to {selectedTopic.title}</div>
                        <div className="text-sm text-slate-500">Basics concepts and syntax</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full ${selectedTopic.progress >= 10 ? 'bg-green-100 text-green-600 border-2 border-green-500' : 'bg-slate-100 text-slate-400 border-2 border-slate-300'} flex items-center justify-center`}>
                        {selectedTopic.progress >= 10 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          <span>2</span>
                        )}
                      </div>
                      <div className="h-12 w-1 bg-slate-200 mx-3"></div>
                      <div className="flex-1 bg-slate-50 p-3 rounded border border-slate-200">
                        <div className="font-medium">Data Structures & Functions</div>
                        <div className="text-sm text-slate-500">Working with data and creating functions</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center border-2 border-slate-300">
                        <span>3</span>
                      </div>
                      <div className="h-12 w-1 bg-slate-200 mx-3"></div>
                      <div className="flex-1 bg-slate-50 p-3 rounded border border-slate-200">
                        <div className="font-medium">Advanced Concepts</div>
                        <div className="text-sm text-slate-500">Mastering advanced techniques</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center border-2 border-slate-300">
                        <span>4</span>
                      </div>
                      <div className="flex-1 ml-4">
                        <div className="flex-1 bg-slate-50 p-3 rounded border border-slate-200">
                          <div className="font-medium">Final Project</div>
                          <div className="text-sm text-slate-500">Build a complete application</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress tracking */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Set Your Goals</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium text-slate-700 mb-2">Weekly Target</h4>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-slate-500">No weekly target set yet</div>
                        <button className="border border-indigo-600 text-indigo-600 px-3 py-1 text-sm rounded hover:bg-indigo-50 transition">
                          Set target
                        </button>
                      </div>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-medium text-slate-700 mb-2">Skills Focus</h4>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-slate-500">Frontend Development</div>
                        <button className="border border-indigo-600 text-indigo-600 px-3 py-1 text-sm rounded hover:bg-indigo-50 transition">
                          Customize
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}