import * as React from 'react';

import SalaryCalculation from './components/SalaryCalculation';

const App: React.FunctionComponent = () => {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className="card p-4">
        <SalaryCalculation value={40000} />
      </div>
    </div>
  )
}

export default App;