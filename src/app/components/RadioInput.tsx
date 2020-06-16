import * as React from 'react';

interface Props {
  name: string;
  value?: string;
  checked?: boolean;
  onChange?:  (value:string) => void
}

const RadioInput: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="form-check radio-input my-2">
      <input className="form-check-input" type="radio" 
        name={props.name} 
        id={`${props.name}_${props.value}`} 
        value={props.value} 
        checked={props.checked}
        onChange={() => props.onChange(props.value)}
      />
      <label className="form-check-label" htmlFor={`${props.name}_${props.value}`}>
        {props.children}
      </label>
    </div>
  )
}

export default RadioInput;