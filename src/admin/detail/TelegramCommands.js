import React, {Component} from 'react';
import CommandRow from "./CommandRow";

class TelegramCommands extends Component {

    _isMounted = false;

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
    }

    render() {
        return (
            <>
                {
                    this.props.items.map(item => (
                        <CommandRow handleRowClicked={this.props.handleRowClicked} item={item}  key={item.id} commandTypes={this.props.commandTypes} handleSaveButton={this.props.handleSaveButton}/>
                    ))
                }
            </>
        );
    }
}

export default TelegramCommands;