export const metadata = {
  title: 'Sign Up - Saas Free',
  description: 'Create your account to get started with Saas Free',
};

import Image from 'next/image';
import Link from 'next/link';

export default function SignUp() {
  const avatars = [
      { src: '/images/avatar-01.png', alt: 'Team Member 1' },
      { src: '/images/avatar-02.png', alt: 'Team Member 2' },
      { src: '/images/avatar-03.png', alt: 'Team Member 3' },
      { src: '/images/avatar-04.png', alt: 'Team Member 4' },
  ];

  return (
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="lg:flex lg:space-x-20">
                  {/* Left side */}
                  <div className="grow lg:mt-20 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
                      {/* Avatars */}
                      <div className="flex -space-x-3 -ml-0.5 mb-6">
                          {avatars.map((avatar, index) => (
                              <Image
                                  key={index}
                                  className="rounded-full border-2 border-slate-900 box-content"
                                  src={avatar.src}
                                  width={40}
                                  height={40}
                                  alt={avatar.alt}
                              />
                          ))}
                      </div>
                      {/* Headline */}
                      <h1 className="h2 font-sans mb-8 text-center lg:text-left">
                          Join Us Free Today
                      </h1>
                      {/* Benefits List */}
                      <ul className="inline-flex flex-col text-lg text-slate-500 space-y-3">
                          <li className="flex items-center">
                              <svg
                                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                                  viewBox="0 0 12 12"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>Only free course</span>
                          </li>
                          <li className="flex items-center">
                              <svg
                                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                                  viewBox="0 0 12 12"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>No credit card required</span>
                          </li>
                          <li className="flex items-center">
                              <svg
                                  className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0"
                                  viewBox="0 0 12 12"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                              </svg>
                              <span>Cancel anytime</span>
                          </li>
                      </ul>
                  </div>

                  {/* Right side */}
                  <div className="relative w-full max-w-md mx-auto">
                      {/* Bg gradient */}
                      <div
                          className="absolute inset-0 opacity-40 bg-gradient-to-t from-transparent to-slate-200 -z-10"
                          aria-hidden="true"
                      />
                      <div className="p-6 md:p-8">
                          <div className="font-sans text-xl font-bold mb-6">Create Your Account</div>
                          {/* Form */}
                          <form>
                              <div className="space-y-4">
                                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                      <div className="sm:w-1/2">
                                          <label
                                              className="block text-sm text-slate-800 font-medium mb-1"
                                              htmlFor="first-name"
                                          >
                                              First Name <span className="text-rose-500">*</span>
                                          </label>
                                          <input
                                              id="first-name"
                                              className="form-input text-sm py-2 w-full"
                                              type="text"
                                              required
                                          />
                                      </div>
                                      <div className="sm:w-1/2">
                                          <label
                                              className="block text-sm text-slate-800 font-medium mb-1"
                                              htmlFor="last-name"
                                          >
                                              Last Name <span className="text-rose-500">*</span>
                                          </label>
                                          <input
                                              id="last-name"
                                              className="form-input text-sm py-2 w-full"
                                              type="text"
                                              required
                                          />
                                      </div>
                                  </div>
                                  <div>
                                      <label
                                          className="block text-sm text-slate-800 font-medium mb-1"
                                          htmlFor="email"
                                      >
                                          Email <span className="text-rose-500">*</span>
                                      </label>
                                      <input
                                          id="email"
                                          className="form-input text-sm py-2 w-full"
                                          type="email"
                                          required
                                      />
                                  </div>
                                  <div>
                                      <label
                                          className="block text-sm text-slate-800 font-medium mb-1"
                                          htmlFor="password"
                                      >
                                          Password <span className="text-rose-500">*</span>
                                      </label>
                                      <input
                                          id="password"
                                          className="form-input text-sm py-2 w-full"
                                          type="password"
                                          required
                                      />
                                  </div>
                                  <div>
                                      <label
                                          className="block text-sm text-slate-800 font-medium mb-1"
                                          htmlFor="confirm-password"
                                      >
                                          Confirm Password <span className="text-rose-500">*</span>
                                      </label>
                                      <input
                                          id="confirm-password"
                                          className="form-input text-sm py-2 w-full"
                                          type="password"
                                          required
                                      />
                                  </div>
                                  <div className="flex items-center">
                                      <input
                                          id="terms"
                                          type="checkbox"
                                          className="form-checkbox text-indigo-500"
                                          required
                                      />
                                      <label htmlFor="terms" className="text-sm text-slate-600 ml-2">
                                          I agree to the{' '}
                                          <Link href="/terms" className="text-indigo-500 hover:underline">
                                              Terms & Conditions
                                          </Link>
                                      </label>
                                  </div>
                              </div>
                              <div className="mt-6">
                                  <button className="btn-sm text-sm text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-sm">
                                      Sign Up
                                  </button>
                              </div>
                              <div className="mt-4 text-center text-sm text-slate-600">
                                  Already have an account?{' '}
                                  <Link href="/login" className="text-indigo-500 hover:underline">
                                      Log in
                                  </Link>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}