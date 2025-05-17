import { FiUpload, FiBarChart2, FiDollarSign, FiZap, FiLock, FiInfo, FiPhoneCall } from 'react-icons/fi';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: <FiUpload className="text-green-400 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Upload License',
    description: 'Submit your unused software license for review.',
  },
  {
    icon: <FiBarChart2 className="text-blue-400 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Get Valuation',
    description: 'We evaluate your license and give you a fair offer.',
  },
  {
    icon: <FiDollarSign className="text-yellow-400 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />,
    title: 'Get Paid',
    description: 'Accept the offer and get paid within 24 hours.',
  },
];

const benefits = [
  {
    icon: <FiZap className="w-6 h-6 text-green-400" />,
    title: 'Fast Payments',
    description: 'Get paid within 24 hours of your license approval.',
  },
  {
    icon: <FiLock className="w-6 h-6 text-blue-400" />,
    title: 'Secure Platform',
    description: 'Your data is encrypted and handled with care.',
  },
  {
    icon: <FiInfo className="w-6 h-6 text-yellow-400" />,
    title: 'Transparent Offers',
    description: 'No hidden fees — what you see is what you get.',
  },
  {
    icon: <FiPhoneCall className="w-6 h-6 text-pink-400" />,
    title: '24/7 Support',
    description: 'Our support team is here for you any time.',
  },
];

export default function HowItWorks() {
  return (
   <section className="py-20 px-6">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0 pointer-events-none" />

      <div className="z-10 relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4 tracking-tight"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Just three simple steps to turn your software into cash — simple, secure, and fast.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4 tracking-tight"
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          We combine speed, security, and support to deliver unmatched value.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group w-48 h-48 mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-full shadow-lg hover:shadow-xl transition hover:-translate-y-2 flex flex-col justify-center items-center text-center"
            >
              <div className="mb-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-xs text-gray-300 px-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
