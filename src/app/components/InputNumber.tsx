import React, { FunctionComponent, useState, SyntheticEvent } from 'react';

interface Props {
  placeholder?: string;
  value: number;
  onChange?: (value:number) => void
}

interface State {
  val: string;
}

const formatNum = (num:number) => Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export default class InputNumber extends React.Component<Props> {
  state: State = {
    val: ''
  };

  static getDerivedStateFromProps(props: Props, state: State){
    return {
      val: formatNum(props.value)
    }
  }

  handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    let num = e.target.value.replace(/\s/g, '');
    
    if (/^\d+$/.test(num)){
      const numInt:number = parseInt(num, 10);
      this.props.onChange(numInt);
      this.setState({ val: formatNum(numInt) });
    }
  };

  render(){
    return (
      <input className="form-control" type="text" value={this.state.val} onChange={this.handleInput}/>
    )
  }
}