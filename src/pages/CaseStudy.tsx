import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import caseStudyHero from "@/assets/bg-casestudy.avif";
import caseSparePart from "@/assets/case-sparepart.jpg";
import casePrinting from "@/assets/case-printing.jpg";
import caseKsa from "@/assets/case-ksa.jpg";
import caseBeauty from "@/assets/case-beauty.jpg";
import caseElectronics from "@/assets/case-electronics.jpg";
import industryFashion from "@/assets/industry-fashion.jpg";
import industryManufacture from "@/assets/industry-manufacture.jpg";
import industryTextile from "@/assets/industry-textile.jpg";
import industryFnb from "@/assets/industry-fnb.jpg";
import industryFmcg from "@/assets/industry-fmcg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const CaseStudy = () => {
  const caseStudies = [
    {
      image: "src/assets/imple1.avif",
      tags: ["Sparepart Warehouse", "Shipment and Logistic"],
      title: "KSA Warehouse Levels Up with Prieds WMS",
      bgColor: "bg-blue-50"
    },
    {
      image: "src/assets/imple2.avif",
      tags: ["Manufacture Warehouse", "Printing"],
      title: "Revolutionizing Operations with Prieds WMS",
      bgColor: "bg-blue-50"
    },
    {
      image: "src/assets/imple3.avif",
      tags: ["Retail & Distribution Warehouse", "Beauty & Health"],
      title: "Seamless Supply Chain: A Combination of FEFO & LEFO",
      bgColor: "bg-red-50"
    },
    {
      image: "src/assets/imple4.avif",
      tags: ["Retail & Distribution Warehouse", "Electronics"],
      title: "Effective Stock Monitoring with Serial Number Tracking",
      bgColor: "bg-gray-50"
    }
  ];

  const slides = [
    {
      image: "src/assets/konten1.avif",
      title: "KSA Warehouse Levels Up with Prieds WMS",
      subtitle: "Warehouse Management System",
      desc: "PT Pelayaran Kartika Samudera Adijaya (KSA) has trusted Prieds to level up their warehouse. But what did KSA actually need, and how did Prieds solve it? See the details and learn how Prieds addressed KSA's warehouse challenges in this Implementation Case",
      tags: [
        "Sparepart Warehouse", "Shipment and Logistic"
      ]
    },
    {
      image: "src/assets/konten2.avif",
      title: "Revolutionizing Operations with Prieds WMS",
      subtitle: "Supply Chain Management",
      desc: "Unique Packaging successfully reduce 90% of stock loss after using Prieds WMS and got their investment back less than 6 months. But how can that be achieved? See the implementation journey in this case study.",
      tags: [
        "Manufacture Warehouse", "Printing"
      ]
    },
    {
      image: "src/assets/konten3.avif",
      title: "Seamless Supply Chain: A Combination of FEFO & LEFO",
      subtitle: "Enterprise Resource Planning",
      desc: "How Prieds system can help a beauty distributor and retail company maximizing their supply chain system especially their warehouse management? And how FEFO & LEFO combination system can help this company? Learn moreon this implementation case study.",
      tags: [
        "Retail & Distribution Warehouse",
        "Beauty & Health"
      ]
    },
  ];

  const industries = [
    {
      title: "Fashion & Beauty",
      description: "Authenticate high-value items, such as jewelry, apparel and manage also inventory efficiency, faster stock opname.",
      image: industryFashion,
    },
    {
      title: "Manufacturing",
      description: "Tracking product components and finished goods for real-time visibility, prevent spare part losses.",
      image: industryManufacture,
    },
    {
      title: "Textile",
      description: "A leading textile company, sought to enhance its supply chain visibility and inventory management.",
      image: industryTextile,
    },
    {
      title: "FnB Retail",
      description: "A prominent FnB distribution company sought to enhance its inventory management and supply chain transparency.",
      image: industryFnb,
    },
    {
      title: "FMCG",
      description: "A prominent Fast-Moving Consumer Goods (FMCG) company, sought to improve its supply chain efficiency and product traceability.",
      image: industryFmcg,
    },
  ];

  const useCases = [
    {
      image: "src/assets/use1.avif",
      title: "Warehouse & Distribution",
      description:
        "Optimize warehouse operations with real-time inventory visibility, barcode/RFID tracking, and automated stock processes."
    },
    {
      image: "src/assets/use2.avif",
      title: "Retail & FMCG",
      description:
        "Improve product movement accuracy, reduce shrinkage, and ensure faster checkout through RFID automation."
    },
    {
      image: "src/assets/use3.avif",
      title: "Logistics & Transportation",
      description:
        "Enhance shipment accuracy, asset tracking, and fleet monitoring using integrated logistics automation."
    },
    {
      image: "src/assets/use4.avif",
      title: "Retail & FMCG",
      description:
        "yow"
    },
    {
      image: "src/assets/use5.avif",
      title: "Logistics & Transportation",
      description:
        "Enhance shipment accuracy, asset tracking, and fleet monitoring using integrated logistics automation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-16">
        {/* HERO SECTION */}
        <section className="relative h-[280px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={caseStudyHero}
              alt="Case Study - Warehouse Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-20 flex justify-center">
            <div className="max-w-5xl text-center">
              <h1
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                style={{
                  textShadow: `
      0 2px 4px rgba(0,0,0,0.35),
      0 4px 8px rgba(0,0,0,0.25),
      0 8px 16px rgba(0,0,0,0.2)
    `
                }}
              >
                Case Study
              </h1>

              <p
                className="text-xl text-white"
                style={{
                  textShadow: `
      0 2px 4px rgba(0,0,0,0.35),
      0 4px 8px rgba(0,0,0,0.25),
      0 8px 16px rgba(0,0,0,0.2)
    `
                }}
              >
                Learn how Prieds helps improve company's supply chain efficiency & accuracy, and get to know how Prieds can be implemented for your company.
              </p>

            </div>
          </div>
        </section>


        <section className="py-20 bg-[#d8f1fd]">
          <div className="container mx-auto px-4">

            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              loop
              className="max-w-6xl mx-auto pb-16"
            >

              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto px-8 mb-4">

                    {/* IMAGE */}
                    <div className="w-full md:w-[300px] flex-shrink-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="rounded-xl w-full object-cover"
                      />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="flex-1 text-left">

                      {/* TITLE */}
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
                        {slide.title}
                      </h2>

                      {/* TAGS (BLUE OUTLINE) */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {slide.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className="px-4 py-1 rounded-full border border-[#8FD9F8] text-[#3984A3] text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-muted-foreground mb-6">
                        {slide.desc}
                      </p>

                      {/* BUTTON */}
                      <Button className="rounded-full px-8 py-3">
                        Learn More
                      </Button>

                    </div>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>

          </div>
        </section>

        {/* Implementation Case Study */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              <span className="text-cyan-400">Implementation</span>{" "}
              <span className="text-gray-900">Case Study</span>
            </h2>

            <div className="w-16 h-1 bg-gray-900 mx-auto mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {caseStudies.map((study, index) => (
                <div key={index} className="text-center">

                  {/* 🔥 FRAME KHUSUS GAMBAR */}
                  <div className="w-full flex justify-center">
                    <div className="p-4 rounded-lg border border-gray-200 shadow-sm bg-white inline-block">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-32 w-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* TAGS */}
                  <div className="flex flex-wrap justify-center gap-2 mt-6">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-1.5 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-gray-900 mt-4 mb-6 leading-tight px-4">
                    {study.title}
                  </h3>

                  {/* BUTTON */}
                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full px-8 py-6 text-base">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Industry Use Cases */}
        <section className="py-16 bg-[#f7fcff]">
          <div className="container mx-auto px-4 max-w-6xl">

            {/* LOGO */}
            <div className="flex justify-center mb-2">
              <img
                src="src/assets/LogoPrieds-DerasRFID.avif"
                alt="Deras RFID Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              <span className="text-gray-900">Industry</span>{" "}
              <span className="text-cyan-400">Use Cases</span>
            </h2>

            <div className="w-16 h-1 bg-gray-900 mx-auto mb-14"></div>

            {/* ================== GRID BARIS PERTAMA (3 ITEM) ================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
              {useCases.slice(0, 3).map((study, index) => (
                <div key={index} className="text-center">

                  <div className="w-full flex justify-center">
                    <div className="relative p-4 rounded-lg border border-gray-200 shadow-sm bg-white inline-block">

                      {/* GAMBAR */}
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-32 w-auto object-contain"
                      />

                      {/* JUDUL DI DALAM GAMBAR */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center px-2">
                        <h3 className="text-lg font-bold text-white drop-shadow-lg">
                          {study.title}
                        </h3>
                      </div>

                    </div>
                  </div>


                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-sm px-6 mb-6">
                    {study.description}
                  </p>

                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full px-8 py-6 text-base">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>

            {/* ================== GRID BARIS KEDUA (2 ITEM) CENTER ================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center max-w-3xl mx-auto">
              {useCases.slice(3, 5).map((study, index) => (
                <div key={index} className="text-center">
                  <div className="w-full flex justify-center">
                    <div className="relative p-4 rounded-lg border border-gray-200 shadow-sm bg-white inline-block">

                      {/* GAMBAR */}
                      <img
                        src={study.image}
                        alt={study.title}
                        className="h-32 w-auto object-contain"
                      />

                      {/* JUDUL DI DALAM GAMBAR */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center px-2">
                        <h3 className="text-lg font-bold text-white drop-shadow-lg">
                          {study.title}
                        </h3>
                      </div>

                    </div>
                  </div>


                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-sm px-6 mb-6">
                    {study.description}
                  </p>

                  <Button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full px-8 py-6 text-base">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>

          </div>
        </section >


      </main >

      <Footer />
    </div >
  );
};

export default CaseStudy;