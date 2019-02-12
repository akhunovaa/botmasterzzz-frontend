import React from 'react';

class MainPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            users: []
        };
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                Main Page
            </div>
        );
    }
}

export default MainPage;