import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiLightBulb, HiUsers } from 'react-icons/hi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const highlights = [
    {
      icon: <HiCode className="text-3xl text-gray-300" />,
      title: "System Architecture",
      description: "Designing scalable distributed systems and microservices architecture"
    },
    {
      icon: <HiLightBulb className="text-3xl text-gray-300" />,
      title: "Innovation Leader",
      description: "Leading chatbot team and developing innovative solutions at Swiggy"
    },
    {
      icon: <HiUsers className="text-3xl text-gray-300" />,
      title: "Team Leadership",
      description: "Spearheading cross-functional teams and mentoring junior developers"
    }
  ]

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="glass-card">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Senior Software Engineer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Senior Software Engineer with 4+ years of experience at Swiggy, specializing in backend systems and distributed architecture. I currently lead the chatbot team, designing innovative solutions that enhance user experiences and operational efficiency.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My expertise spans across developing robust solutions to prevent abuse of gratification policies, implementing real-time order monitoring features, and spearheading distributed tracing across multiple services. I have a proven track record of improving system resilience, reliability, and performance.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm an NIT Delhi graduate with a strong foundation in computer science and a passion for solving complex problems through innovative technology solutions. I enjoy mentoring others and have been recognized as a top performer throughout my career.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4"
              >
                <div className="text-center glass-card">
                  <div className="text-3xl font-bold gradient-text mb-2">4+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center glass-card">
                  <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-sm text-gray-400">Projects Led</div>
                </div>
                <div className="text-center glass-card">
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-sm text-gray-400">Core Technologies</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Highlights */}
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-card card-hover"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-black border border-gray-700 rounded-lg">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-white">
                          {highlight.title}
                        </h4>
                        <p className="text-gray-300">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Professional Achievements */}
              <motion.div
                variants={itemVariants}
                className="glass-card"
              >
                <h4 className="text-xl font-semibold mb-4 gradient-text">
                  Key Achievements
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Won 3 MVP awards at Swiggy for exceptional individual performance
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Received 2 Swiggsters team awards for outstanding collaboration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Achieved 5★ rating on CodeChef with 247+ problems solved
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Attained Expert level on Codeforces (1609 rating) and Knight rank on LeetCode
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 