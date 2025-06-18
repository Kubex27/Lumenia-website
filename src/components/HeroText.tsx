import Link from "next/link";

export default function HeroText() {
  const spiritualLine = "Tarot • Sound Healing • Meditation";

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black mb-10 drop-shadow-[0_5px_20px_rgba(236,72,153,0.8)]">
        Welcome to <span className="text-pink-400">LUMENIA</span>
      </h1>

      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-pink-600 mb-10 tracking-wide">
        {spiritualLine}
      </h4>

      <p className="text-base sm:text-lg md:text-xl text-black font-lora mb-10">
        Unlock your inner universe with our mystical guidance.
      </p>

      {/* ✅ Styled Link as a button */}
      <Link
        href="/contact"
        className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full shadow-lg transition-transform duration-300 cursor-pointer hover:scale-105"
      >
        Book Your Session
      </Link>
    </div>
  );
}
