import React from "react";
import ReactDOM from "react-dom/client"
const heading=React.createElement('h1',{id:"heading"},"Namaste React")
const root=ReactDOM.createRoot(document.getElementById("root"));
const Jsxheading=<h1>Namaste React🚀</h1>;
let Hello=()=>{
    return <h1>hell from hello</h1>
}
const HeadingComponent=()=>{
    return (
        <div>
            {Jsxheading}
            {Hello()}
            <Hello/>
            <h1>Namaste react Functional componet</h1>   
        </div>
    );
}   




root.render(<HeadingComponent/>);
