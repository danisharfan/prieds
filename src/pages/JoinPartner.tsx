import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Users, Handshake, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import partnerHero from "@/assets/bg-joinpartner.avif";
import partner from "@/assets/people-partner.avif";
import partnerPortfolio from "@/assets/partner-portfolio.jpg";
import checkIcon from "@/assets/check.avif";
import letsGrowBg from '@/assets/letsgrowbg.avif';

// Partner logos
import telkomLogo from "@/assets/telkom-indonesia.avif";
import accurateLogo from "@/assets/accurate.avif";
import microsoftLogo from "@/assets/microsoft.avif";
import zebraLogo from "@/assets/zebra.avif";
import bancoLogo from "@/assets/sanco.avif";
import ocbcLogo from "@/assets/ocbc.avif";
import kawanLamaLogo from "@/assets/kawan-lama.avif";
import crayonLogo from "@/assets/crayon.avif";
import talaLogo from "@/assets/tada.avif";
import codrLogo from "@/assets/codr.avif";
import googleCloudLogo from "@/assets/cendekia.avif";
import unotekLogo from "@/assets/unotek.avif";
import bdSeriLogo from "@/assets/ed-sen.avif";
import ltiLogo from "@/assets/lti.avif";
import forstokLogo from "@/assets/forstok.avif";
import priedsEcosystemLogo from "@/assets/intc.avif";

// Implementation partner logos
import partner1Logo from "@/assets/vultech.avif";
import synctelicsLogo from "@/assets/synectics.avif";
import szetoLogo from "@/assets/szeto.avif";

// Background pattern
import bgPattern from "@/assets/bg-joinpartner3.avif";

// Tambahkan di bagian import logos (setelah implementation partner logos)
// Portfolio logos
import boseLogo from "@/assets/bose.avif";
import vinilonLogo from "@/assets/vinilon.avif";
import clientLogo3 from "@/assets/client-3.avif";
import clientLogo4 from "@/assets/client-4.avif";
import clientLogo5 from "@/assets/client-5.avif";

// Tambahkan di bagian import icons
import { MessageCircle } from "lucide-react";

// Tambahkan di bagian import images (setelah portfolio logos)
// Testimonial images
import chatIcon from "@/assets/chat.avif";


const Partner = () => {
  const stats = [
    { label: "Countries", value: "3" },
    { label: "Partners", value: "40+" },
    { label: "Clients", value: "135+" },
    { label: "Cities", value: "25+" },
  ];

  const step = [
    {
      logo: "/src/assets/logo-1.avif",
      title: "Submit an\nApplication",
      description: (
        <span>
          Register <a href="/register" className="font-bold underline">here</a> to begin the application process
        </span>
      )
    },
    {
      logo: "/src/assets/logo-2.avif",
      title: "Application\nReview",
      description: "The application you submit will undergo a thorough business review, encompassing a comprehensive examination of pertinent details regarding the prospective partner's company."
    },
    {
      logo: "/src/assets/logo-3.avif",
      title: "Engagement and\nDiscussion",
      description: "We will contact you and introduce our business model and available forms of partnership."
    },
    {
      logo: "/src/assets/logo-4.avif",
      title: "MoU and\nPartnerships",
      description: "Formalize partnerships by signing legal documents to unlock benefits and support. Prieds is ready to collaborate with you!"
    }
  ];

  const partners = [
    { name: "Telkom Indonesia", logo: telkomLogo },
    { name: "Accurate", logo: accurateLogo },
    { name: "Microsoft", logo: microsoftLogo },
    { name: "ZEBRA", logo: zebraLogo },
    { name: "BANCO", logo: bancoLogo },
    { name: "OCBC", logo: ocbcLogo },
    { name: "Kawan Lama", logo: kawanLamaLogo },
    { name: "Crayon", logo: crayonLogo },
    { name: "Tala", logo: talaLogo },
    { name: "CODR", logo: codrLogo },
    { name: "Google Cloud", logo: googleCloudLogo },
    { name: "Unotek", logo: unotekLogo },
    { name: "BD Seri", logo: bdSeriLogo },
    { name: "LTI", logo: ltiLogo },
    { name: "Forstok", logo: forstokLogo },
    { name: "Prieds Ecosystem", logo: priedsEcosystemLogo }
  ];

  const implementationPartners = [
    { name: "Partner 1", logo: partner1Logo },
    { name: "Synctelics", logo: synctelicsLogo },
    { name: "Szeto", logo: szetoLogo }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[1130px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={partnerHero}
            alt="Business partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-[350px]">
          <div className="text-center max-w-4xl mx-auto mb-[90px]">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">
              Become a Partner
            </h1>
            <p className="text-xl text-white/90">
              Join us as our partner and get many interesting benefits to grow together.
            </p>
          </div>

          {/* Stats Card */}
          <div className="bg-white rounded-2xl p-8 md:p-5 max-w-4xl mx-auto shadow-2xl mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-4">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 items-center max-w-7xl mx-auto translate-x-[200px] pt-10 -translate-y-[180px]">
            <div className="text-white">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
                Revolutionizing Your <br /> Supply Chain Experience!
              </h2>
              <p className="text-[22px] text-white/90 mb-8 w-[500px] leading-tight">
                Prieds, your supply chain ally, leads the way in Warehouse Management Systems and Smart Retail Solutions. We are looking for partners for strategic guidance, technical excellence, and innovation, extending Prieds across industries. Let's seize the immense opportunity for shared success. Partner success fuels customer success with Prieds.
              </p>
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-10 py-6 text-lg rounded-full shadow-lg"
              >
                Contact Us
              </Button>
            </div>

            <div className="relative h-[700px] w-[700px] right-[300px]">
              <img
                src={partner}
                alt="Professional woman with coffee"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER SECTION */}
      <WhyPartnerSection />

      {/* COLLABORATION TYPES SECTION */}
      <CollaborationSection />

      {/* HOW TO BECOME SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            How to Become a Partner with Prieds?
          </h2>

          {/* STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-4xl mx-auto text-center">
            {step.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* LOGO IMAGE */}
                <div className="w-20 h-20 flex items-center justify-center mb-6">
                  <img
                    src={step.logo}
                    alt={step.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-sky-600 mb-4 whitespace-pre-line">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 max-w-[180px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PARTNERS SECTION - UPDATED */}
      <section className="py-20 relative overflow-hidden">
        {/* Dark background with pattern */}
        <div className="absolute inset-0">
          <img
            src={bgPattern}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Partners
            </h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">
              A growing network of 35+ partners across Indonesia & SEA<br />
              with the access to businesses in PRIEDS ecosystem.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[100px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-[50px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Implementation Partners Section */}
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Implementation Partners
            </h3>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Our official implementation partners are your trusted guides:<br />
              ensuring smooth system implementation, delivering expert training, and providing top-notch after-sales support.
            </p>
          </div>

          {/* Implementation Partner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {implementationPartners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[140px] mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-[80px] object-contain"
                  />
                </div>
                <Button
                  variant="outline"
                  className="px-6 py-2 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors border border-white"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER PORTFOLIO SECTION - SLIDESHOW */}
      <PartnerPortfolioSection />

      {/* TESTIMONIAL SECTION - TAMBAHKAN INI */}
      <TestimonialSection />

      {/* CTA SECTION - TAMBAHKAN INI */}
      <CTASection />

      <Footer />
    </div>
  );
};

// WHY PARTNER SECTION COMPONENT
function WhyPartnerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bg: "/src/assets/poin1.avif",
      title: "Full Local\nTechnical Support",
      items: [
        "Full technical support and maintenance",
        "Regular product updates",
        "Integration to current system"
      ]
    },
    {
      bg: "/src/assets/poin2.avif",
      title: "Leads Generation\n& Revenue Stream ",
      items: [
        "Leads Generation from Prieds to partner",
        "Get interesting extra revenue by commision",
        "Get extra marketing exposure for cross-selling"
      ]
    },
    {
      bg: "/src/assets/poin3.avif",
      title: "Add Value to\nYour Customer",
      items: [
        "Cross-selling and Product creation",
        "Provide end-to-end business software and hardware IoT solution based on customers' needs"
      ]
    },
    {
      bg: "/src/assets/poin4.avif",
      title: "Reward &\nEcosystem",
      items: [
        "Get rewards and incentives for partners",
        "Partner dashboard to track partnerships and leads",
        "Be a part of our extensive partner ecosystem hub"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-white/95">
      <div className="container mx-auto px-4 max-w-8xl">
        {/* Top Section: Text Left, Image Right */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Partner with Prieds?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Elevate your business with the Prieds Partner Alliance, providing benefits and tools.
              Grow your practice, create demand, and refine skills for unmatched customer success.
              More than a partnership - it's your route to transformative business connections.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/src/assets/people-partner2.avif"
              alt="Business partners"
              className="rounded-2xl w-full"
            />
          </div>
        </div>

        {/* Bottom Section: Slideshow - Full Width */}
        <div className="w-full">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Image - Full */}
              <div className="absolute inset-0">
                <img
                  src={slides[currentSlide].bg}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-contain scale-80"
                />
                <div />
              </div>

              {/* Slide Container */}
              <div className="relative grid md:grid-cols-2 min-h-[400px]">
                {/* Left - Empty space for background image */}
                <div className="min-h-[400px]"></div>

                {/* Right - Content */}
                <div className="relative z-10 flex flex-col justify-center -ml-[80px]">
                  <h3 className="text-5xl font-bold text-gray-800 mb-6 whitespace-pre-line">
                    {slides[currentSlide].title}
                  </h3>

                  <div className="space-y-2">
                    {slides[currentSlide].items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-white rounded-full p-1 shadow-md max-w-md">
                        <img
                          src={checkIcon}
                          alt="check"
                          className="w-[50px] h-[50px] flex-shrink-0"
                        />
                        <p className="text-gray-700 text-base font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-40 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronLeft className="w-20 h-20 text-[#6ad0ec]" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-40 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <ChevronRight className="w-20 h-20 text-[#6ad0ec]" />
            </button>

            {/* Dots Navigation */}
            <div className="flex gap-2 justify-center mt-6">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-cyan-500' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// COLLABORATION TYPES SECTION COMPONENT
function CollaborationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "/src/assets/img-1.avif",
      subtitle: "Collaboration Types",
      title: "Ecosystem\nPartner",
      description: "We are open for collaboration for events online & offline and community building with SME communities, universities, educational institutions, government, startups, and others."
    },
    {
      img: "/src/assets/img-2.avif",
      subtitle: "Collaboration Types",
      title: "Sales Referral\nProgram",
      description: "A Sales Referral Program (SRP) is a strategic initiative implemented by Prieds to encourage and incentivize individuals or existing customers to refer new customers to Prieds' product."
    },
    {
      img: "/src/assets/img-3.avif",
      subtitle: "Collaboration Types",
      title: "Technology\nPartner",
      description: "Collaborate with us to integrate cutting-edge technology solutions and drive innovation in supply chain management."
    },
    {
      img: "/src/assets/img-4.avif",
      subtitle: "Collaboration Types",
      title: "Strategic\nAlliance",
      description: "Build long-term strategic partnerships to expand market reach and create mutual value for both organizations."
    },
    {
      img: "/src/assets/img-5.avif",
      subtitle: "Collaboration Types",
      title: "Channel\nPartner",
      description: "Join our channel partner program to distribute Prieds solutions and grow your business with our support."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* FULL SECTION BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/bg-joinpartner2.avif"
          alt="Collaboration background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="rounded-3xl overflow-hidden p-12 backdrop-blur-sm">
          {/* Slide Container */}
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
            {/* Left Image Card */}
            <div className="flex justify-center">
              <div className=" rounded-3xl p-3 max-w-sm">
                <img
                  src={slides[currentSlide].img}
                  alt={slides[currentSlide].title}
                  className="w-full h-[450px] object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-white">
              <p className="text-lg font-medium mb-4 opacity-90">
                {slides[currentSlide].subtitle}
              </p>
              <h3 className="text-5xl font-bold mb-6 leading-tight whitespace-pre-line">
                {slides[currentSlide].title}
              </h3>
              <p className="text-lg leading-relaxed opacity-90 max-w-md">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 flex items-center justify-center transition-colors z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 flex items-center justify-center transition-colors z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots Navigation */}
        <div className="flex gap-2 justify-center mt-6 relative z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${idx === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
// PARTNER PORTFOLIO SECTION COMPONENT
function PartnerPortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolios = [
    {
      logo: "/src/assets/explore1.png",
      title: "Leveraging WMS -POS Systems for effective inventory management for Bose.",
      description: "Bose is a company that specializes in audio equipment and is well-known for its high-quality audio products, particularly recognized for its speakers, headphones, and audio systems.",
      partner: "Erloom Digital Ventures"
    },
    {
      logo: "/src/assets/explore2.png",
      title: "Providing WMS, ERP integration, and IoT integration for Vinilon.",
      description: "Vinilon is a company that manufactures and distributes PVC pipes for construction and plumbing applications, providing durable and corrosion-resistant solutions for water distribution and drainage systems.",
      partner: "Sanco, Tada"
    },
    {
      logo: "/src/assets/explore3.png",
      title: "Smart Retail Solutions for Modern Business.",
      description: "Implementing comprehensive retail management system with real-time inventory tracking and customer analytics.",
      partner: "Tech Solutions Inc"
    },
    {
      logo: "/src/assets/explore4.avif",
      title: "Supply Chain Optimization Platform.",
      description: "End-to-end supply chain management solution with IoT integration and predictive analytics.",
      partner: "Innovation Partners"
    },
    {
      logo: "/src/assets/explore5.avif",
      title: "Warehouse Automation System.",
      description: "Advanced warehouse management with automated picking, packing, and shipping processes.",
      partner: "Digital Ventures Co"
    },
    {
      logo: "/src/assets/explore6.avif",
      title: "Warehouse Automation System.",
      description: "Advanced warehouse management with automated picking, packing, and shipping processes.",
      partner: "Digital Ventures Co"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolios.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolios.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolios.length) % portfolios.length);
  };

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Explore Our Collaborative Ventures and<br />Partnerships in Our Portfolio
        </h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Main Slideshow Container */}
          <div className="bg-[#eeeeee] rounded-3xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center min-h-[300px]">

              {/* Left Side - Logo */}
              <div className="flex justify-center items-center">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm w-full max-w-[280px] h-[200px] flex items-center justify-center">
                  <img
                    src={portfolios[currentSlide].logo}
                    alt="Client logo"
                    className="max-w-full max-h-[120px] object-contain"
                  />
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-justify">
                  {portfolios[currentSlide].title} {portfolios[currentSlide].description}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm font-semibold text-gray-500">Partner</span>
                  <p className="text-gray-900 font-medium mt-1">
                    {portfolios[currentSlide].partner}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-[140px] w-16 h-16 rounded-full flex items-center justify-center transition-all z-10"
          >
            <ChevronLeft className="w-10 h-10 text-cyan-500" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-[140px] w-16 h-16 rounded-full  flex items-center justify-center transition-all z-10"
          >
            <ChevronRight className="w-10 h-10 text-cyan-500" />
          </button>

          {/* Dots Navigation */}
          <div className="flex gap-2 justify-center mt-8">
            {portfolios.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-cyan-500' : 'w-2 bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// TESTIMONIAL SECTION COMPONENT
function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jhonni Haris Limbong",
      position: "Chief Operating Officer Szeto Consultants",
      quote: "Prieds is one of the best warehouse management systems as far as we know. Not only from the features provided but the service is also pleasant. SAC feels helped by the presence of PRIEDS in providing solutions to our clients' inventory control problems. Always be successful and continue to innovate to remain a solution for all companies."
    },
    {
      name: "David Jendra",
      position: "CEO Erloom Digital Venture",
      quote: "As a software house and distributor, PRIEDS provides services that can be tailored to the needs of our mid-sized business customers. We are also pleased to be able to collaborate cross-selling with PRIEDS and increase our revenue."
    },
    {
      name: "Sarah Chen",
      position: "Operations Director Tech Solutions",
      quote: "Working with Prieds has transformed our warehouse operations. The system is intuitive and the support team is exceptional. Highly recommended for any growing business."
    },
    {
      name: "Michael Anderson",
      position: "Supply Chain Manager Global Logistics",
      quote: "The integration capabilities and real-time tracking features have significantly improved our efficiency. Prieds is a game-changer in supply chain management."
    },
    {
      name: "Lisa Wong",
      position: "CEO Retail Innovations Inc",
      quote: "From implementation to daily operations, Prieds has exceeded our expectations. The ROI was evident within the first quarter of deployment."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#404041] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative">

        {/* Chat Icon - HANYA INI DARI chat.avif */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center">
            <img src={chatIcon} alt="chat" className="w-10 h-10 object-contain" />
          </div>
        </div>

        {/* Name and Position */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
            {testimonials[currentSlide].name}
          </h3>
          <p className="text-gray-300 text-sm md:text-base">
            {testimonials[currentSlide].position}
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-24 h-1 bg-gray-600 mx-auto mb-8"></div>

        {/* Testimonial Quote */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-white text-center text-lg md:text-xl italic leading-relaxed px-4">
            "{testimonials[currentSlide].quote}"
          </p>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-colors z-10"
        >
          <ChevronLeft className="w-10 h-10 text-gray-400 hover:text-cyan-400" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center transition-colors z-10"
        >
          <ChevronRight className="w-10 h-10 text-gray-400 hover:text-cyan-400" />
        </button>

        {/* Dots Navigation */}
        <div className="flex gap-2 justify-center mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-gray-500'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
// CTA SECTION COMPONENT
function CTASection() {
  return (
    <section
      className="py-16 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${letsGrowBg})`
      }}
    >
      {/* Gradient overlay - transparan di atas, hitam di bawah */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Let's Grow Together!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg min-w-[250px]"
          >
            Download Company Profile
          </Button>

          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg min-w-[250px]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
export default Partner;