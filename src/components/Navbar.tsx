import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import logoWMS from "@/assets/LogoPrieds-WMS.avif";
import logoSmartRetail from "@/assets/LogoPrieds-SmartRetail.avif";
import logoDerasRFID from "@/assets/LogoPrieds-DerasRFID.avif";
import logo from '../assets/logo-prieds.avif';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-[17px]">
        <div className="flex items-center justify-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Prieds Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            {/* Product dropdown */}
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-semibold text-gray-800 bg-transparent hover:bg-transparent focus:bg-transparent">
                      Product
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md">
                      <ul className="w-[350px] p-4 space-y-2">
                        <li>
                          <Link to="/product/wms">
                            <NavigationMenuLink className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group">
                              <div className="flex items-center gap-3">
                                <img src={logoWMS} alt="Prieds WMS" className="h-8 w-auto" />
                                <span className="text-lg font-semibold text-gray-800">
                                  prieds <span className="text-[#49c5e9]">WMS</span>
                                </span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#49c5e9]" />
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/smart-retail">
                            <NavigationMenuLink className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group">
                              <div className="flex items-center gap-3">
                                <img src={logoSmartRetail} alt="Prieds Smart Retail" className="h-8 w-auto" />
                                <span className="text-lg font-semibold text-gray-800">
                                  prieds{" "}
                                  <span className="text-orange-500">Smart Retail</span>
                                </span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#49c5e9]" />
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/deras-rfid">
                            <NavigationMenuLink className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors group">
                              <div className="flex items-center gap-3">
                                <img src={logoDerasRFID} alt="Prieds DERAS RFID" className="h-8 w-auto" />
                                <span className="text-lg font-semibold text-gray-800">
                                  prieds <span className="text-gray-700">DERAS RFID</span>
                                </span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#49c5e9]" />
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Other nav links */}
            <Link
              to="/integration"
              className="text-sm font-semibold text-gray-800 hover:text-[#49c5e9] transition-colors"
            >
              Integration
            </Link>
            <Link
              to="/join-partner"
              className="text-sm font-semibold text-gray-800 hover:text-[#49c5e9] transition-colors"
            >
              Join Partner
            </Link>
            <Link
              to="/blog"
              className="text-sm font-semibold text-gray-800 hover:text-[#49c5e9] transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/case-study"
              className="text-sm font-semibold text-gray-800 hover:text-[#49c5e9] transition-colors"
            >
              Case Study
            </Link>
            <Link
              to="/about-us"
              className="text-sm font-semibold text-gray-800 hover:text-[#49c5e9] transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Contact Us Button */}
          <Link to="/contact-us">
            <Button className="rounded-full bg-[#49c5e9] hover:bg-[#3bb5d6] text-white font-bold text-sm px-10 py-2 shadow-sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;