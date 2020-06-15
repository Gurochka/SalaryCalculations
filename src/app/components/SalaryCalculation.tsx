import * as React from 'react';

import RadioInput from './RadioInput';
import Toggler from './Toggler';
import InputNumber from './InputNumber';
import NDFLHint from './NDFLHint';

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
      <div>
        <h5>Сумма</h5>
        <RadioInput name="salary" value="month" checked={selected == 'month'} onChange={this.handleChangeRadio}>
          <b>Оплата за месяц</b>
        </RadioInput>
        <RadioInput name="salary" value="mrot" checked={selected == 'mrot'} onChange={this.handleChangeRadio}>
          <b>МРОТ</b>
        </RadioInput>
        <RadioInput name="salary" value="day" checked={selected == 'day'} onChange={this.handleChangeRadio}>
          <b>Оплата за день</b>
        </RadioInput>
        <RadioInput name="salary" value="hour" checked={selected == 'hour'} onChange={this.handleChangeRadio}>
          <b>Оплата за час</b>
        </RadioInput>

        <Toggler checked={withoutNDFL} onChange={this.handleChangeNdfl } uncheckedLabel="Указать с НДФЛ" checkedLabel="Без НДФЛ"/>

        <InputNumber value={salary} />

        { selected == 'month' && <NDFLHint salary={salary} withoutNDFL={withoutNDFL} /> }
      </div>
    );
  }
}