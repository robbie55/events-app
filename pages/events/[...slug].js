import Button from "@/components/UI/button";
import ErrorAlert from "@/components/UI/error-alert";
import EventsList from "@/components/events/events-list";
import ResultsTitle from "@/components/events/results-title";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function FilteredEvents() {
  const router = useRouter();

  const filterData = router.query.slug;
  //using router to pull month and year from URL

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  //page is rendered twice, first initial renders returns an undefined query,
  //so this guard clause prevents any bugs for that matter

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];
  //grabbing the year then month since router.query.slug returns an array of
  //values, also using JS native "+" to convert strings to numbers

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>Invalid filter. Please adjust your values.</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  //Another guard clause,
  //Making sure the values are numbers and are real months and years

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });
  //calling helper function in dummy-data.js, calls a filter method on array
  //of events and filters by year and month

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No events found for this time period!</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  //in case there are no matches for valid inputs on month and year, returns
  //an error handling message

  const date = new Date(filteredYear, filteredMonth - 1);
  //creating a date to portray on results-title.js thats presentable

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </>
  );
}

export default FilteredEvents;
