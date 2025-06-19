import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary text-white px-8 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo2.png"
            alt="LUMENIA Logo"
            width={60}
            height={80}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Center: Nav */}
      <nav className="space-x-6 font-lora text-base">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Right: CTA Button */}
      <div>
        <Link
          href="/contact"
          className="bg-accent px-4 py-2 rounded-full text-white text-sm hover:opacity-90 transition"
        >
          Book a Session
        </Link>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        integrity="sha512-yH57xOoKzqgVCEGzNlzZ/8VhBv9Al+/S+/OGj1s7+9TzefZPh4cfFcT1vR5SHUMYTuQ9DHcYSm7tKzHqs5dK2Q=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </header>
  );
}
