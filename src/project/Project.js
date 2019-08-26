import React, {Component} from 'react';
import './Project.css';
import ProjectForms from "./ProjectForms";
import Tools from "../admin/Tools";
import {projectGet} from "../util/APIUtils";
import Alert from "react-s-alert";

class Project extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            edit: false,
            projectId: '',
            project: ''
        };
        this.handler = this.handler.bind(this)
    }

    handler(value, projectId) {
        const mainInfoRequest = {'id': projectId };
        projectGet(mainInfoRequest)
            .then(response => {
               this.setState({
                       edit: value,
                       projectId: response.project.id ? response.project.id : projectId,
                       project: response.project
               })
            }).catch(error => {
            Alert.error('Ошибка получения списка проектов' || (error && error.message));
        });
    }

    render() {

        if (this.state.edit) return <Tools handler = {this.handler} projectId = {this.state.projectId} project = {this.state.project}/>;
        return <ProjectForms handler = {this.handler} projectId = {this.state.projectId} />;
    }

}

export default Project