// Central source of truth for locations.
// Update address, hours, lineup, and venueUrl per location.

export const LOCATIONS = [
  {
    slug: "io-arcade-bar",
    name: "IO Arcade Bar",
    // Public logo image in /public/images/location/io-arcade-bar.png
    logoSrc: "/images/locations/io-arcade-bar.png",
    venueUrl: "https://www.ioarcadebar.com/", // change if needed
    address: {
      line1: "924 Williamson St",
      line2: "Madison, WI 53703",
      city: "Madison",
      state: "WI",
      zip: "53703",
      // If you prefer to compute the maps link from line1/line2, leave mapsUrl null.
      mapsUrl: "https://www.google.com/maps?q=924+Williamson+St,+Madison,+WI+53703"
    },
    // IO Arcade Bar
hours: [
  { day: "Mon", open: null, close: null, note: "Closed" },
  { day: "Tue", open: "4:00 PM", close: "12:00 AM" },
  { day: "Wed", open: "4:00 PM", close: "12:00 AM" },
  { day: "Thu", open: "4:00 PM", close: "Close" },
  { day: "Fri", open: "4:00 PM", close: "Close" },
  { day: "Sat", open: "11:00 AM", close: "Close", note: "11am-2pm is All Ages" },
  { day: "Sun", open: "11:00 AM", close: "12:00 AM", note: "11am-2pm is All Ages" }
],

lineup: [
  { game: "Stranger Things (Premium)", year: "2019", manufacturer: "Stern", link: "https://sternpinball.com/game/stranger-things/" },
  { game: "Deadpool (Premium)", year: "2018", manufacturer: "Stern", link: "http://www.sternpinball.com/games/deadpool/pro" },
  { game: "Jaws premium", year: "2024", manufacturer: "Stern", link: "https://sternpinball.com/game/jaws/" },
  { game: "Medieval Madness", year: "1997", manufacturer: "Williams", link: "https://www.ipdb.org/machine.cgi?id=4032" },
  { game: "Dungeons & Dragons pro", year: "2025", manufacturer: "Stern Pinball", link: "https://sternpinball.com/game/dungeons-dragons/" },
  { game: "The Big Lebowski", year: "2019", manufacturer: "Dutch Pinball", link: "https://www.ipdb.org/machine.cgi?id=6833" },
  { game: "Ghostbusters", year: "2019", manufacturer: "Stern", link: "https://www.ipdb.org/machine.cgi?id=6332" },
  { game: "King Kong (premium)", year: "2025", manufacturer: "Stern", link: "https://sternpinball.com/game/king-kong/" },
  { game: "Uncanny X-Men premium", year: "2024", manufacturer: "Stern Pinball", link: "https://sternpinball.com/game/the-uncanny-x-men/" },
  { game: "Dune", year: "2025", manufacturer: "Barrels Of Fun", link: "https://shop.kollectfun.com/product/dune-pinball-machine-pre-order/" },
  { game: "Addams Family", year: "1992", manufacturer: "Williams", link: "https://www.ipdb.org/machine.cgi?id=20" },
  { game: "John Wick premium", year: "2024", manufacturer: "Stern Pinball", link: "https://sternpinball.com/game/john-wick/" },
  { game: "Godzilla (Premium)", year: "2021", manufacturer: "Stern Pinball", link: "https://sternpinball.com/game/godzilla/" },
  { game: "Evil Dead CE", year: "2025", manufacturer: "Spooky Pinball", link: "https://pinside.com/pinball/machine/evil-dead" },
  { game: "Metallica pro", year: "2014", manufacturer: "Stern Pinball", link: "https://www.ipdb.org/machine.cgi?id=6178" },
  { game: "Jungle Queen", year: "1977", manufacturer: "Gottlieb", link: "https://www.ipdb.org/machine.cgi?id=1340" },
  { game: "Labyrinth", year: "2023", manufacturer: "Barrels Of Fun", link: "https://shop.kollectfun.com/products/" },
  { game: "Pulp Fiction", year: "2023", manufacturer: "Chicago Gaming", link: "https://www.chicago-gaming.com/coinop/pulp-fiction" },
  { game: "Elton John PE", year: "2023", manufacturer: "Jersey Jack Pinball", link: "https://www.jerseyjackpinball.com/games/elton-john-pinball-game/" },
  { game: "Texas Chainsaw Massacre CE", year: "2024", manufacturer: "Spooky Pinball", link: "https://www.spookypinball.com/current-games/" },
  { game: "Scooby Doo CE", year: "2022", manufacturer: "Spooky Pinball", link: "https://www.spookypinball.com/" },
  { game: "PacMan Battle Royale", year: "2011", manufacturer: "Midway Mfg", link: "https://www.bandainamco-am.com/game.php?gameid=30" },
  { game: "Killer Queen", year: "2017", manufacturer: "BumbleBear Games", link: "https://killerqueenarcade.com/" },
  { game: "DeathBall", year: "2019", manufacturer: "DB", link: "https://deathball.co/" }
]


  },
  {
    slug: "schwoeglers",
    name: "Schwoeglers",
    logoSrc: "/images/locations/schwoeglers.png",
    venueUrl: "https://www.schwoeglers.com/", // update if different
    address: {
      line1: "444 Grand Canyon Dr",
      line2: "Madison, WI 53719",
      mapsUrl: "https://www.google.com/maps?q=444+Grand+Canyon+Dr,+Madison,+WI+53719"
    },
    
hours: [
  { day: "Mon", open: "9:00 AM", close: "12:00 AM" },
  { day: "Tue", open: "9:00 AM", close: "12:00 AM" },
  { day: "Wed", open: "9:00 AM", close: "12:00 AM" },
  { day: "Thu", open: "9:00 AM", close: "12:00 AM" },
  { day: "Fri", open: "9:00 AM", close: "12:00 AM" },
  { day: "Sat", open: "9:00 AM", close: "12:00 AM" },
  { day: "Sun", open: "9:00 AM", close: "12:00 AM" }
],

lineup: [
  { game: "Creature from the Black Lagoon", year: "1992", manufacturer: "Bally", link: "https://www.ipdb.org/machine.cgi?id=588" },
  { game: "Avatar LE", year: "2024", manufacturer: "Jersey Jack Pinball", link: "https://jerseyjackpinball.com/collections/avatar-pinball-game" },
  { game: "Cactus Canyon LE remake", year: "1995", manufacturer: "Chicago Gaming", link: "https://www.chicago-gaming.com/coinop/cactus-canyon" },
  { game: "Guns N Roses LE", year: "2020", manufacturer: "Jersey Jack Pinball", link: "http://store.jerseyjackpinball.com/Games/Guns-N-Roses/Guns-N-Roses-Limited-Edition-Pinball-Machine.html" },
  { game: "Roller Coaster Tycoon", year: "2018", manufacturer: "Stern Pinball", link: "https://www.ipdb.org/machine.cgi?id=4536" },
  { game: "Uncanny X-Men pro", year: "2024", manufacturer: "Stern Pinball", link: "https://sternpinball.com/game/the-uncanny-x-men/" },
  { game: "Star Wars (Pro)", year: "2017", manufacturer: "Stern", link: "http://www.sternpinball.com/games/star/pro" },
  { game: "Stranger Thngs (Pro)", year: "2019", manufacturer: "Stern", link: "https://www.ipdb.org/machine.cgi?id=6642" },
  { game: "The Mandalorrin", year: "2021", manufacturer: "Stern", link: "https://sternpinball.com/game/the-mandalorian/" },
  { game: "Jurassic Park pro", year: "2019", manufacturer: "Bally", link: "https://sternpinball.com/game/jurassic-park/" },
  { game: "Monster Bash", year: "2018", manufacturer: "Chicago Gaming", link: "https://www.chicago-gaming.com/coinop/monster-bash" },
  { game: "Harry Potter CE", year: "2025", manufacturer: "Jersey Jack Pinball", link: "https://jerseyjackpinball.com/collections/harry-potter" }
]

  },
  {
    slug: "pooleys",
    name: "Pooleys",
    logoSrc: "/images/locations/pooleys.png",
    venueUrl: "https://pooleysmadison.com/", // update if different
    address: {
      line1: "5441 High Crossing Blvd",
      line2: "Madison, WI 53718",
      mapsUrl: "https://www.google.com/maps?q=5441+High+Crossing+Blvd,+Madison,+WI+53718"
    },
   // Pooleys
hours: [
  { day: "Mon", open: "11:00 AM", close: "Close" },
  { day: "Tue", open: "11:00 AM", close: "Close" },
  { day: "Wed", open: "11:00 AM", close: "Close" },
  { day: "Thu", open: "11:00 AM", close: "Close" },
  { day: "Fri", open: "11:00 AM", close: "Close" },
  { day: "Sat", open: "11:00 AM", close: "Close" },
  { day: "Sun", open: "11:00 AM", close: "Close" }
],

lineup: [
  { game: "Jaws (pro)", year: "2024", manufacturer: "Stern", link: "http://www.sternpinball.com/games/jaws/" },
  { game: "Venom (pro)", year: "2014", manufacturer: "Stern", link: "http://www.sternpinball.com/games/venom/" },
  { game: "Godzilla (Pro)", year: "2021", manufacturer: "Stern", link: "https://sternpinball.com/game/godzilla/" },
  { game: "King Kong (pro)", year: "2025", manufacturer: "Stern", link: "https://sternpinball.com/game/king-kong/" }
]

  },
  {
    slug: "sugar-river-lanes",
    name: "Sugar River Lanes",
    logoSrc: "/images/locations/sugar-river-lanes.png",
    venueUrl: "https://www.sugarriverlanes.com/", // update if different
    address: {
      line1: "807 River St",
      line2: "Belleville, WI 53508",
      mapsUrl: "https://www.google.com/maps?q=807+River+St,+Belleville,+WI+53508"
    },
   // Sugar River Lanes
hours: [
  { day: "Mon", open: "3:00 PM", close: "12:00 AM" },
  { day: "Tue", open: "3:00 PM", close: "12:00 AM" },
  { day: "Wed", open: "3:00 PM", close: "12:00 AM" },
  { day: "Thu", open: "3:00 PM", close: "12:00 AM" },
  { day: "Fri", open: "3:00 PM", close: "12:00 AM" },
  { day: "Sat", open: "11:00 AM", close: "12:00 AM" },
  { day: "Sun", open: "11:00 AM", close: "8:00 PM" }
],

lineup: [
  { game: "Attack From Mars", year: "1995", manufacturer: "Bally", link: "https://www.ipdb.org/machine.cgi?id=3781" },
  { game: "Guardians of the Galaxy (Pro)", year: "2017", manufacturer: "Stern Pinball", link: "https://www.ipdb.org/search.pl?any=guardians&sortby=name&search=Search+Database&searchtype=quick#6474" },
  { game: "TMNT (pro)", year: "2018", manufacturer: "Sterm Pinball", link: "https://www.ipdb.org/machine.cgi?id=6730" }
]

  }
];

// Helper to look up by slug
export function getLocation(slug) {
  return LOCATIONS.find((l) => l.slug === slug) || null;
}
