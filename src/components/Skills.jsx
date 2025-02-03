import { motion } from "framer-motion";
import { Layout, Server, Database, Github, Code2, Terminal } from "lucide-react";
import {
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiPhp,
  SiOpenjdk, SiMysql, SiPostman, SiFigma
} from 'react-icons/si';

const skillCategories = [
  {
    name: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap }
    ]
  },
  {
    name: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PHP", icon: SiPhp },
      { name: "Java", icon: SiOpenjdk },
      { name: "RESTful APIs", icon: Terminal }
    ]
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    name: "Tools & Platforms",
    icon: Terminal,
    skills: [
      { name: "Git/GitHub", icon: Github },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "VS Code", icon: Code2 }
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-6 pt-12 sm:px-8 sm:pt-16 lg:px-16 lg:pt-24 bg-light-background dark:bg-dark-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={titleVariants}
          className="mb-12 text-3xl font-bold text-center text-light-text dark:text-dark-text"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="transition-all duration-300 border bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border rounded-2xl backdrop-blur-sm hover:shadow-lg hover:border-light-primary dark:hover:border-dark-primary"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon
                    className="w-5 h-5 text-blue-600 dark:text-blue-200"
                  />
                  <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    {category.name}
                  </h3>
                </div>
                <motion.div
                  className="grid grid-cols-2 gap-4 sm:grid-cols-3"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      className="flex items-center gap-2 p-3 transition-colors cursor-pointer bg-blue-50 dark:bg-blue-900/20 rounded-2xl hover:bg-blue-100 dark:hover:bg-blue-900/40"
                    >
                      <skill.icon
                        className="w-5 h-5 text-blue-600 dark:text-blue-200"
                      />
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;