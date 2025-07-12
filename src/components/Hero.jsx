import React from 'react'
import { motion } from 'framer-motion'
import { HiDownload, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-1 animate-glow">
                <div className="w-full h-full bg-dark-800 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={`/image.jpg?v=${Date.now()}`}
                    alt="Aman Yadav" 
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      console.log('Image failed to load:', e);
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-4xl font-bold gradient-text">AY</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-shadow"
          >
            Hi, I'm <span className="gradient-text">Aman Yadav</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 text-gray-300"
          >
            SDE-2 @ Swiggy | 4+ Years Experience
          </motion.h2>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-8 text-gray-400"
          >
            <FaMapMarkerAlt className="mr-2" />
            <span>Delhi, India</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Senior Software Engineer specializing in backend systems, distributed architecture, and scalable solutions. 
            Leading innovative projects at Swiggy with expertise in Go, Java, and cloud technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center glow-hover"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <HiMail className="mr-2" />
              Contact Me
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download="Aman_Yadav_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center"
            >
              <HiDownload className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/aman212yadav"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
            
            <motion.a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 