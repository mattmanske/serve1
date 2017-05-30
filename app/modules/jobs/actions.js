//-----------  Imports  -----------//

import { action, createActionConstants } from 'modules/helpers'

//-----------  Definitions  -----------//

export const JOBS = createActionConstants('JOBS', ['UPDATE', 'SELECT'])

//-----------  Jobs Actions  -----------//

export const jobsActions = {
  sync: () => {
    return action(JOBS.SYNC)
  },
  update: (job, resolve, reject) => {
    return action(JOBS.UPDATE, { job, resolve, reject })
  },
  select: (jobID, resolve, reject) => {
    return action(JOBS.SELECT, { jobID, resolve, reject })
  }
}

//-----------  Saga Actions  -----------//

export const sagaActions = {
  success: (data) => {
    return action(JOBS.SUCCESS, { data })
  },
  failure: (error = null) => {
    return action(JOBS.FAILURE, { error })
  }
}
