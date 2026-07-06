import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Mail, MapPin, Phone, Play } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ready to elevate your digital presence? Schedule a call or reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 delay-150">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-secondary mb-6">Contact Details</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Phone</p>
                      <a href="tel:07495928590" className="text-lg font-semibold text-secondary hover:text-primary transition-colors">
                        07495 928 590
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                      <div className="space-y-1">
                        <a href="mailto:mori.sobhani@outlook.com" className="block text-lg font-semibold text-secondary hover:text-primary transition-colors">
                          mori.sobhani@outlook.com
                        </a>
                        <a href="mailto:mori@mrsobhani.uk" className="block text-lg font-semibold text-secondary hover:text-primary transition-colors">
                          mori@mrsobhani.uk
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                      <p className="text-lg font-semibold text-secondary">
                        PO1 4LB, Portsmouth, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Let's Collaborate</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    I'm currently available for freelance projects and full-time opportunities in digital marketing and content strategy.
                  </p>
                </div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Calendar Embed & Video */}
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700 delay-150">
              {/* Video Placeholder */}
              <div className="bg-white p-1 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden group" style={{ aspectRatio: '1080/1350' }}>
                  <video 
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/mrsobhani.uk_19eb95e1.mp4" 
                    controls 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 h-full min-h-[600px]">
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2OalRHXjKS-mYlrI-3Kr6SA86PVUq5TKOXWrUp7Msf1OckLYWaU6XlmaK8pfDgXQi_gFwKb1cl?gv=true" 
                  style={{border: 0}} 
                  width="100%" 
                  height="600" 
                  frameBorder="0"
                  title="Schedule an appointment"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
