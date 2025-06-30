
import { Calendar, Download } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React and Node.js. Mentored junior developers and implemented best practices.",
      skills: ["React", "Node.js", "TypeScript", "AWS"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects, focusing on responsive design and optimal user experience.",
      skills: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Startup Innovations",
      period: "2019 - 2020",
      description: "Built interactive user interfaces and collaborated closely with design team to implement pixel-perfect designs.",
      skills: ["JavaScript", "CSS3", "HTML5", "Figma"]
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Experience & Resume
          </h2>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <Download className="mr-2" size={20} />
            Download Resume
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                    <Calendar size={18} className="mr-2" />
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
