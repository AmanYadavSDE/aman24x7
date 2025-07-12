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
      icon: <SiCodechef className="text-4xl text-yellow-400" />,
      achievement: "5★ Star",
      rating: "2020 (Max)",
      stats: "247 Problems Solved",
      description: "Achieved 5★ rating with consistent performance in 30+ contests",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      name: "LeetCode", 
      username: "NaughtyNikki",
      url: "https://leetcode.com/u/NaughtyNikki/",
      icon: <SiLeetcode className="text-4xl text-orange-400" />,
      achievement: "Knight",
      rating: "1963",
      stats: "Active Contests",
      description: "Knight rank with strong algorithmic problem-solving skills",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20", 
      borderColor: "border-orange-500/30"
    },
    {
      name: "Codeforces",
      username: "aman212yadav", 
      url: "https://codeforces.com/profile/aman212yadav",
      icon: <SiCodeforces className="text-4xl text-blue-400" />,
      achievement: "Expert",
      rating: "1609",
      stats: "Regular Contests",
      description: "Expert level with consistent competitive programming performance",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      name: "HackerEarth",
      username: "aman212yadav",
      url: "https://www.hackerearth.com/@aman212yadav/",
      icon: <HiCode className="text-4xl text-purple-400" />,
      achievement: "Elite",
      rating: "1639", 
      stats: "Elite Developer",
      description: "Elite status demonstrating exceptional programming capabilities",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      name: "HackerRank",
      username: "aman212yadav",
      url: "https://www.hackerrank.com/profile/aman212yadav", 
      icon: <SiHackerrank className="text-4xl text-green-400" />,
      achievement: "Certified",
      rating: "Multiple Certs",
      stats: "6 Certifications",
      description: "Java, Python, Problem Solving, C++ certified with verified skills",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    }
  ]

  const achievements = [
    {
      icon: <FaTrophy className="text-2xl text-yellow-400" />,
      title: "5★ CodeChef Rating",
      value: "2020"
    },
    {
      icon: <HiStar className="text-2xl text-blue-400" />,
      title: "Problems Solved",
      value: "500+"
    },
    {
      icon: <HiCode className="text-2xl text-green-400" />,
      title: "Avg Rating",
      value: "1700+"
    },
    {
      icon: <FaTrophy className="text-2xl text-purple-400" />,
      title: "Platforms",
      value: "5"
    }
  ]

  return (
    <section id="coding" className="section-padding bg-dark-800/50">
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
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
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

export default CodingProfiles 