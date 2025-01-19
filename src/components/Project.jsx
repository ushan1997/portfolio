import { PROJECTS } from "../constants";

function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-bold">Personal Project</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                className="mb-6 rounded"
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
              />
            </div>
            <div className="w-full lg:w-3/4">
            <h6 className="mb-2 font-bold">{project.title}</h6>
            <p className="mb-4 text-neutral-400 font-bold">{project.description}</p>
            <div>
                {project.technologies.map((tech, index) =>(
                    <span className="mr-2  rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-500"key={index}>{tech}</span>
                ))}

            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
