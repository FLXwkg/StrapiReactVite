import PropTypes from "prop-types";
function Button({ children, type = 'button', onClick }) {
    return ( 
        <button
            type={type}
            onClick={onClick}>
            {children}
        </button>
     );
}
Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.func,
    onClick: PropTypes.oneOf(['submit', 'reset', 'button'])
}

export default Button;