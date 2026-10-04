import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80vh] flex-col items-center justify-center pb-20 pt-36 text-center">
      <span className="icon-badge h-16 w-16 rounded-full">
        <Compass size={28} />
      </span>
      <p className="eyebrow mt-8">Error 404</p>
      <h1 className="heading-xl mt-4">This path is off the map</h1>
      <p className="mt-4 max-w-md text-white/60">
        The page you’re looking for doesn’t exist or has moved. Let’s get you
        back on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/destinations" className="btn-secondary">
          Explore destinations
        </Link>
      </div>
    </section>
  );
}
