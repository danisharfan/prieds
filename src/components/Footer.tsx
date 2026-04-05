import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A1628] text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">prieds</h3>
            <p className="text-sm font-semibold mb-2">
              PT Solusi Kebutuhan Teknologi
            </p>
            <p className="text-sm opacity-80 leading-relaxed">
              PRIEDS is an Indonesian provider of supply chain management systems to improve business efficiency and integrated cloud-based (IoT) hardware.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-primary">PRODUCT</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="#" className="hover:text-primary transition-colors">Prieds WMS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Prieds Smart Retail</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Prieds DERAS RFID</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-primary">COMPANY</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><a href="#" className="hover:text-primary transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partnership</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-primary">OFFICE</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              Gedung Bursa Efek Indonesia<br />
              Tower 1 Level 3 Unit 304, SCBD<br />
              Jakarta Selatan DKI Jakarta 12190<br />
              Indonesia
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-primary">CONTACT US</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>+62 815-8461-9071 (Via Chat)</li>
              <li>hello@prieds.com</li>
              <li>24 x 7 online support</li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-primary text-sm">Connect with Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex justify-between items-center">
          <p className="text-sm opacity-60">
            2025 © PT Solusi Kebutuhan Teknologi
          </p>
          <a href="#" className="text-sm opacity-60 hover:text-primary transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
