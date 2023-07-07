import EventsList from "@/components/events/events-list";
import { getAllEvents } from "@/dummy-data";

function EventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventsList items={events} />
    </div>
  );
}

export default EventsPage;
