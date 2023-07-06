import Link from "next/link";
import classes from "./button.module.css";

function Button(props) {
  return (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  );
}

//Creating a resuable button to help UI and serve as a way to navigate pages
//passing in props for the link href and props children to allow us to insert
//dynamic text into the button

export default Button;
