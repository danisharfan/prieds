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

const Clients = () => {
  // Setiap logo bisa diatur ukurannya secara individual
  // scale: 0.5 = 50% ukuran, 1 = 100% ukuran, 1.5 = 150% ukuran
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

  return (
    <section className="py-20 relative" style={{
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url("data:image/jpeg;base64,/9j/4AAQSkZJRg...")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
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
                  onError={(e) => {
                    console.error(`Failed to load: ${client.name}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;