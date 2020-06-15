import React, { SyntheticEvent } from 'react';
import QuestionCircle from './Icons/QuestionCircle'
import CloseCircle from './Icons/CloseCircle'

interface State {
  showTooltip: boolean;
}

export default class InfoTooltip extends React.Component {
  state: State = {
    showTooltip: false
  }

  handleCloseTooltip = (e:SyntheticEvent) => {
    e.preventDefault();
    this.setState({ showTooltip: false })
  }

  render(){
    const { showTooltip } = this.state;

    return (
      <div className="info-tooltip" onMouseEnter={() => this.setState({ showTooltip: true})}>
        { !showTooltip && <QuestionCircle /> }
        { showTooltip && (
            <>
              <CloseCircle onClick={this.handleCloseTooltip} />
              <div className="info-tooltip-tooltip">
                {this.props.children}
              </div>
            </>
          ) 
        }
      </div>
    )
  }
}