import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Checkbox, Dropdown, Popup, Table} from "semantic-ui-react";

class CommandRow extends Component {

    _isMounted = false;
    lastHtml = '';

    shouldComponentUpdate(nextProps) {
        return ReactDOM.findDOMNode(this) ? this.lastHtml !== ReactDOM.findDOMNode(this).innerHTML : true;
    }

    componentDidUpdate(nextProps) {
        if (ReactDOM.findDOMNode(this)) {
            this.lastHtml = ReactDOM.findDOMNode(this).innerHTML
        }
    }

    emitChange = () => {
        var html = ReactDOM.findDOMNode(this).innerHTML;
        if (html !== this.lastHtml && null !== ReactDOM.findDOMNode(this) && 'undefined' !== ReactDOM.findDOMNode(this).innerHTML) {
            this.lastHtml = ReactDOM.findDOMNode(this).innerHTML;
            this.props.handleSaveButton(false)
        }
    };


    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
    }

    render() {
        let item = this.props.item;
        return (
            <>
                {
                        <Table.Row onClick={(e) => this.props.handleRowClicked(item.id, item.commandType, e)}
                                   textAlign='center' id={item.id} >
                            <Popup content={item.command} trigger={<Table.Cell contentEditable
                                                                               onChange={this.emitChange}
                                                                               onBlur={this.emitChange}
                                                                               suppressContentEditableWarning>{item.command}</Table.Cell>}/>
                            <Popup content={item.commandName} trigger={<Table.Cell contentEditable
                                                                                   onChange={this.emitChange}
                                                                                   onBlur={this.emitChange}
                                                                                   suppressContentEditableWarning>{item.commandName}</Table.Cell>}/>
                            <Popup content={item.answer} trigger={<Table.Cell contentEditable
                                                                              onChange={this.emitChange}
                                                                              onBlur={this.emitChange}
                                                                              suppressContentEditableWarning>{item.answer}</Table.Cell>}/>
                            <Table.Cell><Dropdown placeholder='Тип ответа' fluid selection id={item.commandType.id}
                                                  name="type" options={this.props.commandTypes}
                                                  defaultValue={item.commandType.name}/></Table.Cell>
                            <Table.Cell><Checkbox fitted slider defaultChecked={item.privacy}/></Table.Cell>
                            <Table.Cell style={{display: 'none'}}>{item.id}</Table.Cell>
                        </Table.Row>
                }
            </>
        );
    }
}

export default CommandRow;