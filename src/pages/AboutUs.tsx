import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, CheckCircle, Users, TrendingUp, Shield, Heart, Trophy, Download, Mail } from 'lucide-react';
import { Link } from "react-router-dom";
import aboutHero from "@/assets/bg-about.avif";
import founderCEO from "@/assets/image1.avif";
import founderCTO from "@/assets/image2.avif";
import founderCCO from "@/assets/image3.avif";
import founderSVP from "@/assets/image4.avif";
import regionsMap from "@/assets/regions-map.jpg";
import bgAbout from '@/assets/bg-about2.avif';
import gallery1 from '@/assets/gallery1.png';
import gallery2 from '@/assets/gallery2.png';
import gallery3 from '@/assets/gallery3.png';
import gallery4 from '@/assets/gallery4.png';
import gallery5 from '@/assets/gallery5.png';
import gallery6 from '@/assets/gallery6.png';
import gallery7 from '@/assets/gallery7.png';
import gallery8 from '@/assets/gallery8.png';

<section>
  {/* Dark overlay untuk readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Intro */}
    <div className="max-w-4xl mx-auto text-center mb-20">
      {/* ... rest of your content */}
    </div>
  </div>
</section>

const AboutUs = () => {
  const stats = [
    { label: "Countries", value: "3" },
    { label: "Partners", value: "40+" },
    { label: "Clients", value: "135+" },
    { label: "Cities", value: "25" },
  ];

  const founders = [
    {
      name: "Mark Gabriel",
      title: "Chief Executive Officer",
      image: founderCEO,
    },
    {
      name: "Julianto Yauwin",
      title: "Chief Technology Officer",
      image: founderCTO,
    },
    {
      name: "Vanessa Geraldine",
      title: "Chief Commercial Officer",
      image: founderCCO,
    },
    {
      name: "Reggi Prasetyo",
      title: "SVP of Products & Engineering",
      image: founderSVP,
    },
  ];

  const achievements = [
    "2023 Top 4 Indonesian Startup at Hannover Messe, Germany",
    "2022 Top 5 GK Plug and Play Acceleration Program",
    "2022 HUB ID Accelerator & Summit",
    "2021 Indigo Telkom Most Active Startup Award",
    "2021 Top 10 Google Women Founders Program APAC",
    "2021 Top 15 Startup Studio Indonesia Batch 2",
  ];

  const regions = [
    { name: "Europe", status: "Coming Soon" },
    { name: "USA", status: "Coming Soon" },
    { name: "Australia", status: "Coming Soon" },
    { name: "Southeast Asian", status: "Active" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section

      >
        <div className="relative w-full flex items-center overflow-visible mt-20">
          <img
            src={aboutHero}
            alt="Hero"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 relative z-10 py-20 flex justify-center">
              <div className="max-w-xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  We Make Businesses Grow with Technology
                </h1>
                {/* Stats Card */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[470px] bg-white rounded-2xl w-[950px] p-6 shadow-2xl z-50">
                  <div className="flex items-center justify-around divide-x divide-gray-200">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center justify-center">
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 font-medium text-sm md:text-base">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMBINED ABOUT US SECTION */}
      <section
        className="relative w-full min-h-screen flex items-center overflow-visible"
        style={{
          backgroundImage: `url(${bgAbout})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div className="w-full max-w-[1600px] mx-auto px-2 pt-[170px]">
          {/* Intro */}
          <div className="max-w-[820px] mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-3xl text-center mb-3">
              <span className="text-white ">ABOUT</span>{" "}
              <span className="text-white font-bold">US</span>
            </h2>
            <div className="w-12 h-1 bg-white mx-auto mb-12 "></div>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
              We Provide Solutions.
            </h3>
            <p className="text-lg text-white leading-relaxed mb-16">
              Introducing Prieds, your go-to supply chain management solution. We provide secure supply chain software with hardware integration tailored to your needs. Specializing smart warehouse and smart retail solutions, we enhance efficiency and drive growth. Cut costs, streamline processes, and plan strategically with our technology. Gain valuable insights through data analytics for a data-driven expansion. Prieds offers a wide range of affordable services to propel your business forward.            </p>
          </div>

          {/* VIDEO SECTION */}
          <div className="max-w-[750px] mx-auto mb-20">
            <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/vv301HCHuJ0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Unleashing the Power of Supply Chain Management Software
            </h2>
            <p className="text-lg text-white leading-relaxed">
              We think business software should cover complex needs without being complicated. Our mission is to provide software that is intuitive, full-featured, tightly integrated, effortless to upgrade, all while running smoothly for every business, every user.
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid grid-cols-4 gap-4 h-[400px]">
              {/* BARIS 1 - 2 gambar kecil kiri, 1 besar tengah, 1 besar kanan */}
              <div className="col-span-4 grid grid-cols-4 gap-4 h-[180px]">
                {/* 2 Gambar kecil kiri */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Gambar 1 */}
                  <div className="relative group overflow-hidden bg-gray-800">
                    <img
                      src={gallery1}
                      alt="Gallery 1"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                        <Heart className="w-5 h-5" />
                        Like
                      </button>
                    </div>
                  </div>

                  {/* Gambar 2 */}
                  <div className="relative group overflow-hidden bg-gray-800">
                    <img
                      src={gallery2}
                      alt="Gallery 2"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                        <Heart className="w-5 h-5" />
                        Like
                      </button>
                    </div>
                  </div>
                </div>

                {/* Gambar 3 - Besar tengah */}
                <div className="relative group overflow-hidden bg-gray-800">
                  <img
                    src={gallery3}
                    alt="Gallery 3"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                      <Heart className="w-5 h-5" />
                      Like
                    </button>
                  </div>
                </div>

                {/* Gambar 4 - Besar kanan */}
                <div className="col-span-2 relative group overflow-hidden bg-gray-800">
                  <img
                    src={gallery4}
                    alt="Gallery 4"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                      <Heart className="w-5 h-5" />
                      Like
                    </button>
                  </div>
                </div>
              </div>

              {/* BARIS 2 - 1 besar kiri, 1 besar tengah, 2 kecil kanan */}
              <div className="col-span-4 grid grid-cols-4 gap-4 h-[280px]">
                {/* Gambar 5 - Besar kiri */}
                <div className="relative group overflow-hidden bg-gray-800">
                  <img
                    src={gallery5}
                    alt="Gallery 5"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                      <Heart className="w-5 h-5" />
                      Like
                    </button>
                  </div>
                </div>

                {/* Gambar 6 - Besar tengah */}
                <div className="col-span-2 relative group overflow-hidden bg-gray-800">
                  <img
                    src={gallery6}
                    alt="Gallery 6"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                      <Heart className="w-5 h-5" />
                      Like
                    </button>
                  </div>
                </div>

                {/* 2 Gambar kecil kanan */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Gambar 7 */}
                  <div className="relative group overflow-hidden bg-gray-800">
                    <img
                      src={gallery7}
                      alt="Gallery 7"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                        <Heart className="w-5 h-5" />
                        Like
                      </button>
                    </div>
                  </div>

                  {/* Gambar 8 (jika ada) */}
                  <div className="relative group overflow-hidden bg-gray-800">
                    <img
                      src={gallery8}
                      alt="Gallery 8"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                        <Heart className="w-5 h-5" />
                        Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gambar dan Deskripsi Bagian 1 */}
          <div className="max-w-[2000px] mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl mb-3">
                  <span className="text-black ">OUR</span>{" "}
                  <span className="text-black font-bold">VISION</span>
                </h2>
                <p className="text-lg text-black italic font-bold leading-relaxed max-w-[300px]">
                  Becoming the #1 Solution for Business Revolution in Indonesia.
                </p>
              </div>
              <div className="text-center md:text-left">
                <img
                  src="src/assets/lampu.avif"
                  alt="Deskripsi Gambar 1"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Gambar dan Deskripsi Bagian 2 */}
          <div className="max-w-[2000px] mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <img
                  src="src/assets/las.avif"
                  alt="Deskripsi Gambar 2"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-center md:text-right">
                <h2 className="text-3xl md:text-4xl mb-3 max-w-[330px]">
                  <span className="text-black ">OUR</span>{" "}
                  <span className="text-black font-bold">MISSION</span>
                </h2>
                <p className="text-lg text-black italic font-bold leading-relaxed max-w-[330px]">
                  Becoming the #1 Business and IoT Technology Platform which provides trusted solutions for industries.
                </p>
              </div>
            </div>
          </div>


          <div className="max-w-[850px] mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              What's Makes Prieds Different?
            </h2>

            <div className="space-y-2">

              {/* Item 1 */}
              <div className="flex items-start gap-6">
                <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                  PRIEDS redefines supply chain management with its unique features. Our hallmark is customization – we craft software and hardware integrations tailored precisely to your business needs, whether optimizing warehouses or elevating retail. No more generic solutions – PRIEDS ensures a perfect fit.
                </p>

                <img
                  src="src/assets/foto1.avif"
                  alt="Foto 1"
                  className="w-[370px] h-[180px] rounded-lg"
                />
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-6">
                <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                  Moreover, PRIEDS excels in compatibility and accessibility. Our end-to-end integration links every aspect of your supply chain seamlessly, boosting efficiency. And with access from any device, you're in control anytime, anywhere. Experience the PRIEDS difference and revolutionize your supply chain management today.
                </p>

                <img
                  src="src/assets/Foto2.avif"
                  alt="Foto 2"
                  className="w-[370px] h-[180px] rounded-lg"
                />
              </div>
            </div>
          </div>

        </div>
      </section >

      <section className="relative bg-[#3F3F3F] pt-24 pb-28 mt-[-80px]">

        {/* Shape putih di tengah atas */}
        <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="../src/assets/arrow.webp"
            alt="Shape"
            className="w-29 h-29 object-contain"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our <span className="font-extrabold">Founding Team</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index}>
              {/* FOTO */}
              <div className="relative w-full h-85 rounded-xl overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />

                {/* Nama & Jabatan */}
                <div
                  className="absolute bottom-3 left-1/2 transform -translate-x-1/2
            text-center text-white min-w-[180px]"
                >
                  <h3 className="font-bold text-lg whitespace-nowrap">
                    {founder.name}
                  </h3>
                  <p className="text-sm opacity-90 whitespace-nowrap italic">
                    {founder.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-contain bg-center"
        style={{ backgroundImage: "url('/src/assets/bg-about3.avif')" }}
      >
        <div className="max-w-3xl mx-auto pt-20 pb-10">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl mb-10 max-w-[330px] mx-auto text-center">
            <span className="text-black">Our</span>{" "}
            <span className="text-black font-bold">Achievements</span>
          </h2>

          {/* Achievement List */}
          <div className="grid grid-cols-1 gap-4">
            {achievements.map((achievement, index) => {
              const year = achievement.split(" ")[0];
              const rest = achievement.slice(year.length + 1);

              return (
                <div
                  key={index}
                  className="flex items-start justify-center gap-4 p-2 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <p className="text-foreground text-center">
                    <span className="font-bold not-italic">{year}</span>{" "}
                    <span className="italic">{rest}</span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* Line */}
          <div className="flex justify-center mt-4">
            <img
              src="/src/assets/line.avif"
              alt="Line"
              className="w-full max-w-[40px]"
            />
          </div>

        </div>
      </section>


      {/* Regions + CTA Section */}
      <section
        className="bg-cover bg-top bg-no-repeat py-20"
        style={{ backgroundImage: "url('/src/assets/bg-about4.avif')" }}
      >

        {/* Peta */}
        <div className="flex justify-center mb-20">
          <img
            src="/src/assets/peta.avif"
            alt="Peta"
            className="w-[1200px] max-w-[90%] h-auto"
          />
        </div>

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Want to Work with Us?
          </h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">

            <Button
              size="lg"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg"
            >
              Download Company Profile
            </Button>

            <Button
              size="lg"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg"
            >
              Join Partner
            </Button>

            <Button
              size="lg"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg rounded-full shadow-lg"
            >
              Contact Us
            </Button>

          </div>

        </div>
      </section>

      <Footer />
    </div >
  );
};

export default AboutUs;