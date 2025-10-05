import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Bot, Zap, Users, Mail, Phone, 
  ArrowRight, Star, CheckCircle, Code, Database,
  Cpu, Linkedin, Workflow,
  Send, Calendar, Download, Facebook, Instagram
} from 'lucide-react';
import emailjs from '@emailjs/browser';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('ik0BXVjxVy04Q9xlN'); // Your EmailJS public key
  }, []);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.company || !formData.service || !formData.budget || !formData.message) {
      setErrorMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      setSubmitStatus('error');
      return;
    }

    try {
      // EmailJS service configuration
      const serviceId = 'service_81d7f38'; // Your EmailJS service ID
      const templateId = 'template_k3bahiq'; // Your EmailJS template ID
      
      const templateParams = {
        to_email: 'samssolutionshub@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(serviceId, templateId, templateParams);
      
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      title: "n8n Invoice Processing Workflow",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "Manual invoice processing taking hours and prone to human errors",
      solution: "n8n workflow for automated invoice extraction, validation, and approval routing",
      results: [
        { metric: "85%", label: "Time Reduction" },
        { metric: "99%", label: "Accuracy Rate" },
        { metric: "24hrs", label: "Faster Processing" }
      ],
      technologies: ["n8n", "OCR API", "QuickBooks", "Slack", "Email"]
    },
    {
      title: "Customer Support Workflow by using n8n",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      problem: "High volume of support tickets causing delays and inconsistent responses",
      solution: "n8n workflow for automated ticket routing, categorization, and response generation",
      results: [
        { metric: "70%", label: "Faster Response" },
        { metric: "95%", label: "Customer Satisfaction" },
        { metric: "50%", label: "Workload Reduction" }
      ],
      technologies: ["n8n", "Zendesk", "OpenAI", "Slack", "CRM"]
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
      name: "Abhinesh Singh",
      role: "Lead Automation Engineer",
      bio: "n8n automation expert with the passion to build powerful automation workflows using n8n",
      image: "/team/Abhi_profile.jpeg",
      linkedin: "https://www.linkedin.com/in/abhinesh-singh-83427035a"
    },
    {
      name: "Prince Singh",
      role: "Automation Consultant",
      bio: "Specialist in discussing client needs, identifying automation opportunities, and translating them into efficient workflow solutions.",
      image: "/team/prince_profile.jpg",
      linkedin: "http://www.linkedin.com/in/prince-kumar-singh-9352a8374"
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
                <img 
                  src="/team/logo-removebg-preview.png" 
                  alt="SAMS Solutions Hub Logo" 
                  className="h-8 w-8 object-contain"
                />
                <span className="ml-2 text-xl font-bold text-white">SAMS Solutions Hub</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About SAMS Solutions Hub</h2>
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
          
          <div className="grid md:grid-cols-2 gap-8">
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
          
          <div className="grid md:grid-cols-2 gap-8">
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
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with intelligent automation? Let's discuss your
              challenges and explore how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-2xl shadow-sm border border-gray-700 p-6 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 relative">
              {/* Vertical divider line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>
              {/* Left: Contact Information */}
                <div>
                <h3 className="text-xl font-semibold text-white mb-4">Let's Start a Conversation</h3>
                <p className="text-gray-300 mb-8">
                  Whether you're looking to automate a specific process or transform your entire operation,
                  we're here to help. Reach out to discuss your project.
                </p>

                <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-700 text-blue-400">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                      <div className="text-sm font-medium text-white">Email Us</div>
                      <div className="text-gray-200">samssolutionshub@gmail.com</div>
                      <div className="text-gray-400 text-sm">Send us an email anytime</div>
                    </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-700 text-blue-400">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                      <div className="text-sm font-medium text-white">Call Us</div>
                      <div className="text-gray-200">+91 8144153237</div>
                      <div className="text-gray-400 text-sm">Anytime</div>
                    </div>
                </div>
                
                
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
                    <Calendar className="h-5 w-5 mr-2" />
                    Schedule a Free Consultation
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-3 rounded-lg border border-gray-600 text-gray-200 hover:bg-gray-700 transition">
                    <Download className="h-5 w-5 mr-2" />
                    Download Automation Guide
                  </button>
                </div>
              </div>
              
              {/* Right: Form */}
              <div>
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      <span className="text-green-200">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg">
                    <div className="flex items-center">
                      <X className="h-5 w-5 text-red-400 mr-2" />
                      <span className="text-red-200">{errorMessage}</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        placeholder="Your full name" 
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                        placeholder="your.email@company.com" 
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                      placeholder="Your company name" 
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest <span className="text-red-500">*</span></label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Workflow Automation (n8n)">Workflow Automation (n8n)</option>
                        <option value="Make.com Integrations">Make.com Integrations</option>
                        <option value="AI-Powered Automation">AI-Powered Automation</option>
                        <option value="Data Processing">Data Processing</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Project Budget <span className="text-red-500">*</span></label>
                      <select 
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        required
                      >
                        <option value="">Select budget range</option>
                        <option value="$2k - $5k">$2k - $5k</option>
                        <option value="$5k - $10k">$5k - $10k</option>
                        <option value="$10k - $25k">$10k - $25k</option>
                        <option value="$25k+">$25k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Details <span className="text-red-500">*</span></label>
                    <textarea 
                      rows={5} 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-900 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent" 
                      placeholder="Tell us about your project, current challenges, and goals..."
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
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
              <img 
                src="/team/logo-removebg-preview.png" 
                alt="SAMS Solutions Hub Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="ml-2 text-xl font-bold text-white">SAMS Solutions Hub</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a 
                href="http://www.linkedin.com/in/sams-solution-hub-4966b8388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/samssolutionshub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/sams_solutions_hub?igsh=NXQycWV4aW9mMWFr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            <p className="text-gray-400 text-sm">
              © 2025 SAMS Solutions Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;