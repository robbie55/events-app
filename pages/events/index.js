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
  //grabbing all events in dummy-data.js using helper function in the same file,
  //passing down function into events-search to grab the selected month and year
  //and using that info to first construct the filtered URL then push it using router

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </>
  );
}

export default EventsPage;
