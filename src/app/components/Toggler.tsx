import * as React from 'react';

const Toggler: React.FunctionComponent<{
  checked: boolean;
  checkedLabel?: string;
  uncheckedLabel?: string;
  onChange?: (value:boolean) => void
}> = (props) => {
  return (
    <div className={`d-flex toggler ${props.checked ? 'toggler-checked' : ''}`}>
      { props.checkedLabel && <small>{props.uncheckedLabel}</small>}
      <label className="toggle-control">
        <input type="checkbox" checked={props.checked} onChange={() => props.onChange(!props.checked)}/>
        <span className="control"></span>
      </label>
      { props.checkedLabel && <small>{props.checkedLabel}</small>}
    </div>
  )
}
export default Toggler;