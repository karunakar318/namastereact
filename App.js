import React from "react";
import ReactDOM from "react-dom/client"
let heading =React.createElement("h1",{id:"heading",xyz:"abc"},"hello world");
let parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[heading,heading]),React.createElement("div",{id:"child"},[heading,heading])])

let root=ReactDOM.createRoot(document.getElementById("root"));
console.log(document.getElementById("root"));
console.log(parent);
console.log(root.render(parent))
     