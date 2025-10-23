import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Github, Linkedin, Mail, Code2, Database, Brain, Server, Moon, Sun, Sparkles } from 'lucide-react';
import { portfolioData } from '../mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-light tracking-tight text-black dark:text-white transition-colors duration-300">Portfolio</div>
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    activeSection === item.toLowerCase() 
                      ? 'text-black dark:text-white font-normal' 
                      : 'text-gray-500 dark:text-gray-400 font-light'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-16 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/20 dark:via-gray-950 dark:to-cyan-950/20 transition-colors duration-500" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="inline-block relative group">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 animate-pulse" />
                <Code2 className="w-12 h-12 text-white relative z-10" />
                <Sparkles className="w-4 h-4 text-white absolute top-2 right-2 animate-pulse" />
              </div>
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-black dark:text-white mb-6 opacity-0 animate-fade-in transition-colors duration-300" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', letterSpacing: '-0.02em' }}>
            {portfolioData.hero.name}
          </h1>
          <p className="text-2xl md:text-3xl font-light bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            {portfolioData.hero.title}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in transition-colors duration-300" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            {portfolioData.hero.description}
          </p>
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 px-8 py-6 text-base border-0"
            >
              Get in Touch
            </Button>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="border-2 border-blue-600 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 hover:bg-blue-50 dark:hover:bg-cyan-950/30 transition-all duration-300 hover:scale-105 px-8 py-6 text-base"
            >
              View Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-4xl mx-auto">
          <h2 
            data-animate 
            id="about-title"
            className={`text-5xl md:text-6xl font-light tracking-tight text-black dark:text-white mb-12 transition-all duration-1000 ${
              visibleElements.has('about-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ letterSpacing: '-0.02em' }}
          >
            About
          </h2>
          <p 
            data-animate
            id="about-text"
            className={`text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light transition-all duration-1000 delay-200 ${
              visibleElements.has('about-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {portfolioData.about.text}
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 lg:px-12 bg-white dark:bg-gray-950 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-animate
            id="exp-title"
            className={`text-5xl md:text-6xl font-light tracking-tight text-black dark:text-white mb-16 transition-all duration-1000 ${
              visibleElements.has('exp-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ letterSpacing: '-0.02em' }}
          >
            Experience
          </h2>
          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <div
                key={exp.id}
                data-animate
                id={`exp-${exp.id}`}
                className={`group transition-all duration-1000 hover:translate-x-2 ${
                  visibleElements.has(`exp-${exp.id}`) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-8 pb-8 group-hover:border-blue-500 dark:group-hover:border-cyan-500 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-normal text-black dark:text-white mb-1 transition-colors duration-300">{exp.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 font-light transition-colors duration-300">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-500 mt-2 md:mt-0 transition-colors duration-300">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-light transition-colors duration-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-light hover:border-blue-500 dark:hover:border-cyan-500 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 
            data-animate
            id="projects-title"
            className={`text-5xl md:text-6xl font-light tracking-tight text-black dark:text-white mb-16 transition-all duration-1000 ${
              visibleElements.has('projects-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ letterSpacing: '-0.02em' }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioData.projects.map((project, index) => (
              <div
                key={project.id}
                data-animate
                id={`project-${project.id}`}
                className={`group cursor-pointer transition-all duration-1000 ${
                  visibleElements.has(`project-${project.id}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="mb-6 overflow-hidden rounded-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-cyan-500/20">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full aspect-[4/3] object-cover transition-all duration-700 group-hover:scale-110"
                      style={{
                        filter: hoveredProject === project.id ? 'grayscale(0%)' : 'grayscale(100%)',
                        transition: 'filter 0.5s ease, transform 0.7s ease'
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </div>
                <h3 className="text-xl font-normal text-black dark:text-white mb-2 transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 font-light text-sm leading-relaxed transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="outline" 
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-light hover:border-blue-500 dark:hover:border-cyan-500 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 lg:px-12 bg-white dark:bg-gray-950 transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-animate
            id="skills-title"
            className={`text-5xl md:text-6xl font-light tracking-tight text-black dark:text-white mb-16 transition-all duration-1000 ${
              visibleElements.has('skills-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ letterSpacing: '-0.02em' }}
          >
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'Backend', icon: Server, skills: portfolioData.skills.backend, color: 'from-blue-500 to-blue-600' },
              { title: 'Generative AI', icon: Brain, skills: portfolioData.skills.ai, color: 'from-cyan-500 to-cyan-600' },
              { title: 'Databases', icon: Database, skills: portfolioData.skills.databases, color: 'from-blue-600 to-cyan-600' },
              { title: 'DevOps', icon: Code2, skills: portfolioData.skills.devops, color: 'from-cyan-600 to-blue-600' }
            ].map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  data-animate
                  id={`skill-${index}`}
                  className={`group transition-all duration-1000 hover:scale-105 ${
                    visibleElements.has(`skill-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-normal text-black dark:text-white transition-colors duration-300">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        className="text-gray-600 dark:text-gray-400 font-light transition-all duration-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:translate-x-1 cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/20 dark:via-gray-950 dark:to-cyan-950/20 transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            data-animate
            id="contact-title"
            className={`text-5xl md:text-6xl font-light tracking-tight text-black dark:text-white mb-12 transition-all duration-1000 ${
              visibleElements.has('contact-title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} 
            style={{ letterSpacing: '-0.02em' }}
          >
            Let's Connect
          </h2>
          <p 
            data-animate
            id="contact-text"
            className={`text-xl text-gray-600 dark:text-gray-300 mb-12 font-light transition-all duration-1000 delay-200 ${
              visibleElements.has('contact-text') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Interested in working together or have a project in mind? Feel free to reach out.
          </p>
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: Mail, label: 'Email', href: `mailto:${portfolioData.contact.email}` },
              { icon: Github, label: 'GitHub', href: portfolioData.contact.github },
              { icon: Linkedin, label: 'LinkedIn', href: portfolioData.contact.linkedin }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== 'Email' ? '_blank' : undefined}
                  rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  data-animate
                  id={`contact-${index}`}
                  className={`flex items-center gap-2 text-black dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
                    visibleElements.has(`contact-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-light">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light transition-colors duration-300">© 2025 Python Developer. All rights reserved.</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-light mt-2 md:mt-0 transition-colors duration-300">{portfolioData.contact.location}</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;