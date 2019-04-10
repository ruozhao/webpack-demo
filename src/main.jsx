import "./css/style.css";

import React from "react";
import ReactDOM from "react-dom";
import Resume from "./sources/Resume.jsx";

if (typeof window !== "undefined") {
    main();
}

function main() {
    const contents = document.createElement("div");
    document.body.appendChild(contents);

    ReactDOM.render(
        <Resume />,
        contents
    );
}

