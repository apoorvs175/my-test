






































import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  Star,
  Globe,
  Zap,
  CreditCard,
  Smartphone,
  Code,
  Database,
  Target,
  Rocket,
  Heart,
  Building,
  DollarSign,
  PieChart,
  Settings,
  MessageSquare,
  Calendar,
  FileText,
  Layers
} from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-emerald-600" />, number: "10,000+", label: "Active Users" },
    { icon: <Award className="w-8 h-8 text-purple-600" />, number: "99.9%", label: "Uptime" },
    { icon: <Clock className="w-8 h-8 text-blue-600" />, number: "24/7", label: "Support" },
    { icon: <Shield className="w-8 h-8 text-orange-600" />, number: "100%", label: "Secure" }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-emerald-600" />,
      title: "Global Payment Network",
      description: "Process payments worldwide with our extensive network of banking partners and financial institutions."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Bank-Grade Security",
      description: "Military-grade encryption and advanced security protocols protect every transaction and user data."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning Fast Processing",
      description: "Experience instant transaction processing with our optimized infrastructure and real-time systems."
    }
  ];

  const services = [
    {
      icon: <CreditCard className="w-12 h-12 text-emerald-600" />,
      title: "Payment Gateway",
      description: "Seamless payment processing with support for all major credit cards, digital wallets, and alternative payment methods.",
      features: ["Multi-currency support", "Real-time processing", "Fraud detection", "Mobile optimization"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-600" />,
      title: "Mobile Banking",
      description: "Complete mobile banking solutions with intuitive interfaces and advanced security features.",
      features: ["Biometric authentication", "Push notifications", "Offline capabilities", "Cross-platform support"]
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "API Integration",
      description: "Robust APIs that integrate seamlessly with your existing systems and third-party applications.",
      features: ["RESTful APIs", "Webhook support", "SDK libraries", "Comprehensive documentation"]
    },
    {
      icon: <Database className="w-12 h-12 text-orange-600" />,
      title: "Data Analytics",
      description: "Advanced analytics and reporting tools to help you understand your business performance.",
      features: ["Real-time dashboards", "Custom reports", "Predictive analytics", "Data visualization"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "ZynPay Technology transformed our payment processing. The integration was seamless and our transaction success rate increased by 40%."
    },
    {
      name: "Michael Chen",
      position: "CTO, FinanceFlow",
      company: "FinanceFlow",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "The security features and compliance standards exceeded our expectations. We've processed over $10M without any issues."
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager, PayEasy",
      company: "PayEasy",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Outstanding customer support and documentation. Our development team was able to integrate in just 2 days."
    }
  ];

  const industries = [
    { icon: <Building className="w-8 h-8" />, name: "E-commerce", count: "2,500+" },
    { icon: <Heart className="w-8 h-8" />, name: "Healthcare", count: "800+" },
    { icon: <Rocket className="w-8 h-8" />, name: "Fintech", count: "1,200+" },
    { icon: <Target className="w-8 h-8" />, name: "Retail", count: "3,000+" },
    { icon: <DollarSign className="w-8 h-8" />, name: "Banking", count: "450+" },
    { icon: <PieChart className="w-8 h-8" />, name: "Insurance", count: "600+" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Sign Up",
      description: "Create your account in minutes with our streamlined onboarding process.",
      icon: <FileText className="w-8 h-8 text-emerald-600" />
    },
    {
      step: "02",
      title: "Integration",
      description: "Integrate our APIs with comprehensive documentation and developer support.",
      icon: <Code className="w-8 h-8 text-purple-600" />
    },
    {
      step: "03",
      title: "Testing",
      description: "Test your implementation in our sandbox environment before going live.",
      icon: <Settings className="w-8 h-8 text-blue-600" />
    },
    {
      step: "04",
      title: "Go Live",
      description: "Launch your payment system with confidence and 24/7 monitoring support.",
      icon: <Rocket className="w-8 h-8 text-orange-600" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-300/20 to-cyan-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 mb-12 lg:mb-0"
            >
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 mb-6"
              >
                <Sparkles className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Next-Generation Financial Technology</span>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              >
                Revolutionizing{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Digital
                </span>{' '}
                Payments
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-xl mb-10 leading-relaxed"
              >
                Transform your business with our comprehensive API ecosystem that streamlines 
                payment processing, enhances security, and delivers exceptional user experiences 
                across all digital channels.
              </motion.p>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-xl font-semibold"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                    <Play className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="font-medium">Watch Demo</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced Illustration */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 flex justify-center"
            >
              <div className="relative">
                {/* Main Device */}
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 w-80 h-96 relative overflow-hidden">
                    {/* Header */}
                    <div className="flex justify-center mb-8">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xl">💼</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    <h3 className="text-center text-gray-800 font-bold text-xl mb-8">SECURE PLATFORM</h3>
                    
                    {/* Dashboard Elements */}
                    <div className="space-y-4">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 1 }}
                        className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-4 border border-emerald-200"
                      >
                        <span className="text-emerald-600 text-sm font-medium">✅ Payment Processing</span>
                      </motion.div>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4 border border-purple-200"
                      >
                        <span className="text-purple-600 text-sm font-medium">🔐 Security Verified</span>
                      </motion.div>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl font-bold hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg"
                      >
                        ACCESS DASHBOARD
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-xl"
                >
                  <span className="text-3xl">🚀</span>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    y: [0, 15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-12 -left-12 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-xl"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:from-purple-50 group-hover:to-emerald-50 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Star className="w-8 h-8 text-purple-600" />
              <p className="text-purple-600 font-bold text-lg">WHY CHOOSE US</p>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Built for Modern Businesses
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Experience the future of digital payments with our cutting-edge technology and comprehensive solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group hover:border-purple-200"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-4 text-xl group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <Link
                  to="/services"
                  className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Layers className="w-8 h-8 text-emerald-600" />
              <p className="text-emerald-600 font-bold text-lg">OUR SERVICES</p>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              From payment processing to advanced analytics, we provide everything you need to succeed in the digital economy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl group-hover:from-purple-100 group-hover:to-emerald-100 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Target className="w-8 h-8 text-indigo-600" />
              <p className="text-indigo-600 font-bold text-lg">HOW IT WORKS</p>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Simple Integration Process
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Get started with ZynPay C Technology in just four easy steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-indigo-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Building className="w-8 h-8 text-orange-600" />
              <p className="text-orange-600 font-bold text-lg">TRUSTED BY INDUSTRIES</p>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Serving Diverse Markets
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Our solutions power businesses across multiple industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center text-orange-600 group-hover:from-orange-200 group-hover:to-red-200 transition-all duration-300">
                    {industry.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{industry.name}</h3>
                <p className="text-orange-600 font-semibold">{industry.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MessageSquare className="w-8 h-8 text-blue-600" />
              <p className="text-blue-600 font-bold text-lg">TESTIMONIALS</p>
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Don't just take our word for it - hear from the businesses that trust us with their payment processing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Calendar className="w-8 h-8 text-emerald-200" />
              <p className="text-emerald-200 font-bold text-lg">STAY UPDATED</p>
            </div>
            <h2 className="text-5xl font-bold text-white mb-8">
              Get the Latest Updates
            </h2>
            <p className="text-emerald-100 text-xl mb-12 max-w-2xl mx-auto">
              Subscribe to our newsletter for industry insights, product updates, and exclusive offers
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-4 focus:ring-emerald-300 focus:outline-none"
                />
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of businesses that trust ZynPay  Technology for their payment processing needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-xl"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-2xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
