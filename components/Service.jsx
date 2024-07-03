"use client";
import { useInView } from "react-intersection-observer";

const Service = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Website Management",
      description:
        "Comprehensive management of your website to ensure it runs smoothly and efficiently.",
      subServices: [
        "Complete Package of Website Services",
        "Web Design & Development",
        "Content Management & Updates",
        "Maintenance & Error Fixing",
        "Web Apps Development",
        "Landing Pages & Promotions",
        "Domain & Hosting Management",
      ],
    },
    {
      title: "Digital Marketing & SEO",
      description:
        "Strategies to boost your online presence and drive traffic. We optimize your website to rank higher in search engine results.",
      subServices: [
        "Email Marketing",
        "Google My Business Setup",
        "Local SEO & Google Map Setup",
        "Content Management",
        "Social Media Marketing (SMM)",
        "Social Media Management",
        "Google Ads Management",
        "Facebook Ads Management",
        "Effective management of your social media presence",
      ],
    },
    {
      title: "Softwares & APPS",
      description:
        "Custom software solutions tailored to your business needs. We develop user-friendly mobile applications for iOS and Android and create interactive and responsive web applications.",
      subServices: [
        "Enterprise Solutions",
        "E-commerce",
        "Retail Store POS",
        "Database Scraping software",
        "ERP",
        "Accounting",
        "Employee Management",
        "Hospital, Clinic, Pharmacy Management",
        "Hotel Management",
        "Mobile Apps",
        "Web Apps",
      ],
    },
    {
      title: "Branding & Content Creation",
      description:
        "Building a strong brand identity with compelling content. We provide innovative and aesthetic designs for all your business needs.",
      subServices: [
        "Logo Design",
        "Content Writing",
        "Creative Designing",
        "UI/UX Design",
      ],
    },
    {
      title: "Cloud Services, Management & DevOps (AWS)",
      description:
        "Managing cloud services and providing DevOps solutions to efficiently run your online businesses and web apps on the cloud, with Continuous integration and continuous delivery system.",
      subServices: ["Cloud Hosting & Management", "CI/CD DevOps Automation"],
    },
    {
      title: "Other Services",
      description: "",
      subServices: ["IT Consulting", "IT Outsourcing", "Internship"]
    },
  ];

  return (
    <div
      ref={ref}
      className={`text-[#e0e0e0] px-6 pt-16 md:px-28 fade-up ${
        inView ? "fade-up-active" : ""
      }`}
    >
      <h2 className="text-3xl text-center py-28">
        A comprehensive web and app service for your digital business
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-lg transform transition-transform hover:-translate-y-3 duration-300"
            style={{ boxShadow: "1px 3px 5px rgba(255, 255, 255, 0.3)" }}
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="mb-4">{service.description}</p>
            <ul className="list-disc list-inside">
              {service.subServices.map((subService, subIndex) => (
                <li key={subIndex}>{subService}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
