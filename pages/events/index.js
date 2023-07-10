import EventsList from "@/components/events/events-list";
import { useRouter } from "next/router";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </>
  );
}

export default EventsPage;
