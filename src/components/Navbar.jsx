import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { title: 'Home', href: 'home' },
    { title: 'About', href: 'about' },
    { title: 'Skills', href: 'skills' },
    { title: 'Projects', href: 'projects' },
    { title: 'Contact', href: 'contact' },
  ];

  // Handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.title.toLowerCase());

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }} // Start off-screen
      animate={{ y: 0 }}    // Move to the top of the screen
      transition={{ duration: 1 }} // Animation duration of 500ms
    >
      <div className="max-w-4xl px-4 mx-auto">
        <div className="px-4 py-2 my-4 border shadow-sm rounded-2xl lg:rounded-full backdrop-blur-sm bg-white/80">
          <div className="flex items-center justify-between">
            {/* Logo - wrapped in Link for scrolling to home */}
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-lg font-semibold text-gray-800 transition-all duration-300 cursor-pointer hover:text-blue-600"
            >
              Geethaka
            </Link>

            {/* Desktop Menu */}
            <div className="hidden space-x-6 md:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={`relative px-2 py-1 transition-all duration-300 cursor-pointer
                    ${activeSection === item.title.toLowerCase() 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600'
                    }
                    hover:text-blue-600
                    group
                  `}
                >
                  {item.title}
                  <span 
                    className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300
                      ${activeSection === item.title.toLowerCase() 
                        ? 'scale-x-100' 
                        : 'scale-x-0'
                      }
                      group-hover:scale-x-0 // Hide on hover
                    `}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 transition-colors duration-300 md:hidden hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="py-2 md:hidden">
              <div className="flex flex-col space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    className={`relative px-2 py-1 transition-all duration-300
                      ${activeSection === item.title.toLowerCase()
                        ? 'text-blue-600 font-medium bg-blue-50 rounded-lg'
                        : 'text-gray-600'
                      }
                      hover:text-blue-600 hover:bg-blue-50 rounded-lg
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                    {activeSection === item.title.toLowerCase() && (
                      <span className="absolute left-0 w-1 h-full bg-blue-600 rounded-r-lg" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
