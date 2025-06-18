import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <Layout>
      <section className="min-h-screen px-6 py-20 bg-gradient-to-b from-white via-pink-50 to-white">
        <h1 className="text-5xl font-cinzel text-center text-pink-600 mb-4 animate-fade-in">
          Services
        </h1>
        <p className="text-lg font-lora text-center text-gray-700 max-w-2xl mx-auto mb-16 animate-fade-in">
          Discover your path through our spiritual offerings. Each session is
          carefully crafted to help you reconnect, realign, and rise in your
          journey. Choose the one that resonates with your soul.
        </p>

        <div className="grid md:grid-cols-3 gap-10 animate-fade-up">
          {/* Tarot Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-300 mb-4">
              <Image
                src="/services/tarot.gif"
                alt="Tarot"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-cinzel text-pink-600 mb-2">
              Tarot Reading
            </h3>
            <p className="text-gray-600 font-lora mb-4">
              Choose your lucky cards today.
            </p>
            <Link
              href="/contact"
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
            >
              Book Session
            </Link>
          </div>

          {/* Astrology Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-300 mb-4">
              <Image
                src="/services/astrology.gif"
                alt="Astrology"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-cinzel text-pink-600 mb-2">
              Astrology Consultation
            </h3>
            <p className="text-gray-600 font-lora mb-4">
              Unlock your soul’s star map.
            </p>
            <Link
              href="/contact"
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
            >
              Book Session
            </Link>
          </div>

          {/* Sound Healing Card */}
          <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-300">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-300 mb-4">
              <Image
                src="/services/sound.gif"
                alt="Sound Healing"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-cinzel text-pink-600 mb-2">
              Sound Healing
            </h3>
            <p className="text-gray-600 font-lora mb-4">
              Tune into higher vibrations.
            </p>
            <Link
              href="/contact"
              className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
            >
              Book Session
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
