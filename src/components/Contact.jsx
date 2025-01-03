import { Toaster, toast } from "sonner";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false); // State to track loading

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true); // Start loading

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.reset();
          setLoading(false); // Stop loading
        },
        (error) => {
          toast.error("Something went wrong, please try again.");
          console.error("Error:", error);
          setLoading(false); // Stop loading
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kalharageethaka12@gmail.com",
      href: "mailto:kalharageethaka12@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/geethaka11",
      href: "https://github.com/geethaka11",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/geethaka-kalhara",
      href: "https://www.linkedin.com/in/geethaka-kalhara",
    },
    {
      icon: Phone,
      label: "Mobile Number",
      value: "077 335 4606",
      href: "tel:+94773354606",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const formControlVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contactCardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <Toaster position="top-center" />
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-4xl font-bold text-center text-gray-800"
        >
          Contact Me
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <motion.div
            variants={itemVariants}
            className="p-6 bg-white shadow-lg rounded-2xl"
          >
            <h3 className="mb-4 text-2xl font-semibold">Send Me a Message</h3>
            <p className="mb-6 text-gray-600">
              I'd love to hear from you! Fill out the form below and I'll get
              back to you soon.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formControlVariants}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </motion.div>
              <motion.div variants={formControlVariants}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </motion.div>
              <motion.div variants={formControlVariants}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 min-h-[150px]"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading} // Disable the button while loading
                className="w-full px-6 py-3 text-white transition bg-black/90 rounded-2xl hover:bg-black/80"
              >
                {loading ? "Sending..." : "Send Message"} {/* Loading text */}
              </motion.button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="mb-4 text-2xl font-semibold">Contact Information</h3>
            <p className="mb-6 text-gray-600">
              Reach out to me through any of the following platforms:
            </p>
            <motion.div variants={containerVariants} className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={contactCardVariants}
                  whileHover="hover"
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 transition border rounded-lg hover:bg-gray-100"
                >
                  <info.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">{info.label}</p>
                    <p className="text-sm text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
