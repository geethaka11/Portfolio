import { useState, useEffect, useMemo } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ThemeHook } from './ThemeHook';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = ThemeHook();

  const menuItems = useMemo(() => [
    { title: 'Home', href: 'home' },
    { title: 'About', href: 'about' },
    { title: 'Skills', href: 'skills' },
    { title: 'Projects', href: 'projects' },
    { title: 'Contact', href: 'contact' },
  ], []);

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
  }, [menuItems]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="max-w-4xl px-4 mx-auto">
        <div className="px-4 py-2 my-4 border shadow-sm rounded-2xl lg:rounded-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-lg font-semibold text-gray-800 transition-all duration-300 cursor-pointer dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
            >
              Geethaka
            </Link>

            <div className="hidden space-x-6 md:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={`relative px-2 py-1 transition-all duration-300 cursor-pointer
                    ${activeSection === item.title.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-600 dark:text-gray-300'
                    }
                    hover:text-blue-600 dark:hover:text-blue-400
                    group
                  `}
                >
                  {item.title}
                  <span
                    className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-300
                      ${activeSection === item.title.toLowerCase()
                        ? 'scale-x-100'
                        : 'scale-x-0'
                      }
                      group-hover:scale-x-0
                    `}
                  />
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-800 transition-colors bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 md:hidden hover:text-blue-600 dark:hover:text-blue-400"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

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
                        ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30 rounded-lg'
                        : 'text-gray-600 dark:text-gray-300'
                      }
                      hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                    {activeSection === item.title.toLowerCase() && (
                      <span className="absolute left-0 w-1 h-full bg-blue-600 rounded-r-lg dark:bg-blue-400" />
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