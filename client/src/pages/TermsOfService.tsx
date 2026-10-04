import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] selection:bg-primary/30">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 lg:p-16 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-10">Last updated: 4 October 2026</p>
            
            <div className="prose prose-lg max-w-none text-[#333333] leading-[1.8] 
              prose-headings:text-secondary prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-4 
              prose-h2:text-2xl prose-h3:text-xl
              prose-p:my-4 prose-p:text-[1.125rem]
              prose-a:text-primary hover:prose-a:text-primary/80
              prose-li:my-2 prose-ul:my-4">
              
              <p>Please read these terms of service ("terms", "terms of service") carefully before using this website operated by Mori Sobhani ("us", 'we", "our").</p>

              <h2>1. Conditions of Use</h2>
              <p>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. Mori Sobhani only grants use and access of this website, its products, and its services to those who have accepted its terms.</p>

              <h2>2. Privacy Policy</h2>
              <p>Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.</p>

              <h2>3. Intellectual Property</h2>
              <p>You agree that all materials, products, and services provided on this website are the property of Mori Sobhani, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the Mori Sobhani's intellectual property in any way, including electronic, digital, or new trademark registrations.</p>
              <p>You grant Mori Sobhani a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.</p>

              <h2>4. User Accounts</h2>
              <p>As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.</p>
              <p>If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.</p>
              <p>We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.</p>

              <h2>5. Applicable Law</h2>
              <p>By visiting this website, you agree that the laws of the United Kingdom, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between Mori Sobhani and you, or its business partners and associates.</p>

              <h2>6. Disputes</h2>
              <p>Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court in the United Kingdom and you consent to exclusive jurisdiction and venue of such courts.</p>

              <h2>7. Indemnification</h2>
              <p>You agree to indemnify Mori Sobhani and its affiliates and hold Mori Sobhani harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel.</p>

              <h2>8. Limitation on Liability</h2>
              <p>Mori Sobhani is not liable for any damages that may occur to you as a result of your misuse of our website.</p>
              <p>Mori Sobhani reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between Mori Sobhani and the user, and this supersedes and replaces all prior agreements regarding the use of this website.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
