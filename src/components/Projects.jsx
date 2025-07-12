import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCode, HiCalendar, HiTag } from 'react-icons/hi'
import { FaGithub, FaVideo, FaUtensils, FaVoteYea, FaComments, FaServer, FaAndroid, FaEye } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projects = [
    {
      title: "Zooki Clone",
      description: "A comprehensive video calling application developed using Node.js having minimal requirements for making video calls by just sharing the link to the specific person.",
      duration: "May 2020 - May 2020",
      icon: <FaVideo className="text-red-400" />,
      features: [
        "Creating rooms",
        "Muting/Unmuting the audio",
        "Muting/Unmuting the video", 
        "Realtime Chat feature"
      ],
      technologies: ["Node.js", "Socket.io", "WebRTC", "JavaScript", "HTML/CSS"],
      category: "Full Stack",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Confusion Restaurant",
      description: "Frontend for a restaurant website developed with help of HTML, CSS, Bootstrap and some jQuery, and deployed the same over Google Firebase.",
      duration: "Dec 2019 - Dec 2019",
      icon: <FaUtensils className="text-orange-400" />,
      features: [
        "Responsive restaurant website",
        "Menu display and navigation",
        "Bootstrap components",
        "Firebase deployment"
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "jQuery", "Firebase"],
      category: "Frontend",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Polling Web App",
      description: "A comprehensive polling web application developed using Django with multiple advanced features for creating and managing polls.",
      duration: "Sep 2019 - Oct 2019",
      icon: <FaVoteYea className="text-blue-400" />,
      features: [
        "User signup/login system",
        "Add poll, edit, delete poll",
        "Add choice, edit choice, delete choice",
        "Vote for a poll",
        "Progress bar to show votes count for different choices of poll",
        "Sort feature that support sorting on basis of text, vote count, publish date",
        "Search bar to search specific poll"
      ],
      technologies: ["Django", "Python", "HTML/CSS", "JavaScript", "SQLite"],
      category: "Full Stack",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Chat's Up",
      description: "A simple chat app using Node.js and Socket.io that allows users to authenticate and signup for realtime text messages and images.",
      duration: "Jun 2019 - Jul 2019",
      icon: <FaComments className="text-green-400" />,
      features: [
        "User authentication and signup",
        "Realtime text messaging",
        "Image sharing capability",
        "Firebase storage for images"
      ],
      technologies: ["Node.js", "Socket.io", "Firebase", "JavaScript", "HTML/CSS"],
      category: "Full Stack",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Backend for QEats App",
      description: "Built a backend for food order platform QEats with Java Spring Boot and MongoDB, implemented during Crio.Do externship program.",
      duration: "May 2019 - Jun 2019",
      icon: <FaServer className="text-purple-400" />,
      features: [
        "RESTful API development",
        "MongoDB database integration",
        "Food ordering system backend",
        "Spring Boot framework"
      ],
      technologies: ["Java", "Spring Boot", "MongoDB", "REST API"],
      category: "Backend",
      color: "from-purple-500 to-pink-500",
      association: "Crio.Do"
    },
    {
      title: "QuakeReport",
      description: "A simple Android app which shows Earthquakes that occurred recently, using JSON parsing and array adapters with loader classes for HTTP requests.",
      duration: "Mar 2019 - Mar 2019",
      icon: <FaAndroid className="text-green-400" />,
      features: [
        "JSON data parsing",
        "HTTP request handling",
        "Array adapters implementation",
        "Loader classes for background operations"
      ],
      technologies: ["Android", "Java", "JSON", "HTTP"],
      category: "Mobile",
      color: "from-green-500 to-lime-500"
    },
    {
      title: "Face Recognition",
      description: "A Machine Learning project that identifies person faces and shows their names at runtime using KNN machine learning algorithm and OpenCV library.",
      duration: "Jan 2019 - Jan 2019",
      icon: <FaEye className="text-cyan-400" />,
      features: [
        "Real-time face detection",
        "KNN algorithm implementation",
        "Person identification and naming",
        "OpenCV integration"
      ],
      technologies: ["Python", "OpenCV", "KNN", "Machine Learning"],
      category: "Machine Learning",
      color: "from-cyan-500 to-blue-500"
    }
  ]

  const categoryColors = {
    "Full Stack": "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30",
    "Frontend": "bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border-orange-500/30",
    "Backend": "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30",
    "Mobile": "bg-gradient-to-r from-green-500/20 to-lime-500/20 border-green-500/30",
    "Machine Learning": "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30"
  }

  return (
    <section id="projects" className="section-padding">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              A collection of projects showcasing my journey from college to becoming a senior software engineer
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card card-hover relative overflow-hidden"
              >
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[project.category]}`}>
                  {project.category}
                </div>
                
                {/* Project Icon */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.color} rounded-full`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <HiCalendar className="mr-1" />
                      <span>{project.duration}</span>
                      {project.association && (
                        <>
                          <span className="mx-2">•</span>
                          <span className="text-accent-400">{project.association}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                    <HiCode className="mr-2 text-primary-400" />
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 gap-1 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                    <HiTag className="mr-2 text-accent-400" />
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-dark-700/50 border border-dark-600 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center glass-card">
              <div className="text-3xl font-bold gradient-text mb-2">7</div>
              <div className="text-sm text-gray-400">Total Projects</div>
            </div>
            <div className="text-center glass-card">
              <div className="text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div className="text-center glass-card">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center glass-card">
              <div className="text-3xl font-bold gradient-text mb-2">2019-2020</div>
              <div className="text-sm text-gray-400">Development Period</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 