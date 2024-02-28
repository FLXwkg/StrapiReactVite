import { PropTypes } from "prop-types"

function Input({ label, name, value, placeholder, onChange, error }){
    return(
        <>
            <label>
                {label}
                <input name={name} value={value} placeholder={placeholder} onChange={onChange}/>
            </label>
            {
                error && (<p className="error">{error}</p>)
            }
        </>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.string
}
export default Input