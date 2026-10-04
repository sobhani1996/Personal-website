import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, FileText } from "lucide-react";
import { Link } from "wouter";
import CtaBanner from "@/components/offer/CtaBanner";
import { COMMISSION_RANGE } from "@/content/offer";

export default function About() {
  const skills = [
    "Google Ads (Search, Performance Max, Shopping)",
    "Meta Ads (Facebook & Instagram)",
    "Conversion Tracking & GA4",
    "Meta Pixel & Conversions API",
    "Keyword Research",
    "Audience Targeting & Retargeting",
    "Ad Copywriting",
    "Ad Creative (Canva & CapCut)",
    "Landing Page Optimisation",
    "Google Search Console",
    "Microsoft Ads (Bing)",
    "LinkedIn Ads",
    "Campaign Reporting & Analytics"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="text-4xl md:text-6xl font-extrabold text-secondary tracking-tight">
              About Mori Sobhani
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Paid media specialist helping small businesses get customers from Google Ads and Meta Ads, with free setup and pay-on-results pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild className="rounded-full px-8 h-12 bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link href="/contact/"><CalendarCheck className="mr-2 w-4 h-4" aria-hidden="true" /> Book a free strategy call</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 h-12 border-secondary/20 hover:bg-secondary/5">
                <Link href="/cv/"><FileText className="mr-2 w-4 h-4" aria-hidden="true" /> View my CV</Link>
              </Button>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-20">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 soft-shadow border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
              
              <h2 className="text-2xl font-bold text-secondary mb-6 relative z-10">What I do</h2>
              <div className="space-y-4 text-lg text-muted-foreground relative z-10 leading-relaxed">
                <p>
                  I'm a <strong>paid media specialist</strong> based in Portsmouth. I plan, build and manage <strong>Google Ads</strong> and <strong>Meta Ads</strong> (Facebook and Instagram) campaigns for small businesses, with one goal: turning ad budget into profitable customers.
                </p>
                <p>
                  Since February 2026 I've been Paid Media Specialist at <strong>Mud Pies</strong>, a UK online shop, where I've doubled sales from paid channels across Google Ads, Meta Ads and Microsoft Ads (Bing). Before that I ran Google Ads, Meta Ads and LinkedIn Ads campaigns for an online fashion shop and a B2B tech start-up, and I hold an MSc in Digital Marketing. My background in SEO, analytics and content means I also look at the things around your ads, like landing pages and tracking, that decide whether a click becomes a sale.
                </p>
                <p>
                  I work differently from most agencies: <strong>I set up your campaigns for free</strong>, and after launch my only fee is <strong>{COMMISSION_RANGE} of the conversion value</strong> the ads bring you. If your ads don't convert, I don't earn, so we always want the same thing.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Grid */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Paid media skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium bg-white text-secondary border border-gray-200 hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm cursor-default" style={{display: 'block'}}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Certified Digital Marketing Professional",
                  issuer: "Digital Marketing Institute",
                  date: "Jun 2025"
                },
                {
                  title: "Generative AI for Digital Marketers",
                  issuer: "LinkedIn",
                  date: "Jul 2025"
                },
                {
                  title: "Selling with Stories",
                  issuer: "LinkedIn",
                  date: "Jul 2025"
                },
                {
                  title: "B2B Marketing on LinkedIn",
                  issuer: "LinkedIn",
                  date: "Mar 2025"
                },
                {
                  title: "B2B Foundations: Social Media Marketing",
                  issuer: "LinkedIn",
                  date: "Feb 2025"
                },
                {
                  title: "LinkedIn Creator Posting Strategy",
                  issuer: "LinkedIn",
                  date: "Jan 2025"
                }
              ].map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-secondary text-lg mb-1">{cert.title}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs">{cert.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-secondary mb-8">Education</h2>
            <div className="grid gap-6">
              <Card className="border-none soft-shadow overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-secondary">MSc Digital Marketing</h3>
                      <p className="text-primary font-medium">University of Northampton</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-gray-50 px-3 py-1 rounded-full mt-2 md:mt-0">2024 - 2025</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Award-Winning Business Plan: 3rd place for developing a £1,500 marketing strategy.</li>
                    <li>B2B Expansion Project: Developed comprehensive digital expansion plan for a UK rug company.</li>
                    <li>Social Media Audit: Conducted detailed audit for national retailer TK Maxx.</li>
                  </ul>
                </CardContent>
              </Card>


            </div>
          </section>
        </div>
        <CtaBanner title="Let's see if your business is a good fit" />
      </main>
      <Footer />
    </div>
  );
}
