import type { Metadata } from "next";
import DestinationsExplorer from "@/Components/layout/DestinationsSection/DestinationsExplorer";

export const metadata: Metadata = {
  title: "Destinations | Link MiG Travel & Tour",
  description: "Explore tourist sites across Ghana's regions and book a guided visit.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

export default async function DestinationsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  return (
    <DestinationsExplorer
      key={`${first(params.region)}|${first(params.q)}`}
      initialRegion={first(params.region)}
      initialQuery={first(params.q)}
      initialSite={first(params.site)}
      checkIn={first(params.checkIn)}
      checkOut={first(params.checkOut)}
    />
  );
}
