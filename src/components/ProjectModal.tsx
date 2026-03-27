import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
};

interface Props {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1a1a1a] max-w-2xl w-full rounded-3xl overflow-hidden"
      >
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-accent p-3 rounded-full text-white"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-300 text-lg">{project.description}</p>
          <button
            onClick={onClose}
            className="mt-8 w-full bg-accent hover:bg-red-600 py-4 rounded-2xl font-medium text-lg"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;