import { FaCode, FaPalette, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-5xl font-bold text-center mb-12">My Services</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Web Design */}
          <div className="bg-[#262626] p-8 rounded-3xl hover:bg-accent transition-all group">
            <FaCode className="text-6xl mb-6 group-hover:text-white transition-colors" />
            <h2 className="text-3xl font-medium mb-4">Web Developer</h2>
            <p className="text-gray-400">
              Web design creates visually appealing and user-friendly websites 
              using layout, colors, and typography.
            </p>
          </div>

          {/* FullStack Developer */}
          <div className="bg-[#262626] p-8 rounded-3xl hover:bg-accent transition-all group">
            <FaPalette className="text-6xl mb-6 group-hover:text-white transition-colors" />
            <h2 className="text-3xl font-medium mb-4">Full Stack Developer</h2>
            <p className="text-gray-400">
              Full-stack developer skilled in building modern, responsive web applications using both 
              frontend and backend technologies. Passionate about creating efficient, user-friendly, 
              and scalable solutions.
            </p>
          </div>

          {/* App Design */}
          <div className="bg-[#262626] p-8 rounded-3xl hover:bg-accent transition-all group">
            <FaMobileAlt className="text-6xl mb-6 group-hover:text-white transition-colors" />
            <h2 className="text-3xl font-medium mb-4">Mobile Appliction Developer</h2>
            <p className="text-gray-400">
              App development builds mobile apps with smooth performance, 
              simple design, and cross-device support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;