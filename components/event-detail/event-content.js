import classes from "./event-content.module.css";

function EventContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

//basic component for setting a section for content, in this case used
//for individual events and their corresponding pages, [eventId].js

export default EventContent;
