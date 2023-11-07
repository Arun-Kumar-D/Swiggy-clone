import React from "react"
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
     {id : "heading"},
      "hello world from React" 
    );

const jsxheading = <h1 id="heading"> hello from react jsx</h1>
const Component1 = () => (<h1 id="heading">functional component</h1>);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
root.render(<Component1/>);