import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Full name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(1, { message: "Phone number is required" }).max(20, { message: "Phone number must be less than 20 characters" }),
  company: z.string().trim().min(1, { message: "Company name is required" }).max(100, { message: "Company name must be less than 100 characters" }),
  employees: z.string().min(1, { message: "Please select number of employees" }),
  requirements: z.string().trim().min(1, { message: "Please write your requirements" }).max(1000, { message: "Requirements must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      employees: "",
      requirements: "",
    },
  });

  const faqs = [
    {
      question: '"I need technical support"',
      answer: "For technical support, please contact our team via WhatsApp at +62 813-8461-9071 or email us at hello@prieds.com. Our support team is available 24/7 to assist you with any technical issues you may encounter.",
    },
    {
      question: "I want to know more about Prieds system",
      answer: "To learn more about the Prieds system, you can schedule a demo with our team by filling out the contact form above. Our experts will provide a comprehensive overview of our WMS and Smart Retail solutions tailored to your business needs.",
    },
    {
      question: "Is Prieds WMS System Online or Offline?",
      answer: "Prieds WMS is a cloud-based system that works primarily online, ensuring real-time data synchronization and access from anywhere. However, we also offer offline capabilities for critical operations to ensure business continuity even during internet disruptions.",
    },
    {
      question: "Can the Prieds system be integrated with other developer's ERP?",
      answer: "Yes, absolutely! Prieds system is designed with flexibility in mind and can be integrated with various ERP systems from different developers. Our team will work with you to ensure seamless integration with your existing infrastructure.",
    },
    {
      question: "Can Prieds software be integrated with hardware such as Barcodes and RFID?",
      answer: "Yes, Prieds software fully supports integration with various hardware including barcode scanners, RFID readers, and other IoT devices. This enables automated data capture and improves operational efficiency in your warehouse and retail operations.",
    },
    {
      question: "Can the Prieds WMS generate and read Barcodes or QR Codes?",
      answer: "Yes, Prieds WMS has built-in capabilities to both generate and read barcodes and QR codes. You can generate custom barcodes for your products, locations, and assets, and use scanners to read them for inventory tracking and management.",
    },
  ];

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Encode data for WhatsApp message
      const message = `*New Contact Form Submission*\n\n*Name:* ${data.fullName}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*Company:* ${data.company}\n*Employees:* ${data.employees}\n*Requirements:* ${data.requirements}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = "6281384619071";

      // Open WhatsApp
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

      toast({
        title: "Success!",
        description: "Opening WhatsApp to send your message...",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative min-h-[800px] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/bg-contact.avif')"
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0"></div>

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="absolute -top-[180px] left-[250px] z-10 max-w-[350px]">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-relaxed"
              style={{ lineHeight: "1.2" }}
            >
              Connect With Prieds
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Consult about your business, request a demo of Prieds products, or reach out to
              our team for any other inquiries by filling out the form below.
              Our team will be in touch with you shortly.
            </p>
          </div>
        </div>
      </section>
      {/* FORM AND IMAGE SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-start">
            {/* CONTACT FORM */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contact Us and Schedule a Demo with Prieds

      {/* FORM AND INFO SECTION */}
      <section
        className="py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/bg-contact2.avif')"
        }}
      >
        <div className="container mx-auto px-4">

          <div className="flex flex-col items-center gap-10">

            {/* CONTACT FORM */}
            <div className="bg-card p-8 rounded-lg border border-border shadow-lg w-full max-w-[550px]">
              <h2 className="text-2xl font-bold text-center mb-6 leading-tight">
                Contact Us and Schedule a<br />Demo with Prieds
              </h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Whatsapp) *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your WhatsApp number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="employees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of employees *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Please Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 employees</SelectItem>
                            <SelectItem value="11-50">11-50 employees</SelectItem>
                            <SelectItem value="51-200">51-200 employees</SelectItem>
                            <SelectItem value="201-500">201-500 employees</SelectItem>
                            <SelectItem value="500+">500+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Write down your requirements *</FormLabel>
                        <FormControl>

                          <Textarea 
                            placeholder="Type your message here..."
                          <Textarea
                            placeholder="Tell us about your business needs..."1ee (update)
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>

                </form>
              </Form>
            </div>

            {/* IMAGE SECTION */}
            <div className="relative lg:sticky lg:top-24">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img 
                  src={contactHero} 
                  alt="Contact Prieds Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* CONTACT INFO OVERLAY */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                    <p className="text-muted-foreground text-sm">
            {/* CONTACT INFO */}
            <div className="bg-card p-8 rounded-lg border border-border shadow-lg w-full max-w-[550px]">
              <div className="space-y-6">

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Indonesia Stock Exchange Building<br />
                      Tower 1 Level 3 Unit 304, SCBD<br />
                      South Jakarta, DKI Jakarta 12190<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <a 
                      href="https://wa.me/6281384619071" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      +62 813-8461-9071 (Whatsapp)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <a 
                      href="mailto:hello@prieds.com"
                      className="text-primary hover:underline text-sm"
                    >
                      hello@prieds.com
                    </a>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 text-center">
                  <p className="text-sm text-muted-foreground font-medium">
                    24 X 7 online support
                  </p>
                </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <a
                      href="https://wa.me/6281384619071"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      +62 813-8461-9071 (Whatsapp)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <a
                      href="mailto:hello@prieds.com"
                      className="text-primary hover:underline text-sm"
                    >
                      hello@prieds.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        className="py-20 bg-cover bg-center rounded-t-[50px]"
        style={{ backgroundImage: "url('/src/assets/bg-contact3.avif')" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-[140px] h-1 bg-gray-900 mx-auto mb-12"></div>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-black pb-4"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover-black">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-16">
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">
                Let's Grow Together<br />with Prieds!
              </h1>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;