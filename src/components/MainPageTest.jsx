import React from 'react';

class MainPageTest extends React.Component {

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
                Main Page123
            </div>
        );
    }
}

export default MainPageTest;