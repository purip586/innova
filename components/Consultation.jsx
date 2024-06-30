"use client";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Consultation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Here you can implement your subscription logic, such as API calls or state management.
    // For demonstration purposes, we will just set subscribed to true.
    setSubscribed(true);
  };

  return (
    <div
      ref={ref}
      className={`text-[#e0e0e0] text-center px-6 py-28 md:px-28 fade-up ${
        inView ? "fade-up-active" : ""
      }`}
    >
      <h2 className="text-3xl pt-28 pb-16">
        Free IT Consultation for your Business
      </h2>

      {!subscribed ? (
        <div>
          <p className="text-lg">
            Grab this offer. Subscribe with your email to receive our free IT
            consultation, tailored specifically to your business.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubscribe();
            }}
            className="flex items-center mx-auto rounded-md overflow-hidden my-8 w-full md:w-[600px]"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-4 flex-grow focus:outline-none text-gray-800"
              required
            />
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p>Thank you for subscribing! We will be in touch shortly.</p>
        </div>
      )}
    </div>
  );
};

export default Consultation;
