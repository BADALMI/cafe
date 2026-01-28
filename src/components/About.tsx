import { Coffee, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3e2723] mb-4">
            Welcome to Malhar Brew House
          </h3>
          <p className="text-lg text-[#4e342e]/80 max-w-2xl mx-auto">
            Where every cup tells a story. A premium café experience crafted for students, professionals, and café enthusiasts in Indore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-[#f5f5dc]/50 hover:bg-[#f5f5dc] transition-colors">
            <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="w-8 h-8 text-[#3e2723]" />
            </div>
            <h4 className="text-xl font-bold text-[#3e2723] mb-2">Premium Coffee</h4>
            <p className="text-[#4e342e]/80">
              Carefully sourced beans, expertly roasted, and brewed to perfection for your daily dose of happiness.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-[#f5f5dc]/50 hover:bg-[#f5f5dc] transition-colors">
            <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-[#3e2723]" />
            </div>
            <h4 className="text-xl font-bold text-[#3e2723] mb-2">Cozy Ambience</h4>
            <p className="text-[#4e342e]/80">
              A warm, inviting space designed for work, study, or relaxation with comfortable seating and soothing music.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-[#f5f5dc]/50 hover:bg-[#f5f5dc] transition-colors">
            <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#3e2723]" />
            </div>
            <h4 className="text-xl font-bold text-[#3e2723] mb-2">Community Hub</h4>
            <p className="text-[#4e342e]/80">
              More than a café - a gathering place for Indore's creative minds and coffee lovers to connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
