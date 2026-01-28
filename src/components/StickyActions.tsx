import { Phone, MessageCircle, Navigation, Menu as MenuIcon } from 'lucide-react';

export default function StickyActions() {
  const handleCall = () => {
    window.location.href = 'tel:+919876543210';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Vijay+Nagar+Indore', '_blank');
  };

  const handleMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#3e2723] shadow-2xl z-40 lg:hidden border-t-2 border-[#d4af37]">
      <div className="grid grid-cols-4 gap-1 p-2">
        <button
          onClick={handleCall}
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg hover:bg-[#4e342e] transition-colors active:scale-95"
        >
          <Phone className="w-5 h-5 text-[#d4af37]" />
          <span className="text-xs text-[#f5f5dc] font-medium">Call</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg hover:bg-[#4e342e] transition-colors active:scale-95"
        >
          <MessageCircle className="w-5 h-5 text-[#d4af37]" />
          <span className="text-xs text-[#f5f5dc] font-medium">WhatsApp</span>
        </button>

        <button
          onClick={handleDirections}
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg hover:bg-[#4e342e] transition-colors active:scale-95"
        >
          <Navigation className="w-5 h-5 text-[#d4af37]" />
          <span className="text-xs text-[#f5f5dc] font-medium">Directions</span>
        </button>

        <button
          onClick={handleMenu}
          className="flex flex-col items-center gap-1 py-3 px-2 rounded-lg hover:bg-[#4e342e] transition-colors active:scale-95"
        >
          <MenuIcon className="w-5 h-5 text-[#d4af37]" />
          <span className="text-xs text-[#f5f5dc] font-medium">Menu</span>
        </button>
      </div>
    </div>
  );
}
