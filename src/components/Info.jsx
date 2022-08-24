import { Component } from "react";
import { PropTypes } from 'prop-types';

class Info extends Component {
    constructor(props) {
        super();
        this.state = {
            info: props.info
        };
    }
    //Gets called after render()
    //PERFECT PLACE TO DO API CALLS
    componentDidMount() {
        this.setState({
            info: "bim bam boom"
        });

    };

    render() {
        return (
            <>
                <p>This is some information: {this.state.info}</p>
            </>
        );

    }
};

Info.defaultProps = { info: "2 + 2 = 4" }
Info.propTypes = { info: PropTypes.string }

export default Info;