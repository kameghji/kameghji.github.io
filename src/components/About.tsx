
export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a dedicated software developer with a passion for creating innovative 
                solutions and meaningful digital experiences. My journey in technology has 
                been driven by curiosity and the desire to solve complex problems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in modern web technologies and a keen eye for design, 
                I strive to bridge the gap between functionality and user experience. 
                I believe in writing clean, maintainable code and continuously learning 
                new technologies.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="text-white text-xl font-semibold">
                  Your Photo Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
