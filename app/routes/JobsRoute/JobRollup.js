//-----------  Imports  -----------//

import Job                 from './styles'

import React, { PropTypes } from 'react'

//-----------  Component  -----------//

class JobRollup extends React.Component {

  state = {
    expanded: false
  }

  render(){
    const { job, kase, ...props } = this.props

    const caseNumber = kase ? `#${kase.id}` : '...'

    return (
      <Job.Rollup>
        <Job.Details>
          <Job.Title to={`/jobs/${job.id}`}>
            Job #: {job.id}
          </Job.Title>
          <Job.Associations>
            <Job.Client to={`/cases/${caseNumber}`}>
              {kase ? (
                <span>{caseNumber}</span>
              ) : ('...')}
            </Job.Client>
          </Job.Associations>
        </Job.Details>
      </Job.Rollup>
    )
  }
}

//-----------  Prop Types  -----------//

JobRollup.propTypes = {
  job  : PropTypes.object.isRequired,
  kase : PropTypes.object,
}

//-----------  Export  -----------//

export default JobRollup
