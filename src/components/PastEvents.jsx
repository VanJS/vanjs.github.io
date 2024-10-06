"use client";
import react, { useState } from "react";
import { EventCard } from "./EventCard";

export default function PastEvents({ pastEvents }) {
  const [showMore, setShowMore] = useState(false); // State management for showing more events

  return (
    <section id="past" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Past Events
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out our past VanJS events in Vancouver.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEvents
            .slice(0, showMore ? pastEvents.length : 6)
            .map((event) => (
              <EventCard
                key={event.title}
                {...event}
                past
                className={`fade-in ${showMore ? "show" : ""}`}
              />
            ))}
        </div>
        {pastEvents.length > 6 && ( // Show button only if there are more than 6 events
          <div className="flex justify-center mt-4">
            {/* Centering the button */}
            <button
              onClick={() => setShowMore(!showMore)} // Toggle showMore state
              className="mt-4 px-4 py-2 bg-[#FEB92F] text-black rounded cursor-pointer"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
