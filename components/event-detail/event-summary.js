import classes from "./event-summary.module.css";

function EventSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

//another styling component to wrap description of individual event on its
//specific page, [eventId].js

export default EventSummary;
