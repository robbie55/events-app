import ErrorAlert from "@/components/UI/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

function EventDetail() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  //grabbing event ID using URL and rendering that specific event using
  //helped function in dummy-data.js

  if (!event) {
    return <ErrorAlert>No event found!</ErrorAlert>;
  }
  //guard clause in case user types in an invalid event Id in the url

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        alt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetail;
