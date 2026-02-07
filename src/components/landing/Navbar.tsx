'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-sage-500 rounded-xl flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-sage-800">
              Nutri<span className="text-sage-500">AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-stone-600 hover:text-sage-600 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm text-stone-600 hover:text-sage-600 transition-colors">
              Testimonials
            </a>
            <a href="#credentials" className="text-sm text-stone-600 hover:text-sage-600 transition-colors">
              Credentials
            </a>
            <Link
              href="/consult"
              className="bg-sage-500 hover:bg-sage-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-sage-500/25"
            >
              Start Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#how-it-works" className="block text-sm text-stone-600 py-2" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>
            <a href="#testimonials" className="block text-sm text-stone-600 py-2" onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <Link
              href="/consult"
              className="block w-full text-center bg-sage-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Start Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
