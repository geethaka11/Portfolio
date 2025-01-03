import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } }
  };

  const photoVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" }}
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 }}
  };

  return (
    <section id="home" className="px-6 py-12 mt-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="flex flex-col items-center justify-center gap-12 mx-auto max-w-7xl lg:grid lg:grid-cols-2">
        {/* Content coming from the left */}
        <motion.div
          className="space-y-8 text-left"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 variants={childVariants} className="mb-6 text-4xl font-bold md:text-6xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi, I'm <span className="text-blue-600">Geethaka</span>
          </motion.h1>

          <motion.p variants={childVariants} className="mb-8 text-xl text-gray-600 md:text-2xl">
            A Passionate Full-Stack Developer
          </motion.p>

          <motion.div variants={childVariants} className="flex gap-4 mb-8">
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'assets/Geethaka_Kalhara CV.pdf';
                link.download = 'Geethaka_Resume';
                link.click();
              }}
              whileTap={{ scale: 0.8 }}
              className="inline-flex items-center justify-center h-12 px-6 transition duration-300 border border-gray-300 rounded-2xl hover:bg-gray-100"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div variants={childVariants} className="flex gap-4">
            {/* Social Icons */}
            <motion.a
              href="mailto:kalharageethaka12@gmail.com"
              className="text-gray-600 transition-colors hover:text-gray-900"
              whileHover={{ scale: 1.2 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/geethaka-kalhara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/geethaka11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900"
              whileHover={{ scale: 1.2 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="tel:+94771236541"
              className="text-gray-600 transition-colors hover:text-gray-900"
              whileHover={{ scale: 1.2 }}
            >
              <Phone className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Photo coming from the right */}
        <motion.div
          className="relative fade-in"
          variants={photoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-2xl">
            <motion.img src="./assets/profile.png" alt="Geethaka" className="object-cover w-full h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
