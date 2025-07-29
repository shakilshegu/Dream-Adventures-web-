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
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
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
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
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