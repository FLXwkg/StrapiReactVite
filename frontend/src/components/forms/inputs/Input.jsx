import { PropTypes } from "prop-types"

function Input({ label, name, value, placeholder, onChange }){
    return(
        <label>
            {label}
            <input name={name} value={value} placeholder={placeholder} onChange={onChange}/>
        </label>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.string,
    placeholder: PropTypes.string
}
export default Input