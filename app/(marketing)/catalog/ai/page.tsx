"use client";
import React, { useState } from 'react';
import { BookOpen, Code, Brain, ChevronRight, ChevronDown, ExternalLink, Github , Youtube, Database, Check } from 'lucide-react';

const AILearningPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(i => i !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };
  

  const topics = [
    {
      title: 'Machine Learning Fundamentals',
      icon: <Database size={20} />,
      description: 'Learn the core concepts of machine learning including supervised, unsupervised learning, and neural networks.',
      difficulty: 'Beginner'
    },
    {
      title: 'Deep Learning Architecture',
      icon: <Brain size={20} />,
      description: 'Explore CNNs, RNNs, Transformers, and other advanced neural network architectures.',
      difficulty: 'Intermediate'
    },
    {
      title: 'Natural Language Processing',
      icon: <BookOpen size={20} />,
      description: 'Discover how AI understands and generates human language using techniques like tokenization and embeddings.',
      difficulty: 'Intermediate'
    },
    {
      title: 'Computer Vision',
      icon: <Youtube size={20} />,
      description: 'Learn how AI systems can interpret and understand visual information from images and videos.',
      difficulty: 'Advanced'
    },
    {
      title: 'Practical Python for AI',
      icon: <Code size={20} />,
      description: 'Hands-on coding with Python libraries like TensorFlow, PyTorch, and scikit-learn.',
      difficulty: 'All Levels'
    },
    {
      title: 'Ethics in AI',
      icon: <Github size={20} />,
      description: 'Explore the ethical considerations, bias, and responsible AI development practices.',
      difficulty: 'All Levels'
    }
  ];

  const faqs = [
    {
      question: 'Do I need a background in programming to learn AI?',
      answer: 'While programming knowledge (especially Python) is beneficial, many platforms offer no-code options for beginners. However, to progress in AI development, basic programming skills will eventually be necessary.'
    },
    {
      question: 'How much math do I need to know?',
      answer: 'A foundation in linear algebra, calculus, probability, and statistics is helpful for understanding the underlying concepts. However, many practical applications can be learned while building up these mathematical skills gradually.'
    },
    {
      question: 'What equipment do I need to get started?',
      answer: 'For beginners, a standard computer is sufficient as you can use cloud-based platforms. For more advanced projects, a computer with a good GPU will be beneficial for training models locally.'
    },
    {
      question: 'How long does it take to learn AI?',
      answer: 'Learning the basics can take a few months, but becoming proficient is an ongoing journey. With dedicated study, you can build simple AI models within 3-6 months, while mastery might take years of practice and keeping up with rapidly evolving techniques.'
    }
  ];

  const resources = [
    { name: 'Coursera - Machine Learning Specialization', type: 'Course', level: 'Beginner to Intermediate' },
    { name: 'Fast.ai - Practical Deep Learning', type: 'Course', level: 'Beginner to Advanced' },
    { name: 'Hands-On Machine Learning with Scikit-Learn & TensorFlow', type: 'Book', level: 'Intermediate' },
    { name: 'Deep Learning by Ian Goodfellow', type: 'Book', level: 'Advanced' },
    { name: 'Kaggle Competitions', type: 'Practice', level: 'All Levels' },
    { name: 'arXiv Papers', type: 'Research', level: 'Advanced' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">AI Learning</h1>
          <p className="text-xl opacity-90">Start your journey to explore and master AI technology</p>
        </div>
      </header>

      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex overflow-x-auto">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-4 font-medium ${activeTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('topics')}
            className={`px-6 py-4 font-medium ${activeTab === 'topics' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            Topics
          </button>
          <button 
            onClick={() => setActiveTab('resources')}
            className={`px-6 py-4 font-medium ${activeTab === 'resources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            Resources
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`px-6 py-4 font-medium ${activeTab === 'faq' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
          >
            FAQ
          </button>
        </div>
      </nav>

      <main className="flex-grow max-w-6xl mx-auto w-full p-6">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">The AI Learning Path</h2>
              <p className="text-gray-700 mb-4">
                Artificial Intelligence (AI) is a rapidly evolving technology field, opening new opportunities and transforming the way we work, live, and interact. Learning AI requires patience, analytical thinking, and a passion for exploration.
              </p>
              <p className="text-gray-700 mb-4">
                Your learning path will include mathematical foundations, programming, and core machine learning concepts before diving into advanced areas such as deep learning, natural language processing, or computer vision.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <h3 className="font-bold text-blue-700">Tips to get started:</h3>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Build a solid foundation in math and Python</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Learn by doing – build small projects to apply knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Join learning communities to share and learn with others</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Be persistent and continuously update your knowledge</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Brain className="mr-2 text-blue-500" size={24} />
                  Why Learn AI?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Great career opportunities with attractive salaries</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Ability to create impactful solutions for society</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>A fast-growing field full of exciting innovations</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Intellectual challenge and continuous learning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Code className="mr-2 text-blue-500" size={24} />
                  Essential Skills
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Programming: Python, R, or related languages</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Math: Linear algebra, calculus, probability, statistics</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Data analysis and big data processing</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={18} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Critical thinking and problem-solving</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* Topics, Resources, FAQ remain the same – already in English */}

      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">AI Learning – Educational Platform</h3>
              <p className="text-gray-400 mt-1">Supporting your learning journey in the AI field</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} AI Learning Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AILearningPage;
