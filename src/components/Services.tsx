// components/ServicesSection.tsx

import Link from "next/link";
import { Sparkles, Star, Moon } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Tarot Reading",
    icon: <Star size={36} className="text-pink-500 mb-4 transition-transform group-hover:scale-110" />,
    description:
      "Gain clarity through intuitive card readings that tap into your subconscious guidance.",
    href: "/services#tarot",
  },
  {
    title: "Sound Healing",
    icon: <Sparkles size={36} className="text-indigo-500 mb-4 transition-transform group-hover:scale-110" />,
    description:
      "Restore harmony using crystal bowls, tuning forks, and ancient sonic rituals.",
    href: "/services#sound-healing",
  },
  {
    title: "Astrology",
    icon: <Moon size={36} className="text-purple-500 mb-4 transition-transform group-hover:scale-110" />,
    description:
      "Explore your cosmic blueprint through birth charts and planetary alignments.",
    href: "/services#astrology",
  },
];

export default function ServicesSection() {
  return (
    <>
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-pink-600 mb-12 animate-fade-up">
            Our Spiritual Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div className="group cursor-pointer bg-gradient-to-b from-pink-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out animate-fade-in">
                  <div className="flex flex-col items-center">
                    {service.icon}
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Intro Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-pink-300 shadow-lg mb-6">
            <Image
              src="/coach.jpg"
              alt="Coach"
              height={400}
              width={400}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Meet Your Spiritual Guide
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-lora">
            Guided by years of practice and sacred wisdom, our coach offers compassionate and insightful spiritual services to help you realign and grow. Step into your light and embrace your divine path.
          </p>
        </div>
      </section>
    </>
  );
}
