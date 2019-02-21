import React from 'react';

class Protected extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'my friend (from state)!'
    };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: 'my friend (from changed state)!'
    });
    }


    render() {
        return <h1>Hello {this.state.message}!</h1>;
    }
}

export default Protected;