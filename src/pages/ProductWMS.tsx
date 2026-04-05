import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Package, TruckIcon, ClipboardCheck, Send, BarChart3, Factory, Truck, Store, Wrench, Box, Shield, Gauge, Eye, AlertCircle, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/wms-hero.jpg";
import flowImage from "@/assets/wms-flow.jpg";
import lossPreventionImage from "@/assets/wms-loss-prevention.jpg";
import integrationImage from "@/assets/wms-integration.jpg";

// Hero Section
const WMSHero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Warehouse Management System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Warehouse Management System <span className="text-primary">Prieds (WMS)</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Equipped with RFID and Barcode features. Prieds WMS can track various activities with real-time stock status, from accurate stock taking, aging stock, dead stock and many more within single system.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

// Notable Users Section
const WMSNotableUsers = () => {
  const users = [
    "BOSE", "Vinilon", "Unilever", "PT POLYTAMA PROPINDO",
    "CHERY", "HokkanDeltapack", "Beauty", "Flimty", "KSA"
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Prieds WMS Notable User
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {users.map((user, index) => (
            <div 
              key={index}
              className="bg-card px-8 py-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-lg font-semibold text-foreground">{user}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section
const WMSFeatures = () => {
  const features = [
    {
      icon: Package,
      title: "Inventory and Stock Transfer",
      description: "Overseeing the movement of inventory items within or between storage facilities",
      items: ["Inventory transfer to another site/zone/rack", "Multisite inventory management"]
    },
    {
      icon: TruckIcon,
      title: "Inbound Management",
      description: "Delivery and receiving management",
      items: ["Stock transfer request", "Automated receiving process"]
    },
    {
      icon: ClipboardCheck,
      title: "Stock Opname",
      description: "Complete stock taking and verification",
      items: ["RFID/Barcode scanning", "Real-time accuracy"]
    },
    {
      icon: Send,
      title: "Outbound Management",
      description: "Shipping and distribution control",
      items: ["Stock forecasting", "Automated picking"]
    },
    {
      icon: BarChart3,
      title: "WMS Dashboard & Reporting",
      description: "Comprehensive analytics and insights",
      items: ["Storage location management", "Performance analytics"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Prieds Warehouse Management System Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

// Types Section
const WMSTypes = () => {
  const manufactureTypes = [
    { icon: Package, title: "WMS Raw Material", description: "Manage raw materials inventory" },
    { icon: Factory, title: "WMS Production", description: "Production floor management" },
    { icon: Wrench, title: "WMS Spare Parts & Tools", description: "Tools and parts tracking" },
    { icon: Box, title: "WMS Finished Goods", description: "Finished products inventory" }
  ];

  const distributorTypes = [
    { icon: Truck, title: "WMS Distribution", description: "Distribution center management" },
    { icon: Wrench, title: "WMS Asset / Tools", description: "Asset tracking system" },
    { icon: Store, title: "WMS Retail", description: "Retail inventory management" }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            WMS for Manufacture
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manufactureTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            WMS for Distributor and Retail
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {distributorTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Flow Section
const WMSFlow = () => {
  const flowSteps = [
    { number: "01", title: "Receiving", category: "Inbound" },
    { number: "02", title: "Putaway", category: "Inbound" },
    { number: "03", title: "Storage", category: "Warehouse Area" },
    { number: "04", title: "Picking", category: "Warehouse Area" },
    { number: "05", title: "Packing", category: "Warehouse Area" },
    { number: "06", title: "Shipping", category: "Outbound" },
    { number: "07", title: "Forecasting", category: "Outbound" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Flow of Warehouse Management System Prieds
        </h2>
        
        <div className="max-w-5xl mx-auto mb-12">
          <img 
            src={flowImage} 
            alt="WMS Flow Diagram" 
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {flowSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-md text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {step.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Loss Prevention Section
const WMSLossPrevention = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Loss Prevention System Prieds
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Minimize your business losses from inventory loss or untracked inventory with Prieds Loss Prevention System.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Learn More
            </Button>
          </div>
          <div>
            <img 
              src={lossPreventionImage} 
              alt="Loss Prevention System" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const WMSBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Better Security & Maximum Accuracy",
      description: "Enhanced security protocols with maximum inventory accuracy"
    },
    {
      icon: Gauge,
      title: "Efficiency Control",
      description: "Streamlined operations with real-time efficiency monitoring"
    },
    {
      icon: Eye,
      title: "Error-Free Real-Time Visibility Access",
      description: "Complete visibility with zero-error real-time data access"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reliable and Efficient Warehouse Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connected to Internet of Things (IoT) and Enterprise Resource Planning (ERP).
            Designed to automate entire processes and increase productivity across your warehouse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
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
const WMSProblems = () => {
  const problemSolutions = [
    {
      problem: "Loss of Stock / Spare Parts",
      solution: "Real-time inventory tracking"
    },
    {
      problem: "Dead Stock not identified",
      solution: "Dead Stock identification"
    },
    {
      problem: "Takes time for stock taking",
      solution: "Stock Opname using RFID/barcode/QR"
    },
    {
      problem: "Slow loss response",
      solution: "Performance reports & analytics"
    },
    {
      problem: "Difficult to track Aging Stock",
      solution: "Inventory aging reports & alerts"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          What's Our Clients Problem & Our Solutions
        </h2>

        <div className="max-w-5xl mx-auto space-y-6">
          {problemSolutions.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-8 bg-destructive/5 border-r border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-destructive" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-destructive mb-2">
                        PROBLEM {String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="text-lg font-semibold text-foreground">
                        {item.problem}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-primary/5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-2">
                        SOLUTION {String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="text-lg font-semibold text-foreground">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Integration Section
const WMSIntegration = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Integrate Your WMS
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src={integrationImage} 
              alt="ERP Integration" 
              className="w-full"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ERP Integration
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Seamlessly integrate with your existing Enterprise Resource Planning system. Connect Warehouse Management with Sales, Purchasing, Finance, and other business modules for complete operational visibility.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {["Warehouse", "Purchasing", "Sales", "Finance"].map((module, index) => (
                  <div 
                    key={index}
                    className="bg-primary/10 p-4 rounded-lg text-center"
                  >
                    <p className="font-semibold text-foreground">{module}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const WMSCTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Manage Optimal Warehouse, Maximize Sales with WMS Prieds
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your warehouse operations with our comprehensive management system
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const ProductWMS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <WMSHero />
      <WMSNotableUsers />
      <WMSFeatures />
      <WMSTypes />
      <WMSFlow />
      <WMSLossPrevention />
      <WMSBenefits />
      <WMSProblems />
      <WMSIntegration />
      <WMSCTA />
      <Footer />
    </div>
  );
};

export default ProductWMS;
