"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger multiple times
    threshold: 0.1, // Trigger when 10% of the element is in view
  });
  return (
    <div className="text-[#e0e0e0] px-6 pt-16 md:px-28 text-center md:text-left items-center text-3xl flex flex-col md:flex-row gap-8">
      <div
        ref={ref}
        className={`w-full md:w-1/2 fade-up ${inView ? "fade-up-active" : ""}`}
      >
        <h1>
          For entrepreneurs, managing your business website can be both
          challenging and time-consuming, so let us handle it for you.
        </h1>
      </div>
      <div
        className={`w-full md:w-1/2 fade-up ${inView ? "fade-up-active" : ""}`}
      >
        <Image
          src="/hero_image.jpg"
          alt="Website Management"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
