import classes from "./error-alert.module.css";

function ErrorAlert(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

//creating a reuseable error alert, used for incorrect URL searches or filters
//which yield no results, used in [...slug].js and [eventId].js

export default ErrorAlert;
