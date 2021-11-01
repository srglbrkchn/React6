import React from "react";
import ReactDOM from "react-dom";


const customStyle = {
    color: "grey",
    fontSize: "13px",
    fontFamily: "cursive",
    border: "2px solid grey",
    padding: "1rem"
};

customStyle.color = "pink";

ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"));
