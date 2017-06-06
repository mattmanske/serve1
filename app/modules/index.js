//-----------  Imports  -----------//

import { fork, join }    from 'redux-saga/effects'

import authSagas         from 'modules/auth/sagas'
import jobsSagas         from 'modules/jobs/sagas'
import casesSagas        from 'modules/cases/sagas'
import clientsSagas      from 'modules/clients/sagas'
import partiesSagas      from 'modules/parties/sagas'
import contactsSagas     from 'modules/contacts/sagas'
import servicesSagas     from 'modules/services/sagas'
import organizationSagas from 'modules/organization/sagas'

//-----------  Wait All  -----------//

export const waitAll = (sagas) => function* genTasks(){
  const tasks = yield sagas.map(([saga, ...params]) => fork(saga, ...params))
  yield tasks.map(join)
}

//-----------  Exports  -----------//

export default function* rootSaga(){
  yield [
    authSagas(),
    jobsSagas(),
    casesSagas(),
    clientsSagas(),
    partiesSagas(),
    contactsSagas(),
    servicesSagas(),
    organizationSagas(),
  ]
}
