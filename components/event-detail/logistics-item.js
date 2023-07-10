import classes from "./logistics-item.module.css";

function LogisticsItem(props) {
  return (
    <li className={classes.item}>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

//item used for individual logistics, used in event-logistics.js
//main purpose is to dynamically style said logistics for individual
//event page, [eventId].js

export default LogisticsItem;
