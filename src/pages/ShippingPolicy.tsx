import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

const ShippingPolicy: React.FC = () => {
  const highlights = [
    "Registered international and domestic courier partners",
    "Dispatch within 1-2 days from order confirmation",
    "Delivery timelines subject to courier and postal norms",
    "Real-time email confirmation for every shipment"
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
              Shipping Policy
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Understand how we process and deliver every order with our trusted logistics network.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Delivery Commitment</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and/or speed post only. Orders are shipped within 1-2 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms.
              </p>
              <p>
                ZYNPAY GATEWAY PRIVATE LIMITED is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 1-2 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation.
              </p>
              <p>
                Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 8882468570, 92896 21094 or zynpay007@gmail.com.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center space-x-4">
              <Phone className="w-10 h-10 text-emerald-600" />
              <div>
                <p className="text-sm text-gray-500">Helpdesk Contact</p>
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
            <div className="bg-white rounded-2xl shadow-xl p-6 flex items-center space-x-4">
              <MapPin className="w-10 h-10 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Office Location</p>
                <p className="text-lg font-semibold text-gray-800">Greater Noida, Uttar Pradesh 201310</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ShippingPolicy;

