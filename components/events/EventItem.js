import Link from "next/link";

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
    <li>
      <img src={`/${image}`} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{writtenDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
