export type Review = {
  name: string;
  // e.g. "Study Abroad · Canada" or "Cape Coast tour"
  trip: string;
  rating: number; // 1–5
  message: string;
};

// Real customer reviews shown on the home page.
// Reviews submitted through the website arrive on WhatsApp. Copy the ones the
// customer has agreed to publish into this list, for example:
//
//   {
//     name: "Ama B.",
//     trip: "Kakum & Cape Coast tour",
//     rating: 5,
//     message: "Everything was organised perfectly…",
//   },
export const reviews: Review[] = [];
