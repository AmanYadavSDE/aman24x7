import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/aman212yadav",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/aman212yadav",
      color: "hover:text-gray-400"
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Coding', href: '#coding' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container-max py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              <span className="gradient-text">Aman Yadav</span>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md">
              Senior Software Engineer at Swiggy passionate about distributed systems, backend architecture, 
              and building scalable solutions. Leading innovative projects in the food delivery space.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-dark-700 rounded-full text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Delhi, India</p>
              <p>aman212yadav@gmail.com</p>
              <div className="mt-4">
                <p className="text-sm">SDE-2 @ Swiggy</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © 2024 Aman Yadav. Made with <FaHeart className="text-red-500 mx-1" /> and lots of coffee.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Built with React & Tailwind CSS</span>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-dark-700 rounded-full hover:bg-primary-600 transition-colors duration-300"
              >
                <HiArrowUp className="text-lg" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 