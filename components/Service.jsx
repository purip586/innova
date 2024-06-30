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
      subServices: ["Content Management & Updates", "Maintenance & Error Fixing"],
    },
    {
      title: "Softwares",
      description: "Custom software solutions tailored to your business needs.",
      subServices: ["Enterprise Solutions", "Automation Tools"],
    },
    {
      title: "Mobile Apps",
      description:
        "Development of user-friendly mobile applications for iOS and Android.",
      subServices: ["Native Apps", "Hybrid Apps"],
    },
    {
      title: "Web Apps",
      description: "Creating interactive and responsive web applications.",
      subServices: ["Progressive Web Apps (PWAs)", "Single Page Applications (SPAs)"],
    },
    {
      title: "Branding & Content Creation",
      description: "Building a strong brand identity with compelling content.",
      subServices: ["Logo Design", "Copywriting", "Photography"],
    },
    {
      title: "Creative Designing",
      description:
        "Innovative and aesthetic designs for all your business needs.",
      subServices: ["Graphic Design", "UI/UX Design"],
    },
    {
      title: "Social Media Management",
      description: "Effective management of your social media presence.",
      subServices: [
        "Content Scheduling",
        "Content Management",
        "Engagement & Growth",
        "Social Media Marketing (SMM)",
      ],
    },
    {
      title: "SEO",
      description:
        "Optimizing your website to rank higher in search engine results.",
      subServices: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO"],
    },
    {
      title: "Digital Marketing",
      description:
        "Strategies to boost your online presence and drive traffic.",
      subServices: ["PPC Campaigns", "Email Marketing", "Affiliate Marketing"],
    },
    {
      title: "Cloud Service, Management & DevOps (AWS)",
      description: "Managing cloud services and providing DevOps solutions.",
      subServices: ["Cloud Management", "DevOps Automation"],
    },
    {
      title: "IT Services Export",
      description: "Delivering IT services to international clients.",
      subServices: ["Consulting", "Outsourcing"],
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
            className="p-6 rounded-lg transform transition-transform hover:-translate-y-3 duration-300" style={{ boxShadow: '1px 3px 5px rgba(255, 255, 255, 0.3)' }}
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
