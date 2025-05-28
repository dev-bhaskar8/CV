import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Mail, 
  MapPin, 
  Calendar,
  ExternalLink,
  Code,
  Brain,
  Zap,
  Award,
  BookOpen,
  Briefcase,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'summary', label: 'Summary' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'Conversational AI', level: 95, icon: <Brain /> },
    { name: 'AI Infrastructure', level: 90, icon: <Code /> },
    { name: 'Transformer Models', level: 88, icon: <Zap /> },
    { name: 'Reinforcement Learning', level: 85, icon: <Award /> },
    { name: 'Python/TensorFlow', level: 92, icon: <Code /> },
    { name: 'React/Node.js', level: 87, icon: <Code /> },
    { name: 'Blockchain/Crypto', level: 80, icon: <Zap /> },
    { name: 'API Development', level: 90, icon: <Code /> }
  ];

  const experiences = [
    {
      title: 'Founder & Lead Developer',
      company: 'AIgamegen.xyz',
      period: 'Mar 2025 – Present',
      description: 'Architected and launched a platform enabling users to create and share AI-generated games through natural-language prompts.',
      highlights: [
        'Designed scalable backend infrastructure and RESTful APIs',
        'Implemented monitoring and auto-scaling strategies',
        'Maintained high availability under variable loads'
      ]
    },
    {
      title: 'Creator',
      company: 'Veronica OS',
      period: 'Jan 2024 – Present',
      description: 'Developed an ELIZA-inspired conversational AI framework with modular NLP pipelines and extensible plugin architecture.',
      highlights: [
        'Demonstrated use cases in customer support automation',
        'Built educational chatbots and interactive storytelling prototypes',
        'Published detailed documentation for community adoption'
      ]
    },
    {
      title: 'Independent AI Infrastructure & API Provider',
      company: 'freeapi.aigamegen.xyz',
      period: 'Jun 2022 – Present',
      description: 'Designed and deployed robust AI inference APIs serving enterprise clients in finance, healthcare, and gaming.',
      highlights: [
        'Built CI/CD pipelines and Kubernetes clusters',
        'Achieved 99.9% uptime with monitoring dashboards',
        'Advised teams on model versioning and cost optimization'
      ]
    },
    {
      title: 'Tech Lead + Investment Advisor',
      company: 'Yield Guild Games Southeast Asia (YGG SEA)',
      period: '2021 – 2023',
      description: 'Spearheaded development of AI-driven analytics and automated trading bots to optimize in-game asset management.',
      highlights: [
        'Integrated predictive models for yield farming',
        'Improved operational efficiency and ROI',
        'Provided technical leadership to engineering teams'
      ]
    },
    {
      title: 'Scholarship Manager',
      company: 'Yield Guild Games (YGG)',
      period: '2020 – 2021',
      description: 'Managed a portfolio of Axie Infinity scholarships, onboarding, training, and retaining top players.',
      highlights: [
        'Developed automation tools for scholarship allocation',
        'Streamlined performance tracking and reporting',
        'Collaborated with tech teams to optimize yield strategies'
      ]
    }
  ];

  const projects = [
    {
      name: 'Veronica OS',
      description: 'ELIZA-inspired conversational AI framework with modular NLP pipelines',
      tech: ['Python', 'TensorFlow', 'NLP', 'AI'],
      link: 'https://github.com/dev-bhaskar8/'
    },
    {
      name: 'AIgamegen.xyz',
      description: 'Platform for prompt-driven game generation with scalable backend infrastructure',
      tech: ['React', 'Node.js', 'AI', 'APIs'],
      link: 'https://github.com/dev-bhaskar8/'
    },
    {
      name: 'GPT-2 Fine-Tuning',
      description: 'Domain-specific GPT-2 model training with 30% iteration time reduction',
      tech: ['PyTorch', 'GPT-2', 'GPU Clusters'],
      link: 'https://github.com/dev-bhaskar8/'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Vaas
          </motion.div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {sections.map((section) => (
              <motion.button
                key={section.id}
                className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
          </div>

          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-background">
          <div className="hero-grid"></div>
        </div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vaas
            </motion.h1>
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              AI/ML Specialist & Infrastructure Architect
            </motion.p>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Over a decade of experience designing and deploying advanced AI agents and infrastructures. 
              Creator of Veronica OS and founder of AIgamegen.xyz.
            </motion.p>
            
            <motion.div 
              className="hero-links"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="https://github.com/dev-bhaskar8/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github />
                <span>GitHub</span>
              </a>
              <a href="https://twitter.com/VaasCrypto" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter />
                <span>Twitter</span>
              </a>
            </motion.div>

            <motion.button 
              className="cta-button"
              onClick={() => scrollToSection('contact')}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <ChevronDown />
        </motion.div>
      </section>

      {/* Professional Summary */}
      <section id="summary" className="summary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Professional Summary</h2>
            <div className="summary-content">
              <p>
                Results-driven AI/ML specialist with over a decade of hands-on experience designing and 
                deploying advanced AI agents and infrastructures. Creator of Veronica OS, an ELIZA-inspired 
                conversational framework, and founder of AIgamegen.xyz, a platform for prompt-driven game generation.
              </p>
              <p>
                Proven track record in transformer fine-tuning, reinforcement learning, and delivering 
                scalable API services. Expertise spans from conversational AI and infrastructure development 
                to blockchain integration and educational technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Key Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Professional Experience</h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{exp.title}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-highlights">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink />
                    <span>View Project</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="education">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Education</h2>
            <div className="education-card">
              <div className="education-icon">
                <BookOpen />
              </div>
              <div className="education-content">
                <h3 className="education-degree">B.Tech in Computer Science</h3>
                <h4 className="education-school">VIT Vellore, India</h4>
                <span className="education-year">Graduated 2021</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <p className="contact-description">
                Interested in collaborating on AI/ML projects or discussing opportunities? 
                I'd love to hear from you!
              </p>
              
              <div className="contact-links">
                <a href="https://github.com/dev-bhaskar8/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Github />
                  <span>GitHub</span>
                </a>
                <a href="https://twitter.com/VaasCrypto" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Twitter />
                  <span>Twitter</span>
                </a>
                <a href="mailto:vaas@aigamegen.xyz" className="contact-link">
                  <Mail />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Vaas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
