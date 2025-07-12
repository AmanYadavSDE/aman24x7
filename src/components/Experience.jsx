import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOfficeBuilding, HiCalendar, HiLocationMarker } from 'react-icons/hi'
import { FaTrophy } from 'react-icons/fa'

const Experience = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const experiences = [
    {
      title: "SDE-2",
      company: "Swiggy",
      location: "Bangalore, India",
      duration: "April 2023 - Present",
      description: "Led the chatbot team in designing innovative solutions that enhanced user experiences and operational efficiency. Improved resilience, reliability, and performance across bot services.",
      achievements: [
        "Awarded MVP 3 times for exceptional individual performance and contributions",
        "Received Swiggster Team award twice for outstanding team collaboration and results",
        "Developed robust solution to prevent abuse of IGCC gratification policies, reducing fraudulent claims and financial losses",
        "Spearheaded end-to-end development of innovative order monitoring feature with real-time updates",
        "Led implementation of distributed tracing across multiple services for enhanced system visibility",
        "Integrated Hystrix and circuit breakers for improved resilience and graceful failure handling",
        "Successfully deprecated outdated services and optimized workflows, reducing complexity"
      ],
      technologies: ["Go", "Java", "Apache Kafka", "Distributed Systems", "Hystrix", "Circuit Breakers", "System Design"]
    },
    {
      title: "SDE-1",
      company: "Swiggy",
      location: "Bangalore, India",
      duration: "July 2021 - March 2023",
      description: "Contributed to backend development and system architecture improvements. Focused on building scalable solutions and enhancing system performance.",
      achievements: [
        "Contributed significantly to backend development and system architecture improvements",
        "Developed and maintained critical backend services for food delivery platform",
        "Implemented performance optimizations resulting in improved system efficiency",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Participated in code reviews and mentoring of junior developers",
        "Built foundational skills in distributed systems and microservices architecture"
      ],
      technologies: ["Java", "Spring Boot", "MongoDB", "AWS", "System Design", "RESTful APIs"]
    },
    {
      title: "Teaching Assistant",
      company: "Coding Blocks",
      location: "New Delhi, India",
      duration: "January 2020 - July 2021",
      description: "Served as teaching assistant for Data Structures and Algorithms courses. Recognized as top performer throughout 2020 with exceptional student feedback.",
      achievements: [
        "Consistently recognized as top performer throughout 2020",
        "Achieved 83% 5-star ratings from students for teaching excellence",
        "Demonstrated strong commitment to student success by adjusting schedule to accommodate needs",
        "Effectively communicated and resolved complex technical issues",
        "Excelled in time management and maintained high response standards",
        "Collaborated with colleagues demonstrating strong teamwork skills"
      ],
      technologies: ["Data Structures", "Algorithms", "Java", "Problem Solving", "Teaching", "Mentoring"]
    },
    {
      title: "Student Developer",
      company: "Crio.Do",
      location: "Remote",
      duration: "May 2019 - June 2019",
      description: "Developed distributed system backend for QEats food order platform using Java Spring Boot and MongoDB. Awarded multiple titles for exceptional performance.",
      achievements: [
        "Developed distributed system backend for QEats food order platform with robust performance",
        "Awarded titles: Relentless Bee (Never give up), Skillful Hawk (Perfection), Altruist Elephant (Model citizen)",
        "Implemented RESTful APIs for restaurant services with dynamic location-based data retrieval",
        "Utilized MVC architecture and integrated MongoDB for real restaurant data",
        "Optimized restaurant search performance using multi-threading for faster data retrieval",
        "Designed Cart/Order APIs with comprehensive endpoints for full e-commerce functionality"
      ],
      technologies: ["Java", "Spring Boot", "MongoDB", "RESTful APIs", "MVC Architecture", "Multi-threading"]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-black">
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              My professional journey from student developer to senior engineer at Swiggy, recognized with 3 MVP awards and 2 Swiggster Team awards for exceptional performance
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 to-gray-800 hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative md:ml-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-24 top-6 w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full hidden md:block">
                    <div className="absolute inset-1 bg-black rounded-full"></div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card card-hover"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-300 mb-2">
                          <div className="flex items-center">
                            <HiOfficeBuilding className="mr-2 text-gray-400" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center">
                            <HiLocationMarker className="mr-2 text-gray-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-400 mb-4">
                          <HiCalendar className="mr-2 text-gray-400" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-black border border-gray-700 rounded-full text-sm text-white shadow-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center glass-card">
              <div className="text-4xl font-bold gradient-text mb-2">4+</div>
              <div className="text-gray-300">Years of Experience</div>
            </div>
            <div className="text-center glass-card">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <div className="text-gray-300">MVP Awards</div>
            </div>
            <div className="text-center glass-card">
              <div className="text-4xl font-bold gradient-text mb-2">2</div>
              <div className="text-gray-300">Team Awards</div>
            </div>
            <div className="text-center glass-card">
              <div className="text-4xl font-bold gradient-text mb-2">83%</div>
              <div className="text-gray-300">5-Star Rating (Teaching)</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 