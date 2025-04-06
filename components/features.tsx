'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Illustration from '../public/images/features-illustration.svg';

// Import Swiper
import { Swiper } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';


// Array of carousel items
const features = [
  {
    img: '/images/features-icon-01.svg',
    title: 'Collaboration',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    img: '/images/features-icon-02.svg',
    title: 'Experiences',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    img: '/images/features-icon-03.svg',
    title: 'Animation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    img: '/images/features-icon-04.svg',
    title: 'Modeling',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
];

export default function Features() {
  useEffect(() => {
    const carousel = new Swiper('.carousel', {
      // Thêm modules vào đây
      modules: [Autoplay, Navigation],
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    });
  }, []);

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -mt-20 -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          width={1440}
          height={440}
          alt="Illustration"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 font-sans mb-4">
            <p className="text-orange">Code.Hub</p>
          </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-slate-500">
              Code.Hub is a Recruitment Agency, a Learning & Development partner, an Extended Team and Project Delivery expert in the Tech Industry.
              </p>
            </div>
          </div>
          {/* Carousel */}
          <div className="carousel swiper-container">
            <div className="swiper-wrapper">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="swiper-slide h-auto flex flex-col bg-slate-200 p-6 rounded drop-shadow-md"
                >
                  <Image
                    className="mb-3"
                    src={feature.img}
                    width={56}
                    height={56}
                    alt={feature.title}
                  />
                  <div className="grow">
                    <div className="font-sans font-bold text-xl">
                      {feature.title}
                    </div>
                    <div className="text-slate-500 mb-3">
                      {feature.description}
                    </div>
                  </div>
                  <div className="text-right">
                    <a
                      className="font-medium text-indigo-500 inline-flex items-center transition duration-150 ease-in-out group"
                      href="#0"
                    >
                      Learn More{' '}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <div className="flex mt-12 space-x-4 justify-end">
            <button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-400 hover:bg-slate-300 transition duration-150 ease-in-out">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group border border-slate-400 hover:bg-slate-300 transition duration-150 ease-in-out">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-slate-400 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
