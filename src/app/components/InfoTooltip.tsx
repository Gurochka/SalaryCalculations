import React, { SyntheticEvent, useState } from 'react';
import QuestionCircle from './Icons/QuestionCircle'
import CloseCircle from './Icons/CloseCircle'

const InfoTooltip: React.FunctionComponent = (props) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleCloseTooltip = (e:SyntheticEvent) => {
    e.preventDefault();
    setShowTooltip(false)
  }

  return (
    <div className="info-tooltip" onMouseEnter={() => setShowTooltip(true)}>
      { !showTooltip && <QuestionCircle /> }
      { showTooltip && (
          <>
            <CloseCircle onClick={handleCloseTooltip} />
            <div className="info-tooltip-tooltip">
              {props.children}
            </div>
          </>
        ) 
      }
    </div>
  )
}

export default InfoTooltip;