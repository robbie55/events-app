import MainHeader from "./main-header";

function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

//layout used to head all pages, simple navbar alongside main-header.js

export default Layout;
