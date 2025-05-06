import React from 'react';
import Link from 'next/link';

const cppTopics = [
  { title: "1. Introduction to C++", slug: "intro" },
  { title: "2. Variables and Data Types", slug: "variables" },
  { title: "3. Conditional Statements", slug: "conditions" },
  { title: "4. Loops", slug: "loops" },
  { title: "5. Functions in C++", slug: "functions" },
  { title: "6. Arrays and Pointers", slug: "arrays-pointers" },
  { title: "7. Object-Oriented Programming", slug: "oop" },
];

const CppPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Learn C++ from Scratch 🚀</h1>
      <p className="mb-6 text-gray-700">
        Welcome to the C++ learning page! Here you’ll find a step-by-step guide from the basics to more advanced concepts.
      </p>

      <h2 className="text-2xl font-semibold mb-2">📚 Topics:</h2>
      <ul className="list-disc list-inside mb-6 text-blue-700">
        {cppTopics.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/cpp/${topic.slug}`} className="hover:underline">
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">🔗 Useful Resources:</h2>
      <ul className="list-disc list-inside text-blue-700">
        <li><a href="https://www.learncpp.com/" target="_blank" rel="noopener noreferrer">LearnCpp.com</a></li>
        <li><a href="https://cplusplus.com/" target="_blank" rel="noopener noreferrer">Cplusplus.com</a></li>
        <li><a href="https://www.geeksforgeeks.org/c-plus-plus/" target="_blank" rel="noopener noreferrer">GeeksforGeeks C++</a></li>
      </ul>
    </div>
  );
};

export default CppPage;
