export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#3e2723]/50 to-[#3e2723]/70 z-10" />
      <img
        src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Cozy café interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 text-center px-4 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold text-[#f5f5dc] mb-4">
          Your Perfect Brew Awaits
        </h2>
        <p className="text-lg md:text-xl text-[#f5f5dc]/90 mb-8">
          Premium coffee, cozy ambience, and warm conversations in the heart of Indore
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#d4af37] text-[#3e2723] px-8 py-3 rounded-full font-semibold hover:bg-[#f5f5dc] transition-all shadow-lg"
          >
            View Menu
          </button>
          <button
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#f5f5dc] text-[#3e2723] px-8 py-3 rounded-full font-semibold hover:bg-white transition-all shadow-lg"
          >
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
}
