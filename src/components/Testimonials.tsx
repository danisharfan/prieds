import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sugi Purnoto",
    position: "Chief of Procurement and Logistics Officer KSA Group",
    text: "Prieds provides engaging and useful for the WMS platform that we implement. Prieds team also helps provide input and suggestion related to the warehouse management flow to make it more optimal and efficient.",
  },
  {
    name: "Michael Andreas",
    position: "CEO of PT Tiga Manunggal",
    text: "Prieds system makes work faster and stock information can also be viewed in real-time.",
  },
  {
    name: "Dwi Santoso",
    position: "Head of Operations at PT Maju Jaya",
    text: "With Prieds, warehouse management becomes much simpler and more accurate. Highly recommended!",
  },
  {
    name: "Andi Rahman",
    position: "Logistics Manager at PT Sinar Abadi",
    text: "The real-time data feature from Prieds helps us make decisions faster and better.",
  },
  {
    name: "Linda Hartono",
    position: "Procurement Lead at PT Mitra Sejahtera",
    text: "Prieds support team is very responsive and professional. Implementation was smooth and effective.",
  },
  {
    name: "Budi Setiawan",
    position: "Warehouse Supervisor at PT Indo Supply",
    text: "The system is intuitive and saves a lot of time during our daily operations.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            OUR <span className="font-extrabold">TESTIMONIALS</span>
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">

          {/* Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
            >              
              <div className="flex flex-col items-center gap-2">
                <p className="font-bold text-primary text-xl mb-2">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {testimonials[current].position}
                </p>
              </div>
              <p className="text-center text-lg text-foreground/80 mb-8 italic leading-relaxed">
                "{testimonials[current].text}"
              </p>
            </motion.div>
          </AnimatePresence>
          {/* Tombol Panah */}
          <button
            onClick={prevSlide}
            className="absolute -left-20 top-1/2 -translate-y-1/2 p-3 hover:bg-white/40 rounded-full text-white"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-20 top-1/2 -translate-y-1/2 p-3 hover:bg-white/40 rounded-full text-white"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          {/* Indikator titik */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${i === current ? "bg-[#4695ac]" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
