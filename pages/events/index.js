import EventsList from "@/components/events/events-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";

function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventsList items={events} />
    </>
  );
}

export default EventsPage;
