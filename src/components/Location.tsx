import { MapPin, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3e2723] mb-4">
            Visit Us
          </h3>
          <p className="text-lg text-[#4e342e]/80">
            Find us in the heart of Vijay Nagar, Indore
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#3e2723]" />
              </div>
              <div>
                <h4 className="font-bold text-[#3e2723] mb-2">Address</h4>
                <p className="text-[#4e342e]/80">
                  123, Vijay Nagar Main Road,<br />
                  Near Treasure Island Mall,<br />
                  Indore, Madhya Pradesh 452010
                </p>
              </div>
            </div>

            <div className="bg-[#f5f5dc] rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-[#3e2723] text-lg">Opening Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#4e342e]/80">Monday - Friday</span>
                  <span className="font-semibold text-[#3e2723]">9:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4e342e]/80">Saturday - Sunday</span>
                  <span className="font-semibold text-[#3e2723]">9:00 AM - 12:00 AM</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.open('https://maps.google.com/?q=Vijay+Nagar+Indore', '_blank')}
              className="w-full bg-[#3e2723] text-[#f5f5dc] px-6 py-3 rounded-full font-semibold hover:bg-[#4e342e] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </button>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14720.882739858469!2d75.87174!3d22.753019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd43a5fb8a8b%3A0x3c8db6e9c0b6e7d0!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Malhar Brew House Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
