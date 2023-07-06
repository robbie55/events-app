import EventsList from "@/components/events/EventsList";
import { getFeaturedEvents } from "@/dummy-data";

function EventsHomePage() {
  const featuredEvents = getFeaturedEvents();
  // Calling helper function in dummy-data.js to fetch dummy events

  return (
    <div>
      <EventsList items={featuredEvents} />
      {/* passing dummy events into EventsList */}
    </div>
  );
}

export default EventsHomePage;
