import Image from 'next/image';

export default function FeaturedProjects() {
  const features = [
    {
      img: '/images/features-icon-01.svg',
      title: 'Seamless Collaboration',
      description:
        'Work with developers, designers, and creators in real-time. Share ideas and build together effortlessly.',
    },
    {
      img: '/images/features-icon-02.svg',
      title: 'Meaningful Experiences',
      description:
        'Participate in hands-on projects, gain real-world experience, and grow your portfolio along the way.',
    },
  ];

  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section title */}
        <h2 className="font-aspekta text-2xl font-semibold mb-10 text-center text-slate-800">
          Discover the core features that empower our community
        </h2>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <a
              key={index}
              className="rounded-xl border border-slate-200 hover:shadow-md odd:-rotate-1 even:rotate-1 hover:rotate-0 transition-transform duration-700 hover:duration-100 ease-in-out p-6 bg-white"
              href="#0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-start mb-4">
                  <Image
                    src={feature.img}
                    width={48}
                    height={48}
                    alt={feature.title}
                  />
                </div>
                <div className="text-lg font-aspekta font-semibold mb-2 text-slate-800">
                  {feature.title}
                </div>
                <p className="text-sm text-slate-500 mb-4">
                  {feature.description}
                </p>
                <div className="text-sky-500 flex justify-end">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                  >
                    <path d="M9.586 5 6.293 1.707 7.707.293 13.414 6l-5.707 5.707-1.414-1.414L9.586 7H0V5h9.586Z" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
