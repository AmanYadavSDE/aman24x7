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
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20 bg-black">
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-36 h-36 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 p-1 shadow-2xl"
              >
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-600">
                  <img 
                    src={`${import.meta.env.BASE_URL}image.jpg?v=${Date.now()}`}
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
              </motion.div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center border-2 border-gray-800">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block text-gray-300 mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent font-black tracking-tight">
              Aman Yadav
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 text-gray-400"
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
            className="text-lg sm:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
              className="btn-primary flex items-center justify-center"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <HiMail className="mr-2" />
              Contact Me
            </motion.a>
            
            <motion.a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
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
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              href="https://www.linkedin.com/in/aman212yadav"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </motion.a>
            
            <motion.a
              href="https://github.com/AmanYadavSDE"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl text-gray-400 hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center cursor-pointer"
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
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