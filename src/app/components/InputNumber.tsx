import * as React from 'react';

const InputNumber: React.FunctionComponent<{
  placeholder?: string;
  value: number;
  onChange?: (value:boolean) => void
}> = (props) => {
  return (
    <input className="form-control" type="text" placeholder={props.placeholder} value={props.value}/>
  )
}
export default InputNumber;