import * as React from 'react';

interface Props {
  salary: number;
  withoutNDFL: boolean;
}

const NDFLHint: React.FunctionComponent<Props> = ({salary = 0, withoutNDFL = false}) => {
  const formatNum = (num:number) => {
    num = Math.round(num);
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const total = withoutNDFL ? salary : (salary + salary*0.13)
  const inHands = withoutNDFL ? (salary - salary*0.13) : salary
  const ndflTotal = total - inHands;

  return (
    <div className="hint">
      <div><b>{formatNum(inHands)} ₽</b> сотрудник будет получать на руки</div>
      <div><b>{formatNum(ndflTotal)} ₽</b> НДФЛ, 13% от оклада</div>
      <div><b>{formatNum(total)} ₽</b> за сотрудника в месяц </div>
    </div>
  )
}
export default NDFLHint;