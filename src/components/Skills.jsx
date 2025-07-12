import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaJava, 
  FaAws, 
  FaDocker, 
  FaGitAlt,
  FaPython 
} from 'react-icons/fa'
import { 
  SiGo, 
  SiApachekafka, 
  SiMongodb, 
  SiPostgresql, 
  SiSpringboot,
  SiAmazondynamodb,
  SiRedis,
  SiKubernetes,
  SiC,
  SiCplusplus
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5
      }
    }
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Go", icon: <SiGo className="text-gray-300" />, level: 90 },
        { name: "Java", icon: <FaJava className="text-gray-300" />, level: 95 },
        { name: "Python", icon: <FaPython className="text-gray-300" />, level: 85 },
        { name: "C", icon: <SiC className="text-gray-300" />, level: 80 },
        { name: "C++", icon: <SiCplusplus className="text-gray-300" />, level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot className="text-gray-300" />, level: 85 },
        { name: "Apache Kafka", icon: <SiApachekafka className="text-gray-300" />, level: 95 },
        { name: "Microservices", icon: <SiKubernetes className="text-gray-300" />, level: 85 }
      ]
    },
    {
      title: "Cloud & Database",
      skills: [
        { name: "AWS", icon: <FaAws className="text-gray-300" />, level: 85 },
        { name: "DynamoDB", icon: <SiAmazondynamodb className="text-gray-300" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-gray-300" />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-gray-300" />, level: 75 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-gray-300" />, level: 80 },
        { name: "Git", icon: <FaGitAlt className="text-gray-300" />, level: 90 },
        { name: "Redis", icon: <SiRedis className="text-gray-300" />, level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-black">
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Technologies I use to build scalable systems and solve complex problems
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass-card card-hover"
              >
                <h3 className="text-xl font-semibold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-black/50 rounded-lg hover:bg-gray-900/50 transition-colors duration-300"
                    >
                      <div className="text-2xl">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-white">
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.1 }}
                            className="h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Additional <span className="gradient-text">Expertise</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Problem Solving', 'Requirements Gathering', 'System Architecture', 'Distributed Tracing',
                'Circuit Breakers', 'Hystrix', 'RESTful APIs', 'MVC Architecture', 'Multi-threading',
                'Performance Optimization', 'Fraud Detection', 'Real-time Systems', 'Team Leadership'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="skill-tag cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 