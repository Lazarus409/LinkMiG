import PageHero from "@/Components/ui/PageHero";

export default function DestinationHero({
  images,
  region,
  siteCount,
}: {
  images: string[];
  region: string;
  siteCount: number;
}) {
  return (
    <PageHero
      images={images}
      eyebrow={`${region} Region · ${siteCount} places to visit`}
      title={
        <>
          Explore <span className="text-yellow-400">{region}</span>
        </>
      }
      description={`Discover the beauty, history, and culture of ${region}, with local guides and trips planned around you.`}
    />
  );
}
