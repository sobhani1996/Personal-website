import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  COMMISSION_RANGE,
  CONTACT,
  OFFER_AD_SPEND_NOTE,
} from "@/content/offer";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const callAgenda = [
  "Your business, typical customer and what a sale or booking is worth",
  "Whether Google Ads, Meta Ads or both make sense for you",
  "A realistic starting budget and what results to expect",
  `The commission rate (${COMMISSION_RANGE}) that would apply to you`,
];

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight">
              Book your free strategy call
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              30 minutes, no obligation. We'll look at whether Google Ads or
              Meta Ads can bring your business profitable customers, and how the
              free setup and pay-on-results model would work for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-secondary text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4">
                    What we'll cover on the call
                  </h2>
                  <ul className="space-y-3 text-blue-100">
                    {callAgenda.map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-blue-200">
                    {OFFER_AD_SPEND_NOTE}
                  </p>
                </div>
                <div
                  className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                  aria-hidden="true"
                ></div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Prefer to get in touch directly?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone
                        className="w-5 h-5 text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Phone
                      </p>
                      <a
                        href={CONTACT.phoneHref}
                        className="text-lg font-semibold text-secondary hover:underline"
                      >
                        {CONTACT.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle
                        className="w-5 h-5 text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        WhatsApp
                      </p>
                      <a
                        href={CONTACT.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-secondary hover:underline"
                      >
                        Message me on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail
                        className="w-5 h-5 text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Email
                      </p>
                      <div className="space-y-1">
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="block text-lg font-semibold text-secondary hover:underline"
                        >
                          {CONTACT.email}
                        </a>
                        <a
                          href={`mailto:${CONTACT.emailAlt}`}
                          className="block text-lg font-semibold text-secondary hover:underline"
                        >
                          {CONTACT.emailAlt}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin
                        className="w-5 h-5 text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Location
                      </p>
                      <p className="text-lg font-semibold text-secondary">
                        {CONTACT.postalCode}, {CONTACT.locality}, United Kingdom
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Working with small businesses across the UK, remotely or
                        in person.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intro video */}
              <div className="bg-white p-1 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div
                  className="relative bg-gray-900 rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "1080/1350" }}
                >
                  <video
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031747991/Y3kw537GjyvvS43ZN9JMcY/mrsobhani.uk_19eb95e1.mp4"
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                    aria-label="Introduction video from Mori Sobhani"
                  />
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 lg:sticky lg:top-28">
              <h2 className="px-4 pt-4 text-2xl font-bold text-secondary">
                Pick a time that suits you
              </h2>
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2OalRHXjKS-mYlrI-3Kr6SA86PVUq5TKOXWrUp7Msf1OckLYWaU6XlmaK8pfDgXQi_gFwKb1cl?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="700"
                loading="lazy"
                title="Book a free strategy call with Mori Sobhani"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
