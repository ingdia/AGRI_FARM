"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const KeyActivities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      href: "/activities/capacity-building",
      title: "Capacity Building & Professional Development",
      description:
        "Training programs on dairy management, farm business, and entrepreneurship.",
    },
    {
      href: "/activities/innovation",
      title: "Productivity Enhancement through Innovation",
      description:
        "Smart dairy farming, data-driven optimization, and genetic improvement.",
    },
    {
      href: "/activities/market-access",
      title: "Market Access & Value Chain Development",
      description:
        "Cooperatives, offtake agreements, and digital sales channels.",
    },
    {
      href: "/activities/financial-support",
      title: "Financial Support & Investment",
      description:
        "Loan schemes, impact investment, and cooperative-based credit facilities.",
    },
    {
      href: "/activities/networking",
      title: "Networking, Mentorship & Policy Engagement",
      description:
        "Mentorship programs, annual forums, and youth-inclusive policy advocacy.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activities.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="mx-auto max-w-[800px] space-y-6 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-800 font-serif">
            Key Activities
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-700 text-lg">
            Our comprehensive approach includes five key activity areas
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {activities.map((activity, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 mx-auto max-w-2xl hover:border-green-700 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-green-700 font-serif transition-colors duration-300">
                      {activity.title}
                    </h3>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      {activity.description}
                    </p>
                    <div className="flex items-center justify-center text-green-700 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-base font-medium">Learn more</span>
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:border-green-700 hover:bg-green-50 transition-all duration-300 group"
            aria-label="Previous activity"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-green-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:border-green-700 hover:bg-green-50 transition-all duration-300 group"
            aria-label="Next activity"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-green-700" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green-700 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to activity ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 mx-auto max-w-md">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-green-700 h-1 rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${((currentIndex + 1) / activities.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyActivities;
