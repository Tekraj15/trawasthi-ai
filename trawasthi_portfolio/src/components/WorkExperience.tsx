import { WORK_EXPERIENCE } from "../constants/work";

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="pt-10 max-w-5xl mx-auto px-6 ">
      <h2 className="text-3xl font-bold mb-10">Work Experience</h2>

      <div className="relative border-l-2 border-gray-200 ml-6">
        {WORK_EXPERIENCE.map((item) => (
          <div key={item.id} className="mb-12 ml-6">
            <div className="absolute -left-10 bg-white rounded-full  border shadow-sm">
              <img
                src={item.logo}
                alt={item.company}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>

            <div className="p-2 border rounded-xl shadow-sm bg-white relative hover:shadow-md transition">
              <div className="flex justify-between items-start">
                {/* Company info */}
                <div>
                  <h3 className="text-xl font-semibold">{item.company}</h3>
                  <p className="text-sm text-gray-600">{item.jobTitle}</p>
                </div>

                <div className="flex flex-col">
                  {/* Date */}
                  <span className="text-gray-600 text-sm whitespace-nowrap">
                    {item.dateRange}
                  </span>
                  {/* Mode Badge */}
                  <span className="text-xs bg-gray-100 text-gray-900 px-3 py-1 rounded-md mt-3 ">
                    {item.mode}
                  </span>
                </div>
              </div>

              <ul className="text-gray-700 mt-2 text-sm leading-relaxed list-disc ml-5">
                {item.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
