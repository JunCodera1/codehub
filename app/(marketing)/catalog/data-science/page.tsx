import React from 'react';
import Link from 'next/link';

const dataScienceTopics = [
  { title: "1. Introduction to Data Science", slug: "intro" },
  { title: "2. Python for Data Analysis", slug: "python" },
  { title: "3. Statistics and Probability", slug: "statistics" },
  { title: "4. Data Visualization", slug: "visualization" },
  { title: "5. Machine Learning Basics", slug: "ml-basics" },
  { title: "6. Model Evaluation", slug: "model-evaluation" },
  { title: "7. Real-world Projects", slug: "projects" },
];

const DataSciencePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">🎓 Data Science Course</h1>
      <p className="mb-6 text-gray-700">
        This course will take you from zero to hero in Data Science. You’ll start with the fundamentals and progress to building real-world machine learning models.
      </p>

      <h2 className="text-2xl font-semibold mb-2">📘 Course Topics:</h2>
      <ul className="list-disc list-inside mb-6 text-blue-700">
        {dataScienceTopics.map((topic) => (
          <li key={topic.slug}>
            <Link href={`/data-science/${topic.slug}`} className="hover:underline">
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-2">🔗 External Resources:</h2>
      <ul className="list-disc list-inside text-blue-700">
        <li><a href="https://www.kaggle.com/learn" target="_blank" rel="noopener noreferrer">Kaggle Learn</a></li>
        <li><a href="https://www.coursera.org/learn/data-science" target="_blank" rel="noopener noreferrer">Coursera - Data Science</a></li>
        <li><a href="https://scikit-learn.org/stable/tutorial/index.html" target="_blank" rel="noopener noreferrer">Scikit-learn Tutorials</a></li>
      </ul>
    </div>
  );
};

export default DataSciencePage;
