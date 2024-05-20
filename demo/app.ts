import "./app.css";
import van from "vanjs-core";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const App = () => {
  return [Header(), Main(), Footer()];
};

van.add(document.body, App());
