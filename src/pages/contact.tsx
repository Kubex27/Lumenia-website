// pages/contact.tsx

'use client';

import Layout from "@/components/Layout";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xxxvzkjp", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    setLoading(false);

    if (response.ok) {
      form.reset();
      toast.success("✨ Your message has been sent to the stars!");
    } else {
      toast.error("💫 Oops! Something went wrong. Try again later.");
    }
  };

  return (
    <Layout>
      <Toaster position="top-center" reverseOrder={false} />
      <section
        className="relative min-h-screen bg-black bg-cover bg-center bg-no-repeat px-4 py-20 flex items-center justify-center"
        style={{ backgroundImage: "url('/bg-contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form Card */}
          <div className={`bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30 animate-fade-in ${loading ? 'animate-pulse' : ''}`}>
            <h2 className="text-3xl font-cinzel text-gray-900 mb-6 text-center">
              Contact Us
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-gray-800"
            >
              <input type="hidden" name="site" value="LUMENIA" />
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <div className="flex gap-3">
                <select
                  name="countryCode"
                  className="w-1/3 px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none"
                >
                  <option value="+1">+1 (US)</option>
                  <option value="+91">+91 (IN)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+61">+61 (AUS)</option>
                  <option value="+971">+971 (UAE)</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-2/3 px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white py-3 rounded-lg transition duration-300 ${loading ? 'bg-pink-400 cursor-wait' : 'bg-pink-600 hover:bg-pink-700'}`}
              >
                {loading ? "Sending to the cosmos..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/30 animate-fade-in text-gray-900 flex items-center justify-center">
            <div>
              <h3 className="text-3xl font-cinzel mb-6 text-center">
                Connect with LUMENIA
              </h3>
              <div className="space-y-4 font-lora text-lg leading-relaxed">
                <p>📍 <strong>Address:</strong> 132 My Street, Kingston, NY</p>
                <p>📧 <strong>Email:</strong> sofia.kein@lumenia.com</p>
                <p>📞 <strong>Phone:</strong> 1-212-2755867</p>
                <p>🕒 <strong>Hours:</strong> Mon–Sat, 10 AM – 6 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
