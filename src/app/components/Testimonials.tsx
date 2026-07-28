// src/app/components/Testimonials.tsx
import { Star } from "lucide-react";
import { REVIEWS, Review } from "../data/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={16}
          className={i <= rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#0A1628] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-white text-3xl sm:text-4xl font-bold mb-10 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review: Review) => (
            <article
              key={review.id}
              id={`review-card-${review.id}`}
              className="p-6 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#1B4F8C]/40 transition-all duration-300"
            >
              <Stars rating={review.rating} />
              <p className="text-white/85 text-sm leading-relaxed mb-4">"{review.text}"</p>
              <p className="text-[#1B4F8C] font-semibold text-sm">{review.author}</p>
              {review.business && (
                <p className="text-white/50 text-xs mt-0.5">{review.business}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
