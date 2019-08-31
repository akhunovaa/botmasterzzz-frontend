import React from 'react';
import '../styles/style.css';
import {Loader, Dimmer, Segment} from "semantic-ui-react";

export default function LoadingIndicator(props) {
    return (
        <div className="loading-indicator" style={{display: 'block', textAlign: 'center', marginTop: '30px'}}>
                <Dimmer active inverted>
                    <Loader size='large'>Загрузка...</Loader>
                </Dimmer>
        </div>
    );
}