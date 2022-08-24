import Info from "./Info";
import PropTypes from "prop-types";

function Address(props) {
    
    return (
        <>
            <p>{props.street}</p>
            <Info info="2 + 2 = 5"/>
            <Info />
        </>
    );
    
}

Address.defaultProps = {
    street: "Morpeth Road"
};

Address.propTypes ={
    street: PropTypes.string.isRequired
}

export default Address;