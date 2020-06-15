import * as React from 'react';

interface Props {
  salary: number;
  withoutNDFL: boolean;
}

export default class NDFLHint extends React.Component<Props> {
  static defaultProps: Props = {
    salary: 0,
    withoutNDFL: false
  }

  render(){
    const formatNum = (num:number) => {
      num = Math.round(num);
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const { salary, withoutNDFL } = this.props;
    const total = withoutNDFL ? salary : (salary + salary*0.13)
    const inHands = withoutNDFL ? (salary - salary*0.13) : salary
    const ndflTotal = total - inHands;

    return (
      <div className="hint">
        <p><b>{formatNum(inHands)} ₽</b> сотрудник будет получать на руки</p>
        <p><b>{formatNum(ndflTotal)} ₽</b> НДФЛ, 13% от оклада</p>
        <p><b>{formatNum(total)} ₽</b> за сотрудника в месяц </p>
      </div>
    )    
  } 
}