import React from 'react';
import '../styles/style.css';

export default function LoadingIndicator(props) {
    return (
        <div className="loading-indicator" style={{display: 'block', textAlign: 'center', marginTop: '30px'}}>
            Загрузка ...
        </div>
    );
}