import classes from "./event-item.module.css";
import Button from "../UI/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const writtenDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //formatting the date provided from dummy events into a more formatted string

  const formattedAddress = location.replace(", ", "\n");

  //Doing the same with the address, replacing white space with a line break

  const exploreLink = `/events/${id}`;

  //creating a dynamic link for each event to allow user to navigate to specific
  //event page

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{writtenDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.action}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
