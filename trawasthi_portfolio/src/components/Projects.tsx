import { PROJECTS } from "../constants/project";
import { Github } from "lucide-react";
const Projects = () => {
  return (
    <section id="project" className="pt-10 max-w-5xl mx-auto px-6 ">
      <h2 className="section-title text-3xl font-bold mb-10">
        Personal Projects
      </h2>
      <div className="projects-grid grid gap-8">
        {PROJECTS.map((project, index) => (
          <article
            key={index}
            className="project-card p-6 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title} <span className="dot text-green-500">•</span>
            </h3>
            <ul className="mb-4 list-disc list-inside text-gray-700">
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <div className="tags flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="tag bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline mt-4"
            >
              <Github size={18} /> View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
