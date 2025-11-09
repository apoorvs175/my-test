import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Globe, Shield, Scale } from 'lucide-react';

const TermsConditions: React.FC = () => {
  const commitments = [
    "Content subject to updates without prior notice",
    "Information provided for general use at user's discretion",
    "Intellectual property protected under applicable laws",
    "Disputes governed by the laws of India"
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
              Terms & Conditions
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Review the guidelines that govern your access and engagement with ZYNPAY GATEWAY PRIVATE LIMITED.
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
            className="bg-white rounded-3xl shadow-2xl p-10 lg:p-16 space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-800">Agreement</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                For the purpose of these Terms and Conditions, the term "we", "us", "our" used anywhere on this page shall mean ZYNPAY GATEWAY PRIVATE LIMITED, whose registered/operational office is Shop No. 4  A/7/3/2  Tugalpur ,Greater Noida, Gautam Buddha Nagar ,Uttar Pradesh 201310. "you", "your", "user", "visitor" shall mean any natural or legal person who is visiting our website and/or agreed to purchase from us.
              </p>
              <p>
                Your use of the website and/or purchase from us are governed by following Terms and Conditions: The content of the pages of this website is subject to change without notice. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.
              </p>
              <p>
                You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law. Your use of any information or materials on our website and/or product pages is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through our website and/or product pages meet your specific requirements.
              </p>
              <p>
                Our website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions. All trademarks reproduced in our website which are not the property of, or licensed to, the operator are acknowledged on the website.
              </p>
              <p>
                Unauthorized use of information provided by us shall give rise to a claim for damages and/or be a criminal offense. From time to time our website may also include links to other websites. These links are provided for your convenience to provide further information. You may not create a link to our website from another website or document without ZYNPAY GATEWAY PRIVATE LIMITED’s prior written consent.
              </p>
              <p>
                Any dispute arising out of use of our website and/or purchase with us and/or any engagement with us is subject to the laws of India. We shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any transaction, on account of the cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 flex items-start space-x-3">
                <Shield className="w-8 h-8 text-emerald-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Protection</h3>
                  <p className="text-gray-600">
                    We safeguard proprietary content and user information through stringent security practices.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 flex items-start space-x-3">
                <Globe className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Usage Rights</h3>
                  <p className="text-gray-600">
                    Ensure product and service usage adheres to applicable regulations and intended purposes.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 flex items-start space-x-3">
                <Scale className="w-8 h-8 text-purple-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Legal Compliance</h3>
                  <p className="text-gray-600">
                    Engage with our services under the jurisdiction of Indian law and regulatory standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default TermsConditions;

