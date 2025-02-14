import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  const text = `🚀 Technologies & Tools I Work With

  🌐 Frontend Development
  I specialize in creating responsive, interactive, and modern UI/UX using:
  - HTML5 – Structuring the web with semantic elements.
  - CSS3 – Crafting beautiful, responsive designs.
  - JavaScript (ES6+) – Implementing dynamic and interactive web experiences.
  - React.js – Building reusable components and fast, scalable applications.
  - Tailwind CSS – Rapid UI development with utility-first styling.

  🛠 Backend Development & Databases
  I have experience in building robust and scalable backend systems using:
  - Node.js – Efficient server-side programming.
  - Express.js – Lightweight and fast backend framework for RESTful APIs.
  - MongoDB – NoSQL database for flexible and scalable data storage.
  - PostgreSQL – Advanced relational database management.
  - Microsoft SQL Server – Secure, high-performance database solutions.
  - MySQL – Structured database design and optimization.

  💻 Programming Languages
  I am proficient in multiple programming languages that help me develop efficient applications:
  - Java – Object-oriented programming for robust backend solutions.
  - Python – Versatile programming for web, AI, and automation.

  🛠 Testing & Automation
  I have hands-on experience with testing frameworks to ensure high-quality applications:
  - Selenium – Browser automation for web application testing.
  - Cucumber – BDD framework for automated testing.
  - TestNG – Unit testing and automation testing framework for Java.

  🛠 Development Tools & Platforms
  I use a range of tools to improve development workflow and collaboration:
  - VS Code – My go-to editor for efficient coding.
  - Linux – Command-line scripting and system administration.
  - Git – Version control and collaboration.
  - Postman – API testing and debugging.
  - Eclipse – Java development and debugging.

  ✨ What I Do
  - Design and develop modern, responsive web applications.
  - Create and optimize backend APIs for scalability and performance.
  - Implement automation and best practices in software development.
  - Continuously learn and stay updated with the latest tech trends.

  💼 Current Role
  I am currently working at STW LLP, where I contribute to AI-driven solutions and enhance my skills in full-stack development. My role involves working with cutting-edge technologies to build robust software applications and streamline automation processes.

  I am passionate about coding, problem-solving, and continuous learning, always looking for new challenges to expand my expertise.`;

  const words = text.split(" ");
  const [displayedWords, setDisplayedWords] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < words.length) {
        setDisplayedWords((prevWords) => [...prevWords, words[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed (50ms per word)

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <>
      <div className="capitalize">
        <div className="p-[50px] mx-autoshadow-lg ">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            🚀 Technologies & Tools I Work With
          </h1>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed whitespace-pre-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {displayedWords.join(" ")}
          </motion.p>
        </div>
      </div>
    </>
  );
};
