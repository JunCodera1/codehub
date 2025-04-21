export default function Faqs() {
  // Array of FAQ items related to CodeHub as a programming learning platform
  const faqs = [
    {
      question: 'What is CodeHub?',
      answer:
        'CodeHub is an online platform designed to help learners of all levels improve their programming skills. It offers tutorials, coding challenges, and a collaborative environment to enhance your learning experience.',
    },
    {
      question: 'How do I start learning on CodeHub?',
      answer:
        'To start learning on CodeHub, simply sign up for an account, explore our courses, and choose the programming languages or topics that interest you. You can track your progress and participate in coding challenges to test your skills.',
    },
    {
      question: 'Can I collaborate with others on projects?',
      answer:
        'Yes! CodeHub allows you to collaborate with other learners and experienced developers on various coding projects. Join a team, share ideas, and build solutions together to improve your skills.',
    },
    {
      question: 'What kind of courses does CodeHub offer?',
      answer:
        'CodeHub offers a variety of courses covering topics such as web development, mobile app development, data science, machine learning, and more. Our courses are designed for all skill levels, from beginners to advanced programmers.',
    },
    {
      question: 'Do I need any prior programming experience to use CodeHub?',
      answer:
        'No prior experience is necessary to start learning on CodeHub. We offer beginner-friendly courses and resources to help you get started, and you can progress at your own pace as you build your skills.',
    },
    {
      question: 'How do I track my progress on CodeHub?',
      answer:
        'CodeHub provides a built-in progress tracker for each course. You can view your completed lessons, coding challenges, and earned badges as you work through the platform. It’s a great way to stay motivated!',
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-sans">Frequently Asked Questions (FAQs)</h2>
          </div>
          {/* Grid layout for FAQs */}
          <div className="grid md:grid-cols-2 gap-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-xl font-sans font-medium">{faq.question}</h4>
                <p className="text-slate-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
