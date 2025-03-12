'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Facebook, 
  Link2, 
  Twitch,
  Globe,
  MapPin,
  Clock,
  Mail,
  Phone,
  Download,
  CreditCard,
  Share2
} from 'lucide-react';

const ModernBentoLinks = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  
  // Hardcoded user data
  const user = {
    name: "Coffee House Cafe",
    tagline: "Specialty coffee & pastries in the heart of downtown",
    picture: "/images/profile.jpg",
    links: [
      "https://instagram.com/coffeehousecafe",
      "https://facebook.com/coffeehousecafe",
      "https://twitter.com/coffeehousecafe",
      "https://linkedin.com/company/coffeehousecafe"
    ],
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "hello@coffeehousecafe.com",
      address: "123 Main Street, Downtown, NY 10001",
      googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343005!2d-74.00425882426901!3d40.71256924716787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA0JzQ1LjIiTiA3NMKwMDAnMTUuMyJX!5e0!3m2!1sen!2sus!4v1646584872612!5m2!1sen!2sus",
      businessHours: [
        { day: "Monday", hours: "7:00 AM - 7:00 PM" },
        { day: "Tuesday", hours: "7:00 AM - 7:00 PM" },
        { day: "Wednesday", hours: "7:00 AM - 7:00 PM" },
        { day: "Thursday", hours: "7:00 AM - 7:00 PM" },
        { day: "Friday", hours: "7:00 AM - 8:00 PM" },
        { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
        { day: "Sunday", hours: "8:00 AM - 6:00 PM" }
      ],
      upiId: "coffeehouse@upi",
      upiQrCode: "/images/upi-qr-code.png"
    }
  };
  
  const getIconForURL = (url: string) => {
    const domain = url.toLowerCase();
    if (domain.includes('github')) return Github;
    if (domain.includes('twitter')) return Twitter;
    if (domain.includes('linkedin')) return Linkedin;
    if (domain.includes('instagram')) return Instagram;
    if (domain.includes('youtube')) return Youtube;
    if (domain.includes('facebook')) return Facebook;
    if (domain.includes('twitch')) return Twitch;
    if (domain.includes('dev.to')) return Globe;
    return Link2;
  };

  const getPlatformName = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);
    } catch {
      return 'Link';
    }
  };

  const downloadVCard = () => {
    // Create vCard format
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${user.name}
NOTE:${user.tagline}
TEL:${user.contactInfo.phone}
EMAIL:${user.contactInfo.email}
ADR:;;${user.contactInfo.address};;;
${user.links.map(link => `URL:${link}`).join('\n')}
X-UPI-ID:${user.contactInfo.upiId}
END:VCARD`;
    
    // Create download link
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${user.name.replace(/\s+/g, '_')}_contact.vcf`;
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_1px,transparent_1px),linear-gradient(-45deg,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-10 relative z-20">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl sm:text-8xl font-bold tracking-tight">
            <span className="relative">
              <span className="absolute -inset-2 blur-2xl bg-white/5" />
              <span className="text-white">{user.name}</span>
            </span>
          </h1>
          
          <p className="text-m sm:text-2xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto">
            {user.tagline}
          </p>
          
          <div className="relative h-px w-32 mx-auto overflow-hidden bg-white/20" />
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Social Links - 2x2 grid in first column */}
          <div className="space-y-4">
            <div className="group p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all">
              <h2 className="text-xl font-semibold mb-4">Connect</h2>
              <div className="grid grid-cols-2 gap-3">
                {user.links.slice(0, 4).map((link, index) => {
                  const Icon = getIconForURL(link);
                  return (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center p-3 rounded-xl bg-black border border-white/10 hover:border-white/20 hover:scale-105 transition-all"
                    >
                      <Icon className="w-6 h-6 mb-2 text-white/80" />
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {getPlatformName(link)}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Email Contact */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Email</h2>
                <Mail className="w-5 h-5 text-white/60" />
              </div>
              <a 
                href={`mailto:${user.contactInfo.email}`}
                className="text-gray-300 hover:text-white block transition-colors"
              >
                {user.contactInfo.email}
              </a>
            </div>
            
            {/* Phone Contact */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Call</h2>
                <Phone className="w-5 h-5 text-white/60" />
              </div>
              <a 
                href={`tel:${user.contactInfo.phone}`}
                className="text-gray-300 hover:text-white block transition-colors"
              >
                {user.contactInfo.phone}
              </a>
            </div>
          </div>
          
          {/* Middle Column - Maps and Business Hours */}
          <div className="space-y-4">
            {/* Google Maps */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all h-64 md:h-80 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Location</h2>
                <MapPin className="w-5 h-5 text-white/60" />
              </div>
              <div className="flex-1 relative overflow-hidden rounded-lg">
                <iframe 
                  src={user.contactInfo.googleMapsUrl}
                  className="absolute inset-0 w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" 
                />
              </div>
              <p className="mt-3 text-sm text-gray-400">
                {user.contactInfo.address}
              </p>
            </div>
            
            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Business Hours</h2>
                <Clock className="w-5 h-5 text-white/60" />
              </div>
              <div className="space-y-2">
                {user.contactInfo.businessHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-gray-400">{item.day}</span>
                    <span className="text-gray-300">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - UPI and Download */}
          <div className="space-y-4">
            {/* UPI Payment */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Pay</h2>
                <CreditCard className="w-5 h-5 text-white/60" />
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg mb-4">
                  {/* Use a placeholder image since we don't have the actual QR code */}
                  <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                    <span className="text-black text-xs text-center">UPI QR Code</span>
                  </div>
                </div>
                <p className="text-center text-gray-300">
                  <span className="text-gray-400 block mb-1">UPI ID:</span>
                  {user.contactInfo.upiId}
                </p>
              </div>
            </div>
            
            {/* Download Contact & Share */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/20 transition-all">
              <h2 className="text-xl font-semibold mb-4">Save Contact</h2>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={downloadVCard}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-black border border-white/10 hover:border-white/20 hover:scale-105 transition-all"
                >
                  <Download className="w-6 h-6 mb-2 text-white/80" />
                  <span className="text-sm text-gray-400">Download</span>
                </button>
                
                <div className="relative">
                  <button 
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-black border border-white/10 hover:border-white/20 hover:scale-105 transition-all w-full h-full"
                  >
                    <Share2 className="w-6 h-6 mb-2 text-white/80" />
                    <span className="text-sm text-gray-400">Share</span>
                  </button>
                  
                  {showShareOptions && (
                    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-zinc-900 border border-white/10 shadow-lg z-10">
                      <div className="p-3 space-y-2">
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            setShowShareOptions(false);
                          }}
                          className="w-full text-left text-sm py-2 px-3 hover:bg-zinc-800 rounded transition-colors text-gray-300"
                        >
                          Copy link
                        </button>
                        <button 
                          onClick={() => {
                            window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank');
                            setShowShareOptions(false);
                          }}
                          className="w-full text-left text-sm py-2 px-3 hover:bg-zinc-800 rounded transition-colors text-gray-300"
                        >
                          WhatsApp
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <p className="text-sm font-medium text-gray-500">
          Get your own{' '}
          <Link href="/products" className="font-bold text-white">
            TAGO
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ModernBentoLinks;