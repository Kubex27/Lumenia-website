// pages/about.tsx

import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Off-grey full background */}
      <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-20">
        {/* Card with image background and content overlay */}
        <div
          className="w-full max-w-5xl rounded-3xl shadow-2xl border border-pink-300 overflow-hidden relative"
          style={{
            backgroundImage: "url('/image/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Translucent overlay to make text readable */}
          <div className="bg-white/80 p-10 md:p-16 text-gray-800 font-lora space-y-10">
            <h1 className="text-5xl font-cinzel text-pink-600 text-center animate-glow">
              About LUMENIA
            </h1>
            <p className="text-lg text-justify leading-relaxed">
              LUMENIA is more than just a name—it's an awakening, a vibration,
              and a portal to your truest self. Rooted in ancient mysticism and
              guided by intuitive wisdom, LUMENIA offers a sacred space for
              those seeking to connect deeper with their soul’s calling.
              <br />
              <br />
              In a world that often pulls us away from our center, we provide a
              gentle yet powerful invitation to return inward—to the stillness,
              the stars, and the sacred sound of your soul’s truth.
            </p>

            <hr className="border-pink-300" />

            <p className="text-lg text-justify leading-relaxed">
              🌌 <strong>Our Services</strong>: Whether you're exploring Tarot,
              diving into your Astrological blueprint, or resting in the healing
              frequencies of Sound, each experience is curated with deep
              presence and cosmic care.
            </p>

            <ul className="list-disc list-inside text-lg space-y-2">
              <li>
                <strong>Tarot Readings:</strong> Unlock clarity through
                archetypal insights
              </li>
              <li>
                <strong>Astrology Consultations:</strong> Map your soul’s
                purpose
              </li>
              <li>
                <strong>Sound Healing:</strong> Restore vibrational harmony
              </li>
            </ul>

            <hr className="border-pink-300" />

            <p className="text-lg text-justify leading-relaxed">
              🌿 <strong>Our Mission</strong>: To hold space for seekers,
              sensitives, and soul-aligned beings as they remember their light.
              Our work blends intuition, ritual, and ancient wisdom into modern
              healing journeys.
            </p>

            <p className="text-center italic text-pink-500 text-lg mt-10">
              “You are not here to shrink your light. You are here to illuminate
              the path for others—starting with your own.” –{" "}
              <strong>LUMENIA</strong>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
