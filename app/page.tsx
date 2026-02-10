"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-serif relative overflow-hidden">
      {/* Background Accents with subtle animation */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.6 }}
          animate={{ scale: 1.05, opacity: 0.9 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="w-[700px] h-[700px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-full blur-3xl absolute -top-60 -left-40"
        ></motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="w-[600px] h-[600px] bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 rounded-full blur-3xl absolute bottom-0 right-0"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-[400px] h-[400px] bg-gradient-to-b from-gray-700 to-gray-900 rounded-full blur-2xl absolute top-1/2 left-1/3"
        ></motion.div>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-[300px] h-[300px] bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 rounded-full blur-2xl absolute top-1/3 right-1/4"
        ></motion.div>
      </div>

      {/* Header / Logo */}
      <header className="flex flex-col items-center justify-center py-12 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[100px] font-extralight tracking-[0.3em] mb-6"
          style={{ fontFamily: 'Didot, serif', letterSpacing: '0.15em' }}
        >
          NJS
        </motion.h1>
        <nav className="flex space-x-10 text-lg uppercase tracking-wide">
          <a href="#about" className="hover:text-gray-400 transition">About</a>
          <a href="#work" className="hover:text-gray-400 transition">Work</a>
          <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 mt-10 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light mb-10 italic bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 leading-[1.4] pb-6"
        >
          Growing. Creating. Leading.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-10"
        >
          I’m Nicholas St. George Jr., a business owner focused on building lasting growth. This is not just a resume. It’s a brief look at my work, ventures, and long-term vision.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#work" 
          className="px-10 py-3 border border-gray-400 rounded-full hover:bg-gray-800 transition text-sm tracking-widest uppercase shadow-lg hover:shadow-gray-700/40"
        >
          Explore My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 max-w-5xl mx-auto relative z-10">
        <h3 className="text-4xl mb-4 font-light border-b border-gray-700 inline-block pb-2">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I’m a dedicated entrepreneur currently pursuing a B.S. in Business Management at the University of South Florida. 
              My passion lies in merging business strategy with technology, particularly in social media marketing and AI-driven tools. 
            </p>
            <p className="text-gray-300 leading-relaxed">
              I am an entrepreneur pursuing a B.S. in Business Management at the University of South Florida. My focus is on business strategy, e-commerce growth, and modern marketing systems. I lead sales and marketing initiatives for the Amazon e-commerce division of Thompson Traders, where I manage storefront growth, paid campaigns, and listing performance. I also founded NJS, a marketing and growth firm supporting select brands.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div whileHover={{ scale: 1.08 }}>
              <Image 
                src="/images/nicholas-profile.jpg" 
                alt="Nicholas St. George Jr." 
                width={360}
                height={480}
                className="rounded-2xl shadow-lg object-cover transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-28 px-8 bg-gray-950 bg-opacity-80 relative z-10">
        <h3 className="text-4xl mb-12 font-light text-center border-b border-gray-700 inline-block pb-2">Professional Experience</h3>
        <div className="space-y-12 max-w-6xl mx-auto">
          {[{
            title: "Owner | Social Media Manager & Marketer",
            company: "NJS – Freelance Social Media Management & Marketing | June ’25 – Present",
            bullets: [
              "Founded and grew a sole proprietorship by independently sourcing and securing clients.",
              "Delivered social media management services using AI tools to increase reach, drive sales, and enhance brand presence.",
              "Strengthened expertise in emerging technologies and content strategies."
            ]
          }, {
            title: "Sales & Marketing Manager | Amazon E-Commerce",
            company: "Thompson | Oct '25 – Present",
            bullets: [
              "Manage and optimized Thompson Traders’ Amazon FBM Seller Central storefront to drive sales growth and visibility.",
              "Developing and executing marketing strategies, including product listings, SEO, and promotional campaigns.",
              "Analyzed sales data and performance metrics to identify trends and opportunities for improvement."
            ]
          }, {
            title: "Summer Intern – Product Data Management & AI Technical Tools",
            company: "Thompson, Greensborough, NC | May – August ’25",
            bullets: [
              "Created and completed 150+ detailed product specification sheets for luxury kitchen and bath products.",
              "Developed and trained an AI tool to generate technical drawings, streamlining processes.",
              "Applied strong project management and problem-solving skills across in-person and remote work."
            ]
          }].map((job, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, boxShadow: "0px 4px 12px rgba(255,255,255,0.08)" }}
              className="p-10 border border-gray-700 rounded-xl bg-black/30 transition-transform duration-200 ease-out"
            >
              <h4 className="text-2xl font-light mb-2">{job.title}</h4>
              <p className="text-gray-400 italic mb-4">{job.company}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-8 max-w-4xl mx-auto text-center relative z-10">
        <h3 className="text-4xl mb-8 font-light">Let’s Connect</h3>
        <p className="text-gray-300 mb-8">
          Interested in working together or learning more? Reach out through any of the platforms below:
        </p>
        <div className="flex justify-center space-x-12 text-2xl">
          <motion.a whileHover={{ scale: 1.2 }} href="mailto:stgeorgenicholas2@gmail.com" className="hover:text-gray-400 transition">
            <FaEnvelope />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="tel:+14077174437" className="hover:text-gray-400 transition">
            <FaPhoneAlt />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com/in/njstgeorge" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaLinkedin />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-gray-500 text-sm text-center relative z-10 border-t border-gray-800">
        © {new Date().getFullYear()} NJS. All rights reserved.
      </footer>
    </div>
  );
}
