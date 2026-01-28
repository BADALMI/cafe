export default function MenuPreview() {
  const menuItems = [
    {
      name: 'Signature Cappuccino',
      price: '₹180',
      description: 'Rich espresso with velvety steamed milk',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Cold Brew',
      price: '₹220',
      description: 'Smooth, refreshing cold-steeped coffee',
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Hazelnut Latte',
      price: '₹200',
      description: 'Espresso with hazelnut syrup and steamed milk',
      image: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Chocolate Croissant',
      price: '₹120',
      description: 'Buttery pastry with rich chocolate filling',
      image: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="menu" className="py-16 px-4 bg-[#f5f5dc]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3e2723] mb-4">
            Our Menu Highlights
          </h3>
          <p className="text-lg text-[#4e342e]/80">
            Crafted with love, served with care
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-[#3e2723]">{item.name}</h4>
                  <span className="text-[#d4af37] font-bold">{item.price}</span>
                </div>
                <p className="text-sm text-[#4e342e]/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#3e2723] text-[#f5f5dc] px-8 py-3 rounded-full font-semibold hover:bg-[#4e342e] transition-all shadow-lg">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
