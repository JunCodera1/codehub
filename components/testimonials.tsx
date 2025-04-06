import Illustration from '../public/images/pricing-illustration.svg';
import Image from 'next/image';
import Testimonial from './testimonial';

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: '/images/testimonial-01.png',
      name: 'Alice Carter',
      username: '@alice_in_tech',
      date: 'June 23, 2028',
      content:
        'CodeHub has completely transformed my approach to learning programming. The structured courses and community support have made learning so much more engaging!',
      channel: 'Twitter',
    },
    {
      img: '/images/testimonial-02.png',
      name: 'Dylan Harper',
      username: '@dharper_99',
      date: 'July 8, 2028',
      content:
        "CodeHub's interactive tutorials and mentorship program have taken my coding skills to the next level. It feels like I'm working on real-world projects!",
      channel: 'Twitter',
    },
    {
      img: '/images/testimonial-03.png',
      name: 'Sophia Nguyen',
      username: '@soph_nguy',
      date: 'August 14, 2028',
      content:
        'I love how CodeHub integrates hands-on projects with learning. It has drastically boosted my productivity, and I feel more confident as a developer.',
      channel: 'Twitter',
    },
    {
      img: '/images/testimonial-04.png',
      name: 'Liam Garcia',
      username: '@liam.codes',
      date: 'September 3, 2028',
      content:
        "CodeHub is hands down the best platform for developers at any stage. It's user-friendly, fast, and the community makes it feel like a family. Highly recommend it!",
      channel: 'Twitter',
    },
  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      {/* Illustration */}
      <div
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -mb-24 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          alt="Pricing Illustration"
        />
      </div>
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              What Developers Love About CodeHub
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>

          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
