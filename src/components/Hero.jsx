import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const contentVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 }}
  };

  return (
    <section
      id="home"
      className="px-6 pt-12 mt-12 sm:px-8 sm:pt-16 lg:px-16 lg:pt-24"
    >
      <div className="flex flex-col items-center justify-center gap-12 mx-auto max-w-7xl lg:grid lg:grid-cols-2">
        <motion.div
          className="space-y-8 text-center lg:text-left"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1
            variants={childVariants}
            className="mb-6 text-4xl font-bold md:text-6xl text-light-text dark:text-dark-text"
          >
            {`Hi, I'm `}<span className="text-light-primary dark:text-dark-primary">Geethaka</span>
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mb-8 text-xl text-gray-600 dark:text-gray-300 md:text-2xl"
          >
            A Passionate Full-Stack Developer
          </motion.p>

          <motion.div variants={childVariants} className="flex justify-center gap-4 mb-8 lg:justify-start">
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'assets/Geethaka Kalhara CV.pdf';
                link.download = 'Geethaka_CV';
                link.click();
              }}
              whileTap={{ scale: 0.8 }}
              className="inline-flex items-center justify-center h-12 px-6 transition duration-300 border border-gray-300 dark:border-gray-700 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Download className="w-5 h-5 mr-2 text-light-text dark:text-dark-text" />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div variants={childVariants} className="flex justify-center gap-4 lg:justify-start">
            {[
              { Icon: Mail, href: "mailto:kalharageethaka12@gmail.com" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/geethaka-kalhara", external: true },
              { Icon: Github, href: "https://github.com/geethaka11", external: true },
              { Icon: Phone, href: "tel:+9477773354606" }
            ].map(({ Icon, href, external }) => (
              <motion.a
                key={href}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-gray-600 transition-colors dark:text-gray-300 hover:text-light-primary dark:hover:text-dark-primary"
                whileHover={{ scale: 1.2 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] bg-light-primary/20"
            animate={{
              borderRadius: [
                "50% 50% 50% 50%",
                "60% 40% 30% 70%",
                "40% 60% 70% 30%",
                "70% 30% 50% 50%",
                "50% 50% 50% 50%"
              ],
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img src="./assets/profile.png" alt="Geethaka" className="object-cover w-full h-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;