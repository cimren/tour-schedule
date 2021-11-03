import React from "react";
import PropTypes from 'prop-types';
import "./dropdown.scss";

export const Dropdown = ({label, options, onChange}) => {   

  return (
    <div className="dropdown">
        <label className="label">{label}</label>
        <select onChange={(e) => onChange(e.currentTarget.value)} data-testid="select-component">          
          {            
            options && options.map((item, index) => (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            ))
          }
        </select>               
    </div>
  );
}

Dropdown.propTypes = { 
  options: PropTypes.array,
  label: PropTypes.string
}
