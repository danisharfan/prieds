import { Settings, Shield, Globe, Monitor } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Settings,
      number: "01",
      title: "Customizable",
      description: "Every businesses has different need. Prieds offered customization that can increased efficiency and meeting business' needs.",
    },
    {
      icon: Shield,
      number: "02",
      title: "Compatible",
      description: "With a secure backend, Prieds software can be integrated with other ERP software such as:",
      logos: true
    },
    {
      icon: Globe,
      number: "03",
      title: "End to End Integration",
      description: "Ability to integrate with various systems and hardware through Internet of Things (IoT) technology.",
    },
    {
      icon: Monitor,
      number: "04",
      title: "Accessible on Any Device",
      description: "Prieds software is easy to use as our system can be accessed through mobile phones, tablets, PCs and laptops.",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#b7e6fb] rounded-3xl p-8 shadow-xl">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Supply Chain<br />
              Management Software<br />
              for Your Business
            </h2>
            <p className="text-gray-700 max-w-md text-base leading-relaxed">
              Prieds is here to support the vision of the Industrial Revolution 4.0 by providing Supply Chain Management Software that can be connected with hardware through IoT Technology and ERP System.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-5 shadow-md"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">{feature.number}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-cyan-500 stroke-[1.5]" />
                </div>
                
                <p className="text-gray-700 text-xs leading-relaxed text-center">
                  {feature.description}
                </p>
                
                {feature.logos && (
                  <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
                    <div className="text-blue-600 font-bold text-base">SAP</div>
                    <div className="flex items-center gap-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    </div>
                    <div className="text-red-600 font-bold text-sm">ORACLE</div>
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">a</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;