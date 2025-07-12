import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiCalendar, HiLocationMarker, HiBadgeCheck } from 'react-icons/hi'

const Education = () => {
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

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      institution: "National Institute of Technology Delhi",
      location: "Delhi, India",
      duration: "2017 - 2021",
      grade: "B.Tech in Computer Science",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, system design, and distributed systems.",
      highlights: [
        "Specialized in Computer Science and Engineering",
        "Strong foundation in Data Structures and Algorithms",
        "Extensive coursework in System Design and Architecture",
        "Active participation in coding competitions and technical events",
        "Completed multiple projects in Java and distributed systems"
      ]
    }
  ]

  const certifications = [
    {
      name: "Learning Git and GitHub",
      issuer: "LinkedIn Learning",
      date: "September 2021",
      credentialUrl: "#"
    },
    {
      name: "edX Verified Certificate for AWS Cloud Technical Essentials",
      issuer: "edX",
      date: "September 2021",
      credentialUrl: "https://courses.edx.org/certificates/dbb073ad48d44e6abfda652fee1f0fe9"
    },
    {
      name: "AWS for Developers: DynamoDB", 
      issuer: "LinkedIn Learning",
      date: "August 2021",
      credentialUrl: "https://www.linkedin.com/learning/certificates/f78c710b13daf04a46ca420dca6619b2a9b0f2fc9c2f1f572d6446b561726c81"
    },
    {
      name: "MySQL Installation and Configuration",
      issuer: "LinkedIn Learning",
      date: "August 2021",
      credentialUrl: "#"
    },
    {
      name: "Amazon EC2 Fundamentals",
      issuer: "LinkedIn Learning",
      date: "July 2021",
      credentialUrl: "#"
    },
    {
      name: "Learning Go",
      issuer: "LinkedIn Learning", 
      date: "July 2021",
      credentialUrl: "https://www.linkedin.com/learning/certificates/7110d88b7781510fd2195803c0c6ae85cfc24b0a8902b0573f8f91f04df5baa5"
    },
    {
      name: "Learning the Go Standard Library",
      issuer: "LinkedIn Learning",
      date: "July 2021",
      credentialUrl: "#"
    },
    {
      name: "APIs AND MICROSERVICES",
      issuer: "freeCodeCamp",
      date: "June 2021",
      credentialUrl: "#"
    },
    {
      name: "Programming Foundations: Databases",
      issuer: "LinkedIn Learning",
      date: "May 2021",
      credentialUrl: "#"
    },
    {
      name: "Java (Intermediate)",
      issuer: "HackerRank",
      date: "September 2020", 
      credentialUrl: "https://www.hackerrank.com/certificates/b92c4f6d9c97"
    },
    {
      name: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "September 2020",
      credentialUrl: "https://www.hackerrank.com/certificates/bcb1ecd7d3f5"
    },
    {
      name: "Data Gladiators 2020 Finalist",
      issuer: "Godel",
      date: "August 2020",
      credentialUrl: "#"
    },
    {
      name: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      issuer: "Coursera",
      date: "January 2019",
      credentialUrl: "#"
    },
    {
      name: "Structuring Machine Learning Projects",
      issuer: "Coursera",
      date: "December 2018",
      credentialUrl: "#"
    },
    {
      name: "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
      issuer: "Coursera",
      date: "December 2018",
      credentialUrl: "#"
    },
    {
      name: "Neural Networks and Deep Learning",
      issuer: "Coursera",
      date: "December 2018",
      credentialUrl: "#"
    },
    {
      name: "Crio Summer of Doing",
      issuer: "Crio.do",
      date: "August 2018",
      credentialUrl: "#"
    },
    {
      name: "Java for Android",
      issuer: "Coursera",
      date: "August 2018",
      credentialUrl: "#"
    },
    {
      name: "Programming, Data Structures and Algorithms using Python",
      issuer: "NPTEL",
      date: "February 2018",
      credentialUrl: "#"
    }
  ];

  return (
    <section id="education" className="section-padding">
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
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              My academic foundation from NIT Delhi and extensive professional certifications spanning cloud technologies, programming languages, machine learning, and software development
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              Academic <span className="gradient-text">Background</span>
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full">
                      <HiAcademicCap className="text-2xl text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {edu.degree}
                          </h4>
                          <p className="text-lg text-primary-400 mb-2">
                            {edu.field}
                          </p>
                          <div className="flex items-center space-x-4 text-gray-300 mb-2">
                            <div className="flex items-center">
                              <HiAcademicCap className="mr-2 text-primary-400" />
                              <span className="font-medium">{edu.institution}</span>
                            </div>
                            <div className="flex items-center">
                              <HiLocationMarker className="mr-2 text-accent-400" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-gray-400 mb-4">
                            <div className="flex items-center">
                              <HiCalendar className="mr-2 text-purple-400" />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="px-3 py-1 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-full text-sm">
                              {edu.grade}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Academic Highlights:
                        </h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start text-gray-300">
                              <span className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              Professional <span className="gradient-text">Certifications</span> <span className="text-lg text-gray-400">(19)</span>
            </h3>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-accent-600 to-primary-600 rounded-full">
                      <HiBadgeCheck className="text-xl text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">
                        {cert.name}
                      </h4>
                      <p className="text-primary-400 mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                        <span>Completed: {cert.date}</span>
                        <a 
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 bg-dark-700 rounded text-xs text-accent-blue hover:text-accent-cyan transition-colors"
                        >
                          View Credential
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Professional Development */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-4">
                Professional <span className="gradient-text">Development</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Committed to continuous learning with 19+ professional certifications spanning cloud technologies, programming languages, machine learning, databases, and software development best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Go Programming', 'Java Development', 'AWS Cloud', 'Problem Solving',
                  'System Design', 'Distributed Systems', 'Apache Kafka', 'Microservices',
                  'Git & GitHub', 'MySQL', 'Amazon EC2', 'APIs', 'Database Design',
                  'Machine Learning', 'Deep Learning', 'Neural Networks', 'Bootstrap',
                  'Python Programming', 'Android Development', 'Data Structures & Algorithms'
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-full text-sm text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 