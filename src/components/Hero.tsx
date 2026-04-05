import { Button } from "@/components/ui/button";
import heroImage from "@/assets/people.avif";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background dengan curve di bawah */}
      <div className="absolute inset-0 bg-[#49c5e9]">
        {/* SVG Curve untuk lengkungan bawah */}
        <svg 
          className="absolute bottom-0 left-0 w-full" 
          viewBox="0 0 1440 100" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: '100px' }}
        >
          <path 
            d="M0,0 Q720,300 1440,0 L1440,100 L0,100 Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
              {/* Circle backdrop with dots pattern */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 bg-[#2b8db8] rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #097eb9 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
              </div>
              
              {/* Person image - not cropped */}
              <img 
                src={heroImage} 
                alt="Business professional with tablet" 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-auto md:w-80 object-contain z-10"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semiboldtext-primary-foreground mb-6 leading-tight">
              Enhanced Your Business Performance with Prieds Supply Chain Management Software
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Automate your supply chain processes using our cloud-based Supply Chain Management Software.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;  