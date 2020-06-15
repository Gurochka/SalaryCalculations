import * as React from 'react';

import SalaryCalculation from './components/SalaryCalculation';

const App: React.FunctionComponent = () => {
  return (
    <div className="card">
      <SalaryCalculation value={40000} />
    </div>
  )
}

export default App;