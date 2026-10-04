export type Site = {
  name: string;
  // Path in /public, or "" to show a "Photo coming soon" placeholder
  image: string;
  description: string;
  // Attribution for openly licensed photos (e.g. from Wikimedia Commons)
  credit?: { author: string; license: string; url: string };
};

export type Region = {
  name: string;
  // Hero slideshow: only photos at least ~600px wide, since smaller ones look
  // pixelated full-width (they still appear on their site cards). May be empty.
  images: string[];
  sites: Site[];
};

export const regionsData = {
  "greater-accra": {
    name: "Greater Accra",
    images: [
      "/nkrumah.png",
      "/labadi.png",
      "/jamestown.png",
      "/museum.png",
      "/ahanta.png",
    ],
    sites: [
      {
        name: "Kwame Nkrumah Mausoleum",
        image: "/nkrumah.png",
        description: "Historic monument honoring Ghana’s first president.",
      },
      {
        name: "Labadi Beach",
        image: "/labadi.png",
        description: "Popular beach with music, nightlife, and horse rides.",
      },
      {
        name: "Jamestown Lighthouse",
        image: "/jamestown.png",
        description: "Colonial-era lighthouse offering city views.",
      },
      {
        name: "Osu Castle",
        image: "/osuu.png",
        description: "Historic castle on the Gulf of Guinea.",
      },
      {
        name: "National Museum of Ghana",
        image: "/museum.png",
        description: "Displays Ghanaian art, culture, and history.",
      },
      {
        name: "Shai Hills Resource Reserve",
        image: "/ahanta.png",
        description:
          "Wildlife reserve with baboons, antelopes, caves, and a natural and cultural heritage museum.",
      },
      {
        name: "Black Star Square",
        image: "/sites/black-star-square.jpg",
        credit: {
          author: "Matti Blume",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Black_Star,_Korle-Klottey_(IMG_20230201_121759).jpg",
        },
        description:
          "Accra’s grand independence parade ground, crowned by the Black Star Gate.",
      },
      {
        name: "W.E.B. Du Bois Centre",
        image: "",
        description:
          "Former home and resting place of the Pan-African scholar W.E.B. Du Bois.",
      },
      {
        name: "Makola Market",
        image: "/sites/makola-market.jpg",
        credit: {
          author: "Benggriff",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Street_Outside_Makola_Market,_Accra,_Ghana.JPG",
        },
        description:
          "Accra’s busiest market for fabrics, beads, food, and everyday goods.",
      },
      {
        name: "Ada Foah",
        image: "/sites/ada-foah.jpg",
        credit: {
          author: "Philip Nalangan",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Ada_Foah_Beach_1.jpg",
        },
        description:
          "Where the Volta River meets the sea, known for its estuary, beaches, and boat trips.",
      },
    ],
  },

  ashanti: {
    name: "Ashanti",
    images: ["/manhyia.png", "/bosomtwe.png"],
    sites: [
      {
        name: "Manhyia Palace",
        image: "/manhyia.png",
        description: "Seat of the Asantehene.",
      },
      {
        name: "Kejetia Market",
        image: "/kejetia.png",
        description: "Largest open-air market in West Africa.",
      },
      {
        name: "Lake Bosomtwe",
        image: "/bosomtwe.png",
        description: "Natural lake surrounded by scenic villages.",
      },
      {
        name: "Kumasi Central Mosque",
        image: "/mosque.png",
        description: "Iconic Islamic architectural site.",
      },
      {
        name: "Bonwire Kente Village",
        image: "/sites/bonwire.jpg",
        credit: {
          author: "Sadads",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Bonwire_man_weaving.jpg",
        },
        description:
          "Home of Kente weaving, where you can watch weavers at work on their looms.",
      },
      {
        name: "Prempeh II Jubilee Museum",
        image: "/sites/prempeh-museum.jpg",
        credit: {
          author: "Jude Hammond",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Historic_Statues_at_the_Africa_Culture_-_Kumasi_Centre_for_National_Culture.jpg",
        },
        description:
          "Asante royal regalia and history at the Kumasi Cultural Centre.",
      },
      {
        name: "Besease Traditional Shrine",
        image: "/sites/besease-shrine.jpg",
        credit: {
          author: "Noahalorwu",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Besease_Shrine_(7).jpg",
        },
        description:
          "UNESCO-listed Asante traditional building near Ejisu, decorated with symbolic reliefs.",
      },
      {
        name: "Okomfo Anokye Sword Site",
        image: "/sites/okomfo-anokye-sword.jpg",
        credit: {
          author: "Caupolicaningles",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Okomfo_Anokye_sword_site,_legendary_site_of_the_foundation_of_the_Asante_empire_in_Kumasi,_Ghana.jpg",
        },
        description:
          "The legendary sword said to have been planted in the ground by the priest Okomfo Anokye.",
      },
    ],
  },

  central: {
    name: "Central",
    images: ["/ccCastle.png", "/elminaCastle.png", "/kakumCanopy.png"],
    sites: [
      {
        name: "Cape Coast Castle",
        image: "/ccCastle.png",
        description: "UNESCO World Heritage slave castle.",
      },
      {
        name: "Elmina Castle",
        image: "/elminaCastle.png",
        description: "Historic coastal fortress from colonial times.",
      },
      {
        name: "Kakum National Park",
        image: "/kakumNationalPark.png",
        description: "Rainforest canopy walk with rich biodiversity.",
      },
      {
        name: "Fort William",
        image: "/sites/fort-william-anomabo.jpg",
        credit: {
          author: "Fquasie",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Fort_William,_Anomabo_16.jpg",
        },
        description: "Historical fort offering coastal views.",
      },
      {
        name: "Assin Manso Slave River",
        image: "/sites/assin-manso.jpg",
        credit: {
          author: "Spendilove Incoom",
          license: "CC BY 4.0",
          url: "https://commons.wikimedia.org/wiki/File:An_Adventurous_Trip.jpg",
        },
        description:
          "Ancestral river park where enslaved Africans took their last bath before the march to the coast.",
      },
      {
        name: "Hans Cottage Botel",
        image: "/sites/hans-cottage.jpg",
        credit: {
          author: "Adam Jones from Kelowna, BC, Canada",
          license: "CC BY-SA 2.0",
          url: "https://commons.wikimedia.org/wiki/File:Scenery_at_Hans_Cottage_Botel_-_Near_Cape_Coast_-_Ghana_(4737835257).jpg",
        },
        description:
          "Lakeside restaurant and hotel near Cape Coast, famous for its resident crocodiles.",
      },
      {
        name: "Fort Amsterdam",
        image: "/sites/fort-amsterdam.jpg",
        credit: {
          author: "HijabGirl1",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Fort_Amsterdam_(Abandze).jpg",
        },
        description: "Hilltop coastal fort at Abandze dating back to the 1600s.",
      },
    ],
  },

  eastern: {
    name: "Eastern",
    images: ["/aburi.png"],
    sites: [
      {
        name: "Aburi Botanical Gardens",
        image: "/aburi.png",
        description: "Beautiful botanical retreat.",
      },
      {
        name: "Boti Falls",
        image: "/boti.png",
        description: "Twin waterfalls popular for hiking and picnics.",
      },
      {
        name: "Tetteh Quarshie Cocoa Farm",
        image: "/cocoa.png",
        description: "Historic farm where cocoa was first grown in Ghana.",
      },
      {
        name: "Akosombo Dam",
        image: "/sites/akosombo-dam.jpg",
        credit: {
          author: "ZSM",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Spillway_of_Akosombo_dam.jpg",
        },
        description:
          "Hydroelectric dam that created Lake Volta, one of the world’s largest man-made lakes.",
      },
      {
        name: "Umbrella Rock",
        image: "/sites/umbrella-rock.jpg",
        credit: {
          author: "Jwale2",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Umbrella_Rock_In_Ghana_04.jpg",
        },
        description:
          "Natural rock formation shaped like an umbrella, a short hike from Boti Falls.",
      },
      {
        name: "Cedi Bead Factory",
        image: "/sites/cedi-beads.jpg",
        credit: {
          author: "Abbeyfamily",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Polishing_of_Ghanaian_glass_beads.JPG",
        },
        description:
          "Watch traditional Krobo glass beads being made from recycled glass.",
      },
      {
        name: "Aburi Craft Village",
        image: "/sites/aburi-craft.jpg",
        credit: {
          author: "Koby DDT",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Aburi_craft_village.jpg",
        },
        description: "Roadside workshops selling hand-carved drums, masks, and sculptures.",
      },
    ],
  },

  volta: {
    name: "Volta",
    images: ["/wliWaterfall.png", "/monkey.png", "/amedzofe.png"],
    sites: [
      {
        name: "Wli Waterfalls",
        image: "/wliWaterfall.png",
        description: "Highest waterfall in West Africa.",
      },
      {
        name: "Mount Afadjato",
        image: "/afadja.png",
        description: "Highest peak in Ghana, with trekking trails.",
      },
      {
        name: "Tafi Atome Monkey Sanctuary",
        image: "/monkey.png",
        description: "Home to sacred monkeys and lush forest.",
      },
      {
        name: "Amedzofe Viewpoint",
        image: "/amedzofe.png",
        description:
          "Hilltop village in the Avatime hills with cool weather and sweeping views.",
      },
      {
        name: "Keta Lagoon",
        image: "/keta.png",
        description: "Largest lagoon in Ghana with rich biodiversity.",
      },
      {
        name: "Fort Prinzenstein",
        image: "/sites/fort-prinzenstein.jpg",
        credit: {
          author: "Chapman-Nyaho George",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Fort_Prinzenstein_in_Keta,_Ghana._17.jpg",
        },
        description: "Danish coastal fort at Keta, built in 1784.",
      },
      {
        name: "Tagbo Falls",
        image: "/sites/tagbo-falls.jpg",
        credit: {
          author: "Jimmynoton",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Tagbo_Falls_Ghana.jpg",
        },
        description:
          "Forest waterfall at Liati Wote, reached by a scenic hike near Mount Afadjato.",
      },
    ],
  },

  western: {
    name: "Western",
    images: ["/wassa.png", "/apollonia.png"],
    sites: [
      {
        name: "Nzulezu Stilt Village",
        image: "/nzuluzu.png",
        description: "Village built on stilts over Lake Tadane.",
      },
      {
        name: "Wassa Beach",
        image: "/wassa.png",
        description: "Relaxing beach with surf and palm trees.",
      },
      {
        name: "Fort Apollonia",
        image: "/apollonia.png",
        description: "Historical fort with scenic views.",
      },
      {
        name: "Busua Beach",
        image: "/sites/busua-beach.jpg",
        credit: {
          author: "aripeskoe2",
          license: "CC BY 2.0",
          url: "https://commons.wikimedia.org/wiki/File:Busua_Beach_Western_Region2.jpg",
        },
        description: "Laid-back surf beach known for surf lessons and fresh seafood.",
      },
      {
        name: "Cape Three Points",
        image: "/sites/cape-three-points.jpg",
        credit: {
          author: "Tini Maier",
          license: "CC BY 2.0",
          url: "https://commons.wikimedia.org/wiki/File:DSC01739_(15318781703).jpg",
        },
        description:
          "Ghana’s southernmost tip, with a historic lighthouse and quiet beaches.",
      },
      {
        name: "Ankasa Conservation Area",
        image: "/sites/ankasa.jpg",
        credit: {
          author: "Charles J. Sharp",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Shining-blue_kingfisher_(Alcedo_quadribrachys_quadribrachys)_Ankasa_2.jpg",
        },
        description: "Rainforest reserve with rich wildlife and forest trails.",
      },
      {
        name: "Fort Metal Cross",
        image: "/sites/fort-metal-cross.jpg",
        credit: {
          author: "Nicholas McGee",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Fort_Metal_Cross.jpg",
        },
        description: "Coastal fort overlooking the harbour at Dixcove.",
      },
    ],
  },

  "bono-east": {
    name: "Bono East",
    images: ["/sites/kintampo-falls.jpg", "/sites/boabeng-fiema.jpg", "/sites/fuller-falls.jpg"],
    sites: [
      {
        name: "Kintampo Waterfalls",
        image: "/sites/kintampo-falls.jpg",
        credit: {
          author: "Knowledge and philosophy",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Top_view_of_Kintampo_waterfalls.jpg",
        },
        description: "Cascading falls set in forest, one of Ghana’s best-loved waterfalls.",
      },
      {
        name: "Fuller Falls",
        image: "/sites/fuller-falls.jpg",
        credit: {
          author: "Stephen Acheampong",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:FullerFall.jpg",
        },
        description: "Gentle waterfall and natural pools near Kintampo.",
      },
      {
        name: "Boabeng-Fiema Monkey Sanctuary",
        image: "/sites/boabeng-fiema.jpg",
        credit: {
          author: "AlexisENVN",
          license: "CC BY-SA 3.0",
          url: "https://commons.wikimedia.org/wiki/File:Cercopithecus_mona,_Boabeng_Fiema,_Monkey_Sanctuary,_Ghana.JPG",
        },
        description:
          "Community-protected forest where sacred monkeys live alongside villagers.",
      },
      {
        name: "Tano Sacred Grove",
        image: "/sites/tano-grove.jpg",
        credit: {
          author: "Adjoajo",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Tano_Sacred_Rock_Shrine_in_Tanoboase,_Ghana.jpg",
        },
        description:
          "Sacred forest and rock formations at Tanoboase, near Techiman.",
      },
    ],
  },

  savannah: {
    name: "Savannah",
    images: ["/mole.png", "/larabanga.png", "/mystic.png"],
    sites: [
      {
        name: "Mole National Park",
        image: "/mole.png",
        description: "Wildlife safari park with elephants and antelopes.",
      },
      {
        name: "Larabanga Mosque",
        image: "/larabanga.png",
        description: "One of the oldest mosques in West Africa.",
      },
      {
        name: "Larabanga Mystic Stone",
        image: "/mystic.png",
        description: "Legendary stone with cultural significance.",
      },
      {
        name: "Salaga Slave Market",
        image: "/sites/salaga.jpg",
        credit: {
          author: "Usherreuben",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Slave_Market_-_Salaga(1).JPG",
        },
        description:
          "Former slave market town, with historic wells and a slave cemetery.",
      },
    ],
  },

  "upper-east": {
    name: "Upper East",
    images: ["/sites/tongo-hills.jpg", "/sites/navrongo-cathedral.jpg", "/sites/pikworo.jpg"],
    sites: [
      {
        name: "Paga Crocodile Pond",
        image: "/crocodile.png",
        description:
          "A sacred sanctuary where West African crocodiles live peacefully with locals, believed to be totems, allowing tourists to see and feed them.",
      },
      {
        name: "Pikworo Slave Camp",
        image: "/sites/pikworo.jpg",
        credit: {
          author: "Celestinesucess",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:A_Hut_at_Pikworo_Slave_Camp.jpg",
        },
        description:
          "Former slave camp in Paga, with eating bowls carved into the rock.",
      },
      {
        name: "Tongo Hills & Tengzug Shrines",
        image: "/sites/tongo-hills.jpg",
        credit: {
          author: "IBS-Gh",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Tongo-Hills-First-Community-School.jpg",
        },
        description: "Dramatic boulder hills and sacred shrines of the Talensi people.",
      },
      {
        name: "Sirigu Pottery & Art",
        image: "/sites/sirigu.jpg",
        credit: {
          author: "Sucram Yef",
          license: "CC BY 2.0",
          url: "https://commons.wikimedia.org/wiki/File:Monument_to_Kofi_Annan_inside_of_the_Sirigu_Women%27s_Pottery_Association_(Upper_East_Region,_Ghana_2019).jpg",
        },
        description:
          "Women’s cooperative famous for painted houses and traditional pottery.",
      },
      {
        name: "Navrongo Cathedral",
        image: "/sites/navrongo-cathedral.jpg",
        credit: {
          author: "Mwintirew",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Cathedral_Basilica_of_Our_Lady_of_Seven_Sorrows.jpg",
        },
        description: "Our Lady of Seven Sorrows, a striking cathedral built of mud.",
      },
    ],
  },

  "upper-west": {
    name: "Upper West",
    images: ["/sites/wechiau.jpg", "/sites/wa-naa-palace.jpg", "/sites/gwollu.jpg"],
    sites: [
      {
        name: "Wechiau Hippo Sanctuary",
        image: "/sites/wechiau.jpg",
        credit: {
          author: "Kradolferp",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:The_Wechiau_Hippopotamus_Sanctuary.jpg",
        },
        description: "Community sanctuary for hippos on the Black Volta River.",
      },
      {
        name: "Gwollu Defence Wall",
        image: "/sites/gwollu.jpg",
        credit: {
          author: "Sir Amugi",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Gwollu_Slave_Trade_Defence_Wall_in_Upper_East_Region_of_Ghana_01.jpg",
        },
        description: "Historic walls built to protect the town from slave raiders.",
      },
      {
        name: "Wa Naa’s Palace",
        image: "/sites/wa-naa-palace.jpg",
        credit: {
          author: "DeanClericuzio",
          license: "CC BY-SA 4.0",
          url: "https://commons.wikimedia.org/wiki/File:Palace_Pillas_(2).jpg",
        },
        description: "Traditional mud-built palace of the Wa chief.",
      },
    ],
  },
} satisfies Record<string, Region>;
