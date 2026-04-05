import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
import laptop from "@/assets/laptop.png";
import tablet from "@/assets/tablet.png";
import scanner from "@/assets/scanner.png";

const Products = () => {
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

  return (
    <section className="py-20 bg-[#d7f0ff]">
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
                {/* Gambar produk */}
                <div className="flex-1 flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-[30  0px] md:w-[420px] object-contain"
                  />
                </div>

                {/* Konten teks */}
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
    </section>
  );
};

export default Products;
