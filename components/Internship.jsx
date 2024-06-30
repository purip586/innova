"use client";

import { useState } from "react";

const Internship = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Here you can implement your subscription logic, such as API calls or state management.
    // For demonstration purposes, we will just set subscribed to true.
    setSubscribed(true);
  };
  return (
    <div className="text-[#e0e0e0] px-6 pt-16 md:px-28 text-center">
      <h2 className="text-3xl py-16">Innova IT Internship Program</h2>

      {!subscribed ? (
        <div>
          <p className="text-lg pt-8">
            Kickstart your career with our Industry Internship Program. Gain
            hands-on experience and work alongside experts in the field. Apply
            now and be a part of our dynamic team!
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

export default Internship;
