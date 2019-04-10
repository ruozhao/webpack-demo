import React from "react";
import ReactDOM from "react-dom";

import BaseInfo from "./BaseInfo.jsx";
import ProjectExperiences from "./ProjectExperiences.jsx";

export default class Resume extends React.Component {
    render() {
        return (
            <div>
                <h1>Resume Lin</h1>
                <BaseInfo />
                <ProjectExperiences />
            </div>
        );
    }
};
