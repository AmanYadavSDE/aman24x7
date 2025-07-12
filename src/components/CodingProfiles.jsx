import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiStar, HiCode } from 'react-icons/hi'
import { FaTrophy } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank } from 'react-icons/si'

const CodingProfiles = () => {
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

  const platforms = [
    {
      name: "CodeChef",
      username: "aman212yadav",
      url: "https://www.codechef.com/users/aman212yadav",
      icon: <SiCodechef className="text-4xl text-gray-300" />,
      achievement: "5★ Star",
      rating: "2020 (Max)",
      stats: "247 Problems Solved",
      description: "Achieved 5★ rating with consistent performance in 30+ contests",
      color: "from-gray-800 to-gray-900",
      bgColor: "from-gray-800/20 to-gray-900/20",
      borderColor: "border-gray-700/50"
    },
    {
      name: "LeetCode", 
      username: "NaughtyNikki",
      url: "https://leetcode.com/u/NaughtyNikki/",
      icon: <SiLeetcode className="text-4xl text-gray-300" />,
      achievement: "Knight",
      rating: "1963",
      stats: "Active Contests",
      description: "Knight rank with strong algorithmic problem-solving skills",
      color: "from-gray-800 to-black",
      bgColor: "from-gray-800/20 to-black/20", 
      borderColor: "border-gray-700/50"
    },
    {
      name: "Codeforces",
      username: "aman212yadav", 
      url: "https://codeforces.com/profile/aman212yadav",
      icon: <SiCodeforces className="text-4xl text-gray-300" />,
      achievement: "Expert",
      rating: "1609",
      stats: "Regular Contests",
      description: "Expert level with consistent competitive programming performance",
      color: "from-black to-gray-800",
      bgColor: "from-black/20 to-gray-800/20",
      borderColor: "border-gray-700/50"
    },
    {
      name: "HackerEarth",
      username: "aman212yadav",
      url: "https://www.hackerearth.com/@aman212yadav/",
      icon: <HiCode className="text-4xl text-gray-300" />,
      achievement: "Elite",
      rating: "1639", 
      stats: "Elite Developer",
      description: "Elite status demonstrating exceptional programming capabilities",
      color: "from-gray-900 to-black",
      bgColor: "from-gray-900/20 to-black/20",
      borderColor: "border-gray-700/50"
    },
    {
      name: "HackerRank",
      username: "aman212yadav",
      url: "https://www.hackerrank.com/profile/aman212yadav", 
      icon: <SiHackerrank className="text-4xl text-gray-300" />,
      achievement: "Certified",
      rating: "Multiple Certs",
      stats: "6 Certifications",
      description: "Java, Python, Problem Solving, C++ certified with verified skills",
      color: "from-black to-gray-900",
      bgColor: "from-black/20 to-gray-900/20",
      borderColor: "border-gray-700/50"
    }
  ]

  const achievements = [
    {
      icon: <FaTrophy className="text-2xl text-gray-400" />,
      title: "5★ CodeChef Rating",
      value: "2020"
    },
    {
      icon: <HiStar className="text-2xl text-gray-400" />,
      title: "Problems Solved",
      value: "500+"
    },
    {
      icon: <HiCode className="text-2xl text-gray-400" />,
      title: "Avg Rating",
      value: "1700+"
    },
    {
      icon: <FaTrophy className="text-2xl text-gray-400" />,
      title: "Platforms",
      value: "5"
    }
  ]

  return (
    <section id="coding" className="section-padding bg-black">
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
              Competitive <span className="gradient-text">Programming</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Achieved expert-level ratings across all major competitive programming platforms - 5★ CodeChef (2020), Knight LeetCode (1963), Expert Codeforces (1609), Elite HackerEarth (1639)
            </p>
          </motion.div>

          {/* Coding Platforms Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card card-hover relative overflow-hidden"
              >
                {/* Achievement Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${platform.bgColor} ${platform.borderColor} border`}>
                  {platform.achievement}
                </div>
                
                {/* Platform Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 bg-gradient-to-r ${platform.color} rounded-full`}>
                    {platform.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      @{platform.username}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Rating/Status:</span>
                    <span className="text-sm font-medium text-primary-400">{platform.rating}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Achievement:</span>
                    <span className="text-sm font-medium text-accent-400">{platform.stats}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {platform.description}
                </p>

                {/* Profile Link */}
                <motion.a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center text-sm`}
                >
                  <HiExternalLink className="mr-2" />
                  View Profile
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Achievements Summary */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center glass-card">
                <div className="flex justify-center mb-3">
                  {achievement.icon}
                </div>
                <div className="text-2xl font-bold gradient-text mb-1">
                  {achievement.value}
                </div>
                <div className="text-sm text-gray-400">
                  {achievement.title}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-4">
                Competitive Programming <span className="gradient-text">Journey</span>
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Demonstrated exceptional competitive programming skills with expert-level achievements across all major platforms. 
                Consistent high ratings showcase strong algorithmic thinking and problem-solving expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Data Structures', 'Algorithms', 'Dynamic Programming', 'Graph Theory',
                  'Number Theory', 'Combinatorics', 'Greedy Algorithms', 'Binary Search'
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-black border border-gray-700 rounded-full text-sm text-white shadow-lg"
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

export default CodingProfiles 