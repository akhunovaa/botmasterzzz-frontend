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
        return (
            <div>
                <h1>Hello {this.state.message}!</h1>
                <button onClick={this.updateMessage}>Click me!</button>
            </div>
        );
    }
}

export default Protected;