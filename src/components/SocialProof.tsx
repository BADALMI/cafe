import { Star } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Student, IIM Indore',
      text: 'Perfect spot for study sessions! Great coffee, fast WiFi, and peaceful ambience. My favorite café in the city.',
      rating: 5,
    },
    {
      name: 'Rahul Verma',
      role: 'Software Engineer',
      text: 'The cold brew here is exceptional. I come here every weekend to work remotely. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Anjali Patel',
      role: 'Entrepreneur',
      text: 'Malhar Brew House has the best café vibes in Indore. Perfect for meetings and casual hangouts. Love it!',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#3e2723] mb-4">
            What Our Guests Say
          </h3>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#d4af37] text-[#d4af37]" />
            ))}
          </div>
          <p className="text-lg text-[#4e342e]/80">4.8/5 based on 200+ reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#f5f5dc]/50 rounded-2xl p-6 hover:bg-[#f5f5dc] transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                ))}
              </div>
              <p className="text-[#3e2723] mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-[#3e2723]">{testimonial.name}</p>
                <p className="text-sm text-[#4e342e]/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
