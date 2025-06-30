
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">Kamila</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate developer creating digital experiences that make a difference
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 hover-scale"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 hover-scale"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 hover-scale"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 hover-scale"
          >
            Learn More
            <ArrowDown className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
