import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Shield, DoorOpen, CreditCard, Package, Gauge, Eye, Zap, AlertCircle, CheckCircle2, Database, Cpu } from "lucide-react";
import heroImage from "@/assets/smart-retail-hero.jpg";
import peopleCountImage from "@/assets/smart-people-count.jpg";
import securityImage from "@/assets/smart-security.jpg";
import checkoutImage from "@/assets/smart-checkout.jpg";
import inventoryImage from "@/assets/retail-inventory.jpg";

// Hero Section
const SmartRetailHero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Smart Retail Solution" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Improve Your Retail Efficiency and <span className="text-primary">Simplify Operation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Maximized retail store operations through Internet of Things (IoT) Integration.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

// Clients Section
const SmartRetailClients = () => {
  const clients = [
    "MAP (Mitra Adiperkasa)",
    "HXC Furnishings with Style",
    "Harmoni Exchange"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Those Who Have Entrusted Prieds
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-card px-10 py-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-lg font-semibold text-foreground text-center">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const SmartRetailFeatures = () => {
  const features = [
    {
      icon: Users,
      title: "Smart People Count",
      description: "Visitors count and outside traffic",
      details: [
        "Real-time customer count",
        "Traffic analysis",
        "Peak hours identification"
      ],
      image: peopleCountImage
    },
    {
      icon: Shield,
      title: "Smart Security",
      description: "CCTV detection and monitoring",
      details: [
        "24/7 surveillance",
        "Theft detection",
        "Security alerts"
      ],
      image: securityImage
    },
    {
      icon: DoorOpen,
      title: "Smart Entrance",
      description: "Real-time customer tracking",
      details: [
        "Entry/exit monitoring",
        "Occupancy management",
        "Flow optimization"
      ],
      image: securityImage
    },
    {
      icon: CreditCard,
      title: "Smart Checkout System",
      description: "Simplified dashboard monitoring",
      details: [
        "Fast checkout process",
        "RFID integration",
        "Payment analytics"
      ],
      image: checkoutImage
    },
    {
      icon: Package,
      title: "Retail Inventory Management",
      description: "Heatmap to identify busy hours",
      details: [
        "Real-time stock tracking",
        "Automated reordering",
        "Inventory analytics"
      ],
      image: inventoryImage
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Prieds Smart Retail Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const SmartRetailCTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Manage More Sophisticated Retail Store Operations with <span className="text-primary">Smart Retail Prieds</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your retail business with cutting-edge IoT technology and intelligent automation
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const SmartRetailBenefits = () => {
  const benefits = [
    {
      icon: Gauge,
      title: "Better Control from Anywhere",
      description: "Monitor and manage your retail operations remotely with real-time insights"
    },
    {
      icon: Eye,
      title: "Real-Time Visibility",
      description: "Get instant visibility into stock levels, customer traffic, and sales performance"
    },
    {
      icon: Shield,
      title: "Security & Accuracy with RFID & CCTV",
      description: "Enhanced security protocols with RFID tracking and comprehensive CCTV coverage"
    },
    {
      icon: Zap,
      title: "Error-Free Fulfillment",
      description: "Reduce stock loss and ensure accurate order fulfillment with automated systems"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reliable and Efficient Retail Store Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connected to Internet of Things (IoT) and Enterprise Resource Planning (ERP).
            Designed to automate entire processes and increase productivity across your retail store.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Problems Section
const SmartRetailProblems = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          What's Our Clients Problem & Our Solutions
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 bg-destructive/5 border-r border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center">
                      <AlertCircle className="w-7 h-7 text-destructive" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-destructive mb-3">
                      PROBLEM
                    </div>
                    <p className="text-xl font-semibold text-foreground leading-relaxed">
                      The need to know the number of people in traffic in each branch
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-10 bg-primary/5">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary mb-3">
                      SOLUTION
                    </div>
                    <p className="text-xl font-semibold text-foreground leading-relaxed">
                      Smart People Counting Camera and analyze People Traffic
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Integration Section
const SmartRetailIntegration = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Integrate Your Smart Retail
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-10 rounded-2xl shadow-xl">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Database className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ERP Integration
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete your warehouse management needs by integrating your current ERP with Prieds Warehouse Management System.
            </p>
          </div>

          <div className="bg-card p-10 rounded-2xl shadow-xl">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Cpu className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Hardware & IoT Integration
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Connect with various IoT devices, RFID readers, smart cameras, and sensors to create a fully integrated smart retail system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const SmartRetailContact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              For Your More Reliable Retail Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with us to learn how Smart Retail can transform your business
            </p>
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-2xl">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone (Whatsapp)</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="Enter your phone number"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="company">Company (Business Name)</Label>
                <Input 
                  id="company" 
                  placeholder="Enter your company name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="employees">Number of employees</Label>
                <Select>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10 employees</SelectItem>
                    <SelectItem value="11-50">11-50 employees</SelectItem>
                    <SelectItem value="51-200">51-200 employees</SelectItem>
                    <SelectItem value="201-500">201-500 employees</SelectItem>
                    <SelectItem value="500+">500+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="requirements">Write down your requirements *</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="Type your message here.."
                  className="mt-2 min-h-32"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="newsletter" />
                <label
                  htmlFor="newsletter"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I want to receive exclusive blogs, case studies, white papers, webinars & more
                </label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const ProductSmartRetail = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SmartRetailHero />
      <SmartRetailClients />
      <SmartRetailFeatures />
      <SmartRetailCTA />
      <SmartRetailBenefits />
      <SmartRetailProblems />
      <SmartRetailIntegration />
      <SmartRetailContact />
      <Footer />
    </div>
  );
};

export default ProductSmartRetail;
