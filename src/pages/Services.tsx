// import React from 'react';
// import { motion } from 'framer-motion';

// const Services = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.3 }}
//       className="min-h-screen pt-20"
//     >
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
//         <p className="text-lg text-gray-600 text-center">
//           Services content coming soon...
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default Services;






























import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Smartphone, 
  Code, 
  Database, 
  Check,
  Globe,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Seamless payment processing with support for all major credit cards, digital wallets, and alternative payment methods.",
      features: [
        "Multi-currency support",
        "Real-time processing",
        "Fraud detection",
        "Mobile optimization"
      ],
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50"
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Complete mobile banking solutions with intuitive interfaces and advanced security features.",
      features: [
        "Biometric authentication",
        "Push notifications",
        "Offline capabilities",
        "Cross-platform support"
      ],
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50"
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Robust APIs that integrate seamlessly with your existing systems and third-party applications.",
      features: [
        "RESTful APIs",
        "Webhook support",
        "SDK libraries",
        "Comprehensive documentation"
      ],
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Advanced analytics and reporting tools to help you understand your business performance.",
      features: [
        "Real-time dashboards",
        "Custom reports",
        "Predictive analytics",
        "Data visualization"
      ],
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50"
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: "Global Payment Network",
      description: "Process payments worldwide with our extensive network of banking partners and financial institutions.",
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Military-grade encryption and advanced security protocols protect every transaction and user data.",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50"
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Experience instant transaction processing with our optimized infrastructure and real-time systems.",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial technology solutions designed to power your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-lg ${service.iconBg} mr-4`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="text-purple-600 font-bold text-lg tracking-wider uppercase flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                Why Choose Us
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the future of digital payments with our cutting-edge technology and 
              comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`p-4 rounded-lg ${item.iconBg} inline-block mb-6`}>
                  <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <button className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of businesses already using our platform
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Start Free Trial
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;