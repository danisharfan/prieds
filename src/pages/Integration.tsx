import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import integrationHero from "@/assets/bg-integration.avif";
import rfidImg from "@/assets/rfid.avif";
import cctvImg from "@/assets/cctv.avif";
import barcodeImg from "@/assets/barcode-scanner.avif";
import printerImg from "@/assets/printer.avif";
import scaleImg from "@/assets/scale.avif";
import doorlockImg from "@/assets/door-lock.avif";
import smartgateImg from "@/assets/smart-gate.avif";
import faceImg from "@/assets/face-recognition.avif";


const Integration = () => {
  const softwareLogos = [
    { name: "prieds WMS", logo: "/src/assets/LogoPrieds-WMS.avif" },
    { name: "prieds Smart Retail", logo: "/src/assets/LogoPrieds-SmartRetail.avif" },
    { name: "prieds DERAS RFID", logo: "/src/assets/LogoPrieds-DerasRFID.avif" },
    { name: "accurate", logo: "/src/assets/accurate.avif" },
    { name: "ORACLE", logo: "/src/assets/oracle.avif" },
    { name: "SAP", logo: "/src/assets/sap.avif" },
    { name: "odoo", logo: "/src/assets/odoo.avif" },
    { name: "FORSTOK", logo: "/src/assets/forstok.avif" },
    { name: "tada", logo: "/src/assets/tada.avif" },
    { name: "Dynamics 365", logo: "/src/assets/dynamics.avif" },
    { name: "mekari", logo: "/src/assets/mekari-jurnal.avif" },
  ];

  const hardwareItems = [
    { image: rfidImg, name: "RFID Reader" },
    { image: cctvImg, name: "CCTV" },
    { image: barcodeImg, name: "Barcode Scanner" },
    { image: printerImg, name: "Thermal Printer" },
    { image: scaleImg, name: "Digital Scale" },
    { image: doorlockImg, name: "Door Lock" },
    { image: smartgateImg, name: "Smart Gate" },
    { image: faceImg, name: "Face Recognition" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={integrationHero}
            alt="Integration network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 -mt-20">
            Integration
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto">
            We provide integration to various platforms and <br /> software to maximize and meet your business needs.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg rounded-full">
            Contact Us
          </Button>
        </div>
      </section>

      {/* WRAPPER BACKGROUND MENYATUKAN 3 SECTION */}
      <div
        className="relative"
        style={{
          backgroundImage: "url('/src/assets/bg-integration2.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b to-background/95"></div>

        {/* SEMUA CONTENT */}
        <div className="relative z-10">

          {/* SOFTWARE INTEGRATION SECTION */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  ACCOUNTING, ERP, AND WMS <br /> INTEGRATION
                </h2>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  Simplify accounting, bookkeeping, warehouse management and other business <br />
                  processes by integrating into the Prieds platform or existing platforms.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-9">
                {/* Row 1 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {softwareLogos.slice(0, 4).map((software, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center aspect-[3/2]"
                    >
                      <img src={software.logo} alt={software.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {softwareLogos.slice(4, 8).map((software, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center aspect-[3/2]"
                    >
                      <img src={software.logo} alt={software.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {softwareLogos.slice(8, 11).map((software, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center aspect-[3/2]"
                    >
                      <img src={software.logo} alt={software.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* HARDWARE INTEGRATION SECTION */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  HARDWARE AND AUTOMATION
                </h2>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  Integrate Prieds with hardware, sensors, printers, RFID technology and more.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {hardwareItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-3 flex items-center gap-3 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    {/* Gambar kiri */}
                    <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* Nama hardware */}
                    <span className="text-sm font-semibold text-foreground">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* CTA SECTION */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Integrate Your Business <br /> System with Prieds Now!
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="w-full sm:w-70 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full">
                    Download Company Profile
                  </Button>
                  <Button className="w-full sm:w-70 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full">
                    Join Partner
                  </Button>
                  <Button className="w-full sm:w-70 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>


      <Footer />
    </div>
  );
};

export default Integration;