import detikcom from "@/assets/detikcom.png";
import kompas from "@/assets/kompas.png";
import indigo from "@/assets/indigo.webp";
import googleStartups from "@/assets/google.svg";
import startupstudio from "@/assets/startup.png";
import hannover from "@/assets/hannover.avif";
import kominfo from "@/assets/kominfo.png";
import hubid from "@/assets/hub.svg";
import bgBuilding from "@/assets/bg-gedung.avif";
const MediaCoverage = () => {
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

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgBuilding})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            As Covered By
          </h2>
        </div>

        {/* Logos */}
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

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Grow Together!
          </h3>
          <div className="flex justify-center gap-6">
            <button className="bg-[#F6BE00] hover:bg-[#e0aa00] text-black font-semibold py-2.5 px-6 rounded-full transition">
              Join Partner
            </button>
            <button className="bg-[#F6BE00] hover:bg-[#e0aa00] text-black font-semibold py-2.5 px-6 rounded-full transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
