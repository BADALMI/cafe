import { Coffee, Instagram, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#3e2723] text-[#f5f5dc] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-[#3e2723]" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Malhar Brew House</h4>
                <p className="text-xs text-[#d4af37]">Indore</p>
              </div>
            </div>
            <p className="text-[#f5f5dc]/80 text-sm">
              Your daily dose of premium coffee and warm conversations.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#f5f5dc]/80 hover:text-[#d4af37] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#f5f5dc]/80 hover:text-[#d4af37] transition-colors">
                  Menu
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#f5f5dc]/80 hover:text-[#d4af37] transition-colors">
                  Gallery
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })} className="text-[#f5f5dc]/80 hover:text-[#d4af37] transition-colors">
                  Location
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4e342e] rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#4e342e] rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:hello@malharbrewhouse.com" className="w-10 h-10 bg-[#4e342e] rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-[#f5f5dc]/80">
              <a href="mailto:hello@malharbrewhouse.com" className="hover:text-[#d4af37]">
                hello@malharbrewhouse.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-[#f5f5dc]/20 pt-6 text-center text-sm text-[#f5f5dc]/60">
          <p>&copy; {new Date().getFullYear()} Malhar Brew House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
