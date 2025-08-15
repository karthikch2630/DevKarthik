// Certifications.jsx
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "./Certifications.css";

const certifications = [
  
  {
    title: "Introduction to Web Development with HTML5, CSS3, and JavaScript",
    provider: "IBM",
    link: "https://courses.edx.org/certificates/163bb8761a0e478196f620e779708ce2?_gl=1*14e0vs3*_gcl_au*MTk3NjUwMzk3Mi4xNzU0Mzk0Njgx*_ga*NTUxMzg2ODgwLjE3NTQzOTQ2ODE.*_ga_D3KS4KMDT0*czE3NTUyNTg5NTQkbzQkZzEkdDE3NTUyNTk0MDEkajYwJGwwJGgw",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Developing Front End Apps with React",
    provider: "IBM",
    link: "https://courses.edx.org/certificates/7cec0a5da7af497a882e312205ba7279?_gl=1*14e0vs3*_gcl_au*MTk3NjUwMzk3Mi4xNzU0Mzk0Njgx*_ga*NTUxMzg2ODgwLjE3NTQzOTQ2ODE.*_ga_D3KS4KMDT0*czE3NTUyNTg5NTQkbzQkZzEkdDE3NTUyNTk0MDEkajYwJGwwJGgw",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Back-end Application Development with Node.js and Express",
    provider: "IBM",
    link: "https://courses.edx.org/certificates/2b0a0fe140a14169af48d9b3a86d0c1f?_gl=1*18b4jx8*_gcl_au*MTk3NjUwMzk3Mi4xNzU0Mzk0Njgx*_ga*NTUxMzg2ODgwLjE3NTQzOTQ2ODE.*_ga_D3KS4KMDT0*czE3NTUyNTg5NTQkbzQkZzEkdDE3NTUyNTk0MDEkajYwJGwwJGgw",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Git and GitHub Basics",
    provider: "IBM",
    link: "https://courses.edx.org/certificates/0d1700a60836465d9d09d291f88a6da8?_gl=1*14e0vs3*_gcl_au*MTk3NjUwMzk3Mi4xNzU0Mzk0Njgx*_ga*NTUxMzg2ODgwLjE3NTQzOTQ2ODE.*_ga_D3KS4KMDT0*czE3NTUyNTg5NTQkbzQkZzEkdDE3NTUyNTk0MDEkajYwJGwwJGgw",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Introduction to Cloud Computing",
    provider: "IBM",
    link: "https://courses.edx.org/certificates/84d5f68bfb93467da6b0973b9c3b0bf7?_gl=1*156qyuu*_gcl_au*MTk3NjUwMzk3Mi4xNzU0Mzk0Njgx*_ga*NTUxMzg2ODgwLjE3NTQzOTQ2ODE.*_ga_D3KS4KMDT0*czE3NTUyNTg5NTQkbzQkZzEkdDE3NTUyNTk0MDEkajYwJGwwJGgw",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    title: "Full Stack Developer Professional Certificate",
    provider: "IBM & edX",
    link: "https://credentials.edx.org/credentials/4b31967eb6884b1a9ed7fc7ca86fa8af/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
];


const Certifications = () => {
  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-500 mb-10 text-center">
          Certifications
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.05}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => window.open(cert.link, "_blank")}
                className="cursor-pointer bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-between min-h-[250px]"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-20 h-20 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 text-center">
                    {cert.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mt-2">
                  {cert.provider}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

