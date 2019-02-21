import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

class Protected extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                Main Pagennnnnnn
            </div>
        );
    }
}


export default withStyles(styles)(Protected);