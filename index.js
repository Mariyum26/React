var heading=React.createElement("h1",{},"HELLO WORLD BY REACT");
var root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


var el=React.createElement("div",{},React.createElement("div",{},
[React.createElement("h1",{},"Hello World!"),React.createElement("h1",{},"Hello World222222222!")]));
root.render(el);

