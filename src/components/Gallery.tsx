export default function Gallery() {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coffee art',
    },
    {
      url: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Café interior',
    },
    {
      url: 'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coffee brewing',
    },
    {
      url: 'https://images.pexels.com/photos/1833316/pexels-photo-1833316.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Pastries',
    },
    {
      url: 'https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coffee cup',
    },
    {
      url: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Iced coffee',
    },
  ];

  return (
    <section id="gallery" className="py-16 px-4 bg-[#f5f5dc]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3e2723] mb-4">
            Gallery
          </h3>
          <p className="text-lg text-[#4e342e]/80">
            Moments captured at Malhar Brew House
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
