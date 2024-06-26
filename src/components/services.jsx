import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      name: "Frontend For Web",
      description:
        "Crafting engaging and responsive user interfaces using HTML, CSS, and JavaScript to ensure seamless interactions and delightful user experiences.",
      linkedin: "https://linkedin.com/in/priyannxhuu",
      twitter: "https://twitter.com/priyannxhuu",
      url: "https://yourwebsite.com/front-end-for-web",
    },
    {
      name: "Single Page Web",
      description:
        "Building dynamic and interactive single-page applications (SPAs) using React JS or Next JS for faster load times and smoother navigation.",
      linkedin: "https://linkedin.com/in/priyannxhuu",
      twitter: "https://twitter.com/priyannxhuu",
      url: "https://yourwebsite.com/single-page-web",
    },
    {
      name: "Multiple Page Web",
      description:
        "Developing robust and scalable multi-page websites with efficient navigation and organized content structure to enhance user engagement.",
      linkedin: "https://linkedin.com/in/priyannxhuu",
      twitter: "https://twitter.com/priyannxhuu",
      url: "https://yourwebsite.com/multiple-page-web",
    },
  ];

  return (
    <section className="px-10 mb-10 flex justify-center items-center w-full" id="services">
      <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-[80vw]">
        <h1 className="text-2xl md:text-3xl text-slate-200 font-medium self-start">
          Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-stretch gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-3 rounded-md p-5 max-w-[400px] border-b-2 border-cyan-600 card"
            >
              <h1 className="text-2xl text-slate-200 font-semibold self-start mt-0">
                {service.name}
              </h1>
              <h2 className="text-slate-300 font-medium mt-0 mb-auto">
                {service.description}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;