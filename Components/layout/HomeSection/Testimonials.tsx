import { Quote, Star } from "lucide-react";
import SectionHeading from "@/Components/ui/SectionHeading";
import Reveal from "@/Components/ui/Reveal";
import { reviews } from "@/lib/reviews";
import ReviewForm from "./ReviewForm";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const hasReviews = reviews.length > 0;

  return (
    <section id="reviews" className="section scroll-mt-20 bg-ink-900">
      <div className="container-page">
        {hasReviews && (
          <>
            <SectionHeading
              eyebrow="Testimonials"
              title="What our travelers say"
              description="Real experiences from our valued clients."
            />
            <div className="mb-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review, i) => (
                <Reveal
                  key={`${review.name}-${i}`}
                  delay={(i % 3) * 0.1}
                  className="card relative flex flex-col p-7"
                >
                  <Quote className="absolute right-6 top-6 text-yellow-400/20" size={40} />
                  <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star
                        key={star}
                        size={16}
                        className={
                          star < Math.round(review.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-white/20"
                        }
                      />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-base leading-relaxed text-white/85">
                    “{review.message}”
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 text-sm font-semibold text-black">
                      {initials(review.name)}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{review.name}</span>
                      <span className="block text-xs text-white/50">{review.trip}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}

        <Reveal className="card mx-auto grid max-w-5xl gap-10 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow mb-4">{hasReviews ? "Your turn" : "Reviews"}</p>
            <h2 className="font-display text-3xl font-semibold leading-tight">
              Traveled with us? Share your experience
            </h2>
            <p className="mt-4 text-white/60">
              Your story helps other travelers plan with confidence. Tell us
              how it went, and with your permission we’ll feature it here.
            </p>
          </div>
          <ReviewForm />
        </Reveal>
      </div>
    </section>
  );
}
