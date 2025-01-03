import { motion } from "framer-motion";
import { GraduationCap, Code, Lightbulb, Brain, Target, Coffee } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Undergraduate student in ICT at Uva Wellassa University.",
      color: "text-blue-600"
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-Stack Developer specializing in MERN stack",
      color: "text-blue-600"
    },
    {
      icon: Brain,
      title: "Quick Learner",
      description: "Adaptable to new technologies and frameworks",
      color: "text-blue-600"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions",
      color: "text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical approach to technical challenges",
      color: "text-blue-600"
    },
    {
      icon: Coffee,
      title: "Team Player",
      description: "Excellent collaboration and communication skills",
      color: "text-blue-600"
    }
  ];

  return (
    <section id="about" className="px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* About Me Header */}
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // This ensures animation happens only once
          className="mb-12 text-4xl font-bold text-center"
        >
          About Me
        </motion.h2>

        {/* About Me Paragraph */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} // Ensure this animation only happens once
          className="p-8 mb-12 bg-white shadow-lg rounded-2xl"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            I am a passionate Full-Stack developer and ICT undergraduate,
            dedicated to creating innovative web solutions. With a strong foundation in
            modern web technologies and best practices, I strive to build scalable and
            user-friendly applications. My commitment to continuous learning and
            problem-solving drives me to stay updated with the latest industry trends
            and technologies.
          </p>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }} // Ensure animation only happens once
              className="p-6 transition-all duration-300 transform bg-white shadow-sm rounded-xl hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <item.icon className={`w-8 h-8 ${item.color}`} />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
