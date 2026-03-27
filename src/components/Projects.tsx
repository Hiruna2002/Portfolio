import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import lsMasterBuilders from '../assets/LS Master Builders.png';
import csAntiquesWeb from '../assets/CSAntiques.png';
import carSale from '../assets/Car Sale.png';
import sSweets from '../assets/S_Sweets.png';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "LS MASTER BUILDERS",
    description: "Design Architecture",
    image: lsMasterBuilders,
  },
  {
    id: 2,
    title: "CS Antiques",
    description: "SpringBoot website to buy antiques online and view monthly profit.",
    image: csAntiquesWeb,
  },
  {
    id: 3,
    title: "Superior Scoop Sweets",
    description: "Full complete software for a sweets shop. Manage the entire shop with this software.",
    image: sSweets,
  },
  {
    id: 4,
    title: "Car Sale",
    description: "POS system & Single Page Application (SPA) with CRUD operations using HTML, CSS & JS.",
    image: carSale,
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-5xl font-bold text-center mb-12">My Work</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="w-full relative overflow-hidden rounded-3xl">
                <img src={project.image} alt={project.title} className="w-full transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-medium">{project.title}</h3>
                    {/* <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;