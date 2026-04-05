import manufactureImg from "@/assets/industry-manufacture.jpg";
import retailImg from "@/assets/industry-retail.jpg";
import logisticsImg from "@/assets/industry-logistics.jpg";
import financialImg from "@/assets/industry-financial.jpg";
import beautyImg from "@/assets/industry-beauty.jpg";
import miningImg from "@/assets/industry-mining.jpg";

const Industries = () => {
  const industries = [
    { name: "Manufacturing", image: manufactureImg },
    { name: "Distribution", image: logisticsImg },
    { name: "Logistic & Expedition", image: logisticsImg },
    { name: "Retail", image: retailImg },
    { name: "Financial Institution", image: financialImg },
    { name: "Health & Beauty", image: beautyImg },
    { name: "Mining", image: miningImg },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
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

        {/* Grid 4 Atas */}
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

        {/* Grid 3 Tengah */}
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

        {/* Button */}
        <div className="text-center mt-10">
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            And Many More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
