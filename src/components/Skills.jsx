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
  const iconColor = "#2563EB";

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
      className="px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={titleVariants}
          className="mb-12 text-3xl font-bold text-center"
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
              className="transition-all duration-300 bg-white border rounded-2xl backdrop-blur-sm hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6" style={{ color: iconColor }} />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <motion.div 
                  className="grid grid-cols-2 gap-4 sm:grid-cols-3"
                  variants={containerVariants}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={skillVariants}
                      className="flex items-center gap-2 p-3 transition-colors bg-blue-50 rounded-2xl hover:bg-blue-100"
                    >
                      <skill.icon
                        className="w-5 h-5"
                        style={{ color: iconColor }}
                      />
                      <span className="text-sm font-medium text-blue-600">
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