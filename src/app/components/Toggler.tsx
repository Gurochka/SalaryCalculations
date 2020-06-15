import * as React from 'react';

interface Props {
  checked: boolean;
  checkedLabel?: string;
  uncheckedLabel?: string;
  onChange?: (value:boolean) => void
}

const Toggler: React.FunctionComponent<Props> = (props) => {
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