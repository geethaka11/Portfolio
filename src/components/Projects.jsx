import React from "react";
import PropTypes from "prop-types";
import { Github, Link } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Online Food Ordering System",
    description: "A web application where users can browse food categories and order meals online.",
    technologies: ["React", "CSS", "Node.js", "Firebase", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg",
  },
  {
    title: "Doctor Appointment System",
    description: "A booking platform for doctor appointments with search and management features.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL", "PHP"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and design abilities.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.svg",
  },
  {
    title: "Personalized Fitness and Nutrition Planning System",
    description: "A platform providing tailored fitness and nutrition plans with community engagement and a supplement store.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    image: "/placeholder.svg",
  },
];

const Card = React.forwardRef(({ className, children, variants, ...props }, ref) => (
  <motion.div
    ref={ref}
    variants={variants}
    className={`rounded-2xl border bg-white shadow-sm ${className}`}
    {...props}
  >
    {children}
  </motion.div>
));

Card.displayName = "Card";

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variants: PropTypes.object,
};

Card.defaultProps = {
  className: "",
};

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
      }
    }
  };

  const imageVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const techBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="projects" className="px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-bold text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <Card key={index} variants={cardVariants} className="overflow-hidden transition-shadow hover:shadow-lg">
              <motion.div className="overflow-hidden aspect-video" variants={imageVariants}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
              <div className="p-6 pt-0">
                <motion.div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      variants={techBadgeVariants}
                      className="px-2 py-1 text-xs text-blue-600 rounded-full bg-blue-50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href={project.github} className="text-gray-600 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a href={project.live} className="text-gray-600 hover:text-gray-900">
                      <Link className="w-5 h-5" />
                    </a>
                  )}
                </motion.div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;