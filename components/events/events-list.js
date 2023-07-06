import EventItem from "./event-item";

import classes from "./events-list.module.css";

function EventsList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

//Breaking down the dummy events passed from index.js into its properties and
//rendered dynamically by mapping those events into a seperate component

export default EventsList;
