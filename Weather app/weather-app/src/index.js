import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
console.log("API Key:", process.env.REACT_APP_WEATHER_API_KEY);