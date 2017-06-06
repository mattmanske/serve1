//-----------  Imports  -----------//

import React, { PropTypes } from 'react'
import { Input, Button }    from 'antd'

import CasesTable           from 'containers/CasesTable'

import PageWrapper          from 'components/PageWrapper'
import RecordsHeader        from 'components/RecordsHeader'

import { recordsToArray }   from 'utils/records'

//-----------  Definitions  -----------//

const title  = 'Cases'
const Search = Input.Search

const breadcrumbs = [{
  link  : '/',
  title : 'Dashboard'
},{
  title : 'Cases'
}]

//-----------  Component  -----------//

class CasesRoute extends React.Component {

  //-----------  Event Handlers  -----------//

  newCase = () => {
    const { redirectTo, modalActions } = this.props

    modalActions.showModal('CASE_FORM', {
      canSelect       : false,
      onSubmitSuccess : caseID => {
        redirectTo(`cases/${caseID}`)
        modalActions.hideModal()
      }
    }, { title: 'Add Case' })
  }

  //-----------  HTML Render  -----------//

  render(){
    const { cases, modalActions, ...props } = this.props
    const { data, error, isWatching } = cases

    const records = recordsToArray(data)

    return (
      <PageWrapper title={title} loading={!isWatching} breadcrumbs={breadcrumbs}>
        <RecordsHeader title={title} count={records.length}>
          <Search placeholder='Search Cases...' disabled />
          <Button
            type='primary'
            icon='user-add'
            onClick={this.newCase}
          >
            Add Case
          </Button>
        </RecordsHeader>

        <CasesTable records={records} />
      </PageWrapper>
    )
  }
}

//-----------  Prop Types  -----------//

CasesRoute.propTypes = {
  cases        : PropTypes.object.isRequired,
  redirectTo   : PropTypes.func.isRequired,
  modalActions : PropTypes.object.isRequired
}

//-----------  Exports  -----------//

export default CasesRoute
