import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDerasRFID = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Prieds <span className="text-foreground">DERAS RFID</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              RFID Technology Solutions - Coming Soon
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDerasRFID;
