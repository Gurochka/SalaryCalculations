import * as React from 'react';

import RadioInput from './RadioInput';
import Toggler from './Toggler';
import InputNumber from './InputNumber';
import NDFLHint from './NDFLHint';
import InfoTooltip from './InfoTooltip';

interface Props {
  value?: number;
}

interface State {
  selected: string;
  withoutNDFL: boolean;
  salary: number;
}

export default class SalaryCalculation extends React.Component<Props> {
  state: State = {
    withoutNDFL: true,
    selected: 'month',
    salary: 40000
  };

  static defaultProps: Props = {
    value: 0
  };

  handleChangeRadio = (value:string) => {
    this.setState({ selected: value});
  }

  handleChangeNdfl = (value:boolean) =>{
    this.setState({ withoutNDFL: value });
  }

  render () {
    const { selected, withoutNDFL, salary } = this.state;

    return (
      <div className="salary-calculation">
        <small className="text-muted">Сумма</small>
        <div>
          <RadioInput name="salary" value="month" checked={selected == 'month'} onChange={this.handleChangeRadio}>
            <b>Оклад за месяц</b>
          </RadioInput>
          <RadioInput name="salary" value="mrot" checked={selected == 'mrot'} onChange={this.handleChangeRadio}>
            <b className="d-flex align-items-center">МРОТ 
              <InfoTooltip>
                 МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
              </InfoTooltip>
            </b>
          </RadioInput>
          <RadioInput name="salary" value="day" checked={selected == 'day'} onChange={this.handleChangeRadio}>
            <b>Оплата за день</b>
          </RadioInput>
          <RadioInput name="salary" value="hour" checked={selected == 'hour'} onChange={this.handleChangeRadio}>
            <b>Оплата за час</b>
          </RadioInput>
        </div>
        {  
          selected != 'mrot' && (
            <>
              <Toggler checked={withoutNDFL} onChange={this.handleChangeNdfl } uncheckedLabel="Указать с НДФЛ" checkedLabel="Без НДФЛ"/>
              <div className="d-flex my-3 align-items-center">
                <div><InputNumber value={salary} /></div>
                <b className="ml-3">₽ 
                  { selected == 'day' && ' в день'}
                  { selected == 'hour' && ' в час'}
                </b>
              </div>
            </>
        )}
        { selected == 'month' && <NDFLHint salary={salary} withoutNDFL={withoutNDFL} /> }
      </div>
    );
  }
}