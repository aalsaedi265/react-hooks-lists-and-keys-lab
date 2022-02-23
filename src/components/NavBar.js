import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

let markers=links.map(el=>{
  return (<a key={el} href={"#"+el}>{el}</a>)
})
  return <nav>{markers}</nav>;
}

export default NavBar;
