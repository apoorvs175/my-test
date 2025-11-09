import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Lock, Cookie, Mail, Phone } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const focusAreas = [
    {
      title: 'Information We Collect',
      description:
        'Name, contact information, demographic details, and other data relevant to customer surveys and offers.'
    },
    {
      title: 'How We Use Data',
      description:
        'To improve products and services, send promotional emails, conduct market research, and customise experiences.'
    },
    {
      title: 'Security Measures',
      description:
        'Robust safeguards to prevent unauthorised access, ensuring data confidentiality and integrity.'
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
              <FileText className="w-8 h-8 text-emerald-400" />
              <p className="text-emerald-400 font-bold text-lg">POLICY OVERVIEW</p>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Discover how ZYNPAY GATEWAY PRIVATE LIMITED collects, stores, and protects your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-10 lg:p-16 space-y-6 text-lg text-gray-600 leading-relaxed"
          >
            <p>
              This privacy policy sets out how ZYNPAY GATEWAY PRIVATE LIMITED uses and protects any information that you give ZYNPAY GATEWAY PRIVATE LIMITED when you visit their website and/or agree to purchase from them. ZYNPAY GATEWAY PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
            </p>
            <p>
              ZYNPAY GATEWAY PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.
            </p>
            <p>
              We may collect the following information: Name, contact information including email address, demographic information such as postcode, preferences and interests, if required, and other information relevant to customer surveys and/or offers.
            </p>
            <p>
              We require this information to understand your needs and provide you with a better service, and in particular for the following reasons: Internal record keeping. We may use the information to improve our products and services. We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.
            </p>
            <p>
              From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests. We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.
            </p>
            <p>
              We use traffic log cookies to identify which pages are being used. This helps us analyse data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
            </p>
            <p>
              Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
            </p>
            <p>
              You may choose to restrict the collection or use of your personal information in the following ways: whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes. If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at zynpay007@gmail.com.
            </p>
            <p>
              We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
            </p>
            <p>
              If you believe that any information we are holding on you is incorrect or incomplete, please write to R/o A/7/3/2 GREATER NOIDA Tugalpur Gautam Buddha Nagar A.g.nioda Uttar Pradesh India 201310 Sakipur BO UTTAR PRADESH 201310, or contact us at 8882468570, 92896 21094 or zynpay007@gmail.com as soon as possible. We will promptly correct any information found to be incorrect.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {index === 0 && <Shield className="w-8 h-8 text-emerald-500" />}
                  {index === 1 && <Lock className="w-8 h-8 text-blue-500" />}
                  {index === 2 && <Cookie className="w-8 h-8 text-purple-500" />}
                  <h3 className="text-xl font-semibold text-gray-800">{area.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center space-x-4">
              <Mail className="w-10 h-10 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Privacy Queries</p>
                <p className="text-lg font-semibold text-gray-800">zynpay007@gmail.com</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center space-x-4">
              <Phone className="w-10 h-10 text-emerald-600" />
              <div>
                <p className="text-sm text-gray-500">Direct Support</p>
                <p className="text-lg font-semibold text-gray-800">8882468570</p>
                <p className="text-lg font-semibold text-gray-800">92896 21094</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PrivacyPolicy;

