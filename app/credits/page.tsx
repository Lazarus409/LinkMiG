import type { Metadata } from "next";
import { regionsData, type Site } from "@/Components/layout/DestinationsSection/regionsData";

export const metadata: Metadata = {
  title: "Photo credits | Link MiG Travel & Tour",
  description: "Attribution for openly licensed photos used on this website.",
};

export default function CreditsPage() {
  const credited = Object.values(regionsData).flatMap((region) =>
    (region.sites as Site[])
      .filter((site) => site.credit)
      .map((site) => ({ site, region: region.name })),
  );

  return (
    <section className="container-page pb-24 pt-36 md:pt-40">
      <p className="eyebrow mb-4">Credits</p>
      <h1 className="heading-lg">Photo credits</h1>
      <p className="mt-4 max-w-2xl text-white/60">
        Some destination photos are used under open licenses from Wikimedia
        Commons. We’re grateful to the photographers below. Follow each link
        for the original image and full license terms.
      </p>

      <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {credited.map(({ site, region }) => (
          <li key={site.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span>
              <span className="font-medium">{site.name.trim()}</span>
              <span className="text-white/45"> · {region}</span>
            </span>
            <span className="text-sm text-white/60">
              <a
                href={site.credit!.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-400"
              >
                {site.credit!.author}
              </a>
              , {site.credit!.license}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
