// components/ContactSection.tsx

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-pink-50 via-white to-pink-100 text-center"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 mb-6 animate-fade-up">
          Let’s Connect
        </h2>
        <p className="text-lg text-gray-700 mb-10 font-lora animate-fade-in">
          Your journey to spiritual awakening begins with a single step. Reach
          out and let’s discover your light together.
        </p>

        <form className="grid gap-6 animate-fade-in">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transform transition duration-300"
          >
            Begin Your Healing ✨
          </button>
        </form>
      </div>
    </section>
  );
}
