import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Shield, Globe, Monitor, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import bgKotak from '@/assets/bg-kotak.avif';

// Images
import heroImage from "@/assets/people.avif";
import laptop from "@/assets/laptop.png";
import tablet from "@/assets/tablet.png";
import scanner from "@/assets/scanner.png";
import manufactureImg from "@/assets/industry-manufacture.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import financialImg from "@/assets/industry-financial.jpg";
import beautyImg from "@/assets/industry-beauty.jpg";
import miningImg from "@/assets/industry-mining.jpg";
import bgBuilding from "@/assets/bg-gedung.avif";
import detikcom from "@/assets/detikcom.png";
import kompas from "@/assets/kompas.png";
import indigo from "@/assets/indigo.webp";
import googleStartups from "@/assets/google.svg";
import startupstudio from "@/assets/startup.png";
import hannover from "@/assets/hannover.avif";
import kominfo from "@/assets/kominfo.png";
import hubid from "@/assets/hub.svg";
import unileverLogo from '@/assets/unilover.png';
import vinilonLogo from '@/assets/vinilion.png';
import hitachiLogo from '@/assets/hitachi.png';
import boseLogo from '@/assets/bose.png';
import bottegaLogo from '@/assets/bortega.jpeg';
import somethincLogo from '@/assets/somethinc.png';
import beautyHaulLogo from '@/assets/beauty.png';
import cheryLogo from '@/assets/chery.jpg';
import terryPalmerLogo from '@/assets/terry.png';
import relxLogo from '@/assets/relx.png';
import hokkanLogo from '@/assets/hokkan.png';
import polytamaLogo from '@/assets/masplene.jpeg';
import ksaLogo from '@/assets/ksa.jpeg';
import allofreshLogo from '@/assets/allofresh.png';
import ktMarineLogo from '@/assets/marine.jpg';
import frinaLogo from '@/assets/kepolisian.png';
import flnLogo from '@/assets/fln.webp';
import flimtyLogo from '@/assets/flimty.jpeg';
import foomLogo from '@/assets/foom.png';
import sumberLautLogo from '@/assets/sumberlautrejeki.png';
import bgClient from '@/assets/bg-client.avif';

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Data Features
  const features = [
    {
      icon: Settings,
      number: "01",
      title: "Customizable",
      description: "Every businesses has different need. Prieds offered customization that can increased efficiency and meeting business' needs.",
    },
    {
      icon: Shield,
      number: "02",
      title: "Compatible",
      description: "With a secure backend, Prieds software can be integrated with other ERP software such as:",
      logos: true
    },
    {
      icon: Globe,
      number: "03",
      title: "End to End Integration",
      description: "Ability to integrate with various systems and hardware through Internet of Things (IoT) technology.",
    },
    {
      icon: Monitor,
      number: "04",
      title: "Accessible on Any Device",
      description: "Prieds software is easy to use as our system can be accessed through mobile phones, tablets, PCs and laptops.",
    },
  ];

  // Data Industries
  const industries = [
    { name: "Manufacturing", image: manufactureImg },
    { name: "Distribution", image: logisticsImg },
    { name: "Logistic & Expedition", image: logisticsImg },
    { name: "Retail", image: retailImg },
    { name: "Financial Institution", image: financialImg },
    { name: "Health & Beauty", image: beautyImg },
    { name: "Mining", image: miningImg },
  ];

  // Data Products Slider
  const slides = [
    {
      image: laptop,
      title: "prieds",
      subtitle: "DERAS RFID",
      desc: "RFID is a technology that uses radio waves to identify and track objects. Implement RFID solutions with Pried's to help you with your inventory management, supply chain optimization, access control, and more.",
    },
    {
      image: tablet,
      title: "Smart Barcode",
      subtitle: "Inventory Solutions",
      desc: "Track and monitor your inventory in real-time with barcode scanning and integrated data solutions.",
    },
    {
      image: scanner,
      title: "IoT Monitoring",
      subtitle: "Automation Tools",
      desc: "Optimize operations through IoT-based monitoring and data-driven automation features.",
    },
  ];

  // Data Clients
  const clients = [
    { name: "Unilever", logo: unileverLogo, scale: 0.8 },
    { name: "Vinilon", logo: vinilonLogo, scale: 1.3 },
    { name: "Hitachi", logo: hitachiLogo, scale: 1 },
    { name: "Bose", logo: boseLogo, scale: 1 },
    { name: "Bottega Artisan", logo: bottegaLogo, scale: 1 },
    { name: "Somethinc", logo: somethincLogo, scale: 1 },
    { name: "Beauty Haul", logo: beautyHaulLogo, scale: 1.3 },
    { name: "Chery", logo: cheryLogo, scale: 1.3 },
    { name: "Terry Palmer", logo: terryPalmerLogo, scale: 1.3 },
    { name: "RELX", logo: relxLogo, scale: 1 },
    { name: "Hokkan Deltapack", logo: hokkanLogo, scale: 1 },
    { name: "Polytama Propindo", logo: polytamaLogo, scale: 1 },
    { name: "KSA", logo: ksaLogo, scale: 1 },
    { name: "Allofresh", logo: allofreshLogo, scale: 1.3 },
    { name: "KT Marine Center", logo: ktMarineLogo, scale: 1 },
    { name: "Frina Lestari", logo: frinaLogo, scale: 1 },
    { name: "FLN", logo: flnLogo, scale: 1 },
    { name: "Flimty", logo: flimtyLogo, scale: 1 },
    { name: "Foom", logo: foomLogo, scale: 1 },
    { name: "Sumber Laut Rejeki", logo: sumberLautLogo, scale: 1 },
  ];

  // Data Testimonials
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

  // Data Media Coverage
  const mediaLogos = [
    { src: detikcom, alt: "detikcom" },
    { src: kompas, alt: "KOMPAS.com" },
    { src: indigo, alt: "Indigo" },
    { src: googleStartups, alt: "Google for Startups" },
    { src: startupstudio, alt: "Startup Studio ID" },
    { src: hannover, alt: "Hannover Messe" },
    { src: kominfo, alt: "KOMINFO" },
    { src: hubid, alt: "HUB.ID" },
  ];

  // Testimonial Functions
  const nextSlide = () =>
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-96 bg-white">
        <div className="absolute inset-0 bg-[#49c5e9]">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ height: '230px' }}
          >
            <path
              d="M0,0 Q720,200 1440,0 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* GAMBAR - Kolom Kiri */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-full h-96">
                {/* Background circle */}
                <div className="absolute top-5 left-[63%] -translate-x-1/2 w-48 h-48 md:w-80 md:h-80 bg-[#2b8db8] rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #097eb9 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                {/* Image dengan kontrol px langsung */}
                <img
                  src={heroImage}
                  alt="Business professional with tablet"
                  className="absolute z-10"
                  style={{
                    width: '450px',
                    height: 'auto',
                    bottom: '-200px',
                    left: '65%',
                    transform: 'translateX(-50%)',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

            {/* TEXT - Kolom Kanan */}
            <div className="order-1 md:order-2 text-center md:text-left md:-ml-12 lg:-ml-12">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Enhanced Your <br /> Business Performance <br /> with Prieds <br /> Supply Chain <br /> Management Software
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10">
                Automate your supply chain processes using our <br /> cloud-based Supply Chain Management Software.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-2 text-lg rounded-full transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - Integrated */}
      <div className="pt-6 pb-20 -mt-80 relative z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#b7e6fb] rounded-3xl p-9 shadow-xl">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Supply Chain<br />
                Management Software<br />
                for Your Business
              </h2>
              <p className="text-gray-700 max-w-md text-base leading-relaxed">
                Prieds is here to support the vision of the Industrial Revolution 4.0 by providing Supply Chain Management Software that can be connected with hardware through IoT Technology and ERP System.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 shadow-md"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs">{feature.number}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-8 h-8 text-cyan-500 stroke-[1.5]" />
                  </div>

                  <p className="text-gray-700 text-xs leading-relaxed text-center">
                    {feature.description}
                  </p>

                  {feature.logos && (
                    <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
                      <div className="text-blue-600 font-bold text-base">SAP</div>
                      <div className="flex items-center gap-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      </div>
                      <div className="text-red-600 font-bold text-sm">ORACLE</div>
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">a</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* INDUSTRIES SECTION */}
      <section className="py-2 relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${bgKotak})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-foreground mb-6">
              <span className="font-semibold">Suitable for </span>
              <span className="font-extrabold">Any Business</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Empower businesses with our versatile supply chain management software,
              <br />
              delivering seamless inventory management and stock control for all industries.
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap mb-8">
            {industries.slice(0, 4).map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-[200px] md:w-[240px] overflow-hidden"
              >
                <div className="relative">
                  <div className="overflow-hidden rounded-t-xl">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="py-4 flex justify-center items-center">
                    <h3 className="text-center text-base md:text-lg font-bold text-gray-800">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {industries.slice(4).map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-[200px] md:w-[240px] overflow-hidden"
              >
                <div className="relative">
                  <div className="overflow-hidden rounded-t-xl">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="py-4 flex justify-center items-center">
                    <h3 className="text-center text-base md:text-lg font-bold text-gray-800">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors">
              And Many More
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-20 bg-[#d7f0ff]" >
        <div className="container mx-auto px-4">
          <h2 className="text-left text-2xl md:text-3xl font-semibold mb-12 text-gray-800 pl-40">
            OUR <span className="font-bold">PRODUCTS</span>
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="max-w-6xl mx-auto"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#d7f0ff]">
                  <div className="flex-1 flex justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-[300px] md:w-[420px] object-contain"
                    />
                  </div>

                  <div className="flex-1 px-6 md:px-12 text-center md:text-left">
                    <h3 className="text-4xl font-semibold text-[#49c5e9]">
                      {slide.title}
                    </h3>
                    <p className="font-medium text-gray-700 mb-4">
                      {slide.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {slide.desc}
                    </p>
                    <Button className="bg-[#49c5e9] hover:bg-[#36a9cd] text-white px-6 py-3 rounded-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section >

      {/* CLIENTS SECTION */}
      <section className="py-20 relative" style={{
        backgroundImage: `url(${bgClient})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Overlay putih transparan */}
        <div className="absolute inset-0 bg-white/70 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              OUR <span className="font-bold">NOTABLE CLIENTS</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-105"
                style={{ height: '140px', width: '100%' }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: `${client.scale * 100}%`,
                    height: `${client.scale * 100}%`,
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-primary relative overflow-hidden" >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              OUR <span className="font-extrabold">TESTIMONIALS</span>
            </h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white backdrop-blur-sm rounded-3xl p-12 shadow-2xl"
              >
                <div className="flex flex-col items-center gap-2">
                  <p className="font-bold text-primary text-xl mb-2">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
                <p className="text-center text-lg text-foreground/80 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </motion.div>
            </AnimatePresence>

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

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${i === currentTestimonial ? "bg-[#4695ac]" : "bg-white/40"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section >

      {/* MEDIA COVERAGE SECTION */}
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${bgBuilding})`,
        }}
      >
        <div className="absolute backdrop-blur-[1px]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              As Covered By
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto mb-16">
            {mediaLogos.map((media, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all flex items-center justify-center h-24 p-6"
              >
                <img
                  src={media.src}
                  alt={media.alt}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let's Grow Together!
            </h3>
            <div className="flex justify-center gap-6">
              <button className="bg-[#F6BE00] hover:bg-white text-black font-semibold py-2.5 px-16 rounded-full transition">
                Join Partner
              </button>
              <button className="bg-[#F6BE00] hover:bg-white text-black font-semibold py-2.5 px-16 rounded-full transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div >
  );
};

export default Index;