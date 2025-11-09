import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Users, 
  Globe, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Star,
  Zap,
  Building
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Security First",
      description: "We prioritize the highest levels of security in all our solutions, ensuring complete protection of sensitive financial data and transactions."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Customer Centric",
      description: "Our customers are at the heart of everything we do. We build solutions that truly address their needs and exceed expectations."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "We continuously innovate and adopt cutting-edge technologies to stay ahead in the rapidly evolving fintech landscape."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards, transparency, and accountability in all our operations."
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-12 h-12 text-emerald-600" />,
      title: "NPCI Certified",
      description: "Official certification from National Payments Corporation of India for payment processing excellence."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "ISO 27001 Compliant",
      description: "International standard certification for information security management systems."
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Global Reach",
      description: "Serving clients across multiple countries with localized payment solutions."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-600" />,
      title: "Industry Leader",
      description: "Recognized as a leading innovator in the financial technology sector."
    }
  ];

  const milestones = [
    {
      year: " Jan, 2025",
      title: "Company Founded",
      description: "Planet C Technology was established with a vision to revolutionize digital payments in India."
    },
    {
      year: "Mar,2025",
      title: "NPCI Partnership",
      description: "Achieved official partnership and certification with National Payments Corporation of India."
    },
    {
      year: "Apr, 2025",
      title: "Platform Launch",
      description: "Launched our comprehensive API platform serving thousands of businesses nationwide."
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center text-white"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Building className="w-8 h-8 text-emerald-400" />
              <p className="text-emerald-400 font-bold text-lg">ABOUT OUR COMPANY</p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              Pioneering{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Financial
              </span>{' '}
              Innovation
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Since our inception, Zynpay Technology has been at the forefront of financial 
              technology innovation, transforming how businesses and individuals interact with 
              digital payment systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize financial services by providing secure, innovative, and accessible 
                payment solutions that empower businesses of all sizes to thrive in the digital economy. 
                We strive to bridge the gap between traditional banking and modern technology.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading global platform for financial technology solutions, 
                setting new standards for security, innovation, and customer experience. 
                We envision a world where financial transactions are seamless, secure, and universally accessible.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are guided by principles of integrity, innovation, and customer-centricity. 
                Our commitment to excellence drives us to continuously improve our services 
                while maintaining the highest standards of security and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Core Values</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every solution we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Zynpay Technology was born from a simple yet powerful vision: to make financial 
                  services more accessible, secure, and efficient for everyone. Founded by a team 
                  of experienced professionals from the banking and technology sectors, we recognized 
                  the need for innovative solutions in India's rapidly evolving digital economy.
                </p>
                <p>
                  Our journey began with the development of our flagship API platform, designed to 
                  bridge the gap between traditional banking infrastructure and modern digital 
                  payment requirements. Through strategic partnerships with leading financial 
                  institutions and regulatory bodies, we've built a comprehensive ecosystem that 
                  serves thousands of businesses across multiple industries.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in financial technology, 
                  constantly innovating to meet the evolving needs of our clients while maintaining 
                  the highest standards of security and compliance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-emerald-600 mb-2">10,000+</div>
                      <div className="text-gray-600">Active Clients</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                      <div className="text-gray-600">Services Offered</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                      <div className="text-gray-600">Uptime</div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                      <div className="text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Achievements</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Recognition and certifications that validate our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              >
                <div className="flex justify-center mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Journey</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
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
              Ready to Join Our Journey?
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto">
              Discover how ZynPay Technology can transform your business with our 
              innovative financial solutions and expert support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-semibold shadow-xl"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-2xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;