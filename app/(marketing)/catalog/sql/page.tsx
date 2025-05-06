'use client'
import { useState } from 'react';
import { BookOpen, Code, CheckCircle, ChevronRight, Database, BarChart2, Server, RefreshCw } from 'lucide-react';

export default function SQLLearningPage() {
  const [activeTab, setActiveTab] = useState('basics');
  const [showAnswer, setShowAnswer] = useState(false);

  // Sample SQL code for examples
  const basicQueryExample = `SELECT * FROM customers 
WHERE country = 'USA' 
ORDER BY last_name;`;

  const joinQueryExample = `SELECT orders.order_id, 
       customers.customer_name, 
       products.product_name
FROM orders
JOIN customers ON orders.customer_id = customers.id
JOIN products ON orders.product_id = products.id
WHERE orders.order_date > '2023-01-01';`;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Database className="text-blue-600" size={24} />
              <h1 className="text-2xl font-bold text-gray-800">SQL Learning Hub</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Tutorials</li>
                <li className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Exercises</li>
                <li className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Resources</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Learning Path</h2>
              <ul className="space-y-2">
                <li 
                  className={`flex items-center p-2 rounded-md cursor-pointer ${activeTab === 'basics' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('basics')}
                >
                  <BookOpen size={18} className="mr-2" />
                  <span>SQL Basics</span>
                </li>
                <li 
                  className={`flex items-center p-2 rounded-md cursor-pointer ${activeTab === 'queries' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('queries')}
                >
                  <Code size={18} className="mr-2" />
                  <span>Advanced Queries</span>
                </li>
                <li 
                  className={`flex items-center p-2 rounded-md cursor-pointer ${activeTab === 'joins' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('joins')}
                >
                  <RefreshCw size={18} className="mr-2" />
                  <span>Joins & Relations</span>
                </li>
                <li 
                  className={`flex items-center p-2 rounded-md cursor-pointer ${activeTab === 'functions' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('functions')}
                >
                  <BarChart2 size={18} className="mr-2" />
                  <span>Functions & Aggregation</span>
                </li>
                <li 
                  className={`flex items-center p-2 rounded-md cursor-pointer ${activeTab === 'practice' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('practice')}
                >
                  <Server size={18} className="mr-2" />
                  <span>Practice Quiz</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white shadow rounded-lg p-6">
              {activeTab === 'basics' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">SQL Basics</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">SQL (Structured Query Language) is a standard programming language for managing and manipulating relational databases. Let's start with the basics:</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Key Concepts</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li><strong>Database:</strong> A collection of related data organized in tables</li>
                      <li><strong>Table:</strong> Data structured in rows and columns</li>
                      <li><strong>Query:</strong> A request for data or information from a database</li>
                      <li><strong>RDBMS:</strong> Relational Database Management System (MySQL, PostgreSQL, SQL Server, Oracle)</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Basic SQL Commands</h3>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                      <p className="font-mono text-sm">
                        <strong>SELECT</strong> - extracts data from a database<br />
                        <strong>UPDATE</strong> - updates data in a database<br />
                        <strong>DELETE</strong> - deletes data from a database<br />
                        <strong>INSERT INTO</strong> - inserts new data into a database<br />
                        <strong>CREATE DATABASE</strong> - creates a new database<br />
                        <strong>CREATE TABLE</strong> - creates a new table<br />
                        <strong>DROP TABLE</strong> - deletes a table<br />
                        <strong>ALTER TABLE</strong> - modifies a table
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Your First SQL Query</h3>
                    <p className="mb-2">The most common operation in SQL is retrieving data using the SELECT statement:</p>
                    <div className="bg-gray-800 text-white p-4 rounded-md mb-4 font-mono">
                      {basicQueryExample}
                    </div>
                    <p>This query retrieves all columns (*) from the "customers" table where the country is "USA", and orders the results by the "last_name" column.</p>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Try It Yourself</h3>
                    <p className="mb-2">Write a query to select all products with a price greater than $50, ordered by price in descending order.</p>
                    
                    <button 
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                      onClick={() => setShowAnswer(!showAnswer)}
                    >
                      {showAnswer ? 'Hide Answer' : 'Show Answer'}
                    </button>
                    
                    {showAnswer && (
                      <div className="bg-gray-800 text-white p-4 rounded-md mt-4 font-mono">
                        SELECT * FROM products<br />
                        WHERE price {'>'} 50<br />
                        ORDER BY price DESC;
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'joins' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Joins & Relations</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">Joins allow you to combine data from multiple tables based on related columns. Understanding joins is crucial for working with relational databases.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Types of Joins</h3>
                    <ul className="mb-4">
                      <li className="mb-2"><strong>INNER JOIN:</strong> Returns records that have matching values in both tables</li>
                      <li className="mb-2"><strong>LEFT JOIN:</strong> Returns all records from the left table and matched records from the right table</li>
                      <li className="mb-2"><strong>RIGHT JOIN:</strong> Returns all records from the right table and matched records from the left table</li>
                      <li className="mb-2"><strong>FULL JOIN:</strong> Returns all records when there is a match in either left or right table</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Join Example</h3>
                    <div className="bg-gray-800 text-white p-4 rounded-md mb-4 font-mono">
                      {joinQueryExample}
                    </div>
                    <p>This query combines data from three tables (orders, customers, and products) using JOIN operations to create a comprehensive view of orders with customer and product details.</p>
                  </div>
                </div>
              )}

              {activeTab === 'queries' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Advanced Queries</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">Advanced SQL queries allow you to perform complex data operations and extract powerful insights from your database.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Key Advanced Concepts</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li><strong>Subqueries:</strong> Queries nested inside another query</li>
                      <li><strong>GROUP BY:</strong> Groups rows with the same values</li>
                      <li><strong>HAVING:</strong> Filters groups based on specified conditions</li>
                      <li><strong>Window Functions:</strong> Perform calculations across a set of table rows</li>
                      <li><strong>Common Table Expressions (CTEs):</strong> Temporary result sets for complex queries</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Subquery Example</h3>
                    <div className="bg-gray-800 text-white p-4 rounded-md mb-4 font-mono">
                      SELECT employee_name, department, salary<br />
                      FROM employees<br />
                      WHERE salary {'>'} (<br />
                      &nbsp;&nbsp;SELECT AVG(salary)<br />
                      &nbsp;&nbsp;FROM employees<br />
                      );
                    </div>
                    <p>This query finds employees with salaries higher than the company average.</p>
                  </div>
                </div>
              )}

              {activeTab === 'functions' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Functions & Aggregation</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">SQL provides numerous built-in functions to perform calculations, manipulate strings, and analyze data.</p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-2">Common Aggregate Functions</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li><strong>COUNT():</strong> Returns the number of rows</li>
                      <li><strong>SUM():</strong> Calculates the sum of values</li>
                      <li><strong>AVG():</strong> Calculates the average of values</li>
                      <li><strong>MIN():</strong> Finds the minimum value</li>
                      <li><strong>MAX():</strong> Finds the maximum value</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">String Functions</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li><strong>CONCAT():</strong> Joins strings together</li>
                      <li><strong>SUBSTRING():</strong> Extracts part of a string</li>
                      <li><strong>UPPER()/LOWER():</strong> Converts to upper/lowercase</li>
                      <li><strong>LENGTH():</strong> Returns the length of a string</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">Aggregate Example</h3>
                    <div className="bg-gray-800 text-white p-4 rounded-md mb-4 font-mono">
                      SELECT category,<br />
                      &nbsp;&nbsp;COUNT(*) as total_products,<br />
                      &nbsp;&nbsp;AVG(price) as avg_price,<br />
                      &nbsp;&nbsp;SUM(stock) as total_inventory<br />
                      FROM products<br />
                      GROUP BY category<br />
                      HAVING COUNT(*) {'>'} 5<br />
                      ORDER BY total_inventory DESC;
                    </div>
                    <p>This query calculates statistics for product categories with more than 5 products, ordered by total inventory.</p>
                  </div>
                </div>
              )}

              {activeTab === 'practice' && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Practice Quiz</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">Test your SQL knowledge with these practice questions:</p>
                    
                    <div className="space-y-6 mt-4">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h3 className="font-semibold mb-2">Question 1</h3>
                        <p>Which SQL command is used to retrieve data from a database?</p>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center">
                            <input type="radio" id="q1a" name="q1" className="mr-2" />
                            <label htmlFor="q1a">UPDATE</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q1b" name="q1" className="mr-2" />
                            <label htmlFor="q1b">INSERT</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q1c" name="q1" className="mr-2" />
                            <label htmlFor="q1c">SELECT</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q1d" name="q1" className="mr-2" />
                            <label htmlFor="q1d">DELETE</label>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h3 className="font-semibold mb-2">Question 2</h3>
                        <p>Which SQL clause is used to filter the results of a GROUP BY?</p>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center">
                            <input type="radio" id="q2a" name="q2" className="mr-2" />
                            <label htmlFor="q2a">WHERE</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q2b" name="q2" className="mr-2" />
                            <label htmlFor="q2b">HAVING</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q2c" name="q2" className="mr-2" />
                            <label htmlFor="q2c">FILTER</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q2d" name="q2" className="mr-2" />
                            <label htmlFor="q2d">ON</label>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                        <h3 className="font-semibold mb-2">Question 3</h3>
                        <p>What type of JOIN returns all records from the left table and matched records from the right table?</p>
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center">
                            <input type="radio" id="q3a" name="q3" className="mr-2" />
                            <label htmlFor="q3a">INNER JOIN</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q3b" name="q3" className="mr-2" />
                            <label htmlFor="q3b">RIGHT JOIN</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q3c" name="q3" className="mr-2" />
                            <label htmlFor="q3c">LEFT JOIN</label>
                          </div>
                          <div className="flex items-center">
                            <input type="radio" id="q3d" name="q3" className="mr-2" />
                            <label htmlFor="q3d">FULL JOIN</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors">
                        Check Answers
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Progress Section */}
            <div className="bg-white shadow rounded-lg p-6 mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Your Learning Progress</h3>
                <span className="text-sm font-medium text-blue-600">3/5 Completed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>SQL Basics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Advanced Queries</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Joins & Relations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-2"></div>
                  <span className="text-gray-500">Functions & Aggregation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-2"></div>
                  <span className="text-gray-500">Practice Quiz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SQL Learning Hub</h3>
              <p className="text-gray-300">Your comprehensive resource for mastering SQL and database skills.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Exercises</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full focus:outline-none" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 SQL Learning Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}