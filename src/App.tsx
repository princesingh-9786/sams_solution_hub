import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronRight, Bot, Zap, Users, Mail, Phone, 
  MapPin, ArrowRight, Star, CheckCircle, Code, Database,
  Cloud, Cpu, Github, Linkedin, Twitter, ExternalLink, Workflow,
  Play, Award, TrendingUp, Clock
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'tools', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'tools', label: 'Tools' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      icon: <Workflow className="w-12 h-12 text-blue-400" />,
      title: "AI Workflow Automation with n8n",
      description: "Build powerful automation workflows using n8n's visual interface to connect your apps, APIs, and databases seamlessly."
    },
    {
      icon: <Zap className="w-12 h-12 text-teal-400" />,
      title: "Make.com Integration Solutions",
      description: "Create sophisticated automation scenarios with Make.com to streamline your business processes and eliminate manual tasks."
    },
    {
      icon: <Bot className="w-12 h-12 text-purple-400" />,
      title: "AI-Powered Process Automation",
      description: "Leverage AI capabilities within your workflows to make intelligent decisions, process data, and automate complex business logic."
    },
    {
      icon: <Database className="w-12 h-12 text-green-400" />,
      title: "Data Processing",
      description: "Automate data collection, transformation, and synchronization between multiple platforms and databases."
    },
    {
      icon: <Code className="w-12 h-12 text-orange-400" />,
      title: "Custom Webhook Solutions",
      description: "Build custom webhook endpoints and API integrations to connect any service with your automation workflows."
    },
    {
      icon: <Cpu className="w-12 h-12 text-red-400" />,
      title: "Process Optimization",
      description: "Analyze your current processes and design optimized automation workflows that save time and reduce errors."
    }
  ];

  const portfolioProjects = [
    {
      title: "E-commerce Order Processing Automation",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "Manual order processing and inventory updates taking 40+ hours weekly",
      solution: "n8n workflow connecting Shopify, inventory system, and fulfillment center with automated notifications",
      results: [
        { metric: "95%", label: "Time Reduction" },
        { metric: "$50K", label: "Annual Savings" },
        { metric: "99.8%", label: "Accuracy Rate" }
      ],
      technologies: ["n8n", "Shopify API", "Google Sheets", "Slack"]
    },
    {
      title: "Lead Management Automation",
      image: "https://images.pexels.com/photos/8867483/pexels-photo-8867483.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "Leads from multiple sources not being properly tracked and followed up",
      solution: "Make.com scenario integrating all lead sources with CRM and automated nurture sequences",
      results: [
        { metric: "300%", label: "Lead Response Speed" },
        { metric: "85%", label: "Follow-up Rate" },
        { metric: "45%", label: "Conversion Increase" }
      ],
      technologies: ["Make.com", "HubSpot", "Facebook Ads", "Email Marketing"]
    },
    {
      title: "Social Media Content Automation",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "Time-consuming social media posting and content distribution across platforms",
      solution: "n8n workflow for automated content creation, scheduling, and cross-platform posting",
      results: [
        { metric: "20hrs", label: "Weekly Time Saved" },
        { metric: "200%", label: "Content Output" },
        { metric: "60%", label: "Engagement Increase" }
      ],
      technologies: ["n8n", "OpenAI", "Buffer", "Canva API"]
    },
    {
      title: "Financial Reporting Automation",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "Manual financial data collection and report generation taking days",
      solution: "Make.com automation pulling data from multiple sources and generating automated reports",
      results: [
        { metric: "90%", label: "Time Reduction" },
        { metric: "Real-time", label: "Data Updates" },
        { metric: "Zero", label: "Manual Errors" }
      ],
      technologies: ["Make.com", "QuickBooks", "Google Sheets", "Slack"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      role: "Operations Director",
      content: "The n8n workflows they built for us have completely transformed our operations. We're saving 30+ hours per week and our data accuracy has improved dramatically.",
      rating: 5,
      image: "https://images.pexels.com/photos/3783525/pexels-photo-3783525.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Michael Rodriguez",
      company: "GrowthCorp",
      role: "CEO",
      content: "Their Make.com automations handle our lead processing flawlessly. Our response time has improved by 300% and we never miss a lead anymore.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Emily Watson",
      company: "RetailPro",
      role: "Finance Manager",
      content: "Order processing used to be our biggest bottleneck. Now it's completely automated with n8n and we can focus on growing the business.",
      rating: 5,
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const tools = [
    { name: "n8n", category: "Automation" },
    { name: "Make.com", category: "Automation" },
    { name: "OpenAI", category: "AI" },
    { name: "Webhooks", category: "Integration" },
    { name: "HubSpot", category: "CRM" },
    { name: "Salesforce", category: "CRM" },
    { name: "Google Sheets", category: "Database" },
    { name: "Airtable", category: "Database" },
    { name: "Shopify", category: "E-commerce" },
    { name: "Slack", category: "Communication" },
    { name: "Email APIs", category: "Communication" },
    { name: "REST APIs", category: "Integration" }
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Lead Automation Engineer",
      bio: "10+ years in automation with deep expertise in n8n, Make.com, and workflow optimization for businesses.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    },
    {
      name: "Maria Garcia",
      role: "Senior Automation Specialist",
      bio: "Expert in designing complex automation workflows and integrations using visual automation platforms.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Head of Client Success",
      bio: "Business process expert focused on translating client requirements into effective automation workflows.",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Bot className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold text-white">AutoFlow AI</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'text-blue-400 bg-gray-800' 
                        : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-800">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-400 bg-gray-800' 
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="text-blue-400"> AI Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We build powerful automation workflows using n8n and Make.com that eliminate repetitive tasks, 
              reduce errors, and scale your operations effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transition-colors flex items-center justify-center"
              >
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About AutoFlow AI</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're passionate about empowering businesses through intelligent automation and AI solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To democratize automation using n8n and Make.com, making powerful workflow solutions accessible to businesses of all sizes.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where businesses focus on innovation and growth while AI handles the repetitive work.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Values</h3>
              <p className="text-gray-300 leading-relaxed">
                Innovation, reliability, and client success drive everything we do. Your growth is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Automation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized automation solutions using n8n and Make.com tailored to your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-700">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portfolio & Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients. See how we've transformed businesses through automation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioProjects.map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-600">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-white mb-1">Problem:</h4>
                      <p className="text-gray-300 text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Solution:</h4>
                      <p className="text-gray-300 text-sm">{project.solution}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{result.metric}</div>
                        <div className="text-xs text-gray-400">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section id="tools" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tools & Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in n8n and Make.com, integrating with popular platforms to deliver robust automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors border border-gray-600">
                <div className="text-lg font-semibold text-white mb-2">{tool.name}</div>
                <div className="text-sm text-gray-400">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals dedicated to transforming your business through automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-md text-center border border-gray-700">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                <a 
                  href={member.linkedin}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how n8n and Make.com can streamline your operations and accelerate your growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us about your automation needs..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Email Us</h4>
                    <p className="text-blue-100">hello@autoflowai.com</p>
                    <p className="text-blue-100">support@autoflowai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Call Us</h4>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                    <p className="text-blue-100">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-white">Visit Us</h4>
                    <p className="text-blue-100">123 Innovation Drive</p>
                    <p className="text-blue-100">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold text-white">AutoFlow AI</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 AutoFlow AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;