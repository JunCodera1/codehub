"use client"
import React, { useState } from 'react';

// Định nghĩa kiểu dữ liệu cho bài học
interface Lesson {
  title: string;
  content: string;
}

// Định nghĩa kiểu dữ liệu cho tất cả các bài học
interface Lessons {
  [key: string]: Lesson;
}

const HTMLTutorialPage: React.FC = () => {
  const [activeLesson, setActiveLesson] = useState<string>('introduction');

  const lessons: Lessons = {
    introduction: {
      title: 'HTML - Introduction',
      content: `
        <h2>What is HTML?</h2>
        <p>HTML is a markup language for describing web documents (web pages).</p>
        <ul>
          <li>HTML stands for Hyper Text Markup Language</li>
          <li>A markup language is a set of markup tags</li>
          <li>HTML documents are described by HTML tags</li>
          <li>Each HTML tag describes different document content</li>
        </ul>
        
        <h2>HTML Tags</h2>
        <p>HTML markup tags are usually called HTML tags:</p>
        <ul>
          <li>HTML tags are keywords surrounded by angle brackets like &lt;html&gt;</li>
          <li>HTML tags normally come in pairs like &lt;b&gt; and &lt;/b&gt;</li>
          <li>The first tag in a pair is the start tag, the second tag is the end tag</li>
          <li>The end tag is written like the start tag, but with a forward slash inserted before the tag name</li>
        </ul>
      `
    },
    basic: {
      title: 'HTML - Basic',
      content: `
        <h2>HTML Documents</h2>
        <p>All HTML documents must start with a document type declaration: &lt;!DOCTYPE html&gt;.</p>
        <p>The HTML document itself begins with &lt;html&gt; and ends with &lt;/html&gt;.</p>
        <p>The visible part of the HTML document is between &lt;body&gt; and &lt;/body&gt;.</p>
        
        <h2>HTML Example</h2>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;

&lt;/body&gt;
&lt;/html&gt;
        </pre>
      `
    },
    elements: {
      title: 'HTML - Elements',
      content: `
        <h2>HTML Elements</h2>
        <p>An HTML element usually consists of a start tag and end tag, with the content inserted in between:</p>
        <p>&lt;tagname&gt;Content goes here...&lt;/tagname&gt;</p>
        <p>HTML elements can be nested (elements can contain elements).</p>
        <p>All HTML documents consist of nested HTML elements.</p>
        
        <h2>Common HTML Elements</h2>
        <ul>
          <li>&lt;h1&gt; to &lt;h6&gt; - Headings</li>
          <li>&lt;p&gt; - Paragraphs</li>
          <li>&lt;a&gt; - Links</li>
          <li>&lt;img&gt; - Images</li>
          <li>&lt;div&gt; - Divisions</li>
          <li>&lt;span&gt; - Inline containers</li>
          <li>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt; - Lists</li>
          <li>&lt;table&gt; - Tables</li>
          <li>&lt;form&gt; - Forms</li>
        </ul>
      `
    },
    attributes: {
      title: 'HTML - Attributes',
      content: `
        <h2>HTML Attributes</h2>
        <p>HTML attributes provide additional information about HTML elements.</p>
        <ul>
          <li>All HTML elements can have attributes</li>
          <li>Attributes provide additional information about an element</li>
          <li>Attributes are always specified in the start tag</li>
          <li>Attributes usually come in name/value pairs like: name="value"</li>
        </ul>
        
        <h2>Common Attributes</h2>
        <ul>
          <li>href - Specifies the URL of the page the link goes to</li>
          <li>src - Specifies the path to the image to be displayed</li>
          <li>width, height - Specifies the width and height of an element</li>
          <li>alt - Specifies an alternate text for an image</li>
          <li>style - Specifies an inline CSS style for an element</li>
          <li>class - Specifies one or more class names for an element</li>
          <li>id - Specifies a unique id for an element</li>
        </ul>
      `
    },
    headings: {
      title: 'HTML - Headings',
      content: `
        <h2>HTML Headings</h2>
        <p>HTML headings are defined with the &lt;h1&gt; to &lt;h6&gt; tags.</p>
        <p>&lt;h1&gt; defines the most important heading. &lt;h6&gt; defines the least important heading.</p>
        
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>
        <h4>This is heading 4</h4>
        <h5>This is heading 5</h5>
        <h6>This is heading 6</h6>
      `
    },
    paragraphs: {
      title: 'HTML - Paragraphs',
      content: `
        <h2>HTML Paragraphs</h2>
        <p>HTML paragraphs are defined with the &lt;p&gt; tag.</p>
        <p>A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.</p>
        
        <h2>HTML Display</h2>
        <p>You cannot be sure how HTML will be displayed.</p>
        <p>Large or small screens, and resized windows will create different results.</p>
        <p>With HTML, you cannot change the output by adding extra spaces or extra lines in your HTML code.</p>
        <p>The browser will remove any extra spaces and extra lines when the page is displayed.</p>
      `
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar - Table of Contents */}
      <div className="w-64 bg-gray-800 text-white p-4">
        <div className="text-xl font-bold mb-6">HTML Tutorial</div>
        <ul className="space-y-2">
          {Object.keys(lessons).map((key) => (
            <li key={key} className="cursor-pointer">
              <div 
                className={`p-2 rounded ${activeLesson === key ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                onClick={() => setActiveLesson(key)}
              >
                {lessons[key].title}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4">{lessons[activeLesson].title}</h1>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: lessons[activeLesson].content }}
          />

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-4 border-t">
            <button 
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => {
                const lessonKeys = Object.keys(lessons);
                const currentIndex = lessonKeys.indexOf(activeLesson);
                if (currentIndex > 0) {
                  setActiveLesson(lessonKeys[currentIndex - 1]);
                }
              }}
              disabled={Object.keys(lessons).indexOf(activeLesson) === 0}
            >
              Previous
            </button>
            
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                const lessonKeys = Object.keys(lessons);
                const currentIndex = lessonKeys.indexOf(activeLesson);
                if (currentIndex < lessonKeys.length - 1) {
                  setActiveLesson(lessonKeys[currentIndex + 1]);
                }
              }}
              disabled={Object.keys(lessons).indexOf(activeLesson) === Object.keys(lessons).length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLTutorialPage;