'use client'
import React, { useState, ReactNode, useEffect } from 'react';

// Define types for our content
type LessonContent = {
  title: string;
  content: ReactNode;
};

type LessonContentMap = {
  [key: string]: LessonContent;
};

const JavaScriptBasicsPage = () => {
  const [activeTab, setActiveTab] = useState('variables');
  const [codeOutput, setCodeOutput] = useState('');
  const [userCode, setUserCode] = useState('// Write your JavaScript code here\nconsole.log("Hello, World!");');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Set up example code snippets based on active tab
  const exampleSnippets = {
    variables: '// Try variables example\nlet name = "John";\nconst age = 25;\n\nconsole.log(name);\n\nname = "Jane";\nconsole.log(name);',
    operators: '// Try operators example\nlet sum = 5 + 3;\nlet diff = 10 - 4;\nlet product = 3 * 6;\nlet quotient = 12 / 4;\n\nconsole.log("Sum:", sum);\nconsole.log("Difference:", diff);\nconsole.log("Product:", product);\nconsole.log("Quotient:", quotient);',
    conditionals: '// Try conditionals example\nlet score = 85;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else if (score >= 70) {\n  console.log("Grade: C");\n} else {\n  console.log("Grade: F");\n}',
    loops: '// Try loops example\nconsole.log("For loop:");\nfor (let i = 0; i < 3; i++) {\n  console.log("Iteration:", i);\n}\n\nconsole.log("\\nWhile loop:");\nlet count = 0;\nwhile (count < 3) {\n  console.log("Count:", count);\n  count++;\n}',
    functions: '// Try functions example\nfunction greet(name) {\n  return "Hello, " + name + "!";\n}\n\nconst add = (a, b) => a + b;\n\nconsole.log(greet("Alice"));\nconsole.log("2 + 3 =", add(2, 3));'
  };
  
  // Update code when tab changes
  useEffect(() => {
    setUserCode(exampleSnippets[activeTab as keyof typeof exampleSnippets]);
  }, [activeTab]);
  
  const runCode = () => {
    try {
      // Create a new function that returns the evaluated code
      const output: string[] = [];
      // Redirect console.log to our output array
      const originalLog = console.log;
      console.log = (...args: any[]) => {
        output.push(args.join(' '));
      };

      // Execute the code
      new Function(userCode)();
      
      // Restore original console.log
      console.log = originalLog;
      
      setCodeOutput(output.join('\n'));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setCodeOutput(`Error: ${errorMessage}`);
    }
  };

  const tabs = [
    { id: 'variables', label: 'Variables', icon: '📦' },
    { id: 'operators', label: 'Operators', icon: '🔢' },
    { id: 'conditionals', label: 'Conditionals', icon: '🔀' },
    { id: 'loops', label: 'Loops', icon: '🔄' },
    { id: 'functions', label: 'Functions', icon: '🧩' }
  ];

  const lessonContent: LessonContentMap = {
    variables: {
      title: "Variables in JavaScript",
      content: (
        <div>
          <p className="mb-4">JavaScript has three ways to declare variables:</p>
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-medium text-amber-800">Key Concept:</p>
            <p className="text-amber-700">Variables are containers for storing data values.</p>
          </div>
          <ul className="list-none ml-2 mb-6 space-y-3">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 font-mono px-2 py-1 rounded mr-3">var</span>
              <span>Function-scoped variable declaration (older, less recommended)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-mono px-2 py-1 rounded mr-3">let</span>
              <span>Block-scoped variable declaration (can be reassigned)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-mono px-2 py-1 rounded mr-3">const</span>
              <span>Block-scoped constant declaration (cannot be reassigned)</span>
            </li>
          </ul>
          <div className={`${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} p-5 rounded-lg shadow-inner mb-4`}>
            <pre className="whitespace-pre-wrap">
              <code className="font-mono">
                // Variable examples
                let name = "John";
                const age = 25;
                
                console.log(name); // Output: John
                
                name = "Jane"; // This works with let
                console.log(name); // Output: Jane
                
                // age = 26; // This would cause an error with const
              </code>
            </pre>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <p className="font-medium text-blue-700 mb-2">💡 Pro Tip:</p>
            <p className="text-blue-600">Use <code className="bg-blue-100 px-1 rounded">const</code> by default, and only use <code className="bg-blue-100 px-1 rounded">let</code> when you need to reassign the variable.</p>
          </div>
        </div>
      )
    },
    operators: {
      title: "Operators in JavaScript",
      content: (
        <div>
          <p className="mb-4">JavaScript includes various types of operators for performing operations on values:</p>
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-medium text-amber-800">Key Concept:</p>
            <p className="text-amber-700">Operators allow you to perform calculations, comparisons, and logical operations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-green-700">Arithmetic Operators</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b"><td className="py-1 font-mono">+</td><td>Addition</td></tr>
                  <tr className="border-b"><td className="py-1 font-mono">-</td><td>Subtraction</td></tr>
                  <tr className="border-b"><td className="py-1 font-mono">*</td><td>Multiplication</td></tr>
                  <tr className="border-b"><td className="py-1 font-mono">/</td><td>Division</td></tr>
                  <tr><td className="py-1 font-mono">%</td><td>Modulus (Remainder)</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">Comparison Operators</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b"><td className="py-1 font-mono">==</td><td>Equal to</td></tr>
                  <tr className="border-b"><td className="py-1 font-mono">===</td><td>Strict equal to</td></tr>
                  <tr className="border-b"><td className="py-1 font-mono">!=</td><td>Not equal to</td></tr>
                  <tr className="border-b"><td className="py-1 font-mono">{">"}</td><td>Greater than</td></tr>
                  <tr><td className="py-1 font-mono">{"<="}</td><td>Less than or equal to</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} p-5 rounded-lg shadow-inner mb-4`}>
            <pre className="whitespace-pre-wrap">
              <code className="font-mono">
                // Arithmetic operators
                let sum = 5 + 3;      // 8
                let diff = 10 - 4;    // 6
                let product = 3 * 6;  // 18
                let quotient = 12 / 4; // 3
                let remainder = 10 % 3; // 1 (modulus)
                
                // Comparison operators
                let isEqual = 5 == "5";    // true (loose equality)
                let isStrictEqual = 5 === "5"; // false (strict equality)
                let isGreater = 10 {">"} 5;   // true
                
                // Logical operators
                let andResult = true && false; // false
                let orResult = true || false;  // true
                let notResult = !true;        // false
              </code>
            </pre>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <p className="font-medium text-blue-700 mb-2">💡 Pro Tip:</p>
            <p className="text-blue-600">Always use strict equality (<code className="bg-blue-100 px-1 rounded">===</code>) to avoid unexpected type coercion.</p>
          </div>
        </div>
      )
    },
    conditionals: {
      title: "Conditionals in JavaScript",
      content: (
        <div>
          <p className="mb-4">Conditionals allow your code to make decisions based on different conditions:</p>
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-medium text-amber-800">Key Concept:</p>
            <p className="text-amber-700">Conditional statements execute different code blocks based on whether a condition is true or false.</p>
          </div>
          <div className="mb-6 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">if...else Statements</h3>
              <p className="mb-2">The most basic conditional statement that executes code if a condition is true.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">if (condition) {"{"} /* code */ {"}"} else {"{"} /* code */ {"}"}</code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">Ternary Operator</h3>
              <p className="mb-2">A shorthand conditional expression.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">condition ? expressionIfTrue : expressionIfFalse</code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-indigo-700">switch Statement</h3>
              <p className="mb-2">Evaluates an expression and matches the expression's value against a series of case clauses.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">switch(expression) {"{"} case value1: /* code */; break; case value2: /* code */; break; {"}"}</code>
            </div>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} p-5 rounded-lg shadow-inner mb-4`}>
            <pre className="whitespace-pre-wrap">
              <code className="font-mono">
                // if, else if, else statements
                let score = 85;
                
                if (score {">="} 90) {"{"}
                  console.log("Grade: A");
                {"}"} else if (score {">="} 80) {"{"}
                  console.log("Grade: B");
                {"}"} else if (score {">="} 70) {"{"}
                  console.log("Grade: C");
                {"}"} else {"{"}
                  console.log("Grade: F");
                {"}"}
                
                // Ternary operator
                let age = 20;
                let canVote = age {">="} 18 ? "Yes" : "No";
                console.log("Can vote:", canVote);
                
                // Switch statement
                let day = 3;
                switch (day) {"{"}
                  case 1:
                    console.log("Monday");
                    break;
                  case 2:
                    console.log("Tuesday");
                    break;
                  case 3:
                    console.log("Wednesday");
                    break;
                  default:
                    console.log("Another day");
                {"}"}
              </code>
            </pre>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <p className="font-medium text-blue-700 mb-2">💡 Pro Tip:</p>
            <p className="text-blue-600">Don't forget to include the <code className="bg-blue-100 px-1 rounded">break</code> statement in each case of a switch statement to prevent fall-through.</p>
          </div>
        </div>
      )
    },
    loops: {
      title: "Loops in JavaScript",
      content: (
        <div>
          <p className="mb-4">Loops allow you to execute code repeatedly until a certain condition is met:</p>
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-medium text-amber-800">Key Concept:</p>
            <p className="text-amber-700">Loops are control structures that repeat a block of code multiple times.</p>
          </div>
          <div className="mb-6 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-teal-700">for Loop</h3>
              <p className="mb-2">Repeats until a specified condition evaluates to false. Best when you know how many iterations you need.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">for (initialization; condition; increment) {"{"} /* code */ {"}"}</code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-teal-700">while Loop</h3>
              <p className="mb-2">Executes as long as a specified condition evaluates to true.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">while (condition) {"{"} /* code */ {"}"}</code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-teal-700">for...of Loop</h3>
              <p className="mb-2">Creates a loop iterating over iterable objects like arrays and strings.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">for (const element of iterable) {"{"} /* code */ {"}"}</code>
            </div>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} p-5 rounded-lg shadow-inner mb-4`}>
            <pre className="whitespace-pre-wrap">
              <code className="font-mono">
                // for loop
                for (let i = 0; i {"<"} 5; i++) {"{"}
                  console.log("For loop iteration:", i);
                {"}"}
                
                // while loop
                let count = 0;
                while (count {"<"} 3) {"{"}
                  console.log("While loop count:", count);
                  count++;
                {"}"}
                
                // do-while loop
                let num = 1;
                do {"{"}
                  console.log("Do-while num:", num);
                  num++;
                {"}"} while (num {"<"} 4);
                
                // for...of loop (arrays)
                const fruits = ["apple", "banana", "orange"];
                for (const fruit of fruits) {"{"}
                  console.log("Fruit:", fruit);
                {"}"}
                
                // for...in loop (objects)
                const person = {"{"}name: "John", age: 30{"}"};
                for (const key in person) {"{"}
                  console.log(key + ":", person[key]);
                {"}"}
              </code>
            </pre>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <p className="font-medium text-blue-700 mb-2">💡 Pro Tip:</p>
            <p className="text-blue-600">Use <code className="bg-blue-100 px-1 rounded">for...of</code> for arrays and <code className="bg-blue-100 px-1 rounded">for...in</code> for objects. Be careful with <code className="bg-blue-100 px-1 rounded">for...in</code> as it iterates over all enumerable properties.</p>
          </div>
        </div>
      )
    },
    functions: {
      title: "Functions in JavaScript",
      content: (
        <div>
          <p className="mb-4">Functions are reusable blocks of code that perform specific tasks:</p>
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 rounded">
            <p className="font-medium text-amber-800">Key Concept:</p>
            <p className="text-amber-700">Functions allow you to define reusable blocks of code that can be called with different arguments.</p>
          </div>
          <div className="mb-6 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-red-700">Function Declaration</h3>
              <p className="mb-2">Defines a named function that can be called later.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">function name(parameters) {"{"} /* code */ return value; {"}"}</code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-red-700">Arrow Functions</h3>
              <p className="mb-2">A more concise syntax for writing functions, introduced in ES6.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                {`const name = (parameters) => { /* code */ return value; }`}
              </code>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-lg mb-2 text-red-700">Function Expression</h3>
              <p className="mb-2">Defines an anonymous function and assigns it to a variable.</p>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">const name = function(parameters) {"{"} /* code */ return value; {"}"}</code>
            </div>
          </div>
          <div className={`${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800'} p-5 rounded-lg shadow-inner mb-4`}>
            <pre className="whitespace-pre-wrap">
              <code className="font-mono">
                // Function declaration
                function greet(name) {"{"}
                  return "Hello, " + name + "!";
                {"}"}
                console.log(greet("Alice"));
                
                // Function expression
                const add = function(a, b) {"{"}
                  return a + b;
                {"}"};
                console.log("2 + 3 =", add(2, 3));
                
                // Arrow function
                const multiply = (x, y) {'=>'} x * y;
                console.log("4 * 5 =", multiply(4, 5));
                
                // Default parameters
                function welcome(name = "Guest") {"{"}
                  return "Welcome, " + name;
                {"}"}
                console.log(welcome());
                console.log(welcome("David"));
              </code>
            </pre>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
            <p className="font-medium text-blue-700 mb-2">💡 Pro Tip:</p>
            <p className="text-blue-600">Arrow functions inherit the <code className="bg-blue-100 px-1 rounded">this</code> value from the surrounding code, making them useful in callbacks and methods.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Theme Toggle */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Learn JavaScript Basics</h1>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Master the fundamentals of JavaScript programming</p>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-800'}`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-md sticky top-4`}>
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Topics</h2>
              <nav>
                <ul className="space-y-2">
                  {tabs.map(tab => (
                    <li key={tab.id}>
                      <button
                        className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                          activeTab === tab.id 
                            ? `${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} font-medium` 
                            : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`
                        } transition-colors`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-800 font-medium">Learning Progress</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">2 of 5 topics completed</p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-4">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                {activeTab === 'variables' && <span className="mr-2">📦</span>}
                {activeTab === 'operators' && <span className="mr-2">🔢</span>}
                {activeTab === 'conditionals' && <span className="mr-2">🔀</span>}
                {activeTab === 'loops' && <span className="mr-2">🔄</span>}
                {activeTab === 'functions' && <span className="mr-2">🧩</span>}
                {lessonContent[activeTab as keyof typeof lessonContent].title}
              </h2>
              {lessonContent[activeTab as keyof typeof lessonContent].content}
            </div>

            {/* Interactive Code Editor */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2">💻</span> Try it yourself
              </h3>
              <div className="mb-4 relative">
                <textarea
                  className="w-full h-60 p-4 font-mono text-sm rounded-lg shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none bg-gray-800 text-white"
                  value={userCode}
                  onChange={(e) => setUserCode(e.target.value)}
                  spellCheck="false"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button 
                    className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                    onClick={() => setUserCode(exampleSnippets[activeTab as keyof typeof exampleSnippets])}
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center font-medium"
                  onClick={runCode}
                >
                  <span className="mr-2">▶️</span> Run Code
                </button>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono h-40 overflow-auto border border-gray-700">
                <pre>{codeOutput || 'Output will appear here...'}</pre>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="font-medium">Tip:</span> Press the Run Code button to execute your code
                </p>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span className="font-medium">Lines:</span> {userCode.split('\n').length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className={`mt-12 py-6 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© 2025 JavaScript Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default JavaScriptBasicsPage