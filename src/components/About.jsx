import { motion } from "framer-motion";
import { GraduationCap, Code, Lightbulb, Brain, Target, Coffee } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: GraduationCap, title: "Education", description: "Computer Science undergraduate at Uva Wellassa University" },
    { icon: Code, title: "Development", description: "Full-Stack Developer with MERN Stack expertise" },
    { icon: Brain, title: "Learning Agility", description: "Rapid technology adaptation and continuous learning" },
    { icon: Target, title: "Strategic Thinking", description: "Solving complex problems with innovative solutions" },
    { icon: Lightbulb, title: "Innovation", description: "Creative approach to technical challenges" },
    { icon: Coffee, title: "Collaboration", description: "Effective communication and team synergy" }
  ];

  return (
    <section
      id="about"
      className="px-6 pt-12 sm:px-8 sm:pt-16 lg:px-16 lg:pt-24 bg-light-background dark:bg-dark-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-4xl font-bold text-center text-light-text dark:text-dark-text"
        >
          About Me
        </motion.h2>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 mb-12 transition-all duration-300 border bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border rounded-2xl hover:shadow-lg hover:border-light-primary dark:hover:border-dark-primary"
        >
          <p className="text-lg leading-relaxed text-light-text dark:text-dark-text">
            {`I'm a passionate Full-Stack Developer and ICT undergraduate, dedicated to crafting innovative web solutions.
            With a strong foundation in modern technologies, I specialize in building scalable, user-centric applications
            that solve real-world problems. My approach combines technical expertise with creative problem-solving.`}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 }}
          }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
              }}
              className="p-6 transition-all duration-300 transform border bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border rounded-xl hover:shadow-lg hover:-translate-y-2 hover:border-light-primary dark:hover:border-dark-primary"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                  <item.icon className="w-6 h-6 text-light-primary dark:text-dark-primary" />
                </div>
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;