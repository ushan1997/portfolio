import { EXPERIENCES } from "../constants";

function Experiance() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl font-bold">Working Experience</h1>
      <div>
        {EXPERIENCES.map((data, index) => (
          <div key={index} className="mx-8 mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400 font-bold">{data.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-bold">
                {data.role} - <span>{data.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400 font-bold">{data.description}</p>
              <div>
                {data.technologies.map((tech, keyIndex) => (
                  <span
                    key={keyIndex}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm 
                    font-bold text-blue-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
