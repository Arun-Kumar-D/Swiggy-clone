const heading = React.createElement(
    "h1",
     {id : "heading"},
      "hello world from React" 
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);