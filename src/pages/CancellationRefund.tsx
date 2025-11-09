import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertTriangle, Phone, Mail } from 'lucide-react';

const CancellationRefund: React.FC = () => {
  const guidelines = [
    "Cancellation requests accepted within 1-2 days of order placement",
    "Requests may not be processed once vendors initiate shipping",
    "Perishable items are not eligible for cancellation",
    "Damaged or defective products must be reported within 1-2 days"
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
              Cancellation & Refund
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Learn about our customer-first approach to cancellations, replacements, and refunds.
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
            className="bg-white rounded-3xl shadow-2xl p-10 lg:p-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Policy</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                ZYNPAY GATEWAY PRIVATE LIMITED believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy: Cancellations will be considered only if the request is made within 1-2 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.
              </p>
              <p>
                ZYNPAY GATEWAY PRIVATE LIMITED does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good. In case of receipt of damaged or defective items please report the same to our Customer Service team.
              </p>
              <p>
                The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 1-2 days of receipt of the products. In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 1-2 days of receiving the product.
              </p>
              <p>
                The Customer Service Team after looking into your complaint will take an appropriate decision. In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them. In case of any refunds approved by ZYNPAY GATEWAY PRIVATE LIMITED, it will take 3-5 days for the refund to be processed to the end customer.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guidelines.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4">
                <AlertTriangle className="w-10 h-10 text-white" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Need Assistance?</h3>
                  <p className="text-emerald-100">
                    Reach out to our customer service team within the specified timelines to ensure timely support and resolution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center space-x-4">
              <Phone className="w-10 h-10 text-emerald-600" />
              <div>
                <p className="text-sm text-gray-500">Customer Support</p>
                <p className="text-lg font-semibold text-gray-800">8882468570</p>
                <p className="text-lg font-semibold text-gray-800">92896 21094</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center space-x-4">
              <Mail className="w-10 h-10 text-purple-600" />
              <div>
                <p className="text-sm text-gray-500">Support Email</p>
                <p className="text-lg font-semibold text-gray-800">zynpay007@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CancellationRefund;

