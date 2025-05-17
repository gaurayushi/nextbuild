import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Jane Doe',
    role: 'IT Manager',
    company: 'TechNova Inc.',
    message:
      'SoftSell helped us recover value from licenses we no longer used. Quick, easy, and professional!',
    image: 'https://i.pravatar.cc/100?img=47',
  },
  {
    name: 'John Smith',
    role: 'Operations Lead',
    company: 'CloudSync Ltd.',
    message:
      'The process was seamless. We uploaded our licenses and got paid within a day!',
    image: 'https://i.pravatar.cc/100?img=32',
  },
  {
    name: 'Emily Carter',
    role: 'Product Lead',
    company: 'NextGenWare',
    message:
      'We thought unused licenses were sunk cost. SoftSell turned them into money. Magic!',
    image: 'https://i.pravatar.cc/100?img=56',
  },
  {
    name: 'Daniel Lee',
    role: 'Finance Director',
    company: 'AlphaEdge',
    message:
      'Professional and transparent from start to finish. Highly recommended!',
    image: 'https://i.pravatar.cc/100?img=25',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 bg-transparent text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-12 tracking-tight"
        >
          Customer Testimonials
        </motion.h2>

        <div className="flex overflow-x-auto space-x-6 scrollbar-hide px-2 md:px-0">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="min-w-[300px] max-w-sm flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all relative group"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400 group-hover:shadow-[0_0_15px_2px_rgba(0,255,100,0.4)] transition-all duration-300 pointer-events-none" />

              <div className="flex items-center gap-4 mb-4 relative z-10">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-white/20"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-gray-300">
                    {review.role}, {review.company}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed relative z-10">
                “{review.message}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
