import Button from "../UI/button";
import classes from "./results-title.module.css";

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  //once again, using toLocaleDateString (javascript) to format our date
  //in a much more presentable way

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

//title used over filtered events page, [...slug].js
//used to style and display the date at which the events were filtered

export default ResultsTitle;
