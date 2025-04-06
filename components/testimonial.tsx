'use client';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";

type TestimonialType = {
  img: string;
  name: string;
  username?: string;
  date: string;
  rating?: number;
  videoUrl?: string;
  videoThumb?: StaticImageData;
  channel?: "Twitter" | "Google" | "YouTube" | string;
};

interface TestimonialProps {
  testimonial: TestimonialType;
  cloned?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Testimonial({
  testimonial,
  cloned = false,
  className = "",
  children,
}: TestimonialProps) {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  
  // Simple animation effect for background gradient
  useEffect(() => {
    let animationFrameId: number;
    let angle = 0;
    
    const animate = () => {
      // Moving in a circular pattern
      const x = 50 + 25 * Math.cos(angle);
      const y = 50 + 25 * Math.sin(angle);
      setGradientPosition({ x, y });
      
      angle += 0.005;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const renderChannelIcon = (channel: string) => {
    switch (channel) {
      case "Twitter":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="15"
          >
            <path
              fillRule="evenodd"
              d="M16.928 14.054H11.99L8.125 9.162l-4.427 4.892H1.243L6.98 7.712.928.054H5.99L9.487 4.53 13.53.054h2.454l-5.358 5.932 6.303 8.068Zm-4.26-1.421h1.36L5.251 1.4H3.793l8.875 11.232Z"
            />
          </svg>
        );
      case "Google":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
          >
            <path d="M15.68 6.546H8.044v3.273h4.328c-.692 2.182-2.4 2.909-4.363 2.909a4.728 4.728 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8.01 16.001c4.411 0 8.4-2.909 7.671-9.455Z" />
          </svg>
        );
      case "YouTube":
        return (
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="13"
          >
            <path d="M16.044 3.416c-.178-1.303-.762-2.213-2.158-2.438C11.693.54 8.294.48 8.294.48s-3.4-.059-5.606.303C1.284.958.568 1.846.446 3.143.223 4.44.19 6.34.19 6.34s-.033 1.9.144 3.203c.178 1.303.762 2.214 2.158 2.438 2.193.438 5.592.498 5.592.498s3.4.059 5.606-.303c1.405-.275 2.02-1.065 2.242-2.36.223-1.297.256-3.197.256-3.197s.033-1.9-.144-3.203ZM6.137 9.444l.105-5.999 4.946 3.087-5.051 2.912Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Create a dynamic gradient style based on the animated position
  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(99, 102, 241, 0.15) 0%, rgba(255, 255, 255, 0) 70%)`,
  };

  return (
    <article
      className={`relative flex flex-col rounded-2xl bg-white/70 p-5 shadow-lg shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] md:odd:-rotate-1 md:even:rotate-1 ${className}`}
    >
      {/* Animated gradient overlay replacing Three.js background */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none" 
        style={gradientStyle}
      />
      
      <header className="mb-4 flex items-center gap-3 relative z-10">
        <Image
          className="shrink-0 rounded-full"
          src={testimonial.img}
          width={44}
          height={44}
          alt={testimonial.name}
        />
        <div>
          <div className="font-bold">{testimonial.name}</div>
          {testimonial.username && (
            <a
              className="text-sm font-medium text-gray-500/80 transition hover:text-gray-500"
              href="#0"
              tabIndex={cloned ? -1 : 0}
            >
              {testimonial.username}
            </a>
          )}
        </div>
      </header>

      {testimonial.rating && (
        <div className="mb-3 inline-flex relative z-10">
          <span className="sr-only">Rating is {testimonial.rating} out of 5</span>
          <div className="relative">
            <svg
              className="fill-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width={114}
              height={18}
            >
              <path d="M..." /> {/* Keep original star path */}
            </svg>
            <div className="absolute inset-0 overflow-hidden" style={{ width: "100%" }}>
              <svg
                className="fill-amber-400"
                xmlns="http://www.w3.org/2000/svg"
                width={114}
                height={18}
              >
                <path d="M..." /> {/* Same star path as above */}
              </svg>
            </div>
          </div>
        </div>
      )}

      {testimonial.videoThumb ? (
        <div className="grow relative z-10">
          <p className="mb-4 font-semibold">{children}</p>
          <a href={testimonial.videoUrl} tabIndex={cloned ? -1 : 0}>
            <Image
              className="w-full"
              src={testimonial.videoThumb}
              width={312}
              height={180}
              alt="View on YouTube"
            />
          </a>
        </div>
      ) : (
        <div className="grow text-sm text-gray-700 relative z-10">{children}</div>
      )}

      <footer className="mt-4 flex items-center gap-2.5 text-gray-700 relative z-10">
        {testimonial.channel && renderChannelIcon(testimonial.channel)}
        <div className="text-xs">{testimonial.date}</div>
      </footer>
    </article>
  );
}