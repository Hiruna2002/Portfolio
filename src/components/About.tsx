import { useState } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/About Image.jpeg'

const About = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'education'>('skills');

  return (
    <section id="about" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={aboutImage} alt="About Me" className="rounded-3xl w-full" />
          </motion.div>

          <div>
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Hello!! I am Hiruna Hansindu Fernando. a Fullstack Developer. I always like to learn new and challenging things about programming. So I spent this long year learning new things about programming and project creation.
            </p>

            <div className="flex gap-8 mt-10 border-b border-gray-700">
              <button
                onClick={() => setActiveTab('skills')}
                className={`pb-3 text-xl font-medium transition-all ${
                  activeTab === 'skills' ? 'text-accent border-b-4 border-accent' : 'text-gray-400'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`pb-3 text-xl font-medium transition-all ${
                  activeTab === 'education' ? 'text-accent border-b-4 border-accent' : 'text-gray-400'
                }`}
              >
                Education
              </button>
            </div>

            {activeTab === 'skills' && (
              <ul className="mt-8 space-y-6 text-lg">
                <li><span className="text-accent font-semibold">UI/UX</span><br />Designing Web/App Interfaces</li>
                <li><span className="text-accent font-semibold">Web Development</span><br />Web app Development</li>
                <li><span className="text-accent font-semibold">App Development</span><br />Building Android/iOS apps</li>
              </ul>
            )}

            {activeTab === 'education' && (
              <ul className="mt-8 space-y-6 text-lg">
                <li><span className="text-accent">2024 - current</span><br />Studying Graduate Diploma In Software Engineering @ IJSE</li>
                <li><span className="text-accent">2023</span><br />ICT Technician 6 Month Job Training at Ceylon Electricity Board(CEB) Dehiwala</li>
                <li><span className="text-accent">2022</span><br />Complete ICT NVQ Level 4</li>
                <li><span className="text-accent">2021(2022)</span><br />GCE A/L Examination</li>
                <li><span className="text-accent">2019</span><br />English and ICT Diploma</li>
                <li><span className="text-accent">2018</span><br />GCE O/L Examination</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;