import React, { PropTypes } from 'react'

const TextInput = ({name, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  wrapperClass += " " + 'has-error'

return (
  <div className={wrapperClass}>
    <label htmlFor={name}>{label}</label>
    <div className="field">
      <input type="text"
      name={name}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}/>
    </div>
  </div>

  )
}

TextInput.propTypes = {

}

export default TextInput
