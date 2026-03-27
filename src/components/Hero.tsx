import { motion } from 'framer-motion';
import image from '../assets/CV Profile New.jpeg'
import cv from '../assets/Hiruna_s_Resume_New.pdf'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent text-2xl font-medium"
          >
            Software Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold leading-tight mt-4"
          >
            Hi, I'm <span className="text-accent">Hiruna Fernando</span><br />
            From Sri Lanka
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-xl text-gray-400 max-w-md mx-auto md:mx-0"
          >
            Fullstack Developer passionate about building beautiful and functional digital experiences.
          </motion.p>

          <div className="mt-10 flex gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-accent hover:bg-red-600 transition-all px-8 py-4 rounded-full font-medium text-lg">
              Hire Me
            </a>
            <a
              href={cv}
              download
              className="border border-accent hover:bg-white/10 transition-all px-8 py-4 rounded-full font-medium text-lg"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="flex justify-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] 
                        mx-auto flex items-center justify-center 
                        bg-white/10 rounded-full border-8 border-white/20 shadow-2xl overflow-hidden"
            >
                <img
                    src={image}
                    alt="Hiruna Fernando"
                    className="w-full h-full object-cover rounded-full"
                />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;