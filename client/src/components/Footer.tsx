import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-3 mb-6 group">
              <img loading="lazy" 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/MoriSobhaniLogo_c812f661.png" 
                alt="Mori Sobhani Logo" 
                className="w-10 h-10 object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
              />
              Mori Sobhani
            </a>
            <p className="text-blue-100 max-w-sm leading-relaxed">
              Creating content that illuminates ideas and fosters connection. Based in London, creating for the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-blue-100 hover:text-primary transition-colors">Home</a></li>
              <li><a href="/portfolio" className="text-blue-100 hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="/cv" className="text-blue-100 hover:text-primary transition-colors">CV</a></li>
              <li><a href="/blog" className="text-blue-100 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/about" className="text-blue-100 hover:text-primary transition-colors">About</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/mori.sobhani/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/mori-sobhani/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <a href="mailto:mori.sobhani@outlook.com" className="text-blue-100 hover:text-primary transition-colors block">
                mori.sobhani@outlook.com
              </a>
              <a href="mailto:mori@mrsobhani.uk" className="text-blue-100 hover:text-primary transition-colors block mt-2">
                mori@mrsobhani.uk
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/60">
          <p>© {new Date().getFullYear()} Mori Sobhani. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
