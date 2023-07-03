import "./layout.css";
import "./Styles/locationStyle.css";
import "./Styles/iconStyle.css";
import "./Styles/tempratureStyle.css";
import "./Styles/infoStyle.css";
import "./Styles/errorStyle.css";
import { initListeners, searchLocation } from "./App/listeners.js";

initListeners();
searchLocation("amsterdam");
