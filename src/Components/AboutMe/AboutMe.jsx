import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  const text = `Hi, I’m Hemant Jadhav, a passionate Software Developer with expertise in full-stack development, backend technologies, and automation. I enjoy building scalable, efficient, and user-friendly applications that solve real-world problems. With a strong foundation in frontend and backend technologies, I continuously explore new tools and frameworks to enhance my skills and deliver high-quality software solutions. 
  
  Over the years, I have worked with technologies such as HTML, CSS, JavaScript, React.js, Node.js, Python, Java, and databases like MongoDB, PostgreSQL, and Microsoft SQL Server. My expertise lies in developing scalable web applications, crafting efficient APIs, and integrating automation to improve software performance.

  I am highly proficient in modern frontend libraries like Tailwind CSS for rapid UI development and backend frameworks like Express.js and Django. Along with development, I have hands-on experience with tools like Git, Postman, and Linux for testing and version control.

  Currently, I am working at STW LLP, contributing to AI-driven projects, optimizing performance, and enhancing full-stack capabilities. My passion lies in solving real-world challenges, writing clean and maintainable code, and constantly learning new technologies.

  I believe that continuous learning and innovation drive success in the tech industry. Whether it's building a user-friendly application, optimizing backend processes, or automating tasks, I am always eager to take on new challenges and explore innovative solutions.

  Let’s connect and build something amazing together! `;

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
    }, 150); 

    return () => clearInterval(interval); // Cleanup function
  }, []); 

  return (
    <>
    
    <div className="p-[100px] mx-autoshadow-lg ">
      <h1 className="text-3xl font-bold text-gray-600 mb-4 text-center">About Me</h1>
      <motion.p
      
        className="text-lg text-black font-medium leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {displayedWords.join(" ")}
      </motion.p>
    </div>
    </>
  );
};
