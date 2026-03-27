import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achivement" className="py-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-5">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          Achievements
        </motion.h1>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#1a1a1a] border border-accent/30 hover:border-accent rounded-3xl p-10 text-center overflow-hidden"
          >
            {/* Gold Accent Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-xl"></div>
            
            <div className="relative">
              {/* Trophy Icon */}
              <div className="mx-auto w-24 h-24 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <FaTrophy className="text-6xl" />
              </div>

              {/* Award Details */}
              <h2 className="text-4xl font-bold text-white mb-2">
                1st Place
              </h2>
              <p className="text-accent text-2xl font-medium mb-6">
                Circle Edge Event 2025
              </p>

              <div className="inline-flex items-center gap-3 bg-black/50 px-6 py-2 rounded-3xl mb-8">
                <span className="text-sm font-medium text-gray-400">TEAM LEADER</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Hiruna Fernando</span>
              </div>

              <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                Led my team to victory in the prestigious Circle Edge Event 2025. 
                Demonstrated exceptional leadership, problem-solving, and teamwork skills.
              </p>

              {/* Year Badge */}
              <div className="mt-10 inline-block bg-[#262626] text-sm font-medium px-6 py-2 rounded-2xl">
                2025
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;