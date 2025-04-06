export default function Faqs() {
  // Array of FAQ items
  const faqs = [
    {
      question:
        'Nullam laoreet lacus a lectus dignissim, vel ultrices lorem mattis',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.',
    },
    {
      question:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada',
      answer:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
    },
    {
      question:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
      answer:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'Cras vehicula nisi id aliquet tincidunt',
      answer:
        'Curabitur eget velit orci. Nam quis mauris sit amet metus vehicula faucibus sed sit amet nunc.',
    },
    {
      question: 'Integer id sapien nec ipsum gravida fermentum',
      answer:
        'Morbi scelerisque, nisi id tincidunt tincidunt, ligula lorem varius libero, ut egestas libero nulla eget tortor.',
    },
    {
      question: 'Suspendisse a nulla sit amet purus blandit luctus',
      answer:
        'Proin tincidunt, augue non vestibulum aliquam, arcu tortor blandit dolor, a tincidunt mi felis nec libero.',
    },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-sans">FAQs</h2>
          </div>
          {/* Grid layout for FAQs */}
          <div className="grid md:grid-cols-2 gap-12">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2">
                <h4 className="text-xl font-sans font-medium">
                  {faq.question}
                </h4>
                <p className="text-slate-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
