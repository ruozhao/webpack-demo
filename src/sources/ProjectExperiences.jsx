import React from "react";
import ReactDOM from "react-dom";


const baseInfo = {
    "name": "Han Lin",
    "telephone": "18710890970",
    "wechart": "18710890970",
    "email": "1533066545@qq.com"
};

export default class ProjectExperiences extends React.Component {
    constructor(props) {
        super(props);
    }
    getInfo() {
        return (
            <div>
                <ol>
                    <span className="baseName">name</span>
                    <span className="baseValue">{baseInfo.name}</span>
                </ol>
                <ol>
                    <span className="baseName">email</span>
                    <span className="baseValue">{baseInfo.email}</span>
                </ol>
                <ol>
                    <span className="baseName">telephone</span>
                    <span className="baseValue">{baseInfo.telephone}</span>
                </ol>
                <ol>
                    <span className="baseName">wechart</span>
                    <span className="baseValue">{baseInfo.wechart}</span>
                </ol>
            </div>
        );
    }

    render() {
        return (
            <div className="baseStyle">
                <h2>Project Experiences</h2>
                {this.getInfo()}
            </div>
        );
    }
};
