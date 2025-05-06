import React from 'react';
import Link from 'next/link';

const javaTopics = [
  { title: "1. Introduction to Java", slug: "intro" },
  { title: "2. Variables and Data Types", slug: "variables" },
  { title: "3. Control Flow (if, switch)", slug: "control-flow" },
  { title: "4. Loops (for, while)", slug: "loops" },
  { title: "5. Methods in Java", slug: "methods" },
  { title: "6. Object-Oriented Programming", slug: "oop" },
  { title: "7. Exception Handling", slug: "exceptions" },
  { title: "8. File I/O", slug: "file-io" },
];

const JavaPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Learn Java from Scratch ☕</h1>
      <p className="mb-6 text-gray-700">
        Welcome to the Java learning page! This guide will help you build a strong foundation in Java, one topic at a time.
      </p>

      <h2 className="text-2xl font-semibold mb-2">📚 Topics:</h2>
      <ul className="list-disc list-inside mb-6 text-blue-700">
        {javaTopics.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/java/${topic.slug}`} className="hover:underline">
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">🔗 Useful Resources:</h2>
      <ul className="list-disc list-inside text-blue-700">
        <li><a href="https://www.w3schools.com/java/" target="_blank" rel="noopener noreferrer">W3Schools Java Tutorial</a></li>
        <li><a href="https://docs.oracle.com/javase/tutorial/" target="_blank" rel="noopener noreferrer">Official Oracle Java Tutorials</a></li>
        <li><a href="https://www.geeksforgeeks.org/java/" target="_blank" rel="noopener noreferrer">GeeksforGeeks Java</a></li>
      </ul>
    </div>
  );
};

export default JavaPage;
