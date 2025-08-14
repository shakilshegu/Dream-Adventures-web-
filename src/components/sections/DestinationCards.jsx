import React, { useState } from 'react';

const DestinationCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Dummy data based on your Coorg tour structure
  const tourPackages = [
    {
      id: 1,
      packageName: "Coorg Tour",
      destination: "Coorg",
      tagline: "Coffee Land Paradise",
      duration: "3 Days & 2 Nights",
      tariff: "₹5,499",
      perHead: true,
      minimumMembers: 4,
      stayName: "Golden Residency",
      pickupLocation: "Bengaluru/Mysore",
      rating: 4.8,
      reviewCount: 127,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Raja's Seat Valley Views",
        "Abbey Falls Experience",
        "Dubare Elephant Camp",
        "Coffee Plantation Tour",
        "Namdroling Monastery"
      ],
      inclusions: [
        "Stay at Golden Residency",
        "Private car with driver",
        "Breakfast included",
        "All sightseeing as per itinerary"
      ],
      exclusions: [
        "Entry fees to attractions",
        "Meals not mentioned",
        "Personal expenses",
        "Jeep costs for specific places"
      ],
      itinerary: [
        {
          day: 1,
          title: "Cultural Heritage & Nature Retreat",
          activities: ["Raja's Seat", "Madikeri Fort", "Abbey Falls"]
        },
        {
          day: 2,
          title: "Adventure & Spiritual Bliss",
          activities: ["Dubare Elephant Camp", "Nisargadhama", "Golden Temple"]
        },
        {
          day: 3,
          title: "Sacred Origins & Scenic Views",
          activities: ["Talacauvery", "Bhagamandala", "Mandalpatti"]
        }
      ],
      badge: "Most Popular",
      discount: "20% OFF"
    },
    {
      id: 2,
      packageName: "Munnar Bliss",
      destination: "Munnar",
      tagline: "Hill Station Heaven",
      duration: "4 Days & 3 Nights",
      tariff: "₹7,299",
      perHead: true,
      minimumMembers: 2,
      stayName: "Tea Valley Resort",
      pickupLocation: "Cochin/Ernakulam",
      rating: 4.9,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Tea Plantation Tours",
        "Eravikulam National Park",
        "Mattupetty Dam",
        "Top Station Views",
        "Spice Gardens"
      ],
      inclusions: [
        "Stay at Tea Valley Resort",
        "Private transportation",
        "Breakfast & Dinner",
        "Guided tea plantation tour"
      ],
      exclusions: [
        "Entry fees to parks",
        "Lunch meals",
        "Adventure activities",
        "Shopping expenses"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Local Exploration",
          activities: ["Check-in", "Local Market", "Tea Museum"]
        },
        {
          day: 2,
          title: "Nature & Wildlife",
          activities: ["Eravikulam Park", "Mattupetty Dam", "Echo Point"]
        },
        {
          day: 3,
          title: "Adventure & Scenic Beauty",
          activities: ["Top Station", "Kundala Lake", "Tea Gardens"]
        },
        {
          day: 4,
          title: "Departure Day",
          activities: ["Spice Gardens", "Shopping", "Return Journey"]
        }
      ],
      badge: "Best Value",
      discount: "15% OFF"
    },
    {
      id: 3,
      packageName: "Goa Beach Escape",
      destination: "Goa",
      tagline: "Tropical Paradise",
      duration: "5 Days & 4 Nights",
      tariff: "₹8,999",
      perHead: true,
      minimumMembers: 2,
      stayName: "Seaside Resort",
      pickupLocation: "Goa Airport/Railway",
      rating: 4.7,
      reviewCount: 203,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Baga & Calangute Beaches",
        "Spice Plantation Tour",
        "Dudhsagar Waterfalls",
        "Old Goa Churches",
        "Sunset Cruise"
      ],
      inclusions: [
        "Beach resort accommodation",
        "Airport transfers",
        "Breakfast included",
        "Sunset cruise experience"
      ],
      exclusions: [
        "Water sports activities",
        "Lunch & dinner",
        "Alcohol beverages",
        "Personal shopping"
      ],
      itinerary: [
        {
          day: 1,
          title: "Beach Arrival",
          activities: ["Airport pickup", "Beach relaxation", "Local cuisine"]
        },
        {
          day: 2,
          title: "North Goa Exploration",
          activities: ["Baga Beach", "Anjuna Market", "Fort Aguada"]
        },
        {
          day: 3,
          title: "Adventure Day",
          activities: ["Dudhsagar Falls", "Spice Plantation", "River cruise"]
        },
        {
          day: 4,
          title: "Cultural Heritage",
          activities: ["Old Goa", "Basilica", "Se Cathedral"]
        },
        {
          day: 5,
          title: "Departure",
          activities: ["Last beach visit", "Shopping", "Airport drop"]
        }
      ],
      badge: "Adventure Special",
      discount: "25% OFF"
    },
    {
      id: 4,
      packageName: "Chikmagalur Tour",
      destination: "Chikmagalur",
      tagline: "Couple Package ",
      duration: "3 Days & 2 Nights",
      tariff: "₹8,999",
      perHead: true,
      minimumMembers: 2,
      stayName: "Jaguar Comforts",
      pickupLocation: "Bengaluru/Mysore",
      rating: 4.85,
      reviewCount: 54,
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Mullayanagiri Peak",
        "Baba Budangiri",
        "Jhari Falls",
        "Hebbe Waterfalls",
        "Belur & Halebidu Temples",
        "Yagachi Water Sports"
      ],
      inclusions: [
        "Stay at Jaguar Comforts",
        "Private car with driver",
        "Breakfast",
        "All sightseeing as per itinerary",
        "Mullayanagiri entry fee",
        "Belur and Halebidu temples entry fee"
      ],
      exclusions: [
        "Entry fees to attractions not mentioned",
        "Meals not included",
        "Personal expenses"
      ],
      itinerary: [
        {
          day: 1,
          title: "Mountain Peaks & Waterfalls Adventure",
          activities: [
            "Pickup from Bengaluru/Mysore and head to Chikmagalur",
            "Check-in at Jaguar Comforts and freshen up",
            "Mullayanagiri – Trek to the highest peak in Karnataka",
            "Baba Budangiri – Sacred hill with shrine",
            "Jhari Falls – Hidden waterfall in the forest",
            "Honnamanahalla Falls – Serene waterfall",
            "Siri Café – Local coffee and scenic beauty",
            "Return to Jaguar Comforts for night stay"
          ]
        },
        {
          day: 2,
          title: "Waterfalls & Temple Exploration",
          activities: [
            "Breakfast at Jaguar Comforts",
            "Hebbe Waterfalls – Scenic trek",
            "Kalhattigiri Falls – Surrounded by greenery",
            "Kemmangundi – Hill station with gardens",
            "Deviramma Temple – Peaceful temple in hills",
            "Return to Jaguar Comforts for night stay"
          ]
        },
        {
          day: 3,
          title: "Temples & Water Sports",
          activities: [
            "Breakfast at Jaguar Comforts",
            "Yagachi Water Sports – Thrilling activities",
            "Belur Temples – Hoysala architecture",
            "Halebidu Temples – Ancient historic site",
            "Check-out and return to Mysore"
          ]
        }
      ],
      badge: "Couple Special",
      discount: "10% OFF"
    },
    {
      id: 5,
      packageName: "Munnar Tour",
      destination: "Munnar",
      tagline: "Experience the Best of Munnar ",
      duration: "3 Days & 2 Nights",
      tariff: "₹6,499",
      perHead: true,
      minimumMembers: 4,
      stayName: "Hotel (2 Nights Stay)",
      pickupLocation: "Bengaluru/Mysore (Customisable)",
      rating: 4.85,
      reviewCount: 61,
      image: "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Cheeyappara & Valara Waterfalls",
        "Tea Plantations Viewpoint",
        "Pothamedu Viewpoint",
        "Eravikulam National Park",
        "Mattupetty Dam & Lake",
        "Top Station",
        "Kundala Lake",
        "Blossom Park"
      ],
      inclusions: [
        "Pickup & drop from location",
        "Car with driver",
        "Fuel allowance",
        "Toll & state border charges",
        "2 Nights stay",
        "Breakfast",
        "Parking charges"
      ],
      exclusions: [
        "Anything not mentioned in inclusions",
        "Entry fees at places",
        "Personal expenses",
        "Any change in itinerary",
        "Lunch & dinner"
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Natural Wonders",
          activities: [
            "Departure from selected location to Munnar",
            "Cheeyappara & Valara Waterfalls – Beautiful cascading waterfalls en route",
            "Tea Plantations Viewpoint – Witness lush tea gardens",
            "Pothamedu Viewpoint – Enjoy breathtaking valley views",
            "Check-in at Hotel – Relax and unwind"
          ]
        },
        {
          day: 2,
          title: "Iconic Munnar Sightseeing",
          activities: [
            "Eravikulam National Park – Home of the endangered Nilgiri Tahr",
            "Tea Museum – Learn about tea processing & history",
            "Mattupetty Dam & Lake – Scenic views and boating",
            "Elephant Park – Get up close with elephants",
            "Echo Point – Experience the natural echo phenomenon"
          ]
        },
        {
          day: 3,
          title: "Adventure & Departure",
          activities: [
            "Top Station – The highest point in Munnar with stunning views",
            "Kundala Lake – Peaceful boating experience",
            "Blossom Park – Perfect for a nature walk",
            "Return to drop-off location"
          ]
        }
      ],
      termsAndConditions: [
        "Bookings must be made at least 5-6 days in advance",
        "Package is subject to availability and weather conditions",
        "25% advance payment required to confirm, remaining at departure",
        "Driver Duty Hours are 6:00 AM - 9:00 AM (Extra duty hours may be applicable for Bata)"
      ],
      contact: {
        address: "Opp Hotel Taj, IG Road, Chikmagalur, Karnataka",
        phone: "8304046814",
        whatsapp: "8304046814"
      },
      badge: "Hill Station Special",
      discount: "12% OFF"
    },
    {
      id: 6,
      packageName: "Mysore Day Tour",
      destination: "Mysore",
      tagline: "Experience  Mysore in a Day",
      duration: "1 Day",
      tariff: "₹1,249",
      perHead: true,
      minimumMembers: 4,
      stayName: null,
      pickupLocation: "Bengaluru",
      rating: 4.7,
      reviewCount: 38,
      image: "https://images.unsplash.com/photo-1579429223126-29d2f6f9c1ac?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Mysore Palace",
        "Jaganmohan Palace Art Gallery",
        "St. Philomena’s Church",
        "Mysore Zoo",
        "Chamundi Hill & Temple",
        "Brindavan Gardens Musical Fountain"
      ],
      inclusions: [
        "Private car with driver",
        "All sightseeing as per itinerary"
      ],
      exclusions: [
        "Entry fees to attractions",
        "Meals not mentioned",
        "Personal expenses",
        "Anything not mentioned in inclusions"
      ],
      itinerary: [
        {
          day: 1,
          title: "Royal Splendor & Cultural Marvels",
          activities: [
            "Early morning pickup from Bengaluru and drive to Mysore",
            "Mysore Palace – Architectural masterpiece of the Wodeyars",
            "Jaganmohan Palace Art Gallery – Collection of paintings and artifacts",
            "St. Philomena’s Church – Majestic neo-Gothic style church",
            "Mysore Zoo – One of the oldest zoos in India",
            "Chamundi Hill & Chamundeshwari Temple – Panoramic views and temple visit",
            "Brindavan Gardens – Evening musical fountain show",
            "Return to Bengaluru"
          ]
        }
      ],
      contact: {
        phone: "8304046814",
        whatsapp: "8304046814",
        instagram: "@dreamadventuresaj"
      },
      badge: "Day Special",
      discount: "5% OFF"
    },
    {
      id: 7,
      packageName: "Ooty Tour",
      destination: "Ooty",
      tagline: "Your Gateway to Enchanting Ooty Experiences",
      duration: "3 Days & 2 Nights",
      tariff: "₹5,499",
      perHead: true,
      minimumMembers: 4,
      stayName: "Mejastic Crown / Drizzle Drop Inn",
      pickupLocation: "Bengaluru / Mysore",
      rating: 4.82,
      reviewCount: 54,
      image: "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Botanical Gardens",
        "Ooty Lake",
        "Rose Garden",
        "Thread Garden",
        "Toy Train Ride to Coonoor",
        "Dolphin’s Nose",
        "Tea Factory & Museum",
        "Doddabetta Peak",
        "Pykara Waterfalls & Lake"
      ],
      inclusions: [
        "Stay at Drizzle Drop Inn",
        "Private car with driver",
        "Breakfast",
        "All sightseeing as per itinerary"
      ],
      exclusions: [
        "Entry fees to attractions",
        "Meals not mentioned",
        "Personal expenses",
        "Any cost for additional activities",
        "Anything not mentioned in inclusions"
      ],
      itinerary: [
        {
          day: 1,
          title: "Local Sightseeing & Botanical Delights",
          activities: [
            "Pickup from Bengaluru or Mysore and drive to Ooty",
            "Check-in at Drizzle Drop Inn, freshen up",
            "Botanical Gardens – Rare plants and flowers",
            "Ooty Lake – Boating",
            "Rose Garden – Variety of vibrant roses",
            "Thread Garden – Handmade plants and flowers",
            "St. Stephen's Church – One of the oldest churches in Nilgiris",
            "Return to stay for dinner and rest"
          ]
        },
        {
          day: 2,
          title: "Coonoor Excursion & Tea Culture",
          activities: [
            "Breakfast at stay",
            "Toy Train Ride to Coonoor – Nilgiri Mountain Railway",
            "Sim’s Park – Unique plant species",
            "Dolphin’s Nose – Valley and tea garden views",
            "Tea Factory & Tea Museum – Learn and taste",
            "Lamb’s Rock – Scenic hill views",
            "Return to stay for night"
          ]
        },
        {
          day: 3,
          title: "Scenic Peaks & Departure",
          activities: [
            "Breakfast at Drizzle Drop Inn",
            "Doddabetta Peak – Highest point in Nilgiris",
            "Wax World Museum – Lifelike wax statues",
            "Pykara Waterfalls – Scenic cascades",
            "Pykara Lake – Boating",
            "Local Markets – Souvenir shopping",
            "Check-out and return to Bengaluru / Mysore"
          ]
        }
      ],
      contact: {
        phone: "8304046814",
        whatsapp: "8304046814",
        instagram: "@dreamadventuresaj"
      },
      badge: "Hill Station Special",
      discount: "10% OFF"
    },
    {
      id: 8,
      packageName: "Chikmagalur Tour",
      destination: "Chikmagalur",
      tagline: "Discover the Beauty of Chikmagalur with Us",
      duration: "3 Days & 2 Nights",
      tariff: "₹5,499",
      perHead: true,
      minimumMembers: 4,
      stayName: "Jaguar Comforts",
      pickupLocation: "Bengaluru / Mysore",
      rating: 4.85,
      reviewCount: 61,
      image: "https://images.unsplash.com/photo-1622725859789-8e9ccf920693?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Mullayanagiri Peak",
        "Baba Budangiri",
        "Jhari Falls",
        "Hebbe Waterfalls",
        "Kemmangundi",
        "Yagachi Water Sports",
        "Belur & Halebidu Temples"
      ],
      inclusions: [
        "Stay at Jaguar Comforts",
        "Private car with driver",
        "Breakfast",
        "All sightseeing as per itinerary",
        "Mullayanagiri entry fee",
        "Belur and Halebidu temples entry fee"
      ],
      exclusions: [
        "Entry fees to attractions not mentioned",
        "Meals not mentioned",
        "Personal expenses"
      ],
      itinerary: [
        {
          day: 1,
          title: "Mountain Peaks & Waterfalls Adventure",
          activities: [
            "Pickup from Bengaluru or Mysore and travel to Chikmagalur",
            "Check-in at Jaguar Comforts",
            "Mullayanagiri – Trek to the highest peak in Karnataka",
            "Baba Budangiri – Sacred hill with shrine and views",
            "Jhari Falls – Hidden waterfall in the forest",
            "Honnamanahalla Falls – Serene nature spot",
            "Siri Café – Local coffee and scenic vibes",
            "Return to stay for night"
          ]
        },
        {
          day: 2,
          title: "Waterfalls & Temple Exploration",
          activities: [
            "Breakfast at stay",
            "Hebbe Waterfalls – Scenic trek",
            "Kalhattigiri Falls – Green surroundings",
            "Kemmangundi – Hill station with gardens and views",
            "Deviramma Temple – Tranquil hill temple",
            "Return to stay for night"
          ]
        },
        {
          day: 3,
          title: "Temples & Water Sports",
          activities: [
            "Breakfast at stay",
            "Yagachi Water Sports – Adventure at Yagachi Dam",
            "Belur Temples – Hoysala architecture",
            "Halebidu Historical Temples – Ancient wonders",
            "Check-out and return to Mysore"
          ]
        }
      ],
      contact: {
        phone: "8304046814",
        whatsapp: "8304046814",
        instagram: "@dreamadventures"
      },
      badge: "Hill Adventure Special",
      discount: "10% OFF"
    },
    {
      id: 9,
      packageName: "Coorg Tour (Couple Package)",
      destination: "Coorg",
      tagline: "Your gateway to unforgettable experiences in Coorg",
      duration: "3 Days & 2 Nights",
      tariff: "₹8,499",
      perHead: true,
      minimumMembers: 2,
      stayName: "Golden Residency",
      pickupLocation: "Bengaluru / Mysore",
      rating: 4.87,
      reviewCount: 54,
      image: "https://images.unsplash.com/photo-1661492359562-419ba0ebaece?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Raja’s Seat",
        "Madikeri Fort & Museum",
        "Abbey Falls",
        "Dubare Elephant Camp",
        "Namdroling Monastery",
        "Talacauvery",
        "Mandalpatti"
      ],
      inclusions: [
        "Stay at Golden Residency",
        "Private car with driver",
        "Breakfast",
        "All sightseeing as per itinerary"
      ],
      exclusions: [
        "Entry fees to attractions",
        "Meals not mentioned",
        "Personal expenses",
        "Any jeep cost for any places",
        "Anything not mentioned in inclusions"
      ],
      itinerary: [
        {
          day: 1,
          title: "Cultural Heritage & Nature Retreat",
          activities: [
            "Pickup from Bengaluru or Mysore and travel to Coorg",
            "Check-in at stay and freshen up",
            "Raja’s Seat – Peaceful garden with valley views",
            "Madikeri Fort & Museum – History and culture",
            "Madikeri Tomb – Serene historical site",
            "Abbey Falls – Cascading beauty",
            "Return to stay for night"
          ]
        },
        {
          day: 2,
          title: "Adventure & Spiritual Bliss",
          activities: [
            "Breakfast at Golden Residency",
            "Dubare Elephant Camp – Bathing and feeding elephants",
            "Nisargadhama – Bamboo groves and deer park",
            "Chiklihole Reservoir – Peaceful hidden spot",
            "Namdroling Monastery – Grand Tibetan monastery",
            "Coffee Plantation Tour – Learn about coffee culture",
            "Return to stay for night"
          ]
        },
        {
          day: 3,
          title: "Sacred Origins & Scenic Views",
          activities: [
            "Breakfast at stay",
            "Talacauvery – Origin of River Cauvery",
            "Bhagamandala – Confluence of three rivers",
            "Mandalpatti – Hilltop views",
            "Check-out and return to Bengaluru or Mysore"
          ]
        }
      ],
      contact: {
        phone: "8304046814",
        whatsapp: "8304046814",
        instagram: "@dreamadventuresaj"
      },
      badge: "Couples Special",
      discount: "10% OFF"
    },
    {
      id: 10,
      packageName: "Wayanad Tour",
      destination: "Wayanad",
      tagline: "Embark on an unforgettable adventure with Dream Adventures",
      duration: "3 Days & 2 Nights",
      tariff: "₹5,999",
      perHead: true,
      minimumMembers: 4,
      stayName: "Standard Stay (2 Nights)",
      pickupLocation: "Bengaluru / Mysore",
      rating: 4.84,
      reviewCount: 41,
      image: "https://images.unsplash.com/photo-1623302485960-d61687113a11?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      highlights: [
        "Edakkal Caves",
        "Kuruva Island",
        "Chembra Peak",
        "Banasura Sagar Dam",
        "Pookode Lake",
        "Meenmutty Waterfalls",
        "Tholpetty Wildlife Sanctuary",
        "Bamboo Forests",
        "Wayanad Wildlife Sanctuary"
      ],
      inclusions: [
        "Pickup & drop from location",
        "Private car with driver",
        "Fuel allowance",
        "Toll & state border charges",
        "2 Nights stay",
        "Breakfast",
        "Parking charges"
      ],
      exclusions: [
        "Anything not mentioned in inclusions",
        "Entry fees to attractions",
        "Personal purchases",
        "Changes in itinerary",
        "Lunch & dinner"
      ],
      itinerary: [
        {
          day: 1,
          title: "Journey to Wayanad & Adventure Begins",
          activities: [
            "Pickup from selected location and travel to Wayanad",
            "Explore Edakkal Caves with ancient petroglyphs",
            "Visit Kuruva Island for serene surroundings",
            "Chembra Peak – Highest point in Wayanad",
            "Banasura Sagar Dam – Stunning views of the dam"
          ]
        },
        {
          day: 2,
          title: "Scenic Spots & Wildlife",
          activities: [
            "Pookode Lake – Tranquil relaxation",
            "Neelimala View Point – Breathtaking valley views",
            "Meenmutty Waterfalls – Majestic cascades",
            "Tholpetty Wildlife Sanctuary – Explore rich fauna"
          ]
        },
        {
          day: 3,
          title: "Nature and Wildlife",
          activities: [
            "Bamboo Forests – Peaceful nature walk",
            "Wayanad Wildlife Sanctuary – Spot diverse animals",
            "Return journey to drop-off location"
          ]
        }
      ],
      termsAndConditions: [
        "Bookings must be made at least 5-6 days in advance",
        "Package subject to availability and weather conditions",
        "25% advance payment required to confirm, remaining at departure"
      ],
      contact: {
        address: "Mallandur Road, Uppalli, Chikmagalur, Karnataka",
        phone: "8304046814",
        whatsapp: "8304046814",
        instagram: "@dreamadventuresaj"
      },
      badge: "Nature & Wildlife Special",
      discount: "10% OFF"
    },
    {
  id: 11,
  packageName: "Chikmagalur Group Tour",
  destination: "Chikmagalur",
  tagline: "Explore the beauty of Chikmagalur with Dream Adventures",
  duration: "2 Days & 1 Night",
  tariff: "₹3,999",
  perHead: true,
  minimumMembers: null,
  stayName: "Areca Ranches",
  pickupLocation: "Bengaluru Majestic (6 AM)",
  rating: 4.82,
  reviewCount: 28,
  image: "https://images.unsplash.com/photo-1573674401446-87cae8d4d28e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  highlights: [
    "Belur Historical Temples",
    "Halebidu Historical Temples",
    "Yagachi Water Sports",
    "Mullayanagiri Peak",
    "Baba Budangiri",
    "Jhari Falls Jeep Ride",
    "Honnamanahalla Falls",
    "Siri Cafe",
    "Campfire with music"
  ],
  inclusions: [
    "Comfortable stay in Chikmagalur",
    "Transportation with pickup and drop-off",
    "Breakfast (Day 2)",
    "All sightseeing as per itinerary",
    "Campfire with music on the first night",
    "Experienced guide",
    "Entry ticket for Mullayanagiri",
    "Parking charges at Belur and Halebidu",
    "Jeep ride at Jhari Falls",
    "Dinner (Day 1)"
  ],
  exclusions: [
    "Personal expenses",
    "Lunch not included",
    "Any item not listed in inclusions"
  ],
  itinerary: [
    {
      day: 1,
      title: "Adventure and Historical Exploration",
      activities: [
        "Pickup from Bengaluru Majestic at 6 AM",
        "Scenic drive to Chikmagalur",
        "Visit Belur Historical Temples – Hoysala architecture",
        "Explore Halebidu Historical Temples – intricate carvings",
        "Enjoy Yagachi Water Sports – boating, jet skiing",
        "Check in to accommodation",
        "Campfire with music under the stars"
      ]
    },
    {
      day: 2,
      title: "Scenic Peaks and Nature Retreat",
      activities: [
        "Breakfast at hotel",
        "Visit Mullayanagiri – Karnataka’s highest peak",
        "Explore Baba Budangiri – caves & landscapes",
        "Jhari Falls – jeep ride to scenic waterfall",
        "Honnamanahalla Falls – peaceful spot",
        "Relax at Siri Cafe before departure",
        "Return to Bengaluru Majestic"
      ]
    }
  ],
  termsAndConditions: [
    "50% advance payment and remaining balance at pickup",
    "Package operates every weekend",
    "Minimum group size may apply",
    "Dreamzz Travels is not responsible for personal loss or injury"
  ],
  contact: {
    phone: "6304046814",
    whatsapp: "6304046814",
    instagram: "@dreamadventuresaj"
  },
  badge: "Weekend Group Special",
  discount: "15% OFF"
}



  ];

  const PackageCard = ({ pkg, index }) => {
    const isHovered = hoveredCard === pkg.id;

    return (
      <div
        className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setHoveredCard(pkg.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Image Section with Overlay */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={pkg.image}
            alt={pkg.destination}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
              }`}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              {pkg.badge}
            </div>
          </div>

          {/* Discount Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              {pkg.discount}
            </div>
          </div>

          {/* Destination Info */}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-white text-2xl font-bold">{pkg.destination}</h3>
            <p className="text-white/80 text-sm">{pkg.tagline}</p>
          </div>

          {/* Rating */}
          <div className="absolute bottom-4 right-4 flex items-center space-x-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-white text-xs">({pkg.reviewCount})</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Package Header */}
          <div className="mb-4">
            <h4 className="text-xl font-bold text-gray-800 mb-1">{pkg.packageName}</h4>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {pkg.duration}
              </span>
              <div className="text-right">
                <div className="text-2xl font-bold text-emerald-600">{pkg.tariff}</div>
                <div className="text-xs text-gray-500">per person</div>
              </div>
            </div>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {pkg.pickupLocation}
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Min {pkg.minimumMembers} members
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <h5 className="font-semibold text-gray-800 mb-2 text-sm">✨ Highlights</h5>
            <div className="space-y-1">
              {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                <div key={idx} className="text-xs text-gray-600 flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  {highlight}
                </div>
              ))}
              {pkg.highlights.length > 3 && (
                <div className="text-xs text-emerald-600 font-medium">
                  +{pkg.highlights.length - 3} more attractions
                </div>
              )}
            </div>
          </div>

          {/* Stay Info */}
          <div className="mb-6 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center text-sm text-gray-700">
              <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
              </svg>
              <span className="font-medium">Stay:</span>
              <span className="ml-1">{pkg.stayName}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Book Now
            </button>
            <button className="px-4 py-3 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hover Details Overlay */}
        <div className={`
          absolute inset-0 bg-white/95 backdrop-blur-sm transition-all duration-500 transform
          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}>
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl font-bold text-gray-800">{pkg.packageName}</h4>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setHoveredCard(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Itinerary */}
            <div className="mb-4">
              <h5 className="font-semibold text-gray-800 mb-3">📅 Itinerary</h5>
              <div className="space-y-3">
                {pkg.itinerary.map((day, idx) => (
                  <div key={idx} className="border-l-2 border-emerald-200 pl-4">
                    <div className="text-sm font-semibold text-emerald-600">Day {day.day}</div>
                    <div className="text-sm font-medium text-gray-800">{day.title}</div>
                    <div className="text-xs text-gray-600">
                      {day.activities.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <h6 className="font-semibold text-green-600 text-sm mb-2">✅ Inclusions</h6>
                <div className="space-y-1">
                  {pkg.inclusions.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="text-xs text-gray-600">• {item}</div>
                  ))}
                </div>
              </div>
              <div>
                <h6 className="font-semibold text-red-600 text-sm mb-2">❌ Exclusions</h6>
                <div className="space-y-1">
                  {pkg.exclusions.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="text-xs text-gray-600">• {item}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                Get Detailed Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Featured Destinations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Places</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked destinations with carefully crafted itineraries for unforgettable experiences
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <span>View All Destinations</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationCards;