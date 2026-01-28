import { Clock, MapPin, Phone } from 'lucide-react';

export default function QuickInfo() {
  return (
    <section className="bg-[#f5f5dc] py-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-[#3e2723]" />
          </div>
          <div>
            <p className="text-sm text-[#3e2723]/70 font-medium">Open Daily</p>
            <p className="text-[#3e2723] font-semibold">9:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-[#3e2723]" />
          </div>
          <div>
            <p className="text-sm text-[#3e2723]/70 font-medium">Location</p>
            <p className="text-[#3e2723] font-semibold">Vijay Nagar, Indore</p>
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center md:justify-start">
          <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-[#3e2723]" />
          </div>
          <div>
            <p className="text-sm text-[#3e2723]/70 font-medium">Call Us</p>
            <p className="text-[#3e2723] font-semibold">+91 98765 43210</p>
          </div>
        </div>
      </div>
    </section>
  );
}
