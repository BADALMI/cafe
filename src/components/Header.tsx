import { Coffee, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#3e2723]/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center">
            <Coffee className="w-6 h-6 text-[#3e2723]" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#f5f5dc]">Malhar Brew House</h1>
            <p className="text-xs text-[#d4af37]">Indore</p>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-[#f5f5dc] hover:text-[#d4af37] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <nav className="hidden lg:flex gap-6">
          <button onClick={() => scrollToSection('about')} className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors">About</button>
          <button onClick={() => scrollToSection('menu')} className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors">Menu</button>
          <button onClick={() => scrollToSection('gallery')} className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors">Gallery</button>
          <button onClick={() => scrollToSection('location')} className="text-[#f5f5dc] hover:text-[#d4af37] transition-colors">Location</button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#4e342e] border-t border-[#d4af37]/20">
          <nav className="flex flex-col py-4 px-4 gap-3">
            <button onClick={() => scrollToSection('about')} className="text-left text-[#f5f5dc] hover:text-[#d4af37] transition-colors py-2">About</button>
            <button onClick={() => scrollToSection('menu')} className="text-left text-[#f5f5dc] hover:text-[#d4af37] transition-colors py-2">Menu</button>
            <button onClick={() => scrollToSection('gallery')} className="text-left text-[#f5f5dc] hover:text-[#d4af37] transition-colors py-2">Gallery</button>
            <button onClick={() => scrollToSection('location')} className="text-left text-[#f5f5dc] hover:text-[#d4af37] transition-colors py-2">Location</button>
          </nav>
        </div>
      )}
    </header>
  );
}
