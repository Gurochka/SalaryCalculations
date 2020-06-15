import * as React from 'react';
import QuestionCircle from './Icons/QuestionCircle'
import CloseCircle from './Icons/CloseCircle'

const InfoTooltip: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="info-tooltip">
      <QuestionCircle />
    </div>
  )
}
export default InfoTooltip;